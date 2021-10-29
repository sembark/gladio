import * as React from "react"
import classNames from "classnames"
import * as RadixDialogPrimitives from "@radix-ui/react-dialog"
import Box from "@gladio/box"
import { useTransition, animated } from "@react-spring/web"

type BoxProps = React.ComponentProps<typeof Box>

const DIALOG_BASE_CLASS_NAME = "dialog"
const { useState, useMemo, createContext, useContext } = React

const DialogContext = createContext<{
  open?: boolean
  onClose?: () => void
  fitContainer: boolean
}>({
  open: false,
  onClose: undefined,
  fitContainer: false,
})

const DialogProvider = DialogContext.Provider

// Exports
const DialogTrigger = RadixDialogPrimitives.Trigger
const DialogContent = animated(RadixDialogPrimitives.Content)
const DialogDescription = RadixDialogPrimitives.Description
const DialogClose = RadixDialogPrimitives.Close

export function useDialog(
  initialOpen: boolean = false
): [boolean, () => void, () => void] {
  const [isOpen, set] = useState<boolean>(initialOpen)
  return [isOpen, () => set(true), () => set(false)]
}

const AnimatedBackdrop = animated(RadixDialogPrimitives.Overlay)

interface DialogProps {
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

function Dialog({
  children = null,
  open,
  onClose,
  className,
  fitContainer = false,
  xl,
  lg,
  sm,
  title,
  closeOnEscape = true,
}: DialogProps) {
  const dialogContext = useMemo(() => {
    return {
      open,
      onClose,
      fitContainer,
    }
  }, [onClose, open, fitContainer])
  const transitionConfig = useMemo(() => {
    return {
      from: {
        opacity: 0,
        transform: `translate3d(${fitContainer ? "10px, 0" : "0, -10px"}, 0)`,
      },
      enter: { opacity: 1, transform: "translate3d(0, 0px, 0)" },
      leave: {
        opacity: 0,
        transform: `translate3d(${fitContainer ? "10px, 0" : "0, 0"}, 0)`,
      },
    }
  }, [fitContainer])
  const transitions = useTransition(open, transitionConfig)

  return (
    <RadixDialogPrimitives.Root open={open} onOpenChange={onClose}>
      {transitions((style, item) => {
        if (!item) return null
        return (
          <>
            {!fitContainer ? (
              <AnimatedBackdrop
                forceMount
                style={{
                  opacity: style.opacity,
                }}
                className={classNames(`${DIALOG_BASE_CLASS_NAME}__backdrop`)}
              />
            ) : null}
            <DialogProvider value={dialogContext}>
              <DialogContent
                forceMount
                onEscapeKeyDown={(e) => {
                  if (!closeOnEscape) {
                    e.preventDefault()
                  }
                }}
                style={{
                  transform: style.transform,
                  opacity: style.opacity,
                }}
                className={classNames(DIALOG_BASE_CLASS_NAME, className, {
                  [`${DIALOG_BASE_CLASS_NAME}-fit-container`]: fitContainer,
                  [`${DIALOG_BASE_CLASS_NAME}-lg`]: lg,
                  [`${DIALOG_BASE_CLASS_NAME}-sm`]: sm,
                  [`${DIALOG_BASE_CLASS_NAME}-xl`]: xl,
                })}
              >
                <div
                  className={classNames(`${DIALOG_BASE_CLASS_NAME}-document`)}
                >
                  {title ? <DialogHeader title={title} /> : null}
                  {children}
                </div>
              </DialogContent>
            </DialogProvider>
          </>
        )
      })}
    </RadixDialogPrimitives.Root>
  )
}

export function DialogTitle({ className, ...props }: BoxProps) {
  return (
    <RadixDialogPrimitives.Title asChild>
      <Box
        as="h3"
        className={classNames(`${DIALOG_BASE_CLASS_NAME}-title`, className)}
        {...props}
      />
    </RadixDialogPrimitives.Title>
  )
}

DialogTitle.displayName = "DialogTitle"

export function DialogHeader({
  className,
  closeButton = true,
  children,
  title,
  description,
  ...props
}: Omit<BoxProps, "title"> & {
  closeButton?: boolean
  title?: React.ReactNode
  description?: string
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
      {description ? (
        <DialogDescription>{description}</DialogDescription>
      ) : null}
      {children}
    </Box>
  )
}
DialogHeader.displayName = "DialogHeader"

export function DialogCloseButton({
  className,
  children,
  ...props
}: RadixDialogPrimitives.DialogCloseProps) {
  const { fitContainer } = useContext(DialogContext)
  return (
    <RadixDialogPrimitives.DialogClose
      className={classNames("dialog-close-btn", className)}
      {...props}
    >
      {children ||
        (fitContainer ? (
          <span className="dialog-back-icon" />
        ) : (
          <span className="dialog-close-icon" />
        ))}
    </RadixDialogPrimitives.DialogClose>
  )
}

export function DialogBody({ className, ...props }: BoxProps) {
  return (
    <Box
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

Dialog.Header = DialogHeader
Dialog.Title = DialogTitle
Dialog.Footer = DialogFooter
Dialog.Body = DialogBody
Dialog.Trigger = DialogTrigger
Dialog.Close = DialogClose

export default Dialog
