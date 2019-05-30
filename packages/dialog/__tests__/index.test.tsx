import * as React from "react"
import { render, cleanup, queryByText } from "react-testing-library"
import "jest-dom/extend-expect"

import Dialog from "./../src/index"

afterEach(cleanup)

describe("Dialog", () => {
  it("renders null if not visible", () => {
    const { container } = render(<Dialog open={false}>Hi</Dialog>)
    expect(container.childNodes).toHaveLength(0)
  })
})
