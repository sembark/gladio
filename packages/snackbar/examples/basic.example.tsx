import * as React from "react"
import { storiesOf } from "@storybook/react"

import { Snackbar, showSnackbar } from "./../src/index"
import "./../styles/styles.css"

const stories = storiesOf("Components/Snackbar", module)

stories.add("Basic", () => <Snackbar>This is something</Snackbar>)

stories.add("Always Visible", () => (
  <Snackbar timeout={-1}>
    I have a timeout of -1. Not auto closing =D. Click to close
  </Snackbar>
))

stories.add("Custom Action", () => (
  <Snackbar
    timeout={-1}
    actionText="Undo"
    onClick={() => {
      showSnackbar("Message sent undone.")
    }}
  >
    Message sent
  </Snackbar>
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
