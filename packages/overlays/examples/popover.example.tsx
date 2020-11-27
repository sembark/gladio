import * as React from "react"
import { Story, Meta } from "@storybook/react"

import { Popover } from "./../src/index"
import Box from "@gladio/box"
import "./../styles/styles.css"

export default {
  title: "Components/Overlays/Popover",
  component: Popover,
  argTypes: {},
} as Meta

const Template: Story<React.ComponentProps<typeof Popover>> = (props) => (
  <Popover
    trigger="click"
    content={
      <Box>
        <Box padding="2" backgroundColor="gray-100" roundedTop="lg">
          Information Title
        </Box>
        <Box padding="2">Some details here..</Box>
      </Box>
    }
    {...props}
  >
    <Box as="button">Toggle Popover</Box>
  </Popover>
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

export const Trigger = Template.bind({})
Trigger.args = {
  trigger: "click",
}
