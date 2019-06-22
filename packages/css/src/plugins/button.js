module.exports = function addButtonComponentPlugin({ addComponents, theme }) {
  function stateStyles(color = "secondary") {
    return {
      "&": {
        border: `${theme("borderWidth.default")} solid ${theme(
          "borderColor." + color + ".500"
        )}`,
        backgroundColor: theme(`backgroundColor.${color}.100`),
        backgroundImage: `linear-gradient(to bottom, ${theme(
          "backgroundColor." + color + ".100"
        )}, ${theme("backgroundColor." + color + ".300")} 90%)`,
        color: theme(`textColor.${color}.900`),
      },
      "&:not(:disabled)": {
        "&:hover, &:focus": {
          backgroundColor: theme(`backgroundColor.${color}.200`),
          backgroundImage: `linear-gradient(to bottom, ${theme(
            "backgroundColor." + color + ".200"
          )}, ${theme("backgroundColor." + color + ".400")} 90%)`,
          borderColor: theme(`borderColor.${color}.600`),
          color: theme(`textColor.${color}.900`),
        },
      },
      "&:disabled": {
        cursor: "default",
        backgroundColor: theme(`backgroundColor.${color}.100`),
        borderColor: theme(`borderColor.${color}.300`),
        backgroundImage: "none",
        color: theme(`textColor.gray.600`),
      },
    }
  }
  const buttons = {
    ".btn": {
      padding: `${theme("padding.ie-y")} ${theme("padding.ie-x")}`,
      borderRadius: theme("borderRadius.default"),
      fontWeight: theme("fontWeight.semibold"),
      lineHeight: 1.5,
      display: "inline-block",
      ...stateStyles(),
      "&-primary": stateStyles("primary"),
      "&-success": stateStyles("green"),
      "&-error": stateStyles("red"),
      "&-warning": stateStyles("yellow"),
      "&-accent": stateStyles("accent"),
      "&:focus": {
        outline: "none",
        boxShadow: theme("boxShadow.outline"),
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
      "&-toolbar": {
        display: "inline-block",
      },
      "&-toolbar > & + &, &-toolbar & + &-group, &-toolbar &-group + &-group, &-toolbar &-group + &, &-toolbar + &-toolbar, & + &-toolbar, &-group + &-toolbar, &-toolbar + &, &-toolbar + &-group": {
        marginLeft: theme("margin.2"),
      },
    },
  }
  addComponents(buttons)
}
