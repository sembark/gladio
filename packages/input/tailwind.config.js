const theme = require("@tourepedia/css")

const plugin = require("./src/styles.js")

module.exports = {
  theme: theme.default,
  corePlugins: {
    container: false,
  },
  plugins: [plugin],
}
