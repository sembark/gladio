import * as React from "react"
import classNames from "classnames"

export interface IBadgeProps extends React.HTMLProps<HTMLSpanElement> {
  primary?: boolean
  danger?: boolean
  warning?: boolean
  success?: boolean
  accent?: boolean
  outlined?: boolean
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
      accent,
      outlined,
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
            "badge-accent": accent,
            "badge-full-rounded": fullRounded,
            "badge-outlined": outlined,
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
  danger,
  warning,
  success,
  accent,
  outlined,
  fullRounded,
  ...props
}: IBadgeProps) {
  return (
    <span
      className={classNames(
        "badge-list",
        {
          "badge-list-primary": primary,
          "badge-list-danger": danger,
          "badge-list-warning": warning,
          "badge-list-success": success,
          "badge-list-accent": accent,
          "badge-list-full-rounded": fullRounded,
          "badge-list-outlined": outlined,
        },
        className
      )}
      {...props}
    />
  )
}
