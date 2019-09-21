const { colors, spacing } = require("tailwindcss/defaultTheme")

const plugins = require("./src/plugins")

module.exports = {
  theme: {
    extend: {
      spacing: {
        // spacing for interactive elements like buttons, inputs
        "ie-y": spacing[1],
        "ie-x": spacing[3],
      },
    },
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
      primary: colors.indigo,
      secondary: colors.gray,
      accent: colors.pink,
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
