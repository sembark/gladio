import * as React from "react"
import { Story, Meta } from "@storybook/react"

import { Select } from "./../src/index"
import "./../styles/styles.css"

export default { title: "Components/Form/Select", component: Select } as Meta

const Template: Story<React.ComponentProps<typeof Select>> = (props) => (
  <Select {...props}>
    <option value="">Select theme...</option>
    <option value="Light">Light Theme</option>
    <option value="Dark">Dark Theme</option>
    <option value="auto">System Preference</option>
  </Select>
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

export const WithError = Template.bind({})
WithError.args = {
  hasError: true,
}
