module.exports = function addSelectComponentPlugin({ addComponents, theme }) {
  const borderColor = theme("borderColor.gray.300")
  const select = {
    ".select": {
      display: "block",
    },
    ".select > [role='group']": {
      position: "relative",
      maxWidth: "300px",
      minWidth: "150px",
    },
    ".select [type='search']": {
      width: "100%",
      borderRadius: theme("borderRadius.default"),
      padding: `${theme("padding.2")} ${theme("padding.4")}`,
      border: `${theme("borderWidth.default")} solid ${theme(
        "borderColor.gray.300"
      )}`,
      outline: "none",
    },
    ".select label + [type='search']": {
      marginTop: theme("margin.2"),
    },
    ".select [role='listbox']": {
      position: "absolute",
      top: "100%",
      width: "100%",
      maxWidth: "100%",
      left: 0,
      margin: 0,
      padding: 0,
      zIndex: 2,
      background: "white",
      border: `${theme("borderWidth.default")} solid ${theme(
        "borderColor.gray.300"
      )}`,
      display: "none",
      overflow: "auto",
      maxHeight: "200px",
      borderRadius: "0 0 5px 5px",
    },
    ".select[data-focused='true'] [role='listbox']": {
      display: "block",
    },
    ".select[data-focused='true'] [type='search'] ": {
      borderBottomRightRadius: 0,
      borderBottomLeftRadius: 0,
    },
    ".select [role='listbox'] [role='option']": {
      whiteSpace: "nowrap",
      listStyle: "none",
      display: "block",
      padding: `${theme("padding.2")} ${theme("padding.4")}`,
      outline: "none !important",
    },
    ".select [aria-readonly='true']": {
      color: "silver",
    },
    ".select [role='listbox'] [role='option'] + [role='option']": {
      borderTop: `${theme("borderWidth.default")} solid ${theme(
        "borderColor.gray.300"
      )}`,
    },
    ".select [role='listbox'] [aria-selected='true']": {
      background: theme("backgroundColor.gray.100"),
    },
    ".select [role='listbox'] [aria-selected='true']:before": {
      content: "'\\2713 '",
      marginRight: "5px",
    },
    ".select ul": {
      display: "block",
      listStyle: "none",
      padding: 0,
      margin: 0,
      marginTop: "5px",
    },
    ".select .selected-list li": {
      display: "inline-block",
      margin: "0 5px 5px 0",
      padding: "3px 8px",
      borderRadius: "0.4em",
      fontSize: "0.9em",
      cursor: "pointer",
      background: theme("backgroundColor.gray.300"),
    },
    ".select .selected-list li:before": {
      content: "'\\2713 '",
      marginRight: "5px",
    },
  }
  addComponents(select)
}
