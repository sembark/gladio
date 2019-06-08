import * as React from "react"
import classNames from "classnames"

export const Input = React.forwardRef(
  (
    {
      className,
      hasError,
      ...props
    }: React.HTMLProps<HTMLInputElement> & {
      hasError?: boolean
    },
    ref: React.Ref<HTMLInputElement>
  ) => {
    return (
      <input
        ref={ref}
        className={classNames(
          "input",
          hasError ? "has-error" : undefined,
          className
        )}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export const Select = React.forwardRef(
  (
    {
      className,
      hasError,
      ...props
    }: React.HTMLProps<HTMLSelectElement> & {
      hasError?: boolean
    },
    ref: React.Ref<HTMLSelectElement>
  ) => {
    return (
      <select
        ref={ref}
        className={classNames(
          "input",
          hasError ? "has-error" : undefined,
          className
        )}
        {...props}
      />
    )
  }
)
Select.displayName = "Select"

export const TextArea = React.forwardRef(
  (
    {
      className,
      hasError,
      ...props
    }: React.HTMLProps<HTMLTextAreaElement> & {
      hasError?: boolean
    },
    ref: React.Ref<HTMLTextAreaElement>
  ) => {
    return (
      <textarea
        ref={ref}
        className={classNames(
          "input",
          hasError ? "has-error" : undefined,
          className
        )}
        {...props}
      />
    )
  }
)
TextArea.displayName = "TextArea"

export const FormGroup = React.forwardRef(
  (
    {
      className,
      hasError,
      ...props
    }: React.HTMLProps<HTMLDivElement> & { hasError?: boolean },
    ref: React.Ref<HTMLDivElement>
  ) => {
    return (
      <div
        ref={ref}
        className={classNames(
          "form-group",
          hasError ? "has-error" : undefined,
          className
        )}
        {...props}
      />
    )
  }
)
FormGroup.displayName = "FormGroup"

export const InputGroup = React.forwardRef(
  (
    {
      className,
      hasError,
      ...props
    }: React.HTMLProps<HTMLDivElement> & {
      hasError?: boolean
    },
    ref: React.Ref<HTMLDivElement>
  ) => {
    return (
      <div
        className={classNames(
          "input-group",
          hasError ? "has-error" : undefined,
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
InputGroup.displayName = "InputGroup"

export const InputGroupAddon = React.forwardRef(
  (
    { className, ...props }: React.HTMLProps<HTMLSpanElement>,
    ref: React.Ref<HTMLSpanElement>
  ) => (
    <span
      className={classNames("input-group-addon", className)}
      ref={ref}
      {...props}
    />
  )
)
InputGroupAddon.displayName = "InputGroupAddon"

export const ErrorMessage = React.forwardRef(
  (
    { className, ...props }: React.HTMLProps<HTMLSpanElement>,
    ref: React.Ref<HTMLSpanElement>
  ) => <span className={classNames("error-message")} ref={ref} {...props} />
)

ErrorMessage.displayName = "ErrorMessage"
