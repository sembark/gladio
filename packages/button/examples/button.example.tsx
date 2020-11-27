import * as React from "react"
import { Story, Meta } from "@storybook/react"

import Button from "./../src/index"
import "./../styles/styles.css"

export default {
  title: "Components/Button/Button",
  component: Button,
  argTypes: {},
} as Meta

const Template: Story<React.ComponentProps<typeof Button>> = (args) => (
  <Button {...args}>Click Me!</Button>
)

export const Default = Template.bind({})
Default.args = {
  children: "Default",
}

export const Primary = Template.bind({})
Primary.args = {
  primary: true,
  children: "Primary",
}

export const Secondary = Template.bind({})
Secondary.args = {
  secondary: true,
  children: "Secondary",
}

export const Tertiary = Template.bind({})
Tertiary.args = {
  tertiary: true,
  children: "Tertiary",
}

export const FullWidth = Template.bind({})
FullWidth.args = {
  fullWidth: true,
  children: "Full Width Button",
}

export const Small = Template.bind({})
Small.args = {
  sm: true,
  children: "Small Button",
}

export const Branded = Template.bind({})
Branded.args = {
  branded: true,
  children: "Branded Button",
}

export const Success = Template.bind({})
Success.args = {
  success: true,
}

export const Warning = Template.bind({})
Warning.args = {
  warning: true,
}

export const Dager = Template.bind({})
Dager.args = {
  danger: true,
}

export const Link = Template.bind({})
Link.args = {
  as: "a",
  href: "#",
  children: "Link Here",
}
