import React from "react"

import { storiesOf } from "@storybook/react"

storiesOf("Welcome", module).add(
  "Welcome",
  () => <h1>We will share the some sweet stories</h1>,
  {
    info: {
      disabled: true,
    },
  }
)
