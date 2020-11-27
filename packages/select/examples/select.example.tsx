import * as React from "react"

import { Story, Meta } from "@storybook/react"
import Box from "@gladio/box"

import Select from "./../src/index"
import "./../styles/styles.css"

export default {
  title: "Components/Select/Select",
  component: Select,
  argTypes: {},
} as Meta

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

const Template: Story<React.ComponentProps<typeof Select>> = (props) => {
  const [value, changeValue] = React.useState<typeof countries[0] | null>(null)
  return (
    <Select
      value={value}
      label="Select Places"
      name="name"
      onChange={(value) => {
        changeValue(value)
      }}
      options={countries}
      {...props}
    />
  )
}

export const Default = Template.bind({})
Default.args = {}

export const Disabled = Template.bind({})
Disabled.args = {
  disabled: true,
}

export const MultiSelect = Template.bind({})
MultiSelect.args = {
  multiple: true,
}

export const WithoutSearching = Template.bind({})
WithoutSearching.args = {
  searchable: false,
}

export const Creatable = Template.bind({})
Creatable.args = {
  creatable: false,
}

export const Inline = Template.bind({})
Inline.args = {
  inline: true,
}

export const FullWidth = Template.bind({})
FullWidth.args = {
  fullWidth: true,
}

const countryNames = countries.map((c) => c.name)

export const StringOptions = Template.bind({})
StringOptions.args = {
  options: countryNames,
}

export const CustomOptionRenderer = Template.bind({})
CustomOptionRenderer.args = {
  optionRenderer: ({ option }: { option: typeof countries[0] }) => (
    <Box>
      {option.flag} {option.name}
    </Box>
  ),
}

const optionWithSomeDisabled = countries.map((c, i, arr) => ({
  ...c,
  disabled: i > Math.random() * arr.length,
}))

export const DisabledOption = Template.bind({})
DisabledOption.args = {
  options: optionWithSomeDisabled,
}

export function OnCreateNewHandler() {
  const [value, changeValue] = React.useState<typeof countries[0] | null>(null)
  return (
    <div className="max-w-lg mx-auto">
      <Select
        value={value}
        label="Select Places"
        creatable
        onChange={(value) => {
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
