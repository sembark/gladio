const fs = require("fs")
const path = require("path")
const plugins = require("./output")

function ensureDirectoryExistence(filePath) {
  var dirname = path.dirname(filePath)
  if (fs.existsSync(dirname)) {
    return true
  }
  ensureDirectoryExistence(dirname)
  fs.mkdirSync(dirname)
}

/**
 * Capitalize a string
 * @param {string} str
 */
function capitalize(str) {
  return `${str.charAt(0).toUpperCase()}${str.slice(1)}`
}

/**
 * Get the class names (for tailwind) for config keys
 * e.g. suppose we key for theme for padding as `padding` but
 * in tailwind, these have a class name as `p`, `paddingTop` has
 * `pt`. So, in this function, we map these config keys to classes.
 *
 * If we have added a new key to config, we need to make sure we
 * map a class name for the key
 * @param {string} to
 */
function getClassNames() {
  return plugins.reduce((classNames, plugin) => {
    if (plugin.classNames) {
      classNames = { ...classNames, ...plugin.classNames }
    }
    return classNames
  }, {})
}

/**
 * This converts the tailwinds default config (nested)
 * to a flat structure with key => value pair, spending any
 * parent key as prefix to the child e.g.
 * colors.geen.100 => "#000" becomes colors['green-100'] => "#000"
 * @param string nestedConfig - nested config
 * @param ?string prefix - prefix to append to the key, default empty string
 * @params ?object previousConfig - previous config to continues (used for recurrsion)
 * @return object - with flatted config
 */
function createFlatConfig(nestedConfig, prefix = "", previousConfig = {}) {
  return Object.keys(nestedConfig).reduce((flatConfig, key) => {
    const value = nestedConfig[key]
    const flatConfigKey = `${prefix}` + key
    if (!value) flatConfig
    if (typeof value === "string") {
      flatConfig[flatConfigKey] = value
    } else if (typeof value === "object") {
      flatConfig = createFlatConfig(value, `${key}-`, flatConfig)
    }
    return flatConfig
  }, previousConfig)
}

/**
 * here we add variants to the theme's key e.g. responsive variants, hover variants etc.
 */
function addVariantsSuffix(variantsConfig = {}, theme = {}) {
  const withSuffix = {}
  const screens = Object.keys(theme.screens)
  Object.keys(variantsConfig).forEach(key => {
    let allKeys = [key]
    const variants = variantsConfig[key]
    allKeys.forEach(propKey => {
      if (!withSuffix[propKey]) {
        withSuffix[propKey] = {}
      }
      for (variant of variants) {
        if (variant === "responsive") {
          screens.forEach(s => {
            withSuffix[propKey][`${propKey}${capitalize(s)}`] = s
          })
        } else {
          withSuffix[propKey][`${propKey}${capitalize(variant)}`] = variant
        }
      }
    })
  })
  return withSuffix
}

/**
 * This function add the tailwind variant classNames to each defined variant
 * e.g. for sm, write `sm:`, hover hover, write `hover:`
 */
function addVariantsClassPrefix(variants = {}, classNames = {}) {
  Object.keys(variants).forEach(baseKey => {
    if (classNames[baseKey] !== undefined) {
      const variantsForBaseKey = variants[baseKey]
      Object.keys(variantsForBaseKey).forEach(name => {
        const variantFor = variantsForBaseKey[name]
        classNames[name] = `${variantFor}:${classNames[baseKey]}`
      })
    }
  })
  return classNames
}

/**
 * Generate all the variant's template to be used in Typescript.
 * When you add a key to the theme, make sure to handle that case here for
 * proper Typescript support
 */
function generatePossibleValuesTypescriptTemplate(propsWithVariants) {
  let propTypes = {}
  plugins.forEach(plugin => {
    Object.keys(plugin.types).forEach(prop => {
      const type = plugin.types[prop]
      propTypes[prop] = type
      // add add same type to each of it's variants
      if (propsWithVariants[prop]) {
        Object.keys(propsWithVariants[prop]).forEach(prop => {
          propTypes[prop] = type
        })
      }
    })
  })
  let template = "{\n"
  Object.keys(propTypes).forEach(prop => {
    template += `
  ${prop}?: ${propTypes[prop]},`
  })
  return template + "\n}"
}

module.exports = function outputTheme({ config }) {
  const pkgRoot = process.env.PWD || process.cwd()
  let theme = { ...config("theme") }
  plugins.forEach(plugin => {
    let props = plugin.props
    if (typeof props === "function") {
      props = props(theme)
    }
    theme = Object.assign({}, theme, props)
  })
  if (theme.colors) theme.colors = createFlatConfig(theme.colors)
  if (theme.placeholderColor)
    theme.placeholderColor = createFlatConfig(theme.placeholderColor)
  if (theme.backgroundColor)
    theme.backgroundColor = createFlatConfig(theme.backgroundColor)
  if (theme.borderColor) theme.borderColor = createFlatConfig(theme.borderColor)
  if (theme.textColor) theme.textColor = createFlatConfig(theme.textColor)
  // get the classNames
  const classNames = plugins.reduce((classNames, plugin) => {
    if (plugin.classNames) {
      classNames = { ...classNames, ...plugin.classNames }
    }
    return classNames
  }, {})
  let variants = config("variants")
  plugins.forEach(plugin => {
    let pluginVariants = plugin.variants
    if (typeof pluginVariants === "function") {
      pluginVariants = pluginVariants(variants)
    }
    variants = { ...variants, ...(pluginVariants || {}) }
  })
  // Now get the variants for all the props
  // for each props key, we will get props with all of it's variants
  // e.g. for "whiteSpace" which has responsive variants
  //  we will get
  //  {
  //     "whiteSpace": {
  //       "whiteSpaceSm": "sm",
  //       "whiteSpaceMd": "md"
  //     }
  //  }
  const propsWithVariants = addVariantsSuffix(variants, theme)

  // Now we will get the classNames for each prop (along with variants)
  // e.g. {
  //  whiteSpace: "whitespace",
  //  whiteSpaceSm: "sm:whitespace",
  //  whiteSpaceSm: "sm:whitespace"
  // }
  const propsWithClassNames = addVariantsClassPrefix(
    propsWithVariants,
    classNames
  )
  const outputFile = path.join(pkgRoot, "src/theme.ts")
  process.stdout.write(`Exporting theme to src/theme.ts...`)
  ensureDirectoryExistence(outputFile)
  fs.writeFileSync(
    outputFile,
    `// Don't modify this file directly
// It is an autogenerated file in the build process
const theme = ${JSON.stringify(theme, null, 2)} as const

const classNamesForKeys= ${JSON.stringify(propsWithClassNames, null, 2)}

export interface StyleProps ${generatePossibleValuesTypescriptTemplate(
      propsWithVariants
    )}

export default theme

export { classNamesForKeys }
`
  )
  process.stdout.write("Done\n")
}
