import * as React from "react"
import * as ReactDOM from "react-dom"
import classNames from "classnames"
import { useEnforceFocus, useId } from "@gladio/react-hooks"
import { useTransition, SpringValue, animated } from "@react-spring/web"
import { Omit } from "utility-types"
import Box from "@gladio/box"

import DialogManager from "./DialogManager"

const { useRef, useState, useEffect } = React
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

const AnimatedBox = animated(Box)

type BoxProps = React.ComponentProps<typeof Box>
type AnimatedBoxProps = React.ComponentProps<typeof AnimatedBox>

export function DialogDocument({
  className,
  children,
  ...props
}: AnimatedBoxProps) {
  return (
    <AnimatedBox
      role="document"
      className={classNames(`${DIALOG_BASE_CLASS_NAME}-document`, className)}
      {...props}
    >
      {children}
    </AnimatedBox>
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
      autoFocus
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

export function DialogHeader({
  className,
  closeButton = true,
  children,
  title,
  ...props
}: Omit<BoxProps, "title"> & {
  closeButton?: boolean
  title?: React.ReactNode
}) {
  return (
    <Box
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
      {title ? <DialogTitle>{title}</DialogTitle> : null}
      {children}
    </Box>
  )
}
DialogHeader.displayName = "DialogHeader"

export function DialogTitle({ className, ...props }: BoxProps) {
  const { titleId } = React.useContext(DialogContext)
  return (
    <Box
      as="h3"
      id={titleId}
      className={classNames(`${DIALOG_BASE_CLASS_NAME}-title`, className)}
      {...props}
    />
  )
}

DialogTitle.displayName = "DialogTitle"

export function DialogBody({ className, ...props }: BoxProps) {
  const { contentId } = React.useContext(DialogContext)
  return (
    <Box
      id={contentId}
      className={classNames(`${DIALOG_BASE_CLASS_NAME}-body`, className)}
      {...props}
    />
  )
}
DialogBody.displayName = "DialogBody"

export function DialogFooter({ className, ...props }: BoxProps) {
  return (
    <Box
      className={classNames(`${DIALOG_BASE_CLASS_NAME}-footer`, className)}
      {...props}
    />
  )
}
DialogFooter.displayName = "DialogFooter"

function Backdrop({ className, ...props }: BoxProps) {
  return (
    <Box
      className={classNames(`${DIALOG_BASE_CLASS_NAME}__backdrop`, className)}
      {...props}
    />
  )
}

interface DialogProps {
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
  /**
   * Class name for the Dialog element
   */
  className?: string
  /**
   * Large size
   */
  xl?: boolean
  /**
   * Large size
   */
  lg?: boolean

  /**
   * Small size
   */
  sm?: boolean

  /**
   * Title
   */
  title?: React.ReactNode
}

const dialogManager = DialogManager(DIALOG_OPEN_CONTAINER_CLASS_NAME)

function DialogContainer({
  container = typeof document !== "undefined" ? document.body : undefined,
  children = null,
  open,
  onClose,
  autoFocus = true,
  enforceFocus = true,
  closeOnEscape,
  className,
  fitContainer = false,
  animation,
  xl,
  lg,
  sm,
  title,
}: DialogProps & {
  animation: { opacity: SpringValue<number>; transform: SpringValue<string> }
}) {
  const wrapperRef = useRef<HTMLElement>(null)

  const id = useId("dialog-")

  // to handle the case when there are multiple dialog opened simultaneously
  const [isTopDialog, _updateIsTopDialog] = useState(false)

  useEffect(() => {
    const unsubscribe = dialogManager.subscribe(function subscriber() {
      _updateIsTopDialog(dialogManager.isTop(id))
    })
    return unsubscribe
  }, [])

  // disable closeOnEscape if no props is provided and fitContainer is set to true
  closeOnEscape =
    isTopDialog &&
    (closeOnEscape === undefined ? !fitContainer : closeOnEscape || true)

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

  useEnforceFocus(wrapperRef, {
    init: open,
    disabled: !isTopDialog,
    restoreToLast: isTopDialog && enforceFocus,
    autoFocus: isTopDialog && autoFocus,
  })

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
  if (!container) return null

  return ReactDOM.createPortal(
    <AnimatedBox
      id={id}
      ref={wrapperRef}
      onKeyDown={(event: React.KeyboardEvent<any>) => {
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
      style={{
        opacity: animation.opacity,
      }}
      className={classNames(DIALOG_BASE_CLASS_NAME, className, {
        [`${DIALOG_BASE_CLASS_NAME}-fit-container`]: fitContainer,
        [`${DIALOG_BASE_CLASS_NAME}-lg`]: lg,
        [`${DIALOG_BASE_CLASS_NAME}-sm`]: sm,
        [`${DIALOG_BASE_CLASS_NAME}-xl`]: xl,
      })}
    >
      {!fitContainer ? <Backdrop /> : null}
      <DialogProvider value={dialogContext}>
        <DialogDocument
          style={{
            transform: animation.transform,
          }}
        >
          {title ? <DialogHeader title={title} /> : null}
          {children}
        </DialogDocument>
      </DialogProvider>
    </AnimatedBox>,
    container
  )
}

export function Dialog(props: DialogProps) {
  const { fitContainer, open } = props
  const transitionConfig = React.useMemo(() => {
    return {
      from: {
        opacity: 0,
        transform: `translate3d(${fitContainer ? "10px, 0" : "0, -10px"}, 0)`,
      },
      enter: { opacity: 1, transform: "translate3d(0, 0px, 0)" },
      leave: {
        opacity: 0,
        transform: `translate3d(${fitContainer ? "10px, 0" : "0, -10px"}, 0)`,
      },
    }
  }, [fitContainer])
  const transitions = useTransition(open, transitionConfig)
  return (
    <>
      {transitions((style, item) => {
        if (!item) return null
        return <DialogContainer {...props} animation={style} />
      })}
    </>
  )
}

Dialog.Header = DialogHeader
Dialog.Title = DialogTitle
Dialog.Footer = DialogFooter
Dialog.Body = DialogBody

export default Dialog
