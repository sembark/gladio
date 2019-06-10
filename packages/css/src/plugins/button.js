module.exports = function addButtonComponentPlugin({ addComponents, theme }) {
  const buttons = {
    ".btn": {
      padding: `${theme("padding.ie-y")} ${theme("padding.ie-x")}`,
      borderRadius: theme("borderRadius.default"),
      fontWeight: theme("fontWeight.semibold"),
      border: `${theme("borderWidth.default")} solid ${theme(
        "borderColor.gray.300"
      )}`,
      backgroundColor: theme("backgroundColor.white"),
      lineHeight: 1,
      "&:disabled": {
        opacity: 0.8,
        cursor: "not-allowed",
      },
      "&:not(:disabled)": {
        "&:hover, &:focus": {
          borderColor: theme("borderColor.gray.500"),
        },
      },
      "&:focus": {
        outline: "none",
        boxShadow: theme("boxShadow.outline"),
      },
      "&-primary": {
        backgroundColor: theme("backgroundColor.primary.500"),
        borderColor: theme("borderColor.primary.600"),
        color: theme("textColor.white"),
        "&:not(:disabled)": {
          "&:hover, &:focus": {
            backgroundColor: theme("backgroundColor.primary.600"),
            borderColor: theme("backgroundColor.primary.700"),
          },
        },
      },
      "&-group": {
        display: "inline-block",
      },
      "&-group > &:focus": {
        zIndex: 2,
        position: "relative",
      },
      "&-group &:not(:first-child)": {
        borderTopLeftRadius: 0,
        borderBottomLeftRadius: 0,
      },
      "&-group &:not(:last-child)": {
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0,
      },
    },
  }
  addComponents(buttons)
}
