module.exports = function addTypography({ addBase, theme }) {
  const typography = {
    h1: {
      fontSize: theme("fontSize.2xl"),
    },
    h2: {
      fontSize: theme("fontSize.xl"),
    },
    h3: {
      fontSize: theme("fontSize.lg"),
    },
    h4: {
      fontSize: theme("fontSize.base"),
    },
    "h1, h2, h3, h4, h5, h6": {
      fontWeight: 400,
    },
    a: {
      color: theme("textColor.blue.700"),
      "&:hover": {
        color: theme("textColor.blue.600"),
      },
    },
  }
  addBase(typography)
}
