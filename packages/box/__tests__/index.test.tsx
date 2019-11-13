import * as React from "react"
import { render, cleanup, queryByText } from "react-testing-library"
import "jest-dom/extend-expect"

import Box from "./../src/index"

afterEach(cleanup)

describe("Box", () => {
  it("renders a div", () => {
    const { container } = render(<Box className="box">10</Box>)
    const boxElm = getBox(container, "10")
    expect(boxElm).not.toBeNull()
    if (boxElm) {
      expect(boxElm).toHaveAttribute("class", "box")
    }
  })
})

function getBox(container: HTMLElement, text: string = "") {
  return queryByText(container, text, { selector: "div" })
}
