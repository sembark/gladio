import * as React from "react"
import { Story, Meta } from "@storybook/react"

import Button, { ButtonGroup, ButtonToolbar } from "./../src/index"
import "./../styles/styles.css"

export default {
  title: "Components/Button/Toolbar",
  component: ButtonToolbar,
  argTypes: {},
} as Meta

export const Default: Story<React.ComponentProps<
  typeof ButtonToolbar
>> = function Default(props) {
  return (
    <ButtonToolbar {...props}>
      <Button>Default</Button>
      <Button branded>Primary</Button>
      <Button success>Success</Button>
      <ButtonGroup>
        <Button danger>Danger</Button>
        <Button warning>Warning</Button>
      </ButtonGroup>
      <Button accent>accent</Button>
    </ButtonToolbar>
  )
}
