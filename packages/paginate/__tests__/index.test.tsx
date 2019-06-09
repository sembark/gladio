import * as React from "react"
import { render, cleanup, fireEvent } from "react-testing-library"
import "jest-dom/extend-expect"

import Paginate from "./../src/index"

afterEach(cleanup)

describe("Paginate", () => {
  let getByTestId: any
  let getByTitle: any
  let onChange: any
  let currentPage = 2
  beforeEach(() => {
    onChange = jest.fn()
    const rendered = render(
      <Paginate
        data-testid="paginate"
        total={100}
        from={11}
        to={20}
        currentPage={currentPage}
        lastPage={10}
        isFetching={false}
        onChange={onChange}
      />
    )
    getByTestId = rendered.getByTestId
    getByTitle = rendered.getByTitle
  })
  it("should render without breaking", () => {
    const paginate = getByTestId("paginate")
    expect(paginate).not.toBeNull()
  })
  it("should call with page - 1 when clicked on prev page", () => {
    const goToPrevPageBtn = getByTitle("Previous Page")
    expect(goToPrevPageBtn).not.toBeNull()
    fireEvent.click(goToPrevPageBtn)
    expect(onChange).toHaveBeenCalledTimes(1)
    expect(onChange).toHaveBeenCalledWith(currentPage - 1)
  })

  it("should call with page + 1 when clicked on prev page", () => {
    const goToNextPageBtn = getByTitle("Next Page")
    expect(goToNextPageBtn).not.toBeNull()
    fireEvent.click(goToNextPageBtn)
    expect(onChange).toHaveBeenCalledTimes(1)
    expect(onChange).toHaveBeenCalledWith(currentPage + 1)
  })

  it("should call with page when clicked on page refresh", () => {
    const refreshPageBtn = getByTitle("Refresh this Page")
    expect(refreshPageBtn).not.toBeNull()
    fireEvent.click(refreshPageBtn)
    expect(onChange).toHaveBeenCalledTimes(1)
    expect(onChange).toHaveBeenCalledWith(currentPage)
  })
})
