import React from "react"
import { storiesOf } from "@storybook/react"

import Button from "./../src/index"

const stories = storiesOf("Components/Button", module)

stories.add("Basic Button", () => <Button>Button</Button>, {
  info: {
    text: `
      Basic Button usage
    `,
  },
})
