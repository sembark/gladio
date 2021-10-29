import * as React from "react"
import { render, cleanup } from "@testing-library/react"

import {
  Input,
  Select,
  TextArea,
  FormGroup,
  InputGroup,
  InputGroupAddon,
} from "./../src/index"

afterEach(cleanup)

describe("Inputs", () => {
  describe("Input", () => {
    it("renders an input element", () => {
      const { getByPlaceholderText } = render(
        <Input placeholder="placeholder" />
      )
      const input = getByPlaceholderText("placeholder")
      expect(input).not.toBeNull()
      expect(input.tagName.toLowerCase()).toBe("input")
    })
    it("accepts all the props that an input element accepts", () => {
      const { getByPlaceholderText } = render(
        <Input
          placeholder="placeholder"
          type="text"
          minLength={1}
          maxLength={2}
          className="input"
        />
      )
      const input = getByPlaceholderText("placeholder")
      expect(input).not.toBeNull()
      expect(input.tagName.toLowerCase()).toBe("input")
      expect(input).toHaveAttribute("type", "text")
      expect(input).toHaveAttribute("minLength", "1")
      expect(input).toHaveAttribute("maxLength", "2")
    })
  })
  describe("Select", () => {
    it("renders a select element", () => {
      const { getByPlaceholderText } = render(<Select placeholder="select" />)
      const selectElm = getByPlaceholderText("select")
      expect(selectElm).not.toBeNull()
      expect(selectElm.tagName.toLowerCase()).toBe("select")
    })
    it("accepts options as its children", () => {
      const { getByPlaceholderText } = render(
        <Select placeholder="select" className="select">
          <option value={1}>1</option>
        </Select>
      )
      const selectElm = getByPlaceholderText("select")
      expect(selectElm).not.toBeNull()
      expect(selectElm.tagName.toLowerCase()).toBe("select")
      expect(selectElm).toHaveClass("select")
      expect(selectElm.children).toHaveLength(1)
    })
  })
  describe("TextArea", () => {
    it("renders a textarea element", () => {
      const { getByPlaceholderText } = render(
        <TextArea placeholder="textarea" />
      )
      const textareaElm = getByPlaceholderText("textarea")
      expect(textareaElm).not.toBeNull()
      expect(textareaElm.tagName.toLowerCase()).toBe("textarea")
    })
    it("accepts all the props that a textarea element accepts", () => {
      const { getByPlaceholderText } = render(
        <TextArea
          placeholder="placeholder"
          minLength={1}
          maxLength={2}
          className="input_textarea"
        />
      )
      const textareaElm = getByPlaceholderText("placeholder")
      expect(textareaElm).not.toBeNull()
      expect(textareaElm.tagName.toLowerCase()).toBe("textarea")
      expect(textareaElm).toHaveAttribute("placeholder", "placeholder")
      expect(textareaElm).toHaveAttribute("minLength", "1")
      expect(textareaElm).toHaveAttribute("maxLength", "2")
    })
  })
  describe("FormGroup", () => {
    it("renders an element and passes props to the element", () => {
      const { getByTestId } = render(
        <FormGroup data-testid="group">
          <Input type="text" data-testid="input" />
        </FormGroup>
      )

      const group = getByTestId("group")
      expect(group).not.toBeNull()
      const input = getByTestId("input")
      expect(input).not.toBeNull()
    })
  })
  describe("InputGroup", () => {
    it("renders an element and passes props to element", () => {
      const { getByTestId } = render(
        <InputGroup data-testid="group">
          <Input type="text" data-testid="input" />
        </InputGroup>
      )

      const group = getByTestId("group")
      expect(group).not.toBeNull()
      const input = getByTestId("input")
      expect(input).not.toBeNull()
    })
  })
  describe("InputGroupAddon", () => {
    it("renders a span element and passes props to span", () => {
      const { getByTestId } = render(
        <InputGroupAddon data-testid="group">
          <span data-testid="child">INR</span>
        </InputGroupAddon>
      )

      const group = getByTestId("group")
      expect(group).not.toBeNull()
      const input = getByTestId("child")
      expect(input).not.toBeNull()
      expect(input.innerHTML).toBe("INR")
    })
  })
})
