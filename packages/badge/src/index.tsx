import * as React from "react"

export interface Props {
  /**
   * Whatever need to be rendered, null will be rendered if nothing is passed
   */
  children?: React.ReactNode
}

export const Badge = ({ children, ...props }: Props) =>
  !children ? null : (
    <span
      style={{
        padding: "5px 10px",
        background: "whitesmoke",
        border: "1px solid silver",
        borderRadius: "9em",
      }}
      {...props}
    >
      {children}
    </span>
  )

export default Badge
