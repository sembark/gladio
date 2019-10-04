import * as React from "react"
import { storiesOf } from "@storybook/react"

import Table from "./../src/index"
import "./../styles/styles.css"

const stories = storiesOf("Components/Table", module)

const head = (
  <thead>
    <tr>
      <th>#</th>
      <th>Header 1</th>
      <th>Header 2</th>
      <th>Header 3</th>
    </tr>
  </thead>
)

const body = (
  <tbody>
    <tr>
      <td>1</td>
      <td>Col 1</td>
      <td>Col 2</td>
      <td>Col 3</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Col 1</td>
      <td>Col 2</td>
      <td>Col 3</td>
    </tr>
    <tr>
      <td>3</td>
      <td>Col 1</td>
      <td>Col 2</td>
      <td>Col 3</td>
    </tr>
    <tr>
      <td>4</td>
      <td>Col 1</td>
      <td>Col 2</td>
      <td>Col 3</td>
    </tr>
  </tbody>
)

const footer = (
  <tfoot>
    <tr>
      <td colSpan={3} style={{ textAlign: "right" }}>
        Total
      </td>
      <td>4</td>
    </tr>
  </tfoot>
)

const child = (
  <>
    {head}
    {body}
    {footer}
  </>
)

stories.add("Table", () => (
  <div className="bg-gray-100 p-10">
    <div className=" max-w-3xl mx-auto">
      <Table caption="Here is the list of items that are related to your query">
        {child}
      </Table>
    </div>
  </div>
))
stories.add("Table Bordered", () => (
  <div className="p-10">
    <div className=" max-w-3xl mx-auto">
      <Table bordered>{child}</Table>
    </div>
  </div>
))
stories.add("Table Striped", () => (
  <div className="p-10">
    <div className=" max-w-3xl mx-auto">
      <Table striped>{child}</Table>
    </div>
  </div>
))

stories.add("Table with borders and strips", () => (
  <div className="p-10">
    <div className=" max-w-3xl mx-auto">
      <Table striped bordered>
        {child}
      </Table>
    </div>
  </div>
))

stories.add("Without heading", () => (
  <div className="p-10">
    <div className=" max-w-3xl mx-auto">
      <Table striped bordered>
        {body}
      </Table>
    </div>
  </div>
))

stories.add("Multiple Bodies", () => (
  <div className="p-10">
    <div className=" max-w-3xl mx-auto">
      <Table striped bordered>
        {body}
        {body}
      </Table>
    </div>
  </div>
))

stories.add("Table Auto Width", () => (
  <div className="p-10">
    <div className=" max-w-3xl mx-auto">
      <Table autoWidth>{child}</Table>
    </div>
  </div>
))
