import * as React from "react"
import { Story, Meta } from "@storybook/react"

import { TextArea } from "./../src/index"
import "./../styles/styles.css"

export default {
  title: "Components/Form/TextArea",
  component: TextArea,
} as Meta

const Template: Story<React.ComponentProps<typeof TextArea>> = (props) => (
  <TextArea {...props} />
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
