/**
 * Provide the props. Each key in the props will be used available as prop to the class constructor.
 * These will then be used to map this to a tailwind class name.
 * Values of each prop's key, will have keys which will be the possible values for this props,
 * and values as what should be the tailwind class prefix
 *
 */
const props = {
  display: {
    inline: "inline",
    "inline-block": "inline-block",
    block: "block",
    hidden: "hidden",
    flex: "flex",
    "inline-flex": "inline-flex",
    table: "table",
    "table-row": "table-row",
    "table-cell": "table-cell",
  },
}

/**
 * Variants for each of props's key
 */
const variants = { display: ["responsive"] }

/**
 * Class name for each of props's key
 *
 * This will be used when creating the tailwind classNames for given keys
 */
const classNames = {
  display: "",
}

/**
 * Get the types for each of props keys
 */
const types = {
  display: "keyof typeof theme.display",
}

module.exports = {
  props,
  variants,
  classNames,
  types,
}
