const { colors, spacing } = require("tailwindcss/defaultTheme")

const plugins = require("./src/plugins")

module.exports = {
  theme: {
    extend: {
      spacing: {
        // spacing for interactive elements like buttons, inputs
        "ie-y": "0.356rem",
        "ie-x": "1.14rem",
        "ie-y-sm": "0.2rem",
        "ie-x-sm": "0.86rem",
      },
    },
    colors: {
      transparent: colors.transparent,
      black: colors.black,
      white: colors.white,
      gray: {
        100: colors.gray["100"],
        200: colors.gray["200"],
        300: colors.gray["300"],
        400: colors.gray["400"],
        500: colors.gray["500"],
        600: colors.gray["600"],
        800: colors.gray["800"],
      },
      red: {
        100: colors.red["100"],
        200: colors.red["200"],
        300: colors.red["300"],
        600: colors.red["600"],
        800: colors.red["800"],
      },
      yellow: {
        100: colors.yellow["100"],
        200: colors.yellow["200"],
        300: colors.yellow["300"],
        600: colors.yellow["600"],
        800: colors.yellow["800"],
      },
      green: {
        100: colors.green["100"],
        200: colors.green["200"],
        300: colors.green["300"],
        600: colors.green["600"],
        800: colors.green["800"],
      },
      primary: {
        100: colors.indigo["100"],
        300: colors.indigo["300"],
        400: colors.indigo["400"],
        500: colors.indigo["500"],
        600: colors.indigo["600"],
        700: colors.indigo["700"],
        800: colors.indigo["800"],
      },
      accent: {
        200: colors.pink["200"],
        300: colors.pink["300"],
        600: colors.pink["600"],
        800: colors.pink["800"],
      },
    },
    screens: {
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
    },
  },
  variants: {},
  plugins: [...plugins],
}
