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
}

export const Button = (props: Props) => <button {...props} />

Button.defaultProps = {
  type: "button",
}

export default Button
