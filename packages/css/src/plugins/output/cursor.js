/**
 * Provide the props. Each key in the props will be used available as prop to the class constructor.
 * These will then be used to map this to a tailwind class name.
 * Values of each prop's key, will have keys which will be the possible values for this props,
 * and values as what should be the tailwind class prefix
 *
 */
const props = theme => ({
  cursor: theme.cursor,
  pointerEvents: ["none", "auto"],
})

/**
 * Variants for each of props's key
 */
const variants = variants => ({
  cursor: variants.cursor,
  pointerEvents: variants.pointerEvents,
})

/**
 * Class name for each of props's key
 *
 * This will be used when creating the tailwind classNames for given keys
 */
const classNames = {
  cursor: "cursor",
  pointerEvents: "pointer-events",
}

/**
 * Get the types for each of props keys
 */
const types = {
  cursor: "keyof typeof theme.cursor",
  pointerEvents: "typeof theme.pointerEvents[number]",
}

module.exports = {
  props,
  variants,
  classNames,
  types,
}
