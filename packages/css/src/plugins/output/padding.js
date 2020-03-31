/**
 * Provide the props. Each key in the props will be used available as prop to the class constructor.
 * These will then be used to map this to a tailwind class name.
 * Values of each prop's key, will have keys which will be the possible values for this props,
 * and values as what should be the tailwind class prefix
 *
 */
const props = theme => ({
  padding: theme.padding,
  paddingTop: theme.padding,
  paddingRight: theme.padding,
  paddingBottom: theme.padding,
  paddingLeft: theme.padding,
})

/**
 * Variants for each of props's key
 */
const variants = variants => ({
  padding: variants.padding,
  paddingTop: variants.padding,
  paddingRight: variants.padding,
  paddingBottom: variants.padding,
  paddingLeft: variants.padding,
})

/**
 * Class name for each of props's key
 *
 * This will be used when creating the tailwind classNames for given keys
 */
const classNames = {
  padding: "p",
  paddingTop: "pt",
  paddingRight: "pr",
  paddingBottop: "pb",
  paddingLeft: "pl",
}

/**
 * Get the types for each of props keys
 */
const types = {
  padding: "keyof typeof theme.padding",
  paddingTop: "keyof typeof theme.padding",
  paddingRight: "keyof typeof theme.padding",
  paddingBottom: "keyof typeof theme.padding",
  paddingLeft: "keyof typeof theme.padding",
}

module.exports = {
  props,
  variants,
  classNames,
  types,
}
