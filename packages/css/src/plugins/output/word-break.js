/**
 * Provide the props. Each key in the props will be used available as prop to the class constructor.
 * These will then be used to map this to a tailwind class name.
 * Values of each prop's key, will have keys which will be the possible values for this props,
 * and values as what should be the tailwind class prefix
 *
 */
const props = {
  wordBreak: ["normal", "words", "all"],
  wordTruncate: true,
}

/**
 * Variants for each of props's key
 */
const variants = (variants) => ({
  wordBreak: variants.wordBreak,
  wordTruncate: variants.wordBreak,
})

/**
 * Class name for each of props's key
 *
 * This will be used when creating the tailwind classNames for given keys
 */
const classNames = {
  wordBreak: "break",
  wordTruncate: "truncate",
}

/**
 * Get the types for each of props keys
 */
const types = {
  wordBreak: "$PropertyType<Theme, 'wordBreak'>[number]",
  wordTruncate: "$PropertyType<Theme, 'wordTruncate'>",
}

module.exports = {
  props,
  variants,
  classNames,
  types,
}
