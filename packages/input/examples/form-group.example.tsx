import * as React from "react"
import { Meta } from "@storybook/react"

import {
  Input,
  Select,
  TextArea,
  FormGroup,
  InputGroup,
  InputGroupAddon,
  ErrorMessage,
} from "./../src/index"
import "./../styles/styles.css"

export default {
  title: "Components/Form/FormGroup",
  component: FormGroup,
} as Meta

export function Group() {
  return (
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
  )
}

export function WithError() {
  return (
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
  )
}
