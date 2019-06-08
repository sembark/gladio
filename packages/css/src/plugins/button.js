module.exports = function addButtonComponentPlugin({ addComponents, config }) {
  const buttons = {
    ".btn": {
      padding: `${config("theme.padding.ie-y")} ${config(
        "theme.padding.ie-x"
      )}`,
      borderRadius: config("theme.borderRadius.default"),
      fontWeight: config("theme.fontWeight.semibold"),
      border: `${config("theme.borderWidth.default")} solid ${config(
        "theme.borderColor.gray.300"
      )}`,
      lineHeight: 1,
      "&:disabled": {
        opacity: 0.8,
        cursor: "not-allowed",
      },
    },
    ".btn-primary": {
      backgroundColor: config("theme.backgroundColor.primary.500"),
      borderColor: config("theme.borderColor.primary.500"),
      color: config("theme.textColor.white"),
      "&:not(:disabled)": {
        "&:hover": {
          backgroundColor: config("theme.backgroundColor.primary.600"),
        },
      },
    },
  }
  addComponents(buttons)
}
