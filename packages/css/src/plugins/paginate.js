module.exports = function addPaginateStyles({ addComponents, theme }) {
  const paginate = {
    ".paginate": {
      display: "inline-flex",
      alignItems: "center",
      whiteSpace: "pre",
      "> mark": {
        background: "transparent",
        padding: 0,
        display: "inline-block",
        marginRight: theme("margin.4"),
      },
      "> ul": {
        "> li": {
          display: "inline-block",
          "> .btn:focus": {
            position: "relative",
            zIndex: 2,
          },
          "&:not(:first-child)": {
            "> .btn": {
              borderTopLeftRadius: 0,
              borderBottomLeftRadius: 0,
            },
          },
          "&:not(:last-child)": {
            "> .btn": {
              borderTopRightRadius: 0,
              borderBottomRightRadius: 0,
            },
          },
        },
      },
    },
  }

  addComponents(paginate)
}
