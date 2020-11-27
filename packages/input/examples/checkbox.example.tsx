import * as React from "react"
import { Story, Meta } from "@storybook/react"

import { Input } from "./../src/index"
import "./../styles/styles.css"

export default {
  title: "Components/Form/Checkbox",
  component: Input,
} as Meta

const Template: Story<React.ComponentProps<typeof Input>> = (props) => (
  <Input {...props} type="checkbox" />
)

export const Default = Template.bind({})
Default.args = {}

export const Disabled = Template.bind({})
Disabled.args = {
  disabled: true,
}

export const ReadOnly = Template.bind({})
ReadOnly.args = {
  readOnly: true,
}
