module.exports = function addSelectComponentPlugin({ addComponents, theme }) {
  const select = {
    ".select > [role='group']": {
      minWidth: "150px",
    },
    ".select [role='listbox']": {
      top: "100%",
      maxHeight: "200px",
    },
    ".select [role='listbox'] [role='option'] + [role='option']": {
      borderTop: `${theme("borderWidth.default")} solid ${theme(
        "borderColor.gray-300"
      )}`,
    },
    ".select.select-inline.select-not-searchable [role='listbox'] [role='option']": {
      paddingLeft: "2px",
    },
    ".select.select-inline.select-not-searchable [role='listbox'] [role='option'] + [role='option']": {
      borderTop: "none",
    },
    ".select.select-inline.select-not-searchable [role='listbox'] [aria-selected='true']": {
      background: "transparent",
    },
    ".select__loader": {
      position: "absolute",
      right: "10px",
      bottom: ".6rem",
      width: "1rem",
      height: "1rem",
      borderRadius: "50%",
      overflow: "hidden",
      border: "2px solid #a0aec0",
      borderTopColor: "transparent",
      animation: "select-loader-spin 500ms infinite linear",
    },
    "@keyframes select-loader-spin": {
      from: {
        transform: `rotate(0deg)`,
      },
      to: {
        transform: `rotate(360deg)`,
      },
    },
  }
  addComponents(select)
}
