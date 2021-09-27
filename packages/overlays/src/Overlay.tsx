import * as React from "react"
import * as ReactDOM from "react-dom"
import {
  useCallbackRef,
  useMergedRefs,
  useWaitForDOMRef,
  useRootClose,
  RootCloseOptions,
  DOMContainer,
  useTimeout,
} from "@gladio/react-hooks"
import { usePopper, Offset, Placement, State } from "./popper"
import { mergeOptionsWithPopperConfig } from "./utils"
import { $PropertyType } from "utility-types"
import { contains } from "@gladio/dom-helpers"

export type OverlayProps = {
  show?: boolean
  flip?: boolean
  placement?: Placement
  container?: DOMContainer
  target: DOMContainer
  offset?: Offset
  containerPadding?: number
  onHide?: (e: Event) => void
  rootClose?: boolean
  rootCloseEvent?: RootCloseOptions["clickTrigger"]
  onMouseOver?: (e: any) => void
  onMouseOut?: (e: any) => void
  children: (value: {
    show: boolean
    placement: Placement
    update: () => void
    forceUpdate: () => void
    state?: State
    props: Record<string, any> & {
      ref: React.RefCallback<HTMLElement>
      style: React.CSSProperties
      "aria-labelledby"?: string
      onMouseOver?: (e: any) => void
      onMouseOut?: (e: any) => void
    }
    arrowProps: Record<string, any> & {
      ref: React.RefCallback<HTMLElement>
      style: React.CSSProperties
    }
  }) => React.ReactNode
}

export function Overlay({
  placement,
  flip,
  offset,
  containerPadding,
  onMouseOver,
  onMouseOut,
  ...props
}: OverlayProps) {
  const [rootElmRef, attachRootRef] = useCallbackRef<HTMLElement>()
  const [arrowElmRef, attachArrowRef] = useCallbackRef<Element>()
  const mergedRef = useMergedRefs<HTMLElement | null>(attachRootRef)
  const container = useWaitForDOMRef(props.container)
  const target = useWaitForDOMRef(props.target)
  const { styles, attributes, ...popper } = usePopper(
    target,
    rootElmRef,
    mergeOptionsWithPopperConfig({
      arrowElement: arrowElmRef,
      containerPadding: containerPadding || 5,
      enableEvents: !!props.show,
      flip,
      offset,
      placement,
    })
  )
  // should be render the overlay
  const mountOverlay = props.show
  // handle the roo closing
  useRootClose(rootElmRef, props.onHide!, {
    disabled: !props.rootClose,
    clickTrigger: props.rootCloseEvent,
  })
  if (!mountOverlay) {
    // don't render any dom
    return null
  }
  // child to be rendered in a react portal
  let child = props.children({
    ...popper,
    show: !!props.show,
    props: {
      ...attributes.popper,
      style: styles.popper as any,
      ref: mergedRef,
      onMouseOver,
      onMouseOut,
    },
    arrowProps: {
      ...attributes.arrow,
      style: styles.arrow as any,
      ref: attachArrowRef,
    },
  })
  return container ? ReactDOM.createPortal(child, container) : null
}

export type OverlayDelay = number | { show: number; hide: number }

export type OverlayTriggerType = "hover" | "click" | "focus"
export type OverlayInjectedProps = {
  onFocus?: (...args: any[]) => any
}
export type OverlayTriggerRenderProps = OverlayInjectedProps & {
  ref: React.Ref<any>
}
export interface OverlayTriggerProps
  extends Omit<OverlayProps, "children" | "target"> {
  children: (props: OverlayTriggerRenderProps) => React.ReactNode
  trigger?: OverlayTriggerType | OverlayTriggerType[]
  show?: boolean
  defaultShow?: boolean
  onToggle?: (nextShow: boolean) => void
  flip?: boolean
  overlay: $PropertyType<OverlayProps, "children">
  target?: never
  onHide?: never
  delay?: OverlayDelay
  interactive?: boolean
}

export function OverlayTrigger({
  overlay,
  children,
  delay: propsDelay,
  trigger = ["hover", "focus"],
  interactive,
  ...props
}: OverlayTriggerProps) {
  const [show, setShow] = React.useState<boolean>(false)
  const hoverStateRef = React.useRef<string>("")
  const [targetRef, setTargetRef] = useCallbackRef<HTMLElement>()
  const delay = normalizeDelay(propsDelay)
  const timeout = useTimeout()

  const handleShow = React.useCallback(() => {
    timeout.clear()
    hoverStateRef.current = "show"
    if (!delay.show) {
      setShow(true)
      return
    }
    timeout.set(() => {
      if (hoverStateRef.current === "show") setShow(true)
      // something is wrong with me or typescript
    }, delay.show as unknown as number)
  }, [])
  const handleHide = React.useCallback(() => {
    timeout.clear()
    hoverStateRef.current = "hide"
    if (!delay.hide) {
      setShow(false)
      return
    }
    timeout.set(() => {
      if (hoverStateRef.current === "hide") setShow(false)
      // something is wrong with me or typescript
    }, delay.hide as unknown as number)
  }, [])
  const handleClick = React.useCallback(() => {
    // click has the highest priority
    setShow(!show)
  }, [show])
  const handleFocus = React.useCallback(() => {
    handleShow()
  }, [handleShow])
  const handleBlur = React.useCallback(() => {
    handleHide()
  }, [handleHide])
  const handleMouseOver = React.useCallback(
    (...args: [React.MouseEvent, ...any[]]) => {
      handleMouseOverOut(handleShow, args, "fromElement")
    },
    [handleShow]
  )
  const handleMouseOut = React.useCallback(
    (...args: [React.MouseEvent, ...any[]]) => {
      handleMouseOverOut(handleHide, args, "toElement")
    },
    [handleHide]
  )
  const triggers: string[] = trigger == null ? [] : [].concat(trigger as any)
  const triggerProps: any = {}
  if (triggers.indexOf("click") !== -1) {
    triggerProps.onClick = handleClick
  }
  if (triggers.indexOf("focus") !== -1) {
    triggerProps.onFocus = handleFocus
    triggerProps.onBlur = handleBlur
  }
  if (triggers.indexOf("hover") !== -1) {
    triggerProps.onMouseOver = handleMouseOver
    triggerProps.onMouseOut = handleMouseOut
  }
  if (interactive && triggers.indexOf("click") === -1) {
    // pass the mouse over/out listener to the overlay container
    props.onMouseOver = handleMouseOver
    props.onMouseOut = handleMouseOut
  }
  return (
    <>
      {children({ ...triggerProps, ref: setTargetRef })}
      <Overlay {...props} show={show} onHide={handleHide} target={targetRef}>
        {overlay}
      </Overlay>
    </>
  )
}
// Simple implementation of mouseEnter and mouseLeave.
// React's built version is broken: https://github.com/facebook/react/issues/4251
// for cases when the trigger is disabled and mouseOut/Over can cause flicker
// moving from one child element to another.
// https://github.com/react-bootstrap/react-bootstrap/blob/master/src/OverlayTrigger.tsx#L58
function handleMouseOverOut(
  handler: (...args: [React.MouseEvent, ...any[]]) => any,
  args: [React.MouseEvent, ...any[]],
  relatedNative: "fromElement" | "toElement"
) {
  const [e] = args
  const target = e.currentTarget
  const related = e.relatedTarget || e.nativeEvent[relatedNative]

  if ((!related || related !== target) && !contains(target, related)) {
    handler(...args)
  }
}

function normalizeDelay(delay?: OverlayDelay) {
  return delay && typeof delay === "object"
    ? delay
    : {
        show: delay,
        hide: delay,
      }
}
