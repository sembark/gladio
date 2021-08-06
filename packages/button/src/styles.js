module.exports = function addButtonComponentPlugin({ addComponents, theme }) {
  function themeStyles(label, color) {
    return {
      [`&-secondary.${label}, &.${label}`]: {
        backgroundColor: theme(`backgroundColor.transparent`),
        borderColor: theme(`borderColor.${color}-300`),
        color: theme(`textColor.${color}-600`),
        "&:hover": {
          backgroundColor: theme(`backgroundColor.transparent`),
          borderColor: theme(`borderColor.${color}-300`),
          color: theme(`textColor.${color}-800`),
        },
      },
      [`&-tertiary.${label}`]: {
        backgroundColor: theme(`backgroundColor.transparent`),
        borderColor: theme(`borderColor.transparent`),
        color: theme(`textColor.${color}-600`),
        "&:hover": {
          backgroundColor: theme(`backgroundColor.transparent`),
          borderColor: theme(`borderColor.transparent`),
          color: theme(`textColor.${color}-800`),
        },
      },
      [`&-primary.${label}`]: {
        backgroundColor: theme(`backgroundColor.${color}-800`),
        borderColor: theme(`borderColor.${color}-600`),
        color: theme(`textColor.white`),
        "&:hover": {
          backgroundColor: theme(`backgroundColor.${color}-800`),
          borderColor: theme(`borderColor.${color}-800`),
          color: theme(`textColor.white`),
        },
      },
    }
  }
  const buttons = {
    ".btn": {
      appearance: "none",
      backgroundPosition: "-1px -1px",
      backgroundRepeat: "repeat-x",
      backgroundSize: "110% 110%",
      borderRadius: theme("borderRadius.lg"),
      cursor: "pointer",
      display: "inline-block",
      fontWeight: theme("fontWeight.semibold"),
      lineHeight: 1.5,
      padding: `${theme("padding.ie-y")} ${theme("padding.ie-x")}`,
      position: "relative",
      userSelect: "none",
      verticalAlign: "middle",
      whiteSpace: "nowrap",
      border: `${theme("borderWidth.default")} solid ${theme(
        "borderColor.gray-400"
      )}`,
      willChange: "background, border-color, color",
      transition: "all .15s ease-in-out",
      "&-sm": {
        padding: `${theme("padding.ie-y-sm")} ${theme("padding.ie-x-sm")}`,
        fontSize: `${theme("fontSize.sm")}`,
      },
      "&:hover": {
        textDecoration: "none",
      },
      "&[type='submit']": {
        ...themeStyles("branded", "primary")["&-primary.branded"],
      },
      "&, &&-secondary": {
        backgroundColor: theme(`backgroundColor.transparent`),
        borderColor: theme(`borderColor.gray-400`),
        color: theme(`backgroundColor.gray-800`),
        "&:hover": {
          backgroundColor: theme(`backgroundColor.transparent`),
          borderColor: theme(`borderColor.gray-500`),
          color: theme(`backgroundColor.gray-800`),
        },
      },
      "&&-primary": {
        backgroundColor: theme(`backgroundColor.gray-100`),
        borderColor: theme(`borderColor.gray-200`),
        color: theme(`backgroundColor.gray-600`),
        "&:hover": {
          backgroundColor: theme(`backgroundColor.gray-200`),
          borderColor: theme(`borderColor.gray-300`),
          color: theme(`backgroundColor.gray-800`),
        },
      },
      "&&-tertiary": {
        backgroundColor: theme(`backgroundColor.transparent`),
        borderColor: theme(`borderColor.transparent`),
        color: theme(`backgroundColor.gray-600`),
        "&:hover": {
          backgroundColor: theme(`backgroundColor.transparent`),
          borderColor: theme(`borderColor.transparent`),
          color: theme(`backgroundColor.gray-800`),
        },
      },
      "&-secondary.light, &.light": {
        backgroundColor: theme(`backgroundColor.transparent`),
        borderColor: theme(`borderColor.white`),
        color: theme(`textColor.white`),
        "&:hover": {
          backgroundColor: theme(`backgroundColor.gray-100`),
          borderColor: theme(`borderColor.gray-100`),
          color: theme(`textColor.gray-800`),
        },
      },
      "&-tertiary.light": {
        backgroundColor: theme(`backgroundColor.transparent`),
        borderColor: theme(`borderColor.transparent`),
        color: theme(`textColor.white`),
        "&:hover": {
          backgroundColor: theme(`backgroundColor.transparent`),
          borderColor: theme(`borderColor.transparent`),
          color: theme(`textColor.white`),
        },
      },
      "&-primary.light": {
        backgroundColor: theme(`backgroundColor.white`),
        borderColor: theme(`borderColor.white`),
        color: theme(`textColor.gray-700`),
        "&:hover": {
          backgroundColor: theme(`backgroundColor.white`),
          borderColor: theme(`borderColor.white`),
          color: theme(`textColor.gray-900`),
        },
      },
      ...themeStyles("branded", "primary"),
      ...themeStyles("success", "green"),
      ...themeStyles("danger", "red"),
      ...themeStyles("warning", "yellow"),
      ...themeStyles("accent", "accent"),
      "&.full-width": {
        display: "block",
        width: "100%",
      },
      "&:disabled": {
        opacity: 0.8,
        cursor: "default",
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
      "&-toolbar > & + &, &-toolbar & + &-group, &-toolbar &-group + &-group, &-toolbar &-group + &, &-toolbar + &-toolbar, & + &-toolbar, &-group + &-toolbar, &-toolbar + &, &-toolbar + &-group":
        {
          marginLeft: theme("margin.2"),
        },
    },
  }
  addComponents(buttons)
}
