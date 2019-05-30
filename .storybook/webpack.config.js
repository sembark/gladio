const path = require("path")
module.exports = ({ config }) => {
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    include: path.resolve(__dirname, "../packages"),
    use: [
      {
        loader: require.resolve("babel-loader"),
        options: {
          presets: [["react-app", { flow: false, typescript: true }]],
        },
      },
      {
        loader: require.resolve("react-docgen-typescript-loader"),
      },
    ],
  })
  config.resolve.extensions.push(".ts", ".tsx")
  return config
}
