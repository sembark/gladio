const { colors } = require("tailwindcss/defaultTheme")

const plugins = require("./src/plugins")

module.exports = {
  theme: {
    extend: {},
    colors: {
      transparent: colors.transparent,
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      red: colors.red,
      pink: colors.pink,
      yellow: colors.yellow,
      green: colors.green,
      blue: colors.blue,
      indigo: colors.indigo,
      primary: colors.indigo,
      secondary: colors.gray,
      accent: colors.pink,
    },
  },
  variants: {},
  plugins: [...plugins],
}
