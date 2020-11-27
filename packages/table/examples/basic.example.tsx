import * as React from "react"
import { Story, Meta } from "@storybook/react"

import Table from "./../src/index"
import "./../styles/styles.css"

export default {
  title: "Components/Table",
  component: Table,
  argTypes: {},
} as Meta

const Template: Story<React.ComponentProps<typeof Table>> = (props) => (
  <Table {...props} />
)

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

export const Default = Template.bind({})
Default.args = {
  children: child,
}

export const WithCaption = Template.bind({})
WithCaption.args = {
  caption: "Some table caption",
  children: child,
}

export const Bordered = Template.bind({})
Bordered.args = {
  bordered: true,
  children: child,
}

export const Striped = Template.bind({})
Striped.args = {
  striped: true,
  children: child,
}

export const HoverStriped = Template.bind({})
HoverStriped.args = {
  hover: true,
  children: child,
}

export const WithouHeader = Template.bind({})
WithouHeader.args = {
  children: body,
}

export const AutoWidth = Template.bind({})
AutoWidth.args = {
  autoWidth: true,
  children: body,
}

export const OutsideBorder = Template.bind({})
OutsideBorder.args = {
  border: true,
  children: body,
}

export function RowsWithHeader() {
  return (
    <div className="p-10">
      <div className=" max-w-3xl mx-auto">
        <Table autoWidth bordered striped>
          <thead>
            <tr>
              <th>Category</th>
              <th>Inclusion</th>
              <th>Exclusion</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>Meal Plan</th>
              <td>MAP, CP</td>
              <td>AP</td>
            </tr>
            <tr>
              <th>Transport Service</th>
              <td>Yes</td>
              <td />
            </tr>
            <tr>
              <th>Room Heater</th>
              <td />
              <td>Yes</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  )
}
