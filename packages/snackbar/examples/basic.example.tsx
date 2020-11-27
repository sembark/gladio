import * as React from "react"
import { Story, Meta } from "@storybook/react"

import { Snackbar, showSnackbar } from "./../src/index"
import "./../styles/styles.css"

export default {
  title: "Components/Overlays/Snackbar",
  component: Snackbar,
} as Meta

const Template: Story<React.ComponentProps<typeof Snackbar>> = (props) => (
  <Snackbar {...props}>This is something</Snackbar>
)

export const Default = Template.bind({})

export const AlwaysVisible = Template.bind({})
AlwaysVisible.args = {
  timeout: -1,
}

export const CustomActionText = Template.bind({})
CustomActionText.args = {
  actionText: "Ok",
  children: "Message Sent",
}

export const CustomAction = Template.bind({})
CustomAction.args = {
  actionText: "Undo",
  children: "Message Sent",
  onClick: () => showSnackbar("Undone"),
}

export function Utility() {
  return (
    <button
      onClick={() => {
        showSnackbar("YO HO! How you doing?", "Great", {
          onClick: () => showSnackbar("Nice. Keep up the good work"),
        })
      }}
    >
      Click here to see a message
    </button>
  )
}
