import * as React from "react"
import classNames from "classnames"
import { Omit } from "utility-types"
import { getClassName, removeStyleProps } from "@gladio/css"
import type { StyleProps } from "@gladio/css"

/**
 * The base Box props without any HTML/Platform Dependencies
 */
export type BoxBaseProps = StyleProps & {
  as?: React.ElementType
}

/**
 * Utility for merge a given type with Base Props
 */
export type MergeWithBoxProps<T> = BoxBaseProps &
  Omit<
    T,
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
    | "fontStyle"
    | "pointerEvents"
  >

/**
 * Box props with HTML Element as Base
 */
export type BoxProps = MergeWithBoxProps<
  React.AllHTMLAttributes<HTMLElement> & React.SVGProps<SVGSVGElement>
>

export const Box = React.forwardRef<HTMLElement, BoxProps>((props, ref) => {
  const { as = "div", className, ...restProps } = removeStyleProps(props)
  // create the class styles
  const boxStyles = getClassName(props)
  const classname = classNames(boxStyles, className)
  const element = React.createElement(as, {
    className: classname || undefined,
    ...restProps,
    ref,
  })
  return element
})

Box.displayName = "Box"

export default Box
