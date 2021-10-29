import { render, cleanup, getByText } from "@testing-library/react"

import { Tooltip } from "./../src/index"

afterEach(cleanup)

describe("Tooltip", () => {
  it("render more info on mouse over", () => {
    const { container } = render(
      <Tooltip content="10 Notifications">10N</Tooltip>
    )
    const child = getByText(container, "10N")
    expect(child).not.toBeNull()
    // TODO: write test for tooltip
  })
})
