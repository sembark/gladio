const package = require("@gladio/ui/package.json")
const version = package.version
const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
})

function compose(...funcs) {
  if (funcs.length === 0) {
    return (arg) => arg
  }
  if (funcs.length === 1) {
    return funcs[0]
  }
  return funcs.reduce((a, b) => (...args) => a(b(...args)))
}

module.exports = compose(withMDX)({
  pageExtensions: ["ts", "tsx", "md", "mdx"],
  env: {
    appName: "Gladio",
    version,
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: "@svgr/webpack",
          options: {
            svgo: false,
          },
        },
      ],
    })
    return config
  },
})
