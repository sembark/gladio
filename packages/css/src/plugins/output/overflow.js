/**
 * Provide the props. Each key in the props will be used available as prop to the class constructor.
 * These will then be used to map this to a tailwind class name.
 * Values of each prop's key, will have keys which will be the possible values for this props,
 * and values as what should be the tailwind class prefix
 *
 */
const props = {
  overflow: ["auto", "hidden", "visible", "scroll"],
  overflowX: ["auto", "hidden", "visible", "scroll"],
  overflowY: ["auto", "hidden", "visible", "scroll"],
}

/**
 * Variants for each of props's key
 */
const variants = (variants) => ({
  overflow: variants.overflow || ["responsive"],
  overflowX: variants.overflow || ["responsive"],
  overflowY: variants.overflow || ["responsive"],
})

/**
 * Class name for each of props's key
 *
 * This will be used when creating the tailwind classNames for given keys
 */
const classNames = {
  overflow: "overflow",
  overflowX: "overflow-x",
  overflowY: "overflow-y",
}

/**
 * Get the types for each of props keys
 */
const types = {
  overflow: "$PropertyType<Theme, 'overflow'>[number]",
  overflowX: "$PropertyType<Theme, 'overflow'>[number]",
  overflowY: "$PropertyType<Theme, 'overflow'>[number]",
}

module.exports = {
  props,
  variants,
  classNames,
  types,
}
