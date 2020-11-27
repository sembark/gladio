import * as React from "react"
import { Story, Meta } from "@storybook/react"
import moment from "moment"

import DateTime from "./../src/index"
import "./../styles/styles.css"

export default {
  title: "Components/DateTime/DateTime",
  component: DateTime,
  argTypes: {},
} as Meta

const Template: Story<React.ComponentProps<typeof DateTime>> = (args) => {
  const [value, changeValue] = React.useState<any>()
  return <DateTime value={value} onChange={changeValue} {...args} />
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

export const MinMax = Template.bind({})
MinMax.args = {
  min: moment(),
  max: moment().add(10, "days"),
}
