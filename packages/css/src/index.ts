import classNames from "classnames"
import { Subtract, $Values } from "utility-types"
import theme, { classNamesForKeys, StyleProps as IStyleProps } from "./theme"

export interface StyleProps extends IStyleProps {}

/**
 * Get the classNames for the key
 */
function getClassNameForKey(
  prefix?: string,
  value?: $Values<StyleProps>
): string | null {
  if (!value) return null
  if ((value === "default" || value === true) && prefix) return prefix
  if (typeof value == "string") {
    let isNegativeValue = value.charAt(0) === "-"
    if (isNegativeValue) {
      // remove the negative part
      // we will add it to the className
      value = value.slice(1) as typeof value
    }
    const className = (() => {
      if (prefix) {
        // check if the prefix is a variant with no class name
        // e.g. sm: for "displaySm" prop
        if (prefix.charAt(prefix.length - 1) === ":") {
          // just return the prefix and value
          // e.g. for displaySm:block => sm:block
          return `${prefix}${value}`
        }
        return `${prefix}-${value}`
      }
      return value
    })()
    return (isNegativeValue ? "-" : "") + className
  }
  return null
}

export function getClassName(props: StyleProps) {
  const classes = Object.keys(props).map(key => {
    const prefix = classNamesForKeys[key]
    if (prefix !== undefined) {
      return getClassNameForKey(prefix, props[key])
    }
    return ""
  })
  return classNames(classes)
}

export function removeStyleProps<Props extends StyleProps>(
  props: Props
): Subtract<Props, StyleProps> {
  const newProps = Object.assign({}, props)
  for (let key in newProps) {
    // @ts-ignore
    if (classNamesForKeys[key] !== undefined) delete newProps[key]
  }
  return newProps
}

export default theme
