import { render, cleanup, findByTestId } from "@testing-library/react"

import { Snackbar } from "./../src/index"

afterEach(cleanup)

describe("Snackbar", () => {
  it("renders a div with the given label", async () => {
    const { container } = render(
      <Snackbar data-testid="snackbar">hello from snackbar</Snackbar>
    )
    const elm = await findByTestId(container, "snackbar")
    expect(elm).not.toBeNull()
    expect(elm).toHaveAttribute("class", "snackbar")
  })
})
