import * as React from "react"
import * as ReactDOM from "react-dom"
import classNames from "classnames"
import { useEnforceFocus, useId } from "@tourepedia/react-hooks"
import { animated, config, useTransition } from "react-spring"
import { Omit } from "utility-types"

import DialogManager from "./DialogManager"

const { useRef, useState, useEffect, forwardRef } = React
export function useDialog(
  initialOpen: boolean = false
): [boolean, () => void, () => void] {
  const [isOpen, set] = useState<boolean>(initialOpen)
  return [isOpen, () => set(true), () => set(false)]
}

const DialogContext = React.createContext<{
  open?: boolean
  onClose?: () => void
  titleId: string
  contentId: string
  fitContainer: boolean
}>({
  open: false,
  onClose: undefined,
  titleId: "",
  contentId: "",
  fitContainer: false,
})

const DialogProvider = DialogContext.Provider

const DIALOG_BASE_CLASS_NAME = "dialog"
const DIALOG_OPEN_CONTAINER_CLASS_NAME = `${DIALOG_BASE_CLASS_NAME}-is-open`

export function DialogDocument({
  className,
  children,
  style,
}: React.HTMLProps<HTMLElement>) {
  return (
    <animated.div
      role="document"
      style={style}
      className={classNames(`${DIALOG_BASE_CLASS_NAME}-document`, className)}
    >
      {children}
    </animated.div>
  )
}

export function DialogCloseButton({
  className,
  children,
  type,
  ...props
}: React.HTMLProps<HTMLButtonElement>) {
  const { onClose, fitContainer } = React.useContext(DialogContext)
  return (
    <button
      type="button"
      onClick={onClose}
      className={classNames("dialog-close-btn", className)}
      {...props}
    >
      {children ||
        (fitContainer ? (
          <span className="dialog-back-icon" />
        ) : (
          <span className="dialog-close-icon" />
        ))}
    </button>
  )
}

export const DialogHeader = forwardRef(
  (
    {
      className,
      closeButton = true,
      children,
      ...props
    }: React.HTMLProps<HTMLDivElement> & {
      closeButton?: boolean
    },
    ref: React.Ref<HTMLDivElement>
  ) => {
    return (
      <div
        ref={ref}
        className={classNames(
          `${DIALOG_BASE_CLASS_NAME}-header`,
          {
            "has-close-btn": closeButton,
          },
          className
        )}
        {...props}
      >
        {closeButton ? <DialogCloseButton /> : null}
        {children}
      </div>
    )
  }
)
DialogHeader.displayName = "DialogHeader"

export const DialogTitle = forwardRef(
  (
    { className, ...props }: React.HTMLProps<HTMLDivElement>,
    ref: React.Ref<HTMLHeadingElement>
  ) => {
    const { titleId } = React.useContext(DialogContext)
    return (
      <h3
        ref={ref}
        id={titleId}
        className={classNames(`${DIALOG_BASE_CLASS_NAME}-title`, className)}
        {...props}
      />
    )
  }
)

DialogTitle.displayName = "DialogTitle"

export const DialogBody = forwardRef(
  (
    { className, ...props }: React.HTMLProps<HTMLDivElement>,
    ref: React.Ref<HTMLDivElement>
  ) => {
    const { contentId } = React.useContext(DialogContext)
    return (
      <div
        id={contentId}
        ref={ref}
        className={classNames(`${DIALOG_BASE_CLASS_NAME}-body`, className)}
        {...props}
      />
    )
  }
)
DialogBody.displayName = "DialogBody"

export const DialogFooter = forwardRef(
  (
    { className, ...props }: React.HTMLProps<HTMLDivElement>,
    ref: React.Ref<HTMLDivElement>
  ) => (
    <div
      ref={ref}
      className={classNames(`${DIALOG_BASE_CLASS_NAME}-footer`, className)}
      {...props}
    />
  )
)
DialogFooter.displayName = "DialogFooter"

interface DialogProps
  extends Omit<React.HTMLProps<HTMLDialogElement>, "open" | "onClose"> {
  /**
   * Contianer element where we should render the dialog
   * @default document.body
   */
  container?: HTMLElement
  /**
   * What to render inside the dialog
   */
  children: React.ReactNode
  /**
   * Is dialog open
   */
  open: boolean
  /**
   * Notify parent for closing the modal
   */
  onClose?: () => void
  /**
   * autoFocus the dialog when shown and focus the last element when hidden
   * @default true
   */
  autoFocus?: boolean
  /**
   * enforce that focus doesn't leave the dialog
   * @default true
   */
  enforceFocus?: boolean
  /**
   * close on escape key pressed
   * @default true
   */
  closeOnEscape?: boolean
  /**
   * Fit the container in height and width
   */
  fitContainer?: boolean
}

const dialogManager = DialogManager(DIALOG_OPEN_CONTAINER_CLASS_NAME)

const defaultTransitionConfig = {
  config: config.stiff,
  from: { opacity: 0, transform: "translate3d(0, -10px, 0)" },
  enter: { opacity: 1, transform: "translate3d(0, 0px, 0)" },
  leave: { opacity: 0, transform: "translate3d(0, -10px, 0)" },
}

export function Dialog({
  container = typeof document !== "undefined" ? document.body : undefined,
  children = null,
  open,
  onClose,
  autoFocus = true,
  enforceFocus = true,
  closeOnEscape,
  className,
  fitContainer = false,
}: DialogProps) {
  const wrapperRef = useRef<HTMLDivElement>(null)

  // disable closeOnEscape if no props is provided and fitContainer is set to true
  closeOnEscape =
    closeOnEscape === undefined ? !fitContainer : closeOnEscape || true

  const id = useId("dialog-")

  // set the styles for the container
  useEffect(() => {
    if (!container) {
      return
    }
    if (open) {
      dialogManager.add(id, container)
    } else {
      dialogManager.remove(id)
    }
    return () => {
      dialogManager.remove(id)
    }
  }, [open, container])

  useEnforceFocus(wrapperRef, open, { enforceFocus, autoFocus })

  // provide the context
  const titleId = `${id}-title`
  const contentId = `${id}-content`

  const dialogContext = React.useMemo(() => {
    return {
      open,
      onClose,
      titleId,
      contentId,
      fitContainer,
    }
  }, [onClose, open, titleId, contentId])
  const transitions = useTransition(open, null, defaultTransitionConfig)
  return (
    <React.Fragment>
      {transitions.map(({ item, key, props: anim }) => {
        if (!item) return null
        const dialog = (
          <animated.div
            key={key}
            ref={wrapperRef}
            onKeyDown={event => {
              if (!open || !closeOnEscape) return
              // handle the escape key
              if (event.keyCode === 27) {
                onClose && onClose()
              }
            }}
            role="dialog"
            tabIndex={-1}
            aria-modal={true}
            aria-labelledby={titleId}
            aria-describedby={contentId}
            style={{ opacity: anim.opacity }}
            className={classNames(DIALOG_BASE_CLASS_NAME, className, {
              [`${DIALOG_BASE_CLASS_NAME}-fit-container`]: fitContainer,
            })}
          >
            <DialogProvider value={dialogContext}>
              <DialogDocument style={{ transform: anim.transform }}>
                {children}
              </DialogDocument>
            </DialogProvider>
          </animated.div>
        )
        return container && ReactDOM.createPortal(dialog, container)
      })}
    </React.Fragment>
  )
}

Dialog.Header = DialogHeader
Dialog.Title = DialogTitle
Dialog.Footer = DialogFooter
Dialog.Body = DialogBody

export default Dialog
