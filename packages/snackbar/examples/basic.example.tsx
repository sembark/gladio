import * as React from "react"
import { storiesOf } from "@storybook/react"

import { Snackbar, showSnackbar } from "./../src/index"
import "./../styles/styles.css"

const stories = storiesOf("Components/Snackbar", module)

stories.add("Basic", () => <Snackbar label="This is something" />)

stories.add("Always Visible", () => (
  <Snackbar
    label="I have a timeout of -1. Not auto closing =D. Click to close"
    timeout={-1}
  />
))

stories.add("Custom Action", () => (
  <Snackbar
    label="Message sent"
    timeout={-1}
    actionText="Undo"
    onClick={() => {
      showSnackbar("Message sent undone.")
    }}
  />
))

stories.add("Show/Hide", () => (
  <div className="max-w-sm mx-auto">
    <button
      onClick={() => {
        showSnackbar("YO HO! How you doing?", "Great", {
          onClick: () => showSnackbar("Nice. Keep up the good work"),
        })
      }}
    >
      Click here to see a message
    </button>
  </div>
))
