/**
 * Provide the props. Each key in the props will be used available as prop to the class constructor.
 * These will then be used to map this to a tailwind class name.
 * Values of each prop's key, will have keys which will be the possible values for this props,
 * and values as what should be the tailwind class prefix
 *
 */
const props = (theme) => ({
  inset: theme.inset,
  insetX: theme.inset,
  insetY: theme.inset,
  top: theme.inset,
  right: theme.inset,
  bottom: theme.inset,
  left: theme.inset,
})

/**
 * Variants for each of props's key
 */
const variants = (variants) => ({
  inset: variants.inset || [],
  insetX: variants.inset || [],
  insetY: variants.inset || [],
  top: variants.inset || [],
  right: variants.inset || [],
  bottom: variants.inset || [],
  left: variants.inset || [],
})

/**
 * Class name for each of props's key
 *
 * This will be used when creating the tailwind classNames for given keys
 */
const classNames = {
  inset: "inset",
  insetX: "inset-x",
  insetY: "inset-y",
  top: "top",
  right: "right",
  bottom: "bottom",
  left: "left",
}

/**
 * Get the types for each of props keys
 */
const types = {
  inset: "keyof $PropertyType<Theme, 'inset'>",
  insetX: "keyof $PropertyType<Theme, 'inset'>",
  insetY: "keyof $PropertyType<Theme, 'inset'>",
  top: "keyof $PropertyType<Theme, 'inset'>",
  right: "keyof $PropertyType<Theme, 'inset'>",
  bottom: "keyof $PropertyType<Theme, 'inset'>",
  left: "keyof $PropertyType<Theme, 'inset'>",
}

module.exports = {
  props,
  variants,
  classNames,
  types,
}
