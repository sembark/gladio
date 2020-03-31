/**
 * Provide the props. Each key in the props will be used available as prop to the class constructor.
 * These will then be used to map this to a tailwind class name.
 * Values of each prop's key, will have keys which will be the possible values for this props,
 * and values as what should be the tailwind class prefix
 *
 */
const props = {
  overflow: {
    auto: "auto",
    hidden: "hidden",
    visible: "visible",
    scroll: "scroll",
    "x-auto": "x-auto",
    "y-auto": "y-auto",
    "x-hidden": "x-hidden",
    "y-hidden": "y-hidden",
    "x-visibile": "x-visibile",
    "y-visibile": "y-visibile",
    "x-scroll": "x-scroll",
    "y-scroll": "y-scroll",
  },
}

/**
 * Variants for each of props's key
 */
const variants = { overflow: ["responsive"] }

/**
 * Class name for each of props's key
 *
 * This will be used when creating the tailwind classNames for given keys
 */
const classNames = {
  overflow: "",
}

/**
 * Get the types for each of props keys
 */
const types = {
  overflow: "keyof typeof theme.overflow",
}

module.exports = {
  props,
  variants,
  classNames,
  types,
}
