import * as React from "react"
import * as ReactDOM from "react-dom"
import classNames from "classnames"
import { useEnforceFocus } from "@tourepedia/react-hooks"

const { useRef, useState, useEffect, forwardRef } = React
export function useDialog(
  initialOpen: boolean = false
): [boolean, () => void, () => void] {
  const [isOpen, set] = useState<boolean>(initialOpen)
  return [isOpen, () => set(true), () => set(false)]
}

const DIALOG_OPEN_CONTAINER_CLASS_NAME = "dialog-open"

export function DialogDocument({
  className,
  children,
}: React.HTMLProps<HTMLElement>) {
  return (
    <div role="document" className={classNames("dialog__document", className)}>
      {children}
    </div>
  )
}

export const DialogHeader = forwardRef(
  (
    { className, ...props }: React.HTMLProps<HTMLDivElement>,
    ref: React.Ref<HTMLDivElement>
  ) => (
    <div
      ref={ref}
      className={classNames("dialog__header", className)}
      {...props}
    />
  )
)
DialogHeader.displayName = "DialogHeader"

export const DialogTitle = forwardRef(
  (
    { className, ...props }: React.HTMLProps<HTMLDivElement>,
    ref: React.Ref<HTMLDivElement>
  ) => (
    <div
      ref={ref}
      className={classNames("dialog__title", className)}
      {...props}
    />
  )
)
DialogTitle.displayName = "DialogTitle"

export const DialogBody = forwardRef(
  (
    { className, ...props }: React.HTMLProps<HTMLDivElement>,
    ref: React.Ref<HTMLDivElement>
  ) => (
    <div
      ref={ref}
      className={classNames("dialog__body", className)}
      {...props}
    />
  )
)
DialogBody.displayName = "DialogBody"

export const DialogFooter = forwardRef(
  (
    { className, ...props }: React.HTMLProps<HTMLDivElement>,
    ref: React.Ref<HTMLDivElement>
  ) => (
    <div
      ref={ref}
      className={classNames("dialog__footer", className)}
      {...props}
    />
  )
)
DialogFooter.displayName = "DialogFooter"

interface DialogProps extends React.HTMLProps<HTMLDialogElement> {
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
   * Wether to render a close button or not
   * @default false
   */
  closeButton?: boolean
}
export function Dialog({
  container = document.body,
  children = null,
  open,
  onClose,
  autoFocus = true,
  enforceFocus = true,
  closeOnEscape = true,
  closeButton,
  className,
}: DialogProps) {
  const wrapperRef = useRef<HTMLDialogElement>(null)
  // set the styles for the container
  useEffect(() => {
    if (open) {
      container.classList.add(DIALOG_OPEN_CONTAINER_CLASS_NAME)
    } else {
      container.classList.remove(DIALOG_OPEN_CONTAINER_CLASS_NAME)
    }
    return () => {
      container.classList.remove(DIALOG_OPEN_CONTAINER_CLASS_NAME)
    }
  }, [open])
  useEnforceFocus(wrapperRef, open, { enforceFocus, autoFocus })
  if (!open) return null
  return ReactDOM.createPortal(
    <dialog
      open={open}
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
      className={classNames("dialog", className)}
    >
      {closeButton ? (
        <button onClick={onClose} className="dialog__close">
          &times;
        </button>
      ) : null}
      <DialogDocument>{children}</DialogDocument>
    </dialog>,
    container
  )
}

Dialog.Header = DialogHeader
Dialog.Title = DialogTitle
Dialog.Footer = DialogFooter
Dialog.Body = DialogBody

export default Dialog
