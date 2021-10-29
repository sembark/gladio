import { render, cleanup, queryByText } from "@testing-library/react"

import Badge from "./../src/index"

afterEach(cleanup)

describe("Badge", () => {
  it("renders a span with a className `badge`", () => {
    const { container } = render(<Badge>10</Badge>)
    const badgeElm = getBadge(container, "10")
    expect(badgeElm).not.toBeNull()
    if (badgeElm) {
      expect(badgeElm).toHaveAttribute("class", "badge")
    }
  })
  it("excepts all the props that a span element excepts", () => {
    const { container } = render(
      <Badge title="10 Notifications" style={{ background: "pink" }}>
        10
      </Badge>
    )
    const badgeElm = getBadge(container, "10")
    expect(badgeElm).not.toBeNull()
    if (badgeElm) {
      expect(badgeElm).toHaveAttribute("title", "10 Notifications")
      expect(badgeElm).toHaveStyle("background: pink;")
    }
  })
  it("renders null if no children passed", () => {
    const { container } = render(<Badge />)
    const badgeElm = getBadge(container)
    expect(badgeElm).toBeNull()
  })
  it("renders a primary badge if primary prop is passed", () => {
    const { container } = render(<Badge primary>10</Badge>)
    const badgeElm = getBadge(container, "10")
    expect(badgeElm).not.toBeNull()
    if (badgeElm) {
      expect(badgeElm.classList).toContain("badge-primary")
    }
  })
})

function getBadge(container: HTMLElement, text: string = "") {
  return queryByText(container, text, { selector: "span" })
}
