module.exports = function addTypography({ addBase, config }) {
  const headingMargins = {
    marginTop: config("theme.margin.2"),
    marginBottom: config("theme.margin.1"),
  }
  const typography = {
    h1: {
      fontSize: config("theme.fontSize.2xl"),
      ...headingMargins,
    },
    h2: {
      fontSize: config("theme.fontSize.xl"),
      ...headingMargins,
    },
    h3: {
      fontSize: config("theme.fontSize.lg"),
      ...headingMargins,
    },
    h4: {
      fontSize: config("theme.fontSize.base"),
      ...headingMargins,
    },
    p: {
      marginTop: config("theme.margin.0"),
      marginBottom: config("theme.margin.1"),
    },
  }
  addBase(typography)
}
