import { configure, addDecorator, addParameters } from "@storybook/react"
import { getStorybook } from "@storybook/react"
import { withInfo } from "@storybook/addon-info"

import "./../packages/css/styles/styles.css"

addParameters({
  options: {
    panelPosition: "right",
  },
})

addDecorator(
  withInfo({
    inline: true,
  })
)

// Automatically import all examples
const req = require.context(
  "../packages",
  true,
  /^((?!node_modules).)*\.example\.(js|ts)x?$/
)

configure(() => {
  // import the welcome chapter
  require("./welcomeToStory")

  req.keys().forEach(file => req(file))
}, module)

export { getStorybook }
