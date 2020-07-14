import * as React from "react"
import { storiesOf } from "@storybook/react"

import Select, { Async } from "./../src/index"
import "./../styles/styles.css"

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
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            const data = countries.filter(
              c => c.name.toLowerCase().indexOf(q.toLowerCase()) !== -1
            )
            resolve(data)
          }, 1000)
        })
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
    return (
      <div className="max-w-lg mx-auto">
        <Select
          value={value}
          label="Select Places"
          options={countries}
          creatable
          onChange={value => {
            changeValue(value)
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
        />
      </div>
    )
  }
  return <SelectRenderer />
})

stories.add("Creatable with Custom onCreate", () => {
  function SelectRenderer() {
    const [value, changeValue] = React.useState<typeof countries[0] | null>(
      null
    )
    return (
      <div className="max-w-lg mx-auto">
        <Select
          value={value}
          label="Select Places"
          creatable
          onChange={value => {
            changeValue(value)
          }}
          onCreateNew={async (query: string) => {
            return Promise.resolve().then(() => {
              const newName = window.prompt("Please provide a new name", query)
              if (newName) {
                return { id: newName, name: newName }
              }
              return null
            })
          }}
        />
      </div>
    )
  }
  return <SelectRenderer />
})

stories.add(
  "Async with Cache",
  () => (
    <div className="max-w-lg mx-auto">
      <Async
        cacheKey="name"
        multiple
        inline
        searchable={false}
        label="Select Places"
        name="name"
        onChange={(value, name) => {
          alert(`You selected ` + JSON.stringify(value))
        }}
        fetchOnMount
        fetch={q => {
          return new Promise((resolve, reject) => {
            setTimeout(() => {
              resolve(countries.filter(c => c.name.indexOf(q) !== -1))
            }, 100)
          })
        }}
      />
    </div>
  ),
  {
    info: `

  This example shows the usage of cache feature. When the components first mounts, it behaves in the similar
  way, it will show a loader to fetch the data and when it receives the data, it will show the options. But when it
  renders the second time, it will not show a loader as it will get the data from the cache. It will still make the
  fetch request to get the latest data and will see the latest data when it receives one but user will not see a
  loading screen. You can test by removing the "cacheKey" prop from the "Async" component.

    `,
  }
)

const countryNames = countries.map(c => c.name)

stories.add("Select with Strings", () => {
  function SelectRenderer() {
    const [value, changeValue] = React.useState<typeof countryNames[0] | null>(
      null
    )
    return (
      <div className="max-w-lg mx-auto">
        <Select
          value={value}
          label="Select Place"
          name="name"
          onChange={(value, name) => {
            changeValue(value)
          }}
          options={countryNames}
        />
      </div>
    )
  }
  return <SelectRenderer />
})

stories.add("Multi Select with Strings", () => {
  function SelectRenderer() {
    const [value, changeValue] = React.useState<typeof countryNames | null>(
      null
    )
    return (
      <div className="max-w-lg mx-auto">
        <Select
          value={value}
          label="Select Places"
          name="name"
          multiple
          onChange={(value, name) => {
            changeValue(value)
          }}
          options={countryNames}
        />
      </div>
    )
  }
  return <SelectRenderer />
})

stories.add("Full Width Select", () => {
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
          fullWidth
        />
      </div>
    )
  }
  return <SelectRenderer />
})

const optionWithSomeDisabled = countries.map((c, i, arr) => ({
  ...c,
  disabled: i > Math.random() * arr.length,
}))

stories.add("Disabled Options", () => {
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
          options={optionWithSomeDisabled}
          fullWidth
        />
      </div>
    )
  }
  return <SelectRenderer />
})
