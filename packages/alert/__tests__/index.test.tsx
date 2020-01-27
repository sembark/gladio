import * as React from "react"
import { render, cleanup, findByTestId } from "react-testing-library"
import "jest-dom/extend-expect"

import Alert from "./../src/index"

afterEach(cleanup)

describe("Alert", () => {
  it("renders a polite status with a className `alert`", async () => {
    const { container } = render(<Alert data-testid="alert">some alert</Alert>)
    const elm = await findByTestId(container, "alert")
    expect(elm).not.toBeNull()
    expect(elm).toHaveAttribute("class", "alert")
    expect(elm).toHaveAttribute("aria-live", "polite")
    expect(elm).toHaveAttribute("role", "status")
  })
  it("render an error alert when called with assertive type", async () => {
    const { container } = render(
      <Alert data-testid="alert" type="assertive">
        assertive alert message
      </Alert>
    )
    const elm = await findByTestId(container, "alert")
    expect(elm).not.toBeNull()
    expect(elm).toHaveAttribute("class", "alert alert--error")
    expect(elm).toHaveAttribute("aria-live", "assertive")
    expect(elm).toHaveAttribute("role", "alert")
  })
})
