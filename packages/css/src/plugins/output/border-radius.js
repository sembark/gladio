/**
 * Provide the props. Each key in the props will be used available as prop to the class constructor.
 * These will then be used to map this to a tailwind class name.
 * Values of each prop's key, will have keys which will be the possible values for this props,
 * and values as what should be the tailwind class prefix
 *
 */
const props = theme => ({
  rounded: theme.borderRadius,
  roundedTop: theme.borderRadius,
  roundedRight: theme.borderRadius,
  roundedBottom: theme.borderRadius,
  roundedLeft: theme.borderRadius,
  roundedTopLeft: theme.borderRadius,
  roundedTopRight: theme.borderRadius,
  roundedBottomLeft: theme.borderRadius,
  roundedBottomRight: theme.borderRadius,
})

/**
 * Variants for each of props's key
 */
const variants = variants => ({
  rounded: variants.borderRadius,
  roundedTop: variants.borderRadius,
  roundedRight: variants.borderRadius,
  roundedBottom: variants.borderRadius,
  roundedLeft: variants.borderRadius,
  roundedTopLeft: variants.borderRadius,
  roundedTopRight: variants.borderRadius,
  roundedBottomLeft: variants.borderRadius,
  roundedBottomRight: variants.borderRadius,
})

/**
 * Class name for each of props's key
 *
 * This will be used when creating the tailwind classNames for given keys
 */
const classNames = {
  rounded: "rounded",
  roundedTop: "rounded-t",
  roundedRight: "rounded-r",
  roundedBottom: "rounded-b",
  roundedLeft: "rounded-l",
  roundedTopLeft: "rounded-tl",
  roundedTopRight: "rounded-tr",
  roundedBottomLeft: "rounded-bl",
  roundedBottomRight: "rounded-br",
}

/**
 * Get the types for each of props keys
 */
const types = {
  rounded: "keyof typeof theme.borderRadius | true",
  roundedTop: "keyof typeof theme.borderRadius | true",
  roundedRight: "keyof typeof theme.borderRadius | true",
  roundedBottom: "keyof typeof theme.borderRadius | true",
  roundedLeft: "keyof typeof theme.borderRadius | true",
  roundedTopLeft: "keyof typeof theme.borderRadius | true",
  roundedTopRight: "keyof typeof theme.borderRadius | true",
  roundedBottomLeft: "keyof typeof theme.borderRadius | true",
  roundedBottomRight: "keyof typeof theme.borderRadius | true",
}

module.exports = {
  props,
  variants,
  classNames,
  types,
}
