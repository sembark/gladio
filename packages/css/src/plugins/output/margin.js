/**
 * Provide the props. Each key in the props will be used available as prop to the class constructor.
 * These will then be used to map this to a tailwind class name.
 * Values of each prop's key, will have keys which will be the possible values for this props,
 * and values as what should be the tailwind class prefix
 *
 */
const props = theme => ({
  margin: theme.margin,
  marginTop: theme.margin,
  marginRight: theme.margin,
  marginBottom: theme.margin,
  marginLeft: theme.margin,
})

/**
 * Variants for each of props's key
 */
const variants = variants => ({
  margin: variants.margin,
  marginTop: variants.margin,
  marginRight: variants.margin,
  marginBottom: variants.margin,
  marginLeft: variants.margin,
})

/**
 * Class name for each of props's key
 *
 * This will be used when creating the tailwind classNames for given keys
 */
const classNames = {
  margin: "m",
  marginTop: "mt",
  marginRight: "mr",
  marginBottom: "mb",
  marginLeft: "ml",
}

/**
 * Get the types for each of props keys
 */
const types = {
  margin: "keyof typeof theme.margin",
  marginTop: "keyof typeof theme.margin",
  marginRight: "keyof typeof theme.margin",
  marginBottom: "keyof typeof theme.margin",
  marginLeft: "keyof typeof theme.margin",
}

module.exports = {
  props,
  variants,
  classNames,
  types,
}
