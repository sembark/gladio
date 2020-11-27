import * as React from "react"
import { Story, Meta } from "@storybook/react"

import { Tooltip } from "./../src/index"
import Box from "@gladio/box"
import "./../styles/styles.css"

export default {
  title: "Components/Overlays/Tooltip",
  component: Tooltip,
  argTypes: {},
} as Meta

const Template: Story<React.ComponentProps<typeof Tooltip>> = (props) => (
  <Tooltip content="Tooltip Content" {...props}>
    <Box as="button">Toggle</Box>
  </Tooltip>
)

export const Default = Template.bind({})
Default.args = {}

export const Top = Template.bind({})
Top.args = {
  placement: "top",
}

export const Right = Template.bind({})
Right.args = {
  placement: "right",
}

export const Bottom = Template.bind({})
Bottom.args = {
  placement: "bottom",
}

export const Left = Template.bind({})
Left.args = {
  placement: "bottom",
}

export const Interactive = Template.bind({})
Interactive.args = {
  interactive: true,
}

export const Trigger = Template.bind({})
Trigger.args = {
  trigger: "click",
}
