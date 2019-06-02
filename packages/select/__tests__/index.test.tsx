import * as React from "react"
import { render, cleanup } from "react-testing-library"
import "jest-dom/extend-expect"

import Select from "./../src/index"

afterEach(cleanup)

describe("Select", () => {
  it("renders a div with a role of  `group`", () => {
    const { getByRole } = render(
      <Select onChange={() => {}} onQuery={() => {}} />
    )
    expect(getByRole("group")).not.toBeNull()
  })
})
