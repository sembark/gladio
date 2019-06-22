import * as React from "react"
import { Omit } from "utility-types"
import classNames from "classnames"

export type Button = Omit<React.HTMLProps<HTMLButtonElement>, "type" | "as"> & {
  type?: "button" | "submit" | "reset"
  primary?: boolean
  success?: boolean
  error?: boolean
  warning?: boolean
  accent?: boolean
}

const Button = React.forwardRef(
  (
    {
      className,
      primary,
      success,
      error,
      warning,
      accent,
      type = "button",
      ...props
    }: Button,
    ref: React.Ref<HTMLButtonElement>
  ) => {
    return (
      <button
        className={classNames(
          "btn",
          {
            "btn-primary": primary,
            "btn-success": success,
            "btn-error": error,
            "btn-warning": warning,
            "btn-accent": accent,
          },
          className
        )}
        ref={ref}
        type={type}
        {...props}
      />
    )
  }
)

Button.displayName = "Button"

export default Button

export function ButtonGroup({
  className,
  ...props
}: React.HTMLProps<HTMLSpanElement>) {
  return <span className={classNames("btn-group", className)} {...props} />
}

export function ButtonToolbar({
  className,
  ...props
}: React.HTMLProps<HTMLSpanElement>) {
  return <span className={classNames("btn-toolbar", className)} {...props} />
}
