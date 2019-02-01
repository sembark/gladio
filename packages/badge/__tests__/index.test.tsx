import * as React from "react"
import * as renderer from "react-test-renderer"
import Badge from "./../src/index"

describe("renders", () => {
  it("with a default type of button", () => {
    const wrapper = renderer.create(<Badge>10</Badge>)
    expect(wrapper.toJSON()).toMatchSnapshot()
  })
})
