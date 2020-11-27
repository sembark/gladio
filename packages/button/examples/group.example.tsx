import * as React from "react"
import { Story, Meta } from "@storybook/react"

import Button, { ButtonGroup } from "./../src/index"
import "./../styles/styles.css"

export default {
  title: "Components/Button/Group",
  component: ButtonGroup,
  argTypes: {},
} as Meta

export const Default: Story<React.ComponentProps<
  typeof ButtonGroup
>> = function Default(props) {
  return (
    <ButtonGroup {...props}>
      <Button>Default</Button>
      <Button branded>Primary</Button>
      <Button success>Success</Button>
      <Button danger>Danger</Button>
      <Button warning>Warning</Button>
      <Button accent>accent</Button>
    </ButtonGroup>
  )
}
