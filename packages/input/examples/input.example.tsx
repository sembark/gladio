import * as React from "react"
import { Story, Meta } from "@storybook/react"

import { Input } from "./../src/index"
import "./../styles/styles.css"

export default { title: "Components/Form/Input", component: Input } as Meta

const Template: Story<React.ComponentProps<typeof Input>> = (props) => (
  <Input {...props} />
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
