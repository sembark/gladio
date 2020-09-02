module.exports = function (api, opts, env) {
  api.cache(true)
  const BABEL_ENV = process.env.BABEL_ENV
  const building = BABEL_ENV !== undefined && BABEL_ENV !== "cjs"
  return {
    plugins: [
      "@babel/plugin-proposal-object-rest-spread",
      "@babel/plugin-proposal-export-default-from",
      "@babel/plugin-proposal-optional-chaining",
    ],
    presets: [
      [
        "@babel/preset-env",
        {
          loose: true,
          modules: building ? false : "commonjs",
          targets: { node: "current" },
        },
      ],
      "@babel/preset-react",
      "@babel/preset-typescript",
    ],
  }
}
