import * as React from "react"
import { storiesOf } from "@storybook/react"

import Select from "./../src/index"

const stories = storiesOf("Components/Select", module)

stories.add("Select", () => (
  <div className="max-w-lg mx-auto">
    <Select
      value={[{ id: 1, name: "India" }]}
      label="Select Places"
      name="name"
      onChange={(value, name) => {}}
      options={[{ id: 1, name: "India" }, { id: 2, name: "USA" }]}
      onQuery={query => {}}
    />
  </div>
))
