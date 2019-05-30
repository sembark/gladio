import * as React from "react"
import { Omit } from "utility-types"
import classNames from "classnames"

type Button = Omit<React.HTMLProps<HTMLButtonElement>, "type" | "as"> & {
  type?: "button" | "submit" | "reset"
  primary?: boolean
}

const Button = React.forwardRef(
  (
    { className, primary, ...props }: Button,
    ref: React.Ref<HTMLButtonElement>
  ) => {
    return (
      <button
        className={classNames("btn", primary && "btn-primary", className)}
        ref={ref}
        {...props}
      />
    )
  }
)

Button.displayName = "Button"
Button.defaultProps = {
  type: "button",
}

export default Button
