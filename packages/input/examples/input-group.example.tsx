import * as React from "react"
import { Meta } from "@storybook/react"

import { Input, InputGroup, InputGroupAddon } from "./../src/index"
import "./../styles/styles.css"

export default {
  title: "Components/Form/InputGroup",
  component: InputGroup,
} as Meta

export function Group() {
  return (
    <div className="max-w-lg mx-auto">
      <InputGroup>
        <InputGroupAddon>INR</InputGroupAddon>
        <Input type="number" placeholder="1200" />
      </InputGroup>
      <br />
      <InputGroup>
        <Input type="number" placeholder="1200" />
        <InputGroupAddon>/-</InputGroupAddon>
      </InputGroup>
      <br />
      <InputGroup>
        <InputGroupAddon>
          <Input type="checkbox" />
        </InputGroupAddon>
        <Input type="number" placeholder="1200" />
      </InputGroup>
      <br />
      <InputGroup hasError>
        <Input type="search" placeholder="Type to search..." />
        <button className="btn">&#128269;</button>
      </InputGroup>
      <br />
      <InputGroup>
        <InputGroupAddon>INR</InputGroupAddon>
        <Input type="number" placeholder="1200" />
        <InputGroupAddon>/-</InputGroupAddon>
      </InputGroup>
    </div>
  )
}
