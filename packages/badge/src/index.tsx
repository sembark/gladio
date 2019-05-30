import * as React from "react"
import classNames from "classnames"

export interface IBadgeProps extends React.HTMLProps<HTMLSpanElement> {
  primary?: boolean
}

export const Badge = React.forwardRef<HTMLSpanElement, IBadgeProps>(
  ({ children, className, primary, ...props }, ref) => {
    if (!children) return null
    return (
      <span
        className={classNames("badge", primary && "badge-primary", className)}
        ref={ref}
        children={children}
        {...props}
      />
    )
  }
)

Badge.displayName = "Badge"

export default Badge
