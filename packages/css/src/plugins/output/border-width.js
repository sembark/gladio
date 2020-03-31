/**
 * Provide the props. Each key in the props will be used available as prop to the class constructor.
 * These will then be used to map this to a tailwind class name.
 * Values of each prop's key, will have keys which will be the possible values for this props,
 * and values as what should be the tailwind class prefix
 *
 */
const props = theme => ({
  border: theme.borderWidth,
  borderTop: theme.borderWidth,
  borderRight: theme.borderWidth,
  borderBottom: theme.borderWidth,
  borderLeft: theme.borderWidth,
})

/**
 * Variants for each of props's key
 */
const variants = variants => ({
  border: variants.borderWidth,
  borderTop: variants.borderWidth,
  borderRight: variants.borderWidth,
  borderBottom: variants.borderWidth,
  borderLeft: variants.borderWidth,
})

/**
 * Class name for each of props's key
 *
 * This will be used when creating the tailwind classNames for given keys
 */
const classNames = {
  border: "border",
  borderTop: "border-t",
  borderRight: "border-r",
  borderBottom: "border-b",
  borderLeft: "border-l",
}

/**
 * Get the types for each of props keys
 */
const types = {
  border: "keyof typeof theme.borderWidth | true",
  borderTop: "keyof typeof theme.borderWidth | true",
  borderRight: "keyof typeof theme.borderWidth | true",
  borderBottom: "keyof typeof theme.borderWidth | true",
  borderLeft: "keyof typeof theme.borderWidth | true",
}

module.exports = {
  props,
  variants,
  classNames,
  types,
}
