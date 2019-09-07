import * as React from "react"
import classNames from "classnames"

export interface IBadgeProps extends React.HTMLProps<HTMLSpanElement> {
  primary?: boolean
  fullRounded?: boolean
}

export const Badge = React.forwardRef<HTMLSpanElement, IBadgeProps>(
  ({ children, className, primary, fullRounded, ...props }, ref) => {
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
          primary && "badge-primary",
          fullRounded && "badge-full-rounded",
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
