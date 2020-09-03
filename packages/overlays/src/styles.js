module.exports = function addComponent({ addComponents, theme }) {
  const tooltip = {
    ".tooltip": {
      zIndex: "1070",
      "&__arrow": {
        "&:before": {
          background: theme("colors.gray-800"),
        },
      },
    },
    ".popover": {
      zIndex: "1060",
      "&__arrow": {
        "&:before": {
          background: theme("colors.gray-100"),
        },
      },
    },
    ".tooltip, .popover": {
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
        },
      },
      "&[data-popper-placement^='bottom']": {
        paddingTop: "4px",
      },
      "&[data-popper-placement^='top']": {
        paddingBottom: "4px",
      },
      "&[data-popper-placement^='left']": {
        paddingRight: "4px",
      },
      "&[data-popper-placement^='right']": {
        paddingLeft: "4px",
      },
      "&[data-popper-placement^='bottom'] > &__arrow": {
        top: "0",
      },
      "&[data-popper-placement^='top'] > &__arrow": {
        bottom: "0",
      },
      "&[data-popper-placement^='left'] > &__arrow": {
        right: "0",
      },
      "&[data-popper-placement^='right']>  &__arrow": {
        left: "0",
      },
    },
  }
  addComponents(tooltip)
}
