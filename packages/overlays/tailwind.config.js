const theme = require("@gladio/css")

const plugin = require("./src/styles.js")

module.exports = {
  theme: theme.default,
  corePlugins: {
    container: false,
  },
  plugins: [plugin],
}
