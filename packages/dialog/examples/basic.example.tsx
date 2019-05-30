import * as React from "react"
import { storiesOf } from "@storybook/react"

import Badge from "./../src/index"

const stories = storiesOf("Components/Badge", module)

stories.add("Badges", () => (
  <div>
    <Badge>12</Badge>
    <Badge primary>43</Badge>
  </div>
))
