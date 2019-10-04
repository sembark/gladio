module.exports = function addTableComponent({ theme, addComponents }) {
  const borderRadius = theme("borderRadius.lg")
  const table = {
    ".table": {
      borderCollapse: "separate",
      borderRadius,
      marginBottom: theme("margin.6"),
      background: theme("backgroundColor.white"),
      width: "100%",
      "th, td": {
        verticalAlign: "top",
        textAlign: "left",
      },
      th: {
        padding: `${theme("padding.3")} ${theme("padding.4")}`,
      },
      td: {
        padding: `${theme("padding.2")} ${theme("padding.4")}`,
      },
      "thead > tr > th": {
        verticalAlign: "bottom",
        borderBottom: `${theme("borderWidth.2")} solid ${theme(
          "borderColor.gray.100"
        )}`,
        fontWeight: theme("fontWeight.semibold"),
      },
      "tfoot > tr > td": {
        verticalAlign: "top",
        fontWeight: theme("fontWeight.semibold"),
      },
      caption: {
        textAlign: "left",
        padding: `${theme("padding.2")} 0`,
      },
      "&-responsive": {
        display: "block",
        width: "100%",
        overflowX: "auto",
        "-webkit-overflow-scrolling": "touch",
        th: {
          whiteSpace: "pre",
        },
      },
      "&-fixed": {
        width: "100%",
        tableLayout: "fixed",
      },
      "&-w-auto": {
        width: "auto",
      },
      "&-striped tr:nth-child(2n) > td": {
        background: theme("backgroundColor.gray.100"),
      },
      "&-bordered": {
        "th, td": {
          borderBottom: `${theme("borderWidth.default")} solid ${theme(
            "borderColor.gray.400"
          )}`,
        },
        "> * > tr ": {
          "> td:first-child, > th:first-child": {
            borderLeft: `${theme("borderWidth.default")} solid ${theme(
              "borderColor.gray.400"
            )}`,
          },
          "> td:last-child, > th:last-child": {
            borderRight: `${theme("borderWidth.default")} solid ${theme(
              "borderColor.gray.400"
            )}`,
          },
        },
        "> *:first-child > tr:first-child >, > thead > tr:last-child": {
          "td, th": {
            borderTop: `${theme("borderWidth.default")} solid ${theme(
              "borderColor.gray.400"
            )}`,
            "&:first-child": {
              borderTopLeftRadius: borderRadius,
            },
            "&:last-child": {
              borderTopRightRadius: borderRadius,
            },
          },
        },
        "> *:last-child > tr:last-child >": {
          td: {
            "&:first-child": {
              borderBottomLeftRadius: borderRadius,
            },
            "&:last-child": {
              borderBottomRightRadius: borderRadius,
            },
          },
        },
        "> thead > tr:last-child > th": {
          borderBottomColor: theme("borderColor.gray.400"),
        },
      },
    },
  }
  addComponents(table)
}
