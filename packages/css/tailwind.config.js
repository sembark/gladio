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
