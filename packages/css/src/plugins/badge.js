module.exports = function addBadgeComponentPlugin({ addComponents, config }) {
  const badges = {
    ".badge": {
      padding: `${config("theme.padding.1")} ${config("theme.padding.2")}`,
      fontSize: config("theme.fontSize.sm"),
      fontWeight: config("theme.fontWeight.bold"),
      whiteSpace: "nowrap",
      textAlign: "center",
      borderRadius: config("theme.borderRadius.full"),
      display: "inline-block",
    },
    ".badge-primary": {
      backgroundColor: config("theme.backgroundColor.primary.500"),
      color: config("theme.textColor.white"),
    },
  }
  addComponents(badges)
}
