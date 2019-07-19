import * as React from "react"
import { storiesOf } from "@storybook/react"

import Select, { Async } from "./../src/index"

const stories = storiesOf("Components/Select", module)

const countries = [
  {
    id: 1,
    name: "India",
  },
  {
    id: 2,
    name: "US",
  },
  {
    id: 3,
    name: "China",
  },
  {
    id: 4,
    name: "Bhutan",
  },
  {
    id: 5,
    name: "Nepal",
  },
  {
    id: 6,
    name: "Pakisthan",
  },
  {
    id: 7,
    name: "England",
  },
  {
    id: 8,
    name: "New Zealand",
  },
]

stories.add("Single Select", () => {
  function SelectRenderer() {
    const [value, changeValue] = React.useState<typeof countries[0] | null>(
      null
    )
    return (
      <div className="max-w-lg mx-auto">
        <Select
          value={value}
          label="Select Places"
          name="name"
          onChange={(value, name) => {
            changeValue(value)
          }}
          options={countries}
          onQuery={query => {}}
        />
      </div>
    )
  }
  return <SelectRenderer />
})
stories.add("Disabled Select", () => (
  <div className="max-w-lg mx-auto">
    <Select
      disabled
      value={countries[2]}
      label="Select Places"
      name="name"
      onChange={(value, name) => {
        alert(`You selected ` + JSON.stringify(value))
      }}
      options={countries}
      onQuery={query => {}}
    />
  </div>
))

stories.add("Multi Select", () => {
  function SelectRenderer() {
    const [value, changeValue] = React.useState<typeof countries>([])
    return (
      <div className="max-w-lg mx-auto">
        <Select
          multiple
          value={value}
          label="Select Places"
          name="name"
          onChange={(value, name) => {
            changeValue(value)
          }}
          options={countries}
          onQuery={query => {}}
        />
      </div>
    )
  }
  return <SelectRenderer />
})

stories.add("Single Select Async", () => (
  <div className="max-w-lg mx-auto">
    <Async
      value={countries[2]}
      label="Select Places"
      name="name"
      onChange={(value, name) => {
        alert(`You selected ` + JSON.stringify(value))
      }}
      fetch={q => {
        return Promise.resolve(countries.filter(c => c.name.indexOf(q) !== -1))
      }}
    />
  </div>
))

stories.add("Multi Async", () => (
  <div className="max-w-lg mx-auto">
    <Async
      multiple
      value={countries.slice(1, 3)}
      label="Select Places"
      name="name"
      onChange={(value, name) => {
        alert(`You selected ` + JSON.stringify(value))
      }}
      debounceBy={300}
      fetch={q => {
        return Promise.resolve(countries.filter(c => c.name.indexOf(q) !== -1))
      }}
    />
  </div>
))

stories.add("Without searching", () => (
  <div className="max-w-lg mx-auto">
    <Select
      value={countries[3]}
      label="Select Places"
      name="name"
      searchable={false}
      options={countries}
      onChange={(value, name) => {
        alert(`You selected ` + JSON.stringify(value))
      }}
    />
  </div>
))
