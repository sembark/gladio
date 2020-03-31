/**
 * Provide the props. Each key in the props will be used available as prop to the class constructor.
 * These will then be used to map this to a tailwind class name.
 * Values of each prop's key, will have keys which will be the possible values for this props,
 * and values as what should be the tailwind class prefix
 *
 */
const props = {
  outline: {
    none: "none",
  },
}

/**
 * Variants for each of props's key
 */
const variants = { outline: ["focus"] }

/**
 * Class name for each of props's key
 *
 * This will be used when creating the tailwind classNames for given keys
 */
const classNames = {
  outline: "outline",
}

/**
 * Get the types for each of props keys
 */
const types = {
  outline: "keyof typeof theme.outline",
}

module.exports = {
  props,
  variants,
  classNames,
  types,
}
