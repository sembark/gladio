module.exports = function addTypography({ addBase, config }) {
  const headingCommonStyles = {
    fontWeight: config("theme.fontWeight.semibold"),
    marginTop: config("theme.margin.2"),
    marginBottom: config("theme.margin.1"),
  }
  const typography = {
    h1: {
      fontSize: config("theme.fontSize.2xl"),
      ...headingCommonStyles,
    },
    h2: {
      fontSize: config("theme.fontSize.xl"),
      ...headingCommonStyles,
    },
    h3: {
      fontSize: config("theme.fontSize.lg"),
      ...headingCommonStyles,
    },
    h4: {
      fontSize: config("theme.fontSize.base"),
      ...headingCommonStyles,
    },
    p: {
      marginTop: config("theme.margin.0"),
      marginBottom: config("theme.margin.1"),
    },
  }
  addBase(typography)
}
