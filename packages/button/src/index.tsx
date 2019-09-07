import * as React from "react"
import { Omit } from "utility-types"
import classNames from "classnames"

export type Button = Omit<React.HTMLProps<HTMLButtonElement>, "type" | "as"> & {
  type?: "button" | "submit" | "reset"
  primary?: boolean
  secondary?: boolean
  tertiary?: boolean

  branded?: boolean
  success?: boolean
  danger?: boolean
  warning?: boolean
  accent?: boolean
  light?: boolean

  fullWidth?: boolean
}

const Button = React.forwardRef(
  (
    {
      className,
      primary,
      secondary,
      tertiary,
      branded,
      success,
      danger,
      warning,
      accent,
      light,
      fullWidth,
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
            "btn-secondary": secondary,
            "btn-tertiary": tertiary,
            branded: branded,
            success: success,
            danger: danger,
            warning: warning,
            accent: accent,
            light: light,
            "full-width": fullWidth,
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
