function getStylesForColor(color, theme) {
  return {
    borderColor: theme(`borderColor.${color}-200`),
    backgroundColor: theme(`backgroundColor.${color}-100`),
    color: theme(`textColor.${color}-800`),
  }
}
module.exports = function addBadgeComponentPlugin({ addComponents, theme }) {
  const badges = {
    ".alert": {
      display: "flex",
      alignItems: "center",
      marginTop: theme("margin.2"),
      marginBottom: theme("margin.4"),
      padding: theme("padding.2"),
      borderWidth: theme("borderWidth.default"),
      borderRadius: theme("borderRadius.lg"),
      ...getStylesForColor("gray", theme),
      "&--error": getStylesForColor("red", theme),
      "&--success": getStylesForColor("green", theme),
      "&--warning": getStylesForColor("yellow", theme),
      "&__icon": {
        marginRight: theme("margin.3"),
        width: theme("width.12"),
        height: theme("height.12"),
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: theme("fontSize.xl"),
      },
      "&__content": {
        flex: 1,
      },
    },
  }
  addComponents(badges)
}
