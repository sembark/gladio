module.exports = function addDateTimeComponentPlugin({ addComponents, theme }) {
  const dateTime = {
    ".tpdt": {
      width: "fit-content",
      "&-day, &-month, &-year, &-prev, &-next, &-switch, &-time-toggle, &-btn": {
        borderRadius: theme("borderRadius.default"),
        cursor: "pointer",
        transition: "all linear .15s",
        textAlign: "center",
        padding: "5px 0",
        "&:hover": {
          background: theme("backgroundColor.gray-100"),
        },
      },
      "&-prev, &-next": {
        fontFamily: "auto",
        lineHeight: 1,
        fontSize: "20px",
        userSelect: "none",
      },
      "&-switch, &-time-toggle": {
        paddingLeft: "10px",
        paddingRight: "10px",
        textAlign: "left",
        fontSize: theme("fontSize.lg"),
      },
      "&-time-toggle": {
        borderTop: `${theme("borderWidth.default")} solid ${theme(
          "borderColor.gray-200"
        )}`,
        textAlign: "center",
      },
      "&-dow": {
        padding: `${theme("padding.2")} 0`,
        width: "32px",
        textAlign: "center",
        color: theme("textColor.gray-600"),
        fontSize: theme("fontSize.sm"),
      },
      "&-day, &-month, &-year": {
        fontVariantNumeric: "tabular-nums",
      },
      "&-day": {
        padding: "5px 0",
        textAlign: "center",
        userSelect: "none",
      },
      "&-day&-today": {
        boxShadow: `0 0 0 1px ${theme("textColor.gray-600")} inset`,
      },
      "&-day&-disabled": {
        cursor: "not-allowed",
        opacity: ".6",
        background: theme("backgroundColor.gray-100"),
      },
      "& &-active": {
        color: theme("textColor.white"),
        backgroundColor: theme("backgroundColor.gray-600"),
      },
      "&-month": {
        padding: "15px",
        textAlign: "center",
      },
      "&-year": {
        padding: "15px",
        textAlign: "center",
        fontVariantNumeric: "tabular-nums",
      },
      "&-old, &-new": {
        opacity: 0.6,
      },
      "&-time &-switch": {
        "padding-left": "15px",
        "padding-right": "15px",
      },
      "&-counters": {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        textAlign: "center",
      },
      "&-counter": {
        padding: "5px 10px",
      },
      "&-counter label": {
        fontSize: ".8em",
        display: "block",
        textAlign: "left",
        color: theme("textColor.gray-600"),
        textTransform: "uppercase",
        letterSpacing: "1px",
        marginBottom: "5px",
      },
      "&-counter select": {
        minWidth: "56px",
        background: `${theme(
          "backgroundColor.white"
        )} url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAUCAMAAACzvE1FAAAADFBMVEUzMzMzMzMzMzMzMzMKAG/3AAAAA3RSTlMAf4C/aSLHAAAAPElEQVR42q3NMQ4AIAgEQTn//2cLdRKppSGzBYwzVXvznNWs8C58CiussPJj8h6NwgorrKRdTvuV9v16Afn0AYFOB7aYAAAAAElFTkSuQmCC') no-repeat right 8px center`,
        appearance: "none",
        backgroundSize: "8px 10px",
        paddingRight: theme("padding.5"),
        borderRadius: theme("borderRadius.default"),
        border: `${theme("borderWidth.default")} solid ${theme(
          "borderColor.gray-400"
        )}`,
        padding: `${theme("padding.ie-y")} ${theme("padding.ie-x")}`,
        boxShadow: theme("boxShadow.inner"),
        "&:focus": {
          outline: "none",
          borderColor: theme("borderColor.primary-600"),
          boxShadow: `${theme("boxShadow.inner")}, ${theme(
            "boxShadow.outline"
          )}`,
        },
      },
      "&-picker": {
        position: "relative",
        display: "inline-block",
        "&-toggle": {},
        "&-dropdown": {
          minWidth: "200px",
          position: "absolute",
          top: "100%",
          left: 0,
          zIndex: 1000,
          padding: theme("padding.2"),
          background: theme("backgroundColor.white"),
          borderRadius: theme("borderRadius.lg"),
          boxShadow: theme("boxShadow.default"),
        },
        "&--right &-dropdown": {
          left: "auto",
          right: 0,
        },
      },
    },
  }
  addComponents(dateTime)
}
