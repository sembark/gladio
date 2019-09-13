import * as React from "react"
import { storiesOf } from "@storybook/react"

import Select, { Async } from "./../src/index"

const stories = storiesOf("Components/Select", module)

const countries = [
  {
    id: 1,
    name: "India",
    flag: "🇮🇳",
  },
  {
    id: 2,
    name: "United States",
    flag: "🇺🇸",
  },
  {
    id: 3,
    name: "China",
    flag: "🇨🇳",
  },
  {
    id: 4,
    name: "Bhutan",
    flag: "🇧🇹",
  },
  {
    id: 5,
    name: "Nepal",
    flag: "🇳🇵",
  },
  {
    id: 6,
    name: "Pakisthan",
    flag: "🇵🇰",
  },
  {
    id: 7,
    name: "United Kingdom",
    flag: "🇬🇧",
  },
  {
    id: 8,
    name: "New Zealand",
    flag: "🇳🇿",
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

stories.add("Creatable Select", () => {
  function SelectRenderer() {
    const [value, changeValue] = React.useState<typeof countries[0] | null>(
      null
    )
    const [query, setQuery] = React.useState<string>("")
    return (
      <div className="max-w-lg mx-auto">
        <Select
          value={value}
          label="Select Places"
          creatable
          query={query}
          onChange={value => {
            changeValue(value)
          }}
          onQuery={query => {
            setQuery(query)
          }}
        />
      </div>
    )
  }
  return <SelectRenderer />
})

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

const hotels = [
  {
    id: 1,
    name: "Tourepedia Hotels",
    location: "Jaipur",
    stars: 3,
  },
  {
    id: 2,
    name: "Tourepedia Hotels",
    location: "Bikaner",
    stars: 3,
  },
  {
    id: 3,
    name: "Another Hotel",
    location: "Jaipur",
    stars: 5,
  },
]

stories.add("With Custom Option Renderer", () => (
  <div className="max-w-lg mx-auto">
    <Select
      value={countries[1]}
      label="Select Location"
      options={countries}
      optionRenderer={({ option }) => (
        <span>
          {option.flag} {option.name}
        </span>
      )}
      onChange={(value, name) => {
        alert(`You selected ` + JSON.stringify(value))
      }}
    />
    <br />
    <Select
      value={hotels[1]}
      label="Select hotel"
      options={hotels}
      optionRenderer={({ option }) => (
        <div>
          <div>{option.name}</div>
          <small>
            {option.location} • {option.stars} Star
          </small>
        </div>
      )}
      onChange={(value, name) => {
        alert(`You selected ` + JSON.stringify(value))
      }}
    />
  </div>
))

stories.add("Inline Select", () => {
  function SelectRenderer() {
    const [value, changeValue] = React.useState<typeof countries | null>(null)
    return (
      <div className="max-w-lg mx-auto">
        <Select
          value={value}
          label="Select Places"
          multiple
          inline
          searchable={false}
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
