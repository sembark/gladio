import * as React from "react"
import Button from "@tourepedia/button"
import { RefreshIcon, ChevronDownIcon } from "@tourepedia/icons"
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
  ...props
}: PaginateProps) {
  return (
    <nav className={classNames("paginate", className)} {...props}>
      <mark>
        <b>
          {from}-{to}
        </b>{" "}
        <i>of</i> <b>{total}</b>
      </mark>
      <ul>
        <li>
          <Button
            disabled={isFetching || currentPage <= 1}
            onClick={() => onChange(currentPage - 1)}
            title="Previous Page"
          >
            <ChevronDownIcon style={{ transform: "rotate(90deg)" }} />
          </Button>
        </li>
        <li>
          <Button
            disabled={isFetching}
            onClick={() => onChange(currentPage)}
            title="Refresh this Page"
          >
            <RefreshIcon />
          </Button>
        </li>
        <li>
          <Button
            disabled={isFetching || lastPage <= currentPage}
            onClick={() => onChange(currentPage + 1)}
            title="Next Page"
          >
            <ChevronDownIcon style={{ transform: "rotate(-90deg)" }} />
          </Button>
        </li>
      </ul>
    </nav>
  )
}

export default Paginate
