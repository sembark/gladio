import * as React from "react"

import { Story, Meta } from "@storybook/react"

import { Async } from "./../src/index"
import "./../styles/styles.css"

export default {
  title: "Components/Select/Async",
  component: Async,
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

const Template: Story<React.ComponentProps<typeof Async>> = ({
  fetch,
  ...props
}) => {
  const [value, changeValue] = React.useState<typeof countries[0] | null>(null)
  return (
    <Async
      value={value}
      label="Select Places"
      name="name"
      onChange={(value) => {
        changeValue(value)
      }}
      fetch={
        fetch ||
        ((q) => {
          return new Promise((resolve, reject) => {
            setTimeout(() => {
              const data = countries.filter(
                (c) => c.name.toLowerCase().indexOf(q.toLowerCase()) !== -1
              )
              resolve(data)
            }, 1000)
          })
        })
      }
      {...props}
    />
  )
}

export const Default = Template.bind({})
Default.args = {}

export const MultiSelect = Template.bind({})
MultiSelect.args = {
  multiple: true,
}

export const Debounced = Template.bind({})
Debounced.args = {
  debounceBy: 300,
}

export const FetchOnMount = Template.bind({})
FetchOnMount.args = {
  fetchOnMount: true,
}

export const WithCache = Template.bind({})
WithCache.args = {
  cacheKey: "cache-results",
}
