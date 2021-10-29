/**
 * Provide the props. Each key in the props will be used available as prop to the class constructor.
 * These will then be used to map this to a tailwind class name.
 * Values of each prop's key, will have keys which will be the possible values for this props,
 * and values as what should be the tailwind class prefix
 *
 */
const props = (theme) => ({
  height: theme.height,
})

/**
 * Variants for each of props's key
 */
const variants = (variants) => ({
  height: variants.height,
})

/**
 * Class name for each of props's key
 *
 * This will be used when creating the tailwind classNames for given keys
 */
const classNames = {
  height: "h",
}

/**
 * Get the types for each of props keys
 */
const types = {
  height: "keyof $PropertyType<Theme, 'height'>",
}

module.exports = {
  props,
  variants,
  classNames,
  types,
}
