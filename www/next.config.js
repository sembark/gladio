const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
})
const withCSS = require("@zeit/next-css")

function compose(...funcs) {
  if (funcs.length === 0) {
    return arg => arg
  }
  if (funcs.length === 1) {
    return funcs[0]
  }
  return funcs.reduce((a, b) => (...args) => a(b(...args)))
}

module.exports = compose(
  withMDX,
  withCSS
)({
  pageExtensions: ["js", "jsx", "md", "mdx"],
  env: {
    appName: "SoLoMo",
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
