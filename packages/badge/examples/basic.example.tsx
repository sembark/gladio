import * as React from "react"
import { storiesOf } from "@storybook/react"

import Badge, { BadgeList } from "./../src/index"
import * as Icons from "./../../icons/src"
import Button from "./../../button/src"
import "./../styles/styles.css"

const stories = storiesOf("Components/Badge", module)

function Container({ children }: { children: React.ReactNode }) {
  return <div className="max-w-lg mx-auto px-4" children={children} />
}

stories.add("Badges", () => (
  <Container>
    <Badge>In Progress</Badge>
    <Badge primary>12,000</Badge>
    <Badge success>Paid</Badge>
    <Badge danger>Overdue</Badge>
    <Badge warning>v1.0.0-alpha.1</Badge>
  </Container>
))

stories.add("Rounded Badges", () => (
  <Container>
    <Badge fullRounded>12</Badge>
    <Badge fullRounded primary>
      43
    </Badge>
  </Container>
))

stories.add("List of badges", () => (
  <Container>
    <BadgeList primary fullRounded>
      <Badge>12</Badge>
      <Badge>43</Badge>
    </BadgeList>
  </Container>
))

stories.add(
  "With Empty Children",
  () => (
    <Container>
      <Badge />
      <Badge fullRounded>0</Badge>
    </Container>
  ),
  {
    info: {
      text:
        "Passing `null` or `empty string` as children will render not render a badge element whereas passing other `falsy` as `0` will render it properly",
    },
  }
)

stories.add("With Icons Inside", () => (
  <Container>
    <Badge>
      <Icons.RupeeIcon /> 1,000
    </Badge>
  </Container>
))

stories.add("Within a Button", () => (
  <Container>
    <Button>
      Stars <Badge fullRounded>10</Badge>
    </Button>
  </Container>
))
