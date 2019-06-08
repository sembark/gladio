import * as React from "react"
import { storiesOf } from "@storybook/react"

import {
  Input,
  Select,
  TextArea,
  FormGroup,
  InputGroup,
  InputGroupAddon,
  ErrorMessage,
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
stories.add("Disabled Input", () => (
  <div className="max-w-lg mx-auto">
    <Input type="email" disabled placeholder="use@email.com" />
    <Select placeholder="Select a value..." disabled>
      <option value="1">Option 1</option>
      <option value="2">Option 2</option>
    </Select>
    <TextArea placeholder="Type some comments here..." disabled />
    <Input type="checkbox" disabled />
    <Input type="radio" disabled />
  </div>
))

stories.add("Readonly Input", () => (
  <div className="max-w-lg mx-auto">
    <Input type="email" readOnly placeholder="use@email.com" />
    <Select placeholder="Select a value..." readOnly>
      <option value="1">Option 1</option>
      <option value="2">Option 2</option>
    </Select>
    <TextArea placeholder="Type some comments here..." readOnly />
    <Input type="checkbox" readOnly />
    <Input type="radio" readOnly />
  </div>
))

stories.add("Error Input", () => (
  <div className="max-w-lg mx-auto">
    <Input hasError type="email" placeholder="use@email.com" />
    <Select hasError placeholder="Select a value...">
      <option value="1">Option 1</option>
      <option value="2">Option 2</option>
    </Select>
    <TextArea hasError placeholder="Type some comments here..." />
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
      <label>Price</label>
      <InputGroup>
        <InputGroupAddon>INR</InputGroupAddon>
        <Input type="number" placeholder="1200" />
      </InputGroup>
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
stories.add("Error Form Group", () => (
  <div className="max-w-lg mx-auto">
    <FormGroup hasError>
      <label>Name</label>
      <Input type="text" placeholder="John Doe" />
      <ErrorMessage>Name field is required</ErrorMessage>
    </FormGroup>
    <FormGroup hasError>
      <label>Payment Mode</label>
      <Select placeholder="Select a value...">
        <option value="1">Cash</option>
        <option value="2">NetBanking</option>
      </Select>
      <ErrorMessage>Payment mode field is required</ErrorMessage>
    </FormGroup>
    <FormGroup hasError>
      <label>Price</label>
      <InputGroup>
        <InputGroupAddon>INR</InputGroupAddon>
        <Input type="number" placeholder="1200" />
      </InputGroup>
      <ErrorMessage>Price field is required</ErrorMessage>
    </FormGroup>
    <FormGroup hasError>
      <label>Comments</label>
      <TextArea placeholder="Please write comments regarding payment..." />
      <ErrorMessage>Comments field is required</ErrorMessage>
    </FormGroup>
    <FormGroup hasError>
      <Input type="checkbox" />
      <label>I agree with terms and conditions</label>
      <ErrorMessage>Please select this checkbox before continue</ErrorMessage>
    </FormGroup>
    <button type="submit" disabled className="btn btn-primary">
      Make Transaction
    </button>
  </div>
))
