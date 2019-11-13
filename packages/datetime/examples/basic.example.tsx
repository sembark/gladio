import * as React from "react"
import { storiesOf } from "@storybook/react"
import moment from "moment"

import DateTime, { DateTimePicker, DateTimeInput } from "./../src/index"
import "./../styles/styles.css"

const stories = storiesOf("Components/DateTime", module)

function Container({ children }: { children: React.ReactNode }) {
  return <div className="max-w-lg mx-auto px-4" children={children} />
}

stories.add("Date and Time", () => {
  function DateTimeRenderer() {
    const [value, changeValue] = React.useState<any>()
    return (
      <Container>
        <DateTime value={value} onChange={changeValue} timeFormat />
      </Container>
    )
  }
  return <DateTimeRenderer />
})

stories.add("Date", () => {
  function DateTimeRenderer() {
    const [value, changeValue] = React.useState<any>()
    return (
      <Container>
        <DateTime value={value} onChange={changeValue} />
      </Container>
    )
  }
  return <DateTimeRenderer />
})

stories.add("Time", () => {
  function DateTimeRenderer() {
    const [value, changeValue] = React.useState<any>(moment())
    return (
      <Container>
        <DateTime
          value={value}
          onChange={changeValue}
          timeFormat
          dateFormat={false}
        />
      </Container>
    )
  }
  return <DateTimeRenderer />
})

stories.add("Time 24H", () => {
  function DateTimeRenderer() {
    const [value, changeValue] = React.useState<any>(moment())
    return (
      <Container>
        <DateTime
          value={value}
          onChange={changeValue}
          timeFormat="HH:mm:ss"
          dateFormat={false}
        />
      </Container>
    )
  }
  return <DateTimeRenderer />
})

stories.add("DateTime Picker", () => {
  function DateTimeRenderer() {
    const [value, changeValue] = React.useState<any>()
    return (
      <Container>
        <DateTimePicker
          value={value}
          onChange={changeValue}
          timeFormat
          rightAlign
        />
      </Container>
    )
  }
  return <DateTimeRenderer />
})

stories.add("DateTimeInput", () => {
  function DateTimeRenderer() {
    const [value, changeValue] = React.useState<any>()
    return (
      <Container>
        <DateTimeInput
          id="myId"
          value={value}
          onChange={changeValue}
          timeFormat
        />
      </Container>
    )
  }
  return <DateTimeRenderer />
})

stories.add("DateInput", () => {
  function DateTimeRenderer() {
    const [value, changeValue] = React.useState<any>()
    return (
      <Container>
        <DateTimeInput value={value} onChange={changeValue} />
      </Container>
    )
  }
  return <DateTimeRenderer />
})

stories.add("TimeInput", () => {
  function DateTimeRenderer() {
    const [value, changeValue] = React.useState<any>()
    return (
      <Container>
        <DateTimeInput
          value={value}
          onChange={changeValue}
          dateFormat={false}
          timeFormat
        />
      </Container>
    )
  }
  return <DateTimeRenderer />
})
