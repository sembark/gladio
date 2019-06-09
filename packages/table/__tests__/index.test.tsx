import * as React from "react"
import { render, cleanup } from "react-testing-library"
import "jest-dom/extend-expect"

import Table from "./../src/index"

afterEach(cleanup)

describe("Table", () => {
  it("renders a table element", () => {
    const { getByTestId } = render(
      <Table data-testid="table">
        <tbody>
          <tr>
            <td>1</td>
          </tr>
        </tbody>
      </Table>
    )
    const table = getByTestId("table")
    expect(table).not.toBeNull()
    expect(table.tagName.toLowerCase()).toBe("table")
  })
})
