import * as React from "react"
import { storiesOf } from "@storybook/react"

const stories = storiesOf("Styles/Components/Badge", module)

stories.add("Badges", () => (
  <div className="px-4">
    <div className="mb-4">
      <span className="badge">In Progress</span>
      <span className="badge badge-primary">12,000</span>
      <span className="badge badge-success">Paid</span>
      <span className="badge badge-warning">v1.0.0-alpha.1.0</span>
      <span className="badge badge-danger">Overdue</span>
    </div>
  </div>
))
stories.add("Rounded Badges", () => (
  <div className="px-4">
    <div className="mb-4">
      <span className="badge badge-full-rounded">12</span>
    </div>
  </div>
))
