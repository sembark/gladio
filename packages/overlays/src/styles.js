module.exports = function addComponent({ addComponents, theme }) {
  const tooltip = {
    ".tooltip": {
      zIndex: "1070",
      "&__arrow": {
        position: "absolute",
        width: "8px",
        height: "8px",
        zIndex: "-1",
        "&:before": {
          content: '""',
          position: "absolute",
          width: "8px",
          height: "8px",
          zIndex: "-1",
          transform: "rotate(45deg)",
          background: theme("colors.gray-800"),
        },
      },
      "&[data-popper-placement^='bottom'] > &__arrow": {
        top: "-4px",
      },
      "&[data-popper-placement^='top'] > &__arrow": {
        bottom: "-4px",
      },
      "&[data-popper-placement^='left'] > &__arrow": {
        right: "-4px",
      },
      "&[data-popper-placement^='right'] > &__arrow": {
        left: "-4px",
      },
    },
    ".popover": {
      zIndex: "1060",
      "&__arrow": {
        position: "absolute",
        width: "8px",
        height: "8px",
        zIndex: "-1",
        "&:before": {
          content: '""',
          position: "absolute",
          width: "8px",
          height: "8px",
          zIndex: "-1",
          transform: "rotate(45deg)",
          background: theme("colors.gray-200"),
        },
      },
      "&[data-popper-placement^='bottom'] > &__arrow": {
        top: "-4px",
      },
      "&[data-popper-placement^='top'] > &__arrow": {
        bottom: "-4px",
      },
      "&[data-popper-placement^='left'] > &__arrow": {
        right: "-4px",
      },
      "&[data-popper-placement^='right'] > &__arrow": {
        left: "-4px",
      },
    },
  }
  addComponents(tooltip)
}
