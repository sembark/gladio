import * as React from "react"
import { storiesOf } from "@storybook/react"

import Button from "./../src/index"

const stories = storiesOf("Components/Button", module)

stories.add("Buttons", () => (
  <div>
    <Button>Default</Button>
    <Button primary>Primary</Button>
  </div>
))
stories.add("Disabled Buttons", () => (
  <div>
    <Button disabled>Default</Button>
    <Button disabled primary>
      Primary
    </Button>
  </div>
))
