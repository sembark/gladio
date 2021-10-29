import { render, cleanup, queryByText } from "@testing-library/react"

import Button from "./../src/index"

afterEach(cleanup)

describe("Button", () => {
  it("renders a button element", () => {
    const { container } = render(<Button />)
    const buttonElm = getButton(container)
    expect(buttonElm).not.toBeNull()
  })
  it("renders with a type of button", () => {
    const { container } = render(<Button />)
    const buttonElm = getButton(container)
    expect(buttonElm).not.toBeNull()
    if (buttonElm) {
      expect(buttonElm).toHaveAttribute("type", "button")
    }
  })
  it("excepts all the props that a button element excepts", () => {
    const { container } = render(
      <Button type="submit" title="Save Me" style={{ background: "pink" }}>
        Save
      </Button>
    )
    const buttonElm = getButton(container, "Save")
    expect(buttonElm).not.toBeNull()
    if (buttonElm) {
      expect(buttonElm).toHaveAttribute("type", "submit")
      expect(buttonElm).toHaveAttribute("title", "Save Me")
      expect(buttonElm).toHaveStyle("background: pink;")
    }
  })
  it("renders a button with a className `btn` by default", () => {
    const { container } = render(<Button>Default</Button>)
    const buttonElm = getButton(container, "Default")
    expect(buttonElm).not.toBeNull()
    if (buttonElm) {
      expect(buttonElm).toHaveAttribute("class", "btn")
    }
  })
  it("renders a primary button when `primary` prop is set to true", () => {
    const { container } = render(<Button primary>Primary</Button>)
    const buttonElm = getButton(container, "Primary")
    expect(buttonElm).not.toBeNull()
    if (buttonElm) {
      expect(buttonElm.classList).toContain("btn-primary")
    }
  })
  it("when passing custom as, we don't see a type attribute", () => {
    const { container } = render(
      <Button as="a" href="#this">
        Link
      </Button>
    )
    const buttonElm = getButton(container, "Link", "a")
    expect(buttonElm).not.toBeNull()
    if (buttonElm) {
      expect(buttonElm).not.toHaveAttribute("type", "button")
    }
  })
})

function getButton(
  container: HTMLElement,
  text: string = "",
  selector = "button"
) {
  return queryByText(container, text, { selector })
}
