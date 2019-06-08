module.exports = function addInputComponentPlugin({ addComponents, theme }) {
  const inputs = {
    ".input": {
      background: theme("backgroundColor.white"),
      padding: `${theme("padding.ie-y")} ${theme("padding.ie-x")}`,
      borderRadius: theme("borderRadius.default"),
      border: `${theme("borderWidth.default")} solid ${theme(
        "borderColor.gray.300"
      )}`,
      display: "block",
      lineHeight: 1,
      "&:focus": {
        outline: "none",
        borderColor: theme("borderColor.primary.400"),
      },
      "&[type='checkbox'], &[type='radio']": {
        display: "inline-block",
        border: "none",
        padding: 0,
        "&:focus": {
          boxShadow: `0 ${theme("borderWidth.default")} 0 ${theme(
            "borderWidth.2"
          )} ${theme("borderColor.primary.400")}`,
        },
      },
      "&[type='email'], &[type='text'], &[type='password']": {
        width: "100%",
        maxWidth: theme("maxWidth.sm"),
      },
      "textarea&": {
        lineHeight: "1.5",
        height: "auto",
        minHeight: "100px",
        minWidth: "200px",
        width: "100%",
      },
      "select&": {
        height: `calc(2 * ${theme("padding.ie-y")} + 1rem + 4px)`,
      },
    },
    ".input-group": {
      borderRadius: theme("borderRadius.default"),
      width: "fit-content",
      display: "flex",
      alignItems: "stretch",
      "& > *": {
        borderRadius: 0,
      },
      "& > * + *": {
        marginLeft: `-${theme("borderWidth.default")}`,
      },
      "& > *:focus": {
        zIndex: 2,
      },
      "& > *:first-child": {
        borderTopLeftRadius: theme("borderRadius.default"),
        borderBottomLeftRadius: theme("borderRadius.default"),
      },
      "& > *:last-child": {
        borderTopRightRadius: theme("borderRadius.default"),
        borderBottomRightRadius: theme("borderRadius.default"),
      },
      [`&-addon`]: {
        lineHeight: 1,
        padding: theme("padding.ie-y"),
        border: `${theme("borderWidth.default")} solid ${theme(
          "borderColor.gray.300"
        )}`,
      },
    },
    ".form-group": {
      marginBottom: theme("margin.4"),
      "& > label": {
        fontSize: theme("fontSize.sm"),
      },
      "& > label + .input, & > label + .input-group": {
        marginTop: theme("margin.1"),
      },
      "& > .input + label, & > .input-group + label": {
        marginLeft: theme("margin.2"),
      },
    },
  }
  addComponents(inputs)
}
