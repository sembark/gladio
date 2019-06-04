import * as React from "react"
import { storiesOf } from "@storybook/react"

import Select, { Async } from "./../src/index"

const stories = storiesOf("Components/Select", module)

stories.add("Single Select", () => (
  <div className="max-w-lg mx-auto">
    <Select
      value={{ id: 1, name: "India" }}
      label="Select Places"
      name="name"
      onChange={(value, name) => {
        alert(`You selected ` + JSON.stringify(value))
      }}
      options={[{ id: 1, name: "India" }, { id: 2, name: "USA" }]}
      onQuery={query => {}}
    />
  </div>
))

stories.add("Multi Select", () => (
  <div className="max-w-lg mx-auto">
    <Select
      multiple
      value={[{ id: 1, name: "India" }]}
      label="Select Places"
      name="name"
      onChange={(value, name) => {}}
      options={[{ id: 1, name: "India" }, { id: 2, name: "USA" }]}
      onQuery={query => {}}
    />
  </div>
))

stories.add("Single Select Async", () => (
  <div className="max-w-lg mx-auto">
    <Async
      value={{ id: 1, name: "India" }}
      label="Select Places"
      name="name"
      onChange={(value, name) => {}}
      fetch={() => {
        return Promise.resolve([
          { id: 1, name: "India" },
          { id: 2, name: "USA" },
        ])
      }}
    />
  </div>
))

stories.add("Async", () => (
  <div className="max-w-lg mx-auto">
    <Async
      multiple
      value={[{ id: 1, name: "India" }]}
      label="Select Places"
      name="name"
      onChange={(value, name) => {}}
      fetch={() => {
        return Promise.resolve([
          { id: 1, name: "India" },
          { id: 2, name: "USA" },
        ])
      }}
    />
  </div>
))
