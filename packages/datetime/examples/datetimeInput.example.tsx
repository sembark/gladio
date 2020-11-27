import * as React from "react"
import { Story, Meta } from "@storybook/react"

import { DateTimeInput } from "./../src/index"
import "./../styles/styles.css"

export default {
  title: "Components/DateTime/Input",
  component: DateTimeInput,
  argTypes: {},
} as Meta

const Template: Story<React.ComponentProps<typeof DateTimeInput>> = (args) => {
  const [value, changeValue] = React.useState<any>()
  return <DateTimeInput value={value} onChange={changeValue} {...args} />
}

export const DateOnly = Template.bind({})
DateOnly.args = {}

export const WithTime = Template.bind({})
WithTime.args = {
  timeFormat: true,
}

export const OnlyTime = Template.bind({})
OnlyTime.args = {
  dateFormat: false,
  timeFormat: true,
}

export const TimeFormat = Template.bind({})
TimeFormat.args = {
  dateFormat: false,
  timeFormat: "HH:mm:ss",
}

export const ReadOnly = Template.bind({})
ReadOnly.args = {
  readOnly: true,
}
