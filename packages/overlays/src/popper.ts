import * as React from "react"
import {
  createPopper,
  Instance,
  Placement,
  State,
  Options,
  VirtualElement,
  Modifier,
  Rect,
} from "@popperjs/core"

export type Modifiers =
  | Options["modifiers"]
  | Record<string, Partial<Modifier<any, any>>>

export type OffsetValue = [number | null | undefined, number | null | undefined]
export type OffsetFunction = (details: {
  popper: Rect
  reference: Rect
  placement: Placement
}) => OffsetValue

export { Placement, State }

export type Offset = OffsetFunction | OffsetValue

export type DOMContainer<T extends HTMLElement = HTMLElement> =
  | T
  | React.RefObject<T>
  | null
  | (() => T | React.RefObject<T> | null)

export type UsePopperOptions = Omit<
  Options,
  "modifiers" | "placement" | "strategy"
> & {
  enabled?: boolean
  placement?: Options["placement"]
  strategy?: Options["strategy"]
  modifiers?: Options["modifiers"]
}

export interface UsePopperState {
  placement: Placement
  update: () => void
  forceUpdate: () => void
  attributes: Record<string, Record<string, any>>
  styles: Record<string, Partial<CSSStyleDeclaration>>
  state?: State
}

const initialPopperStyles = (
  position: string
): Partial<CSSStyleDeclaration> => ({
  position,
  top: "0",
  left: "0",
  opacity: "0",
  pointerEvents: "none",
})

const EMPTY_MODIFIERS = [] as any

const disabledApplyStylesModifier = { name: "applyStyles", enabled: false }

export function usePopper(
  referenceElm: VirtualElement | null | undefined,
  popperElm: HTMLElement | null | undefined,
  {
    enabled = true,
    placement = "bottom",
    strategy = "absolute",
    modifiers = EMPTY_MODIFIERS,
    ...options
  }: UsePopperOptions
) {
  const popperInstanceRef = React.useRef<Instance>()
  const update = React.useCallback(() => {
    popperInstanceRef.current?.update()
  }, [])

  const forceUpdate = React.useCallback(() => {
    popperInstanceRef.current && popperInstanceRef.current.forceUpdate()
  }, [])
  const [popperState, setState] = React.useState<UsePopperState>({
    placement,
    update,
    forceUpdate,
    attributes: {},
    styles: {
      popper: initialPopperStyles(strategy),
      arrow: {},
    },
  })
  const updateModifier = React.useMemo<Modifier<"updateStateModifier", any>>(
    () => ({
      name: "updateStateModifier",
      enabled: true,
      phase: "write",
      requires: ["computeStyles"],
      fn: ({ state }) => {
        const styles: UsePopperState["styles"] = {}
        const attributes: UsePopperState["attributes"] = {}
        Object.keys(state.elements).forEach((element) => {
          styles[element] = state.styles[element]
          attributes[element] = state.attributes[element]
        })
        setState({
          state,
          styles,
          attributes,
          update,
          forceUpdate,
          placement: state.placement,
        })
      },
    }),
    [update, forceUpdate, setState]
  )
  React.useEffect(() => {
    if (!popperInstanceRef.current || !enabled) return
    popperInstanceRef.current.setOptions({
      placement,
      strategy,
      modifiers: [...modifiers, updateModifier, disabledApplyStylesModifier],
    })
    // intentionally NOT re-running on new modifiers
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [strategy, placement, updateModifier, enabled])
  // create the popper
  React.useEffect(() => {
    if (!enabled || referenceElm == null || popperElm == null) {
      return undefined
    }
    popperInstanceRef.current = createPopper(referenceElm, popperElm, {
      ...options,
      placement,
      strategy,
      modifiers: [...modifiers, ariaDescribedByModifier, updateModifier],
    })
    return () => {
      if (popperInstanceRef.current != null) {
        popperInstanceRef.current.destroy()
        popperInstanceRef.current = undefined

        setState((s) => ({
          ...s,
          attributes: {},
          styles: { popper: initialPopperStyles(strategy) },
        }))
      }
    }
    // This is only run once to _create_ the popper
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [enabled, referenceElm, popperElm])
  return popperState
}

export type Config = {
  flip?: boolean
  show?: boolean
  alignEnd?: boolean
  enabled?: boolean
  containerPadding?: number
  arrowElement?: Element | null
  enableEvents?: boolean
  offset?: Offset
  placement?: Placement
  popperConfig?: UsePopperOptions
}

const ariaDescribedByModifier: Modifier<"ariaDescribedBy", undefined> = {
  name: "ariaDescribedBy",
  enabled: true,
  phase: "afterWrite",
  effect: ({ state }) => {
    return () => {
      const { reference, popper } = state.elements
      if ("removeAttribute" in reference) {
        const ids = (reference.getAttribute("aria-describedby") || "")
          .split(",")
          .filter((id) => id.trim() && id.trim() !== popper.id)

        if (!ids.length) reference.removeAttribute("aria-describedby")
        else reference.setAttribute("aria-describedby", ids.join(","))
      }
    }
  },
  fn: ({ state }) => {
    const { popper, reference } = state.elements
    const role = popper.getAttribute("role")?.toLowerCase()
    if (popper.id && role === "tooltip" && "setAttribute" in reference) {
      const ids = (reference.getAttribute("aria-describedby") || "")
        .split(",")
        .filter((id) => id.trim() && id.trim() !== popper.id)
      ids.push(popper.id)
      reference.setAttribute("aria-describedby", ids.join(","))
    }
  },
}
