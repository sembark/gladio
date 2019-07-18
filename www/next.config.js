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

const isProd = process.env.NODE_ENV === "production"

const publishBasePath = isProd ? "/tp-ui" : ""

module.exports = compose(
  withMDX,
  withCSS
)({
  pageExtensions: ["js", "jsx", "md", "mdx"],
  assetPrefix: publishBasePath,
  exportTrailingSlash: true,
  env: {
    hrefPrefix: publishBasePath,
    appName: "Tourepedia Design System",
  },
  registerSwPrefix: publishBasePath,
  scope: publishBasePath + "/",
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
