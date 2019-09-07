module.exports = function addDialog({ addComponents, theme }) {
  const base = ".dialog"
  const screens = theme("screens")
  const padding = theme("padding.4")
  const borderRadius = theme("borderRadius.lg")
  const dividerBorder = `${theme("borderWidth.default")} solid ${theme(
    "borderColor.gray.200"
  )}`
  const backgroundWhite = theme("backgroundColor.white")
  const backgroundGray = theme("backgroundColor.gray.100")
  const dialog = {
    [base]: {
      position: "fixed",
      zIndex: "1050",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      background: "rgba(0, 0, 0, 0.5)",
      overflow: "hidden",
      padding: 0,
      border: "none",
    },
    [`${base}-is-open`]: {
      overflow: "hidden",
      [`& ${base}`]: {
        overflowX: "hidden",
        overflowY: "auto",
      },
    },
    [`${base}-document`]: {
      position: "relative",
      width: "auto",
      margin: "0.5rem",
      background: backgroundWhite,
      borderRadius: borderRadius,
    },
    [`@media (min-width: ${screens.md})`]: {
      [`${base}-document`]: {
        maxWidth: screens.md,
        margin: "1.75rem auto",
      },
    },
    [`${base}-header`]: {
      borderBottom: dividerBorder,
      padding,
      background: backgroundGray,
      borderRadius: `${borderRadius} ${borderRadius} 0 0`,
    },
    [`${base}-title`]: {
      margin: 0,
      fontSize: "1.5rem",
    },
    [`${base}-body`]: {
      background: backgroundWhite,
      borderRadius: borderRadius,
      padding,
      [`& ${base}-footer`]: {
        margin: `0 -${padding} -${padding}`,
      },
    },
    [`${base}-footer`]: {
      padding,
      borderTop: dividerBorder,
      background: backgroundGray,
      borderRadius: `0 0 ${borderRadius} ${borderRadius}`,
      "> .btn + .btn": {
        marginLeft: theme("margin.2"),
      },
    },
    [`${base}-close-btn`]: {
      position: "absolute",
      right: "15px",
      top: "10px",
      border: "none",
      zIndex: 2,
      fontSize: "2em",
      padding: 0,
      width: "1em",
      height: "1em",
      lineHeight: 1,
      textAlign: "center",
      borderRadius: "50%",
      transition: "opacity 0.15s linear",
      color: "black",
      opacity: 0.5,
      outline: "none !important",
      "&:hover": {
        opacity: 1,
      },
    },
  }
  addComponents(dialog)
}
