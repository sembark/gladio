module.exports = function addButtonComponentPlugin({ addComponents, theme }) {
  function stateStyles(color = "secondary") {
    return {
      "&": {
        border: `${theme("borderWidth.default")} solid ${theme(
          "borderColor." + color + ".400"
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
            "backgroundColor." + color + ".100"
          )}, ${theme("backgroundColor." + color + ".400")} 90%)`,
          borderColor: theme(`borderColor.${color}.500`),
          color: theme(`textColor.${color}.900`),
        },
      },
      "&:disabled": {
        backgroundColor: theme(`backgroundColor.${color}.100`),
        borderColor: theme(`borderColor.${color}.300`),
        color: theme(`textColor.gray.600`),
        cursor: "default",
        // Repeat `background-position` because `:hover`
        backgroundPosition: "0 0",
        backgroundImage: "none",
      },
    }
  }
  const buttons = {
    ".btn": {
      appearance: "none",
      backgroundPosition: "-1px -1px",
      backgroundRepeat: "repeat-x",
      backgroundSize: "110% 110%",
      borderRadius: theme("borderRadius.default"),
      cursor: "pointer",
      display: "inline-block",
      fontWeight: theme("fontWeight.semibold"),
      lineHeight: 1.5,
      padding: `${theme("padding.ie-y")} ${theme("padding.ie-x")}`,
      position: "relative",
      userSelect: "none",
      verticalAlign: "middle",
      whiteSpace: "nowrap",
      ...stateStyles(),
      "&-primary": stateStyles("primary"),
      "&-success": stateStyles("green"),
      "&-error": stateStyles("red"),
      "&-warning": stateStyles("yellow"),
      "&-accent": stateStyles("accent"),
      "&:hover": {
        textDecoration: "none",
        backgroundRepeat: "repeat-x",
      },
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
