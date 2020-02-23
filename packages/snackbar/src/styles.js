module.exports = function addBadgeComponentPlugin({ addComponents, theme }) {
  const component = {
    ".snackbar": {
      "&-container": {
        position: "fixed",
        bottom: "20px",
        left: "20px",
        minWidth: "280px",
        zIndex: "10000",
      },
      position: "relative",
      display: "inline-flex",
      justifyContent: "space-between",
      alignItems: "center",
      background: "#1a202c",
      borderRadius: "5px",
      padding: "12px 8px",
      boxShadow:
        "0 3px 5px -1px rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12)",
      color: "#e2e8f0",
      minWidth: "280px",
      "@media (max-width: 320px)": {
        minWidth: "unset",
      },
      "&__label": {
        paddingLeft: "8px",
        color: "inherit !important",
      },
      "&__actions": {
        display: "flex",
        justifyContent: "flex-end",
        paddingLeft: "16px",
        marginTop: "-4px",
        marginBottom: "-4px",
        "> button": {
          display: "block",
          background: "transparent",
          border: "none",
          outline: "none !important",
          color: "orangered",
          padding: "5px",
        },
        "&__close": {
          width: "36px",
          height: "36px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#a0aec0 !important",
        },
      },
    },
  }
  addComponents(component)
}
