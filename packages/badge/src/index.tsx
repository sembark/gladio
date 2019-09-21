import * as React from "react"
import classNames from "classnames"

export interface IBadgeProps extends React.HTMLProps<HTMLSpanElement> {
  primary?: boolean
  danger?: boolean
  warning?: boolean
  success?: boolean
  fullRounded?: boolean
}

export const Badge = React.forwardRef<HTMLSpanElement, IBadgeProps>(
  (
    {
      children,
      className,
      primary,
      danger,
      warning,
      success,
      fullRounded,
      ...props
    },
    ref
  ) => {
    if (
      children === null ||
      children === undefined ||
      (typeof children === "string" && !children.trim())
    )
      return null
    return (
      <span
        className={classNames(
          "badge",
          {
            "badge-primary": primary,
            "badge-danger": danger,
            "badge-warning": warning,
            "badge-success": success,
            "badge-full-rounded": fullRounded,
          },
          className
        )}
        ref={ref}
        children={children}
        {...props}
      />
    )
  }
)

Badge.displayName = "Badge"

export default Badge

export function BadgeList({
  className,
  primary,
  fullRounded,
  ...props
}: IBadgeProps) {
  return (
    <span
      className={classNames(
        "badge-list",
        primary && "badge-list-primary",
        fullRounded && "badge-list-full-rounded",
        className
      )}
      {...props}
    />
  )
}
