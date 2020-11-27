import * as React from "react"
import { Story, Meta } from "@storybook/react"

import { DateTimePicker } from "./../src/index"
import "./../styles/styles.css"

export default {
  title: "Components/DateTime/Picker",
  component: DateTimePicker,
  argTypes: {},
} as Meta

const Template: Story<React.ComponentProps<typeof DateTimePicker>> = (args) => {
  const [value, changeValue] = React.useState<any>()
  return <DateTimePicker value={value} onChange={changeValue} {...args} />
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

export const RightAligned = Template.bind({})
RightAligned.args = {
  rightAlign: true,
}
