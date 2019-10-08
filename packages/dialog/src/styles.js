module.exports = function addDialog({ addComponents, theme }) {
  const base = ".dialog"
  const screens = theme("screens")
  const padding = `${theme("padding.4")} ${theme("padding.6")}`
  const borderRadius = theme("borderRadius.default")
  const dividerBorder = `${theme("borderWidth.default")} solid ${theme(
    "borderColor.gray.200"
  )}`
  const backgroundWhite = theme("backgroundColor.white")
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
    [`${base}-fit-container ${base}-document`]: {
      width: "100%",
      maxWidth: "100%",
      minHeight: "100%",
      margin: 0,
      borderRadius: 0,
    },
    [`${base}-header`]: {
      borderBottom: dividerBorder,
      padding,
      borderRadius: `${borderRadius} ${borderRadius} 0 0`,
      "&.has-close-btn": {
        paddingRight: "50px",
      },
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
      borderRadius: `0 0 ${borderRadius} ${borderRadius}`,
      "> .btn + .btn": {
        marginLeft: theme("margin.2"),
      },
    },
    [`${base}-close-btn`]: {
      position: "absolute",
      right: "15px",
      top: "15px",
      border: "none",
      zIndex: 2,
      fontSize: "2em",
      padding: 0,
      width: "1em",
      height: "1em",
      lineHeight: "16px",
      textAlign: "center",
      borderRadius: theme("borderRadius.default"),
      border: `${theme("borderWidth.default")} solid transparent`,
      transition: "opacity 0.15s linear",
      color: "black",
      opacity: 0.5,
      outline: "none !important",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      "&:hover, &:focus, &:active": {
        borderColor: theme("borderColor.default"),
        opacity: 1,
      },
    },
    [`${base}-fit-container ${base}-close-btn`]: {
      right: "auto",
      left: "15px",
      top: "15px",
      border: "none",
      borderRadius: 0,
      borderRight: `${theme("borderWidth.default")} solid ${theme(
        "borderColor.default"
      )}`,
      paddingRight: "5px",
    },
    [`${base}-fit-container ${base}-header`]: {
      "&.has-close-btn": {
        padding,
        paddingLeft: "60px",
      },
    },
    [`${base}-back-icon`]: {
      position: "relative",
      display: "inline-block",
      width: "16px",
      height: "16px",
      transition: "transform ease-in .15s",
      transform: "translateX(0)",
      "&:before": {
        content: '""',
        display: "inline-block",
        width: "100%",
        height: "100%",
        position: "absolute",
        left: 0,
        top: 0,
        border: "2px solid black",
        transform: "rotate(45deg)",
        transformOrigin: "center center",
        borderRadius: "2px",
        borderTop: "none",
        borderRight: "none",
      },
      "&:after": {
        content: '""',
        display: "inline-block",
        width: "120%",
        height: "2px",
        position: "absolute",
        left: "-2px",
        top: "calc(50% - 1px)",
        background: "black",
        borderRadius: "2px",
      },
    },
    [`${base}-close-btn:hover ${base}-back-icon, ${base}-back-icon:hover`]: {
      transform: "translateX(-2px)",
    },
    [`${base}-close-icon`]: {
      position: "relative",
      display: "inline-block",
      width: "16px",
      height: "16px",
      transition: "transform .25s ease-in-out",
      "&:before, &:after": {
        content: '""',
        display: "inline-block",
        position: "absolute",
        width: "100%",
        height: "2px",
        left: 0,
        top: "50%",
        background: "black",
        transformOrigin: "center center",
      },
      "&:before": {
        transform: "rotate(45deg)",
      },
      "&:after": {
        transform: "rotate(-45deg)",
      },
    },
    [`${base}-close-btn:hover ${base}-close-icon, ${base}-close-icon:hover`]: {
      transform: "rotate(90deg)",
    },
  }
  addComponents(dialog)
}
