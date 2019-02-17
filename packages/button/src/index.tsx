import * as React from "react"
export interface Props {
  /**
   * Weather or not button is disabled
   * @default false
   */
  disabled?: boolean

  /**
   * Type of the button
   * @default button
   */
  type?: "button" | "submit" | "reset"

  /**
   * Children to render inside button
   */
  children?: React.ReactNode
}

export const Button = (props: Props) => <button {...props} />

Button.defaultProps = {
  type: "button",
  disabled: false,
}

export default Button
