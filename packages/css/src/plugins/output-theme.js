const fs = require("fs")
const path = require("path")

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
 * Get the class names for config keys
 * @param {string} to
 */
function getClassNames(theme) {
  const keys = Object.keys(theme)
  const classNames = {}
  keys.forEach(to => {
    let prefix = ""
    switch (to) {
      case "margin":
      case "padding":
        prefix = to.charAt(0)
        classNames[to] = prefix
        classNames[`${to}Top`] = `${prefix}t`
        classNames[`${to}Right`] = `${prefix}r`
        classNames[`${to}Bottom`] = `${prefix}b`
        classNames[`${to}Left`] = `${prefix}l`
        classNames[`${to}X`] = `${prefix}x`
        classNames[`${to}Y`] = `${prefix}y`
        break
      case "borderWidth":
        prefix = "border"
        classNames["border"] = prefix
        classNames[`borderTop`] = `${prefix}-t`
        classNames[`borderRight`] = `${prefix}-r`
        classNames[`borderBottom`] = `${prefix}-b`
        classNames[`borderLeft`] = `${prefix}-l`
        break
      case "borderColor":
      case "borderStyle":
        classNames[to] = "border"
        break
      case "borderRadius":
        prefix = "rounded"
        classNames["rounded"] = prefix
        classNames[`roundedTop`] = `${prefix}-t`
        classNames[`roundedRight`] = `${prefix}-t`
        classNames[`roundedBottom`] = `${prefix}-b`
        classNames[`roundedLeft`] = `${prefix}-l`
        classNames[`roundedTopRight`] = `${prefix}-tr`
        classNames[`roundedBottomRight`] = `${prefix}-br`
        classNames[`roundedBottomLeft`] = `${prefix}-bl`
        classNames[`roundedTopLeft`] = `${prefix}-tl`
        break
      case "boxShadow":
        classNames[to] = "shadow"
        break
      case "maxHeight":
        classNames[to] = "max-h"
        break
      case "maxWidth":
        classNames[to] = "max-w"
        break
      case "alignItems":
        classNames[to] = "items"
        break
      case "justifyContent":
        classNames[to] = "justify"
        break
      case "backgroundColor":
      case "backgroundPosition":
      case "backgroundSize":
        classNames[to] = "bg"
        break
      case "display":
      case "position":
      case "textDecoration":
      case "textTransform":
        classNames[to] = ""
        break
      case "verticalAlign":
        classNames[to] = "align"
        break
      case "zIndex":
        classNames[to] = "z"
        break
      case "width":
        classNames[to] = "w"
        break
      case "height":
        classNames[to] = "h"
        break
      case "textColor":
        classNames[to] = "text"
        break
      case "placeholderColor":
        classNames[to] = "placeholder"
        break
      case "minWidth":
        classNames[to] = "min-w"
        break
      case "maxHeight":
        classNames[to] = "min-h"
        break
      case "listStyleType":
        classNames[to] = "list"
        break
      case "lineHeight":
        classNames[to] = "leading"
        break
      case "letterSpacing":
        classNames[to] = "tracking"
        break
      case "fontSize":
        classNames[to] = "text"
        break
      case "fontWeight":
      case "fontFamily":
        classNames[to] = "font"
        break
      case "flexGrow":
        classNames[to] = "flex-grow"
        break
      case "flexShrink":
        classNames[to] = "flex-shrink"
        break
      case "objectPosition":
        classNames[to] = "object"
        break
      case "textAlign":
        classNames[to] = "text"
        break
      case "cursor":
      case "fill":
      case "flex":
      case "height":
      case "width":
      case "inset":
      case "opacity":
      case "order":
      case "scrolling":
      case "overflow":
      case "stroke":
      case "outline":
        classNames[to] = to
        break
    }
  })
  return classNames
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

function addVariantsSuffix(variantsConfig = {}, theme = {}) {
  const withSuffix = {}
  const screens = Object.keys(theme.screens)
  Object.keys(variantsConfig).forEach(key => {
    const variants = variantsConfig[key]
    function addSuffixTo(to) {
      if (!withSuffix[to]) {
        withSuffix[to] = {}
      }
      for (variant of variants) {
        if (variant === "responsive") {
          screens.forEach(s => {
            withSuffix[to][`${to}${capitalize(s)}`] = s
          })
        } else {
          withSuffix[to][`${to}${capitalize(variant)}`] = variant
        }
      }
    }
    // add the other padding suffix e.g. bottom, left, X, Y etc
    switch (key) {
      case "margin":
        ;[
          "margin",
          "marginBottom",
          "marginTop",
          "marginLeft",
          "marginRight",
          "marginX",
          "marginY",
        ].forEach(addSuffixTo)
        break
      case "padding":
        ;[
          "padding",
          "paddingBottom",
          "paddingTop",
          "paddingLeft",
          "paddingRight",
          "paddingX",
          "paddingY",
        ].forEach(addSuffixTo)
        break
      case "borderWidth":
      case "border":
        ;[
          "border",
          "borderTop",
          "borderRight",
          "borderBottom",
          "borderLeft",
        ].forEach(addSuffixTo)
        break
      case "borderRadius":
        ;[
          "rounded",
          "roundedTop",
          "roundedTopRight",
          "roundedTopLeft",
          "roundedRight",
          "roundedLeft",
          "roundedBottom",
          "roundedBottomRight",
          "roundedBottomLeft",
        ].forEach(addSuffixTo)
        break
      default:
        addSuffixTo(key)
    }
  })
  return withSuffix
}

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

function generatePossibleValuesTemplate(theme, allAvailableVariants) {
  let template = "{"
  Object.keys(allAvailableVariants).forEach(key => {
    let value = ""
    switch (true) {
      case /^width/.test(key):
        value = theme.width ? `theme.width` : ""
        break
      case /^maxWidth/.test(key):
        value = theme.maxWidth ? `theme.maxWidth` : ""
        break
      case /^minWidth/.test(key):
        value = theme.minWidth ? `theme.minWidth` : ""
        break
      case /^height/.test(key):
        value = theme.height ? `theme.height` : ""
        break
      case /^maxHeight/.test(key):
        value = theme.maxHeight ? `theme.maxHeight` : ""
        break
      case /^minHeight/.test(key):
        value = theme.minHeight ? `theme.minHeight` : ""
        break
      case /^display/.test(key):
        value = theme.display ? `theme.display` : ""
        break
      case /^justifyContent/.test(key):
        value = theme.justifyContent ? `theme.justifyContent` : ""
        break
      case /^alignItems/.test(key):
        value = theme.alignItems ? `theme.alignItems` : ""
        break
      case /^opacity/.test(key):
        value = theme.opacity ? `theme.opacity` : ""
        break
      case /^objectPosition/.test(key):
        value = theme.objectPosition ? `theme.objectPosition` : ""
        break
      case /^order/.test(key):
        value = theme.order ? `theme.order` : ""
        break
      case /^padding/.test(key):
        value = theme.padding ? `theme.padding` : ""
        break
      case /^placeholderColor/.test(key):
        value = theme.placeholderColor ? `theme.placeholderColor` : ""
        break
      case /^stroke/.test(key):
        value = theme.stroke ? `theme.stroke` : ""
        break
      case /^textColor/.test(key):
        value = theme.textColor ? `theme.textColor` : ""
        break
      case /^verticalAlign/.test(key):
        value = theme.verticalAlign ? `theme.verticalAlign` : ""
        break
      case /^margin/.test(key):
        value = theme.margin ? `theme.margin` : ""
        break
      case /^letterSpacing/.test(key):
        value = theme.letterSpacing ? `theme.letterSpacing` : ""
        break
      case /^lineHeight/.test(key):
        value = theme.lineHeight ? `theme.lineHeight` : ""
        break
      case /^listStyleType/.test(key):
        value = theme.listStyleType ? `theme.listStyleType` : ""
        break
      case /^inset/.test(key):
        value = theme.inset ? `theme.inset` : ""
        break
      case /^fontFamily/.test(key):
        value = theme.fontFamily ? `theme.fontFamily` : ""
        break
      case /^fontWeight/.test(key):
        value = theme.fontWeight ? `theme.fontWeight` : ""
        break
      case /^fontSize/.test(key):
        value = theme.fontSize ? `theme.fontSize` : ""
        break
      case /^flexShrink/.test(key):
        value = theme.flexShrink ? `theme.flexShrink` : ""
        break
      case /^rounded/.test(key):
        value = theme.borderRadius ? `theme.borderRadius | true` : ""
        break
      case /^backgroundColor/.test(key):
        value = theme.backgroundColor ? `theme.backgroundColor` : ""
        break
      case /^backgroundSize/.test(key):
        value = theme.backgroundSize ? `theme.backgroundSize` : ""
        break
      case /^backgroundPosition/.test(key):
        value = theme.backgroundPosition ? `theme.backgroundPosition` : ""
        break
      case /^borderColor/.test(key):
        value = theme.borderColor ? `theme.borderColor` : ""
        break
      case /^boxShadow/.test(key):
        value = theme.boxShadow ? `theme.boxShadow | true` : ""
        break
      case /^cursor/.test(key):
        value = theme.cursor ? `theme.cursor` : ""
        break
      case /^fill/.test(key):
        value = theme.fill ? `theme.fill` : ""
        break
      case /^flexGrow/.test(key):
        value = theme.flexGrow ? `theme.flexGrow` : ""
        break
      case /^flex/.test(key):
        value = theme.flex ? `theme.flex` : ""
        break
      case /^zIndex/.test(key):
        value = theme.zIndex ? `theme.zIndex` : ""
        break
      case /^container/.test(key):
        value = theme.container ? `theme.container` : ""
        break
      case /^borderWidth/.test(key):
        value = theme.borderWidth ? `theme.borderWidth | true` : ""
        break
      case /^border/.test(key):
        value = theme.borderWidth ? `theme.borderWidth | true` : ""
        break
      case /^textAlign/.test(key):
        value = theme.textAlign ? `theme.textAlign` : ""
        break
      case /^textDecoration/.test(key):
        value = theme.textDecoration ? `theme.textDecoration` : ""
        break
      case /^textTransform/.test(key):
        value = theme.textTransform ? `theme.textTransform` : ""
        break
      case /^outline/.test(key):
        value = theme.outline ? `theme.outline` : ""
        break
      default:
        value = theme[key] ? `theme.${key}` : ""
    }
    if (value) {
      template += `
  ${key}?: keyof typeof ${value},`
    }
  })
  template += "}"
  return template
}

function addMissingAttributesToTheme(theme) {
  theme.display = {
    inline: "inline",
    "inline-block": "inline-block",
    block: "block",
    hidden: "hidden",
    flex: "flex",
    "inline-flex": "inline-flex",
    table: "table",
    "table-row": "table-row",
    "table-cell": "table-cell",
  }
  theme.justifyContent = {
    start: "start",
    center: "center",
    end: "end",
    between: "between",
    around: "around",
  }
  theme.alignItems = {
    stretch: "stretch",
    start: "start",
    center: "center",
    end: "end",
    baseline: "baseline",
  }
  theme.verticalAlign = {
    baseline: "baseline",
    top: "top",
    middle: "middle",
    bottom: "bottom",
    "text-top": "text-top",
    "text-bottom": "text-bottom",
  }
  theme.position = {
    static: "static",
    fixed: "fixed",
    absolute: "absolute",
    relative: "relative",
    sticky: "sticky",
  }
  theme.overflow = {
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
  }
  theme.scrolling = {
    touch: "touch",
    auto: "auto",
  }
  theme.objectPosition = {
    bottom: "bottom",
    center: "center",
    left: "left",
    "left-bottom": "left-bottom",
    "left-top": "left-top",
    right: "right",
    "right-bottom": "right-bottom",
    "right-top": "right-top",
    top: "top",
  }
  theme.textAlign = {
    center: "center",
    left: "left",
    right: "right",
    justify: "justify",
  }
  theme.textAlign = {
    center: "center",
    left: "left",
    right: "right",
    justify: "justify",
  }
  theme.textDecoration = {
    underline: "underline",
    "line-through": "line-through",
    "no-underline": "no-underline",
  }
  theme.textTransform = {
    uppercase: "uppercase",
    lowercase: "lowercase",
    capitalize: "capitalize",
    "normal-case": "normal-case",
  }
  theme.outline = {
    none: "none",
  }
  return theme
}

function addMissingVariants(variants = {}) {
  variants.display = ["responsive"]
  variants.overflow = ["responsive"]
  variants.textAlign = ["responsive"]
  variants.textDecoration = ["responsive", "hover", "focus"]
  variants.textTransform = ["responsive", "hover", "focus"]
  variants.outline = ["focus"]
  return variants
}

module.exports = function outputTheme({ config }) {
  const pkgRoot = process.env.PWD || process.cwd()
  const theme = addMissingAttributesToTheme({ ...config("theme") })
  if (theme.colors) theme.colors = createFlatConfig(theme.colors)
  if (theme.placeholderColor)
    theme.placeholderColor = createFlatConfig(theme.placeholderColor)
  if (theme.backgroundColor)
    theme.backgroundColor = createFlatConfig(theme.backgroundColor)
  if (theme.borderColor) theme.borderColor = createFlatConfig(theme.borderColor)
  if (theme.textColor) theme.textColor = createFlatConfig(theme.textColor)
  const classNames = getClassNames(theme)
  const variants = addVariantsSuffix(
    addMissingVariants(config("variants")),
    theme
  )
  const allAvailableVariants = addVariantsClassPrefix(variants, classNames)
  const outputFile = path.join(pkgRoot, "src/theme.ts")
  process.stdout.write(`Exporting theme to src/theme.ts...`)
  ensureDirectoryExistence(outputFile)
  fs.writeFileSync(
    outputFile,
    `// Don't modify this file directly
// It is an autogenerated file in the build process
const theme = ${JSON.stringify(theme, null, 2)}
const classNamesForKeys= ${JSON.stringify(allAvailableVariants, null, 2)}
export default theme
export interface StyleProps ${generatePossibleValuesTemplate(
      theme,
      allAvailableVariants
    )}
export { classNamesForKeys }
`
  )
  process.stdout.write("Done\n")
}
