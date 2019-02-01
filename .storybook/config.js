import React from "react"
import { configure, addDecorator } from "@storybook/react"
import { getStorybook, storiesOf } from "@storybook/react"
import { withInfo } from "@storybook/addon-info"

addDecorator(
  withInfo({
    inline: true,
  })
)

// Automatically import all examples
const req = require.context(
  "../packages",
  true,
  /^((?!node_modules).)*\.example\.js$/
)

configure(() => {
  // import the welcome chapter
  require("./welcomeToStory")

  req.keys().forEach(file => req(file))
}, module)

export { getStorybook }
