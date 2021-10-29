import { render, cleanup } from "@testing-library/react"

import Dialog from "./../src/index"

afterEach(cleanup)

describe("Dialog", () => {
  it("renders null if not visible", () => {
    const { container } = render(<Dialog open={false}>Hi</Dialog>)
    expect(container.childNodes).toHaveLength(0)
  })
})
