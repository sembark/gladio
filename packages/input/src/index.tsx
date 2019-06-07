import * as React from "react"
import classNames from "classnames"

export const Input = React.forwardRef(
  (
    { className, ...props }: React.HTMLProps<HTMLInputElement>,
    ref: React.Ref<HTMLInputElement>
  ) => {
    return (
      <input ref={ref} className={classNames("input", className)} {...props} />
    )
  }
)
Input.displayName = "Input"

export const Select = React.forwardRef(
  (
    { className, ...props }: React.HTMLProps<HTMLSelectElement>,
    ref: React.Ref<HTMLSelectElement>
  ) => {
    return (
      <select ref={ref} className={classNames("input", className)} {...props} />
    )
  }
)
Select.displayName = "Select"

export const TextArea = React.forwardRef(
  (
    { className, ...props }: React.HTMLProps<HTMLTextAreaElement>,
    ref: React.Ref<HTMLTextAreaElement>
  ) => {
    return (
      <textarea
        ref={ref}
        className={classNames("input", className)}
        {...props}
      />
    )
  }
)
TextArea.displayName = "TextArea"

export const FormGroup = React.forwardRef(
  (
    { className, ...props }: React.HTMLProps<HTMLDivElement>,
    ref: React.Ref<HTMLDivElement>
  ) => {
    return (
      <div
        ref={ref}
        className={classNames("form-group", className)}
        {...props}
      />
    )
  }
)
FormGroup.displayName = "FormGroup"

export const InputGroup = React.forwardRef(
  (
    { className, ...props }: React.HTMLProps<HTMLDivElement>,
    ref: React.Ref<HTMLDivElement>
  ) => {
    return (
      <div
        className={classNames("input-group", className)}
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
