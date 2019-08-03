module.exports = function addTableComponent({ theme, addComponents }) {
  const table = {
    ".table": {
      borderCollapse: "collapse",
      marginBottom: theme("margin.6"),
      background: theme("backgroundColor.white"),
      width: "100%",
      "th, td": {
        verticalAlign: "top",
        padding: theme("padding.3"),
        textAlign: "left",
      },
      "thead > tr > th": {
        verticalAlign: "bottom",
        borderBottom: `${theme("borderWidth.2")} solid ${theme(
          "borderColor.gray.100"
        )}`,
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
        "&, th, td": {
          border: `${theme("borderWidth.default")} solid ${theme(
            "borderColor.gray.400"
          )}`,
        },
        "thead > tr > th": {
          borderBottomColor: theme("borderColor.gray.400"),
        },
      },
    },
  }
  addComponents(table)
}
