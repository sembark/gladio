import { render, cleanup } from "@testing-library/react"

import { isDom, activeElement, contains, ownerDocument } from "./../src/index"

afterEach(cleanup)

describe("dom-helpers", () => {
  describe("isDom", () => {
    it("is a boolean that is true when document is available", () => {
      expect(isDom).toBeTruthy()
    })
  })
  describe("contains", () => {
    it("returns true if a node is contained inside another node", () => {
      const { container, getByTestId } = render(
        <span data-testid="child">Hi</span>
      )
      expect(contains(container, getByTestId("child"))).toBe(true)
    })
  })
  describe("activeElement", () => {
    it("returns the current activeElement element from the dom", () => {
      const { getByTestId } = render(<input data-testid="child" autoFocus />)
      const input = getByTestId("child")
      expect(activeElement()).toBe(input)
    })
  })

  describe("ownerDocument", () => {
    it("returns the document containing the element", () => {
      const { getByTestId } = render(<span data-testid="child" />)
      const elm = getByTestId("child")
      expect(ownerDocument(elm)).toBe(document)
    })
  })
})
