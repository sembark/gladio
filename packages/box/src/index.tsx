import { AllHTMLAttributes, createElement, forwardRef } from "react"
import classNames from "classnames"
import { Omit } from "utility-types"
import { StyleProps, getClassName, removeStyleProps } from "@tourepedia/css"

interface IBoxProps
  extends StyleProps,
    Omit<
      AllHTMLAttributes<HTMLElement> & React.SVGProps<SVGSVGElement>,
      | "width"
      | "height"
      | "scrolling"
      | "as"
      | "letterSpacing"
      | "fontWeight"
      | "fontFamily"
      | "cursor"
      | "display"
      | "fill"
      | "fontSize"
      | "opacity"
      | "order"
      | "overflow"
      | "stroke"
      | "textDecoration"
    > {
  as?: React.ReactType
}

const Box = forwardRef<HTMLElement, IBoxProps>((props, ref) => {
  const { as = "div", className, ...restProps } = removeStyleProps(props)
  // create the class styles
  const boxStyles = getClassName(props)
  const classname = classNames(boxStyles, className)
  const element = createElement(as, {
    className: classname || undefined,
    ...restProps,
    ref,
  })
  return element
})

Box.displayName = "Box"

export default Box
