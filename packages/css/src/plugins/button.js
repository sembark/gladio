module.exports = function addButtonComponentPlugin({ addComponents, config }) {
  const buttons = {
    ".btn": {
      padding: `${config("theme.padding.2")} ${config("theme.padding.4")}`,
      borderRadius: config("theme.borderRadius.default"),
      fontWeight: config("theme.fontWeight.semibold"),
      border: `${config("theme.borderWidth.default")} solid ${config(
        "theme.borderColor.gray.300"
      )}`,
    },
    ".btn-primary": {
      backgroundColor: config("theme.backgroundColor.primary.500"),
      borderColor: config("theme.borderColor.primary.500"),
      color: config("theme.textColor.white"),
      "&:hover": {
        backgroundColor: config("theme.backgroundColor.primary.600"),
      },
    },
  }
  addComponents(buttons)
}
