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
    return prefix
      ? prefix.charAt(prefix.length - 1) === ":"
        ? `${prefix}${value}`
        : `${prefix}-${value}`
      : value
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
