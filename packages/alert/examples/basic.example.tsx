import * as React from "react"
import { Story, Meta } from "@storybook/react"

import Alert from "./../src/index"

export default {
  title: "Components/Alert",
  component: Alert,
  argTypes: {
    title: {
      control: "text",
    },
  },
} as Meta

const Template: Story<React.ComponentProps<typeof Alert>> = (args) => (
  <Alert {...args} />
)

export const Default = Template.bind({})
Default.args = {
  children: "Some Alert Message",
}

export const Error = Template.bind({})
Error.args = {
  status: "error",
  children: "Some Alert Message",
}

export const Warning = Template.bind({})
Warning.args = {
  status: "warning",
  children: "Warning message here",
}

export const Success = Template.bind({})
Success.args = {
  status: "success",
  children: "Success message",
}
