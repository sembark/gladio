module.exports = {
  stories: [
    "./Welcome.stories.mdx",
    "../packages/alert/examples/*.example.tsx",
    "../packages/badge/examples/*.example.tsx",
    "../packages/box/examples/*.example.tsx",
    "../packages/button/examples/*.example.tsx",
    "../packages/css/examples/*.example.tsx",
    "../packages/datetime/examples/*.example.tsx",
    "../packages/dialog/examples/*.example.tsx",
    "../packages/icons/examples/*.example.tsx",
    "../packages/input/examples/*.example.tsx",
    "../packages/overlays/examples/*.example.tsx",
    "../packages/paginate/examples/*.example.tsx",
    "../packages/select/examples/*.example.tsx",
    "../packages/snackbar/examples/*.example.tsx",
    "../packages/table/examples/*.example.tsx",
  ],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials"],
  webpackFinal: async (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "core-js/modules": "@storybook/core/node_modules/core-js/modules",
      "core-js/features": "@storybook/core/node_modules/core-js/features",
    }
    return config
  },
}
