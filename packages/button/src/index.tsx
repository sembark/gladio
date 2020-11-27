import * as React from "react"
import classNames from "classnames"
import Box, { MergeWithBoxProps } from "@gladio/box"

export type ButtonProps = MergeWithBoxProps<
  React.HTMLProps<HTMLButtonElement>
> & {
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

  /**
   * Make the button of full width
   */
  fullWidth?: boolean

  /**
   * Make the button small in size
   */
  sm?: boolean
}

export const Button = React.forwardRef(function Button(
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
    type,
    sm,
    ...props
  }: ButtonProps,
  ref: React.Ref<HTMLButtonElement>
) {
  const Btn = Box as React.ComponentType<ButtonProps>
  if (!type && !props.as) type = "button"
  return (
    <Btn
      as="button"
      className={classNames(
        "btn",
        {
          "btn-primary": primary,
          "btn-secondary": secondary,
          "btn-tertiary": tertiary,
          "btn-sm": sm,
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
})

Button.displayName = "Button"

export default Button

export function ButtonGroup({
  className,
  ...props
}: React.ComponentProps<typeof Box>) {
  return <Box className={classNames("btn-group", className)} {...props} />
}

export function ButtonToolbar({
  className,
  ...props
}: React.ComponentProps<typeof Box>) {
  return <Box className={classNames("btn-toolbar", className)} {...props} />
}
