import * as React from "react"
import { storiesOf } from "@storybook/react"

import Badge, { BadgeList } from "./../src/index"

const stories = storiesOf("Components/Badge", module)

stories.add("Badges", () => (
  <div>
    <Badge>12</Badge>
    <Badge primary>43</Badge>
  </div>
))

stories.add("Rounded Badges", () => (
  <div>
    <Badge fullRounded>12</Badge>
    <Badge fullRounded primary>
      43
    </Badge>
  </div>
))

stories.add("List of badges", () => (
  <BadgeList primary fullRounded>
    <Badge>12</Badge>
    <Badge>43</Badge>
  </BadgeList>
))
