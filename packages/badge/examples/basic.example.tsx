import * as React from "react"
import { Story, Meta } from "@storybook/react"

import Badge, { BadgeList } from "./../src/index"
import Icons from "./../../icons/src"
import Button from "./../../button/src"
import "./../styles/styles.css"

export default {
  title: "Components/Badge",
  component: Badge,
  argTypes: {},
} as Meta

const Template: Story<React.ComponentProps<typeof Badge>> = (args) => (
  <Badge {...args} />
)

export const Default = Template.bind({})
Default.args = {
  children: "Default",
}

export const Outlined = Template.bind({})
Outlined.args = {
  outlined: true,
  children: "Primary",
}

export const Rounded = Template.bind({})
Rounded.args = {
  rounded: true,
  children: "10",
}

export function Status() {
  return (
    <>
      <Badge>In Progress</Badge>
      <Badge primary>12,000</Badge>
      <Badge success>Paid</Badge>
      <Badge danger>Overdue</Badge>
      <Badge warning>v1.0.0-alpha.1</Badge>
      <Badge accent>New</Badge>
    </>
  )
}

export function List() {
  return (
    <>
      <BadgeList primary fullRounded>
        <Badge>12</Badge>
        <Badge>43</Badge>
      </BadgeList>
    </>
  )
}

export function WithIcon() {
  return (
    <Badge>
      <Icons.Rupee /> 1,000
    </Badge>
  )
}

export function WithinButton() {
  return (
    <Button>
      Stars <Badge fullRounded>10</Badge>
    </Button>
  )
}
