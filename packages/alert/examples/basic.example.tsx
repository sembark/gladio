import * as React from "react"
import { storiesOf } from "@storybook/react"

import Alert from "./../src/index"

const stories = storiesOf("Components/Alert", module)

stories.add("Basic", () => (
  <Alert>
    This is an informative alert message with a `polite` type and role of
    `status`.
  </Alert>
))

stories.add(
  "Assertive",
  () => (
    <Alert type="assertive">
      This is an assertive type alert. It can be used to show error or messages
      that requires user attention.
    </Alert>
  ),
  {
    info:
      "The status for assertive type alerts is error which can be overwritten by passing a status prop",
  }
)

stories.add(
  "Status",
  () => (
    <div className="max-w-lg mx-auto">
      <Alert status="info">This is the default status for an alert.</Alert>
      <Alert status="success">
        Provide this status to show a greenish alert.
      </Alert>
      <Alert status="warning">
        This is a warning alert. Combine it with type="assertive" to show an
        assertive alert
      </Alert>
      <Alert status="error">
        This can be used to show any error message in the UI. Default type for
        error status is assertive.
      </Alert>
    </div>
  ),
  { info: "These are different available Status for the alert ui" }
)
