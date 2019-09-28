import * as React from "react"
import { render, cleanup } from "react-testing-library"
import "jest-dom/extend-expect"

import DateTime, { DateTimePicker, DateTimeInput } from "./../src/index"

afterEach(cleanup)

describe("DateTime", () => {
  it("renders without breaking", () => {
    render(<DateTime />)
  })
})

describe("DateTime Picker", () => {
  it("renders without breaking", () => {
    render(<DateTimePicker />)
  })
})

describe("DateTime Input", () => {
  it("renders without breaking", () => {
    render(<DateTimeInput />)
  })
})
