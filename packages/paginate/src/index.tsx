import * as React from "react"
import Button from "@tourepedia/button"
import classNames from "classnames"
import { Omit } from "utility-types"

export interface PaginateProps
  extends Omit<React.HTMLProps<HTMLDivElement>, "onChange"> {
  /**
   * Total number of items to paginate over
   * @example 100
   */
  total: number
  /**
   * First item's count number in the current list
   * @example 1
   */
  from: number
  /**
   * Last item's count number in the current list
   * @example 10
   */
  to: number
  /**
   * Current page number on the list
   * @example 1
   */
  currentPage: number
  /**
   * Last possible page number
   * @example 10
   */
  lastPage: number
  /**
   * Is fetching data so that we can disable the page navigation
   */
  isFetching: boolean
  /**
   * Change handler for the pages
   */
  onChange: (page: number) => any
  /**
   * Hide when not needed
   * @default true
   */
  autoHide?: boolean
}

export function Paginate({
  total,
  from,
  to,
  currentPage,
  isFetching,
  lastPage,
  onChange,
  className,
  autoHide = true,
  ...props
}: PaginateProps) {
  if (!total || (autoHide && lastPage <= 1)) return null
  return (
    <nav className={classNames("paginate", className)} {...props}>
      <ul>
        <li>
          <Button
            disabled={isFetching || currentPage <= 1}
            onClick={() => onChange(currentPage - 1)}
            title="Previous Page"
            branded={currentPage > 1}
          >
            Previous
          </Button>
        </li>
        <li>
          <Button
            disabled={isFetching || lastPage <= currentPage}
            onClick={() => onChange(currentPage + 1)}
            title="Next Page"
            branded={lastPage > currentPage}
          >
            Next
          </Button>
        </li>
      </ul>
    </nav>
  )
}

export default Paginate
