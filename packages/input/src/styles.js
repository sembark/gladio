module.exports = function addInputComponentPlugin({ addComponents, theme }) {
  const select = {
    background: `${theme(
      "backgroundColor.white"
    )} url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAUCAMAAACzvE1FAAAADFBMVEUzMzMzMzMzMzMzMzMKAG/3AAAAA3RSTlMAf4C/aSLHAAAAPElEQVR42q3NMQ4AIAgEQTn//2cLdRKppSGzBYwzVXvznNWs8C58CiussPJj8h6NwgorrKRdTvuV9v16Afn0AYFOB7aYAAAAAElFTkSuQmCC') no-repeat right 8px center`,
    backgroundSize: "8px 10px",
    appearance: "none",
    paddingRight: theme("padding.5"),
  }
  const inputs = {
    ".input": {
      "textarea&": {
        minHeight: "100px",
        minWidth: "200px",
        width: "100%",
        height: "auto",
        lineHeight: "1.5",
      },
      "select&": select,
      "&.has-error": {
        borderColor: theme("borderColor.red-700"),
      },
      "&:disabled": {
        background: theme("backgroundColor.gray-100"),
        cursor: "not-allowed",
        opacity: ".8",
      },
      "&[readonly]": {
        cursor: "default",
      },
      "&-group": {
        width: "fit-content",
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
        "&.has-error > *": {
          borderColor: "red",
        },
      },
    },
    ".form-group": {
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
        borderColor: theme("borderColor.red-600"),
      },
    },
  }
  addComponents(inputs)
}
