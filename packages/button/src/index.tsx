import * as React from "react"
import { Omit } from "utility-types"
import classNames from "classnames"

type Button = Omit<React.HTMLProps<HTMLButtonElement>, "type" | "as"> & {
  type?: "button" | "submit" | "reset"
  primary?: boolean
}

const Button = React.forwardRef(
  (
    { className, primary, type = "button", ...props }: Button,
    ref: React.Ref<HTMLButtonElement>
  ) => {
    return (
      <button
        className={classNames("btn", primary && "btn-primary", className)}
        ref={ref}
        type="button"
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
