import * as React from "react"
import { Omit } from "utility-types"
import classNames from "classnames"
import Box, { MergeWithBoxProps } from "@tourepedia/box"

export interface TableProps
  extends MergeWithBoxProps<
    Omit<React.HTMLProps<HTMLTableElement>, "headers" | "rows">
  > {
  /**
   * Table has a fixed layout
   * @default false
   */
  fixedLayout?: boolean
  /**
   * Headers for the table
   * @default undefined
   */
  headers?: React.ReactNode[]
  /**
   * Rows in the table
   * @default undefined
   */
  rows?: React.ReactNode[][]
  /**
   * Align the columns on right or center. Pass the column number(index) as key and right | center as it's value in the object
   * @default undefined
   */
  alignCols?: { [key: number]: "center" | "right" }
  /**
   * Does the table requires responsiveness?
   * @default false
   */
  responsive?: boolean
  /**
   * Caption for the table
   * @default ""
   */
  caption?: string
  /**
   * Width Auto
   */
  autoWidth?: boolean
  /**
   * Add zebra-striping
   */
  striped?: boolean
  /**
   * Add border around each data cell
   */
  bordered?: boolean
  /**
   * Change row's background color when hovered
   */
  hover?: boolean
}

export const Table = React.forwardRef(
  (
    {
      fixedLayout,
      className,
      headers,
      children,
      alignCols = {},
      rows,
      responsive,
      caption,
      autoWidth,
      striped,
      bordered,
      hover,
      ...otherProps
    }: TableProps,
    ref: React.Ref<HTMLTableElement>
  ) => {
    const TableComponent = Box as React.ComponentType<TableProps>
    const $table = (
      <TableComponent
        as="table"
        cellSpacing={0}
        ref={ref}
        className={classNames(
          "table",
          {
            "table-fixed": fixedLayout,
            "table-w-auto": autoWidth,
            "table-striped": striped,
            "table-bordered": bordered,
            "table-hover": hover,
          },
          className
        )}
        {...otherProps}
      >
        {caption ? <caption>{caption}</caption> : null}
        {headers ? (
          <thead>
            <tr>
              {headers.map((header, h) => (
                <th
                  key={h}
                  style={{
                    textAlign: alignCols[h],
                  }}
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
        ) : null}
        {rows ? (
          <tbody>
            {rows.map((row, r) => (
              <tr key={r}>
                {row.map((data, d) => (
                  <td
                    key={d}
                    style={{
                      textAlign: alignCols[d],
                    }}
                  >
                    {data}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        ) : null}
        {children}
      </TableComponent>
    )
    if (responsive) {
      return <Box className="table-responsive">{$table}</Box>
    }
    return $table
  }
)

Table.displayName = "Table"

export default Table
