module.exports = function addBadgeComponentPlugin({ addComponents, theme }) {
  const badges = {
    ".badge": {
      lineHeight: 1,
      padding: `${theme("padding.1")} ${theme("padding.2")}`,
      fontSize: theme("fontSize.sm"),
      fontWeight: theme("fontWeight.bold"),
      whiteSpace: "nowrap",
      textAlign: "center",
      display: "inline-block",
      verticalAlign: "baseline",
      backgroundColor: theme("backgroundColor.white"),
      border: `${theme("borderWidth.default")} solid ${theme(
        "borderColor.gray.400"
      )}`,
      borderRadius: theme("borderRadius.default"),
      "&-list": {
        display: "inline-block",
      },
      "&-list &": {
        margin: "5px",
      },
      "&-full-rounded, &-list-full-rounded &": {
        borderRadius: theme("borderRadius.full"),
      },
      "&-primary, &-list-primary &": {
        borderColor: theme("borderColor.primary.700"),
        backgroundColor: theme("backgroundColor.primary.600"),
        color: theme("textColor.white"),
      },
    },
  }
  addComponents(badges)
}
