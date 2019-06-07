import * as React from "react"
import { storiesOf } from "@storybook/react"

import {
  Input,
  Select,
  TextArea,
  FormGroup,
  InputGroup,
  InputGroupAddon,
} from "./../src/index"

const stories = storiesOf("Components/Input", module)

stories.add("Basic Input", () => (
  <div className="max-w-lg mx-auto">
    <Input type="email" placeholder="use@email.com" />
    <Select placeholder="Select a value...">
      <option value="1">Option 1</option>
      <option value="2">Option 2</option>
    </Select>
    <TextArea placeholder="Type some comments here..." />
    <Input type="checkbox" />
    <Input type="radio" />
  </div>
))

stories.add("Input Group", () => (
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
    <InputGroup>
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
))

stories.add("Basic Form Group", () => (
  <div className="max-w-lg mx-auto">
    <FormGroup>
      <label>Name</label>
      <Input type="text" placeholder="John Doe" />
    </FormGroup>
    <FormGroup>
      <label>Payment Price</label>
      <Select placeholder="Select a value...">
        <option value="1">Cash</option>
        <option value="2">NetBanking</option>
      </Select>
    </FormGroup>
    <FormGroup>
      <label>Comments</label>
      <TextArea placeholder="Please write comments regarding payment..." />
    </FormGroup>
    <FormGroup>
      <Input type="checkbox" />
      <label>I agree with terms and conditions</label>
    </FormGroup>
    <button type="submit" className="btn btn-primary">
      Make Transaction
    </button>
  </div>
))
