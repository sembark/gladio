/**
 * Provide the props. Each key in the props will be used available as prop to the class constructor.
 * These will then be used to map this to a tailwind class name.
 * Values of each prop's key, will have keys which will be the possible values for this props,
 * and values as what should be the tailwind class prefix
 *
 */
const props = {
  overflow: [
    "auto",
    "hidden",
    "visible",
    "scroll",
    "x-auto",
    "y-auto",
    "x-hidden",
    "y-hidden",
    "x-visibile",
    "y-visibile",
    "x-scroll",
    "y-scroll",
  ],
}

/**
 * Variants for each of props's key
 */
const variants = variants => ({ overflow: variants.overflow || ["responsive"] })

/**
 * Class name for each of props's key
 *
 * This will be used when creating the tailwind classNames for given keys
 */
const classNames = {
  overflow: "overflow",
}

/**
 * Get the types for each of props keys
 */
const types = {
  overflow: "typeof theme.overflow[number]",
}

module.exports = {
  props,
  variants,
  classNames,
  types,
}
