module.exports = function addInputComponentPlugin({ addComponents, theme }) {
  const select = {
    background: `${theme(
      "backgroundColor.white"
    )} url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAUCAMAAACzvE1FAAAADFBMVEUzMzMzMzMzMzMzMzMKAG/3AAAAA3RSTlMAf4C/aSLHAAAAPElEQVR42q3NMQ4AIAgEQTn//2cLdRKppSGzBYwzVXvznNWs8C58CiussPJj8h6NwgorrKRdTvuV9v16Afn0AYFOB7aYAAAAAElFTkSuQmCC') no-repeat right 8px center`,
    appearance: "none",
    backgroundSize: "8px 10px",
    paddingRight: theme("padding.5"),
  }
  const inputs = {
    ".input": {
      background: theme("backgroundColor.white"),
      padding: `${theme("padding.ie-y")} ${theme("padding.ie-x")}`,
      borderRadius: theme("borderRadius.default"),
      border: `${theme("borderWidth.default")} solid ${theme(
        "borderColor.gray.400"
      )}`,
      display: "block",
      lineHeight: 1.5,
      maxWidth: "100%",
      boxShadow: theme("boxShadow.inner"),
      "&:focus": {
        outline: "none",
        borderColor: theme("borderColor.primary.600"),
        boxShadow: `${theme("boxShadow.inner")}, ${theme("boxShadow.outline")}`,
      },
      "&[type='checkbox'], &[type='radio']": {
        display: "inline-block",
        padding: 0,
      },
      "&[type='radio']": {
        borderRadius: "100%",
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
      "select&": select,
      "&.has-error": {
        borderColor: theme("borderColor.red.700"),
      },
      "&:disabled": {
        background: theme("backgroundColor.gray.100"),
        cursor: "not-allowed",
        opacity: ".8",
      },
      "&[readonly]": {
        cursor: "default",
      },
      "&-group": {
        borderRadius: theme("borderRadius.default"),
        width: "fit-content",
        display: "flex",
        alignItems: "stretch",
        lineHeight: 1.5,
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
          padding: theme("padding.ie-y"),
          border: `${theme("borderWidth.default")} solid ${theme(
            "borderColor.gray.500"
          )}`,
        },
        "&.has-error > *": {
          borderColor: "red",
        },
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
      "&.has-error .input, &.has-error .input-group > *": {
        borderColor: theme("borderColor.red.600"),
      },
      "&.has-error .error-message": {
        display: "block",
        width: "fit-content",
        backgroundColor: theme("backgroundColor.red.100"),
        color: theme("textColor.red.700"),
        marginTop: theme("margin.2"),
        borderRadius: theme("borderRadius.default"),
        fontSize: theme("fontSize.sm"),
        padding: `${theme("padding.1")} ${theme("padding.3")}`,
      },
    },
  }
  addComponents(inputs)
}
