import { render, cleanup } from "@testing-library/react"

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
