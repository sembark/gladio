import * as React from "react"
import * as renderer from "react-test-renderer"
import Button from "./../src/index"

describe("renders", () => {
  it("with a default type of button", () => {
    const wrapper = renderer.create(<Button />)
    expect(wrapper.toJSON()).toMatchSnapshot()
  })
})
