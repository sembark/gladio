/**
 * Provide the props. Each key in the props will be used available as prop to the class constructor.
 * These will then be used to map this to a tailwind class name.
 * Values of each prop's key, will have keys which will be the possible values for this props,
 * and values as what should be the tailwind class prefix
 *
 */
const props = {
  whiteSpace: ["normal", "no-wrap", "pre", "pre-line", "pre-wrap"],
}

/**
 * Variants for each of props's key
 */
const variants = { whiteSpace: ["responsive"] }

/**
 * Class name for each of props's key
 *
 * This will be used when creating the tailwind classNames for given keys
 */
const classNames = {
  whiteSpace: "whitespace",
}

/**
 * Get the types for each of props keys
 */
const types = {
  whiteSpace: "$PropertyType<Theme, 'whiteSpace'>[number]",
}

module.exports = {
  props,
  variants,
  classNames,
  types,
}
