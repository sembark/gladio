import * as React from "react"
import { Moment } from "moment"
import classNames from "classnames"

import { useDateTimeContext } from "./DateTimeContext"
import { VIEWS } from "./utils"

function Header() {
  const { navigateBack, navigateForward, viewDate } = useDateTimeContext()
  const year = parseInt((viewDate.year() / 10).toString(), 10) * 10
  return (
    <thead>
      <tr>
        <th key="year" className="tpdt-switch" colSpan={2}>
          {year}-{year + 9}
        </th>
        <th
          key="prev"
          className="tpdt-prev"
          onClick={() => navigateBack(10, "years")}
        >
          <span>‹</span>
        </th>
        <th
          key="next"
          className="tpdt-next"
          onClick={() => navigateForward(10, "years")}
        >
          <span>›</span>
        </th>
      </tr>
    </thead>
  )
}

function Year(props: {
  key: number
  onClick?: (year: number) => any
  year: number
  selectedDate?: Moment
  className?: string
}) {
  const { year, onClick, selectedDate, ...otherProps } = props
  return (
    <td
      data-value={year}
      onClick={() => onClick && onClick(year)}
      {...otherProps}
    >
      {year}
    </td>
  )
}

function Years() {
  const {
    viewDate,
    value,
    isValidDate,
    setViewDate,
    showView,
  } = useDateTimeContext()
  const selectedDate = value
  const isValid = isValidDate
  let years = [],
    i = -1
  const rows = []

  let year = parseInt((viewDate.year() / 10).toString(), 10) * 10
  year--

  while (i < 11) {
    const currentYear = viewDate
      .clone()
      // Month and date are irrelevant here because
      // we're only interested in the year
      .set({ year: year, month: 1, date: 1 })

    const noOfDaysInYear = parseInt(currentYear.endOf("year").format("DDD"))
    const daysInYear = Array.from({ length: noOfDaysInYear }, function(_, i) {
      return i + 1
    })

    const isDisabled =
      daysInYear.find(function(d) {
        const day = currentYear.clone().dayOfYear(d)
        return isValid(day)
      }) === undefined

    years.push(
      <Year
        key={year}
        year={year}
        selectedDate={selectedDate && selectedDate.clone()}
        className={classNames("tpdt-year", {
          "tpdt-disabled": isDisabled,
          "tpdt-active": selectedDate && selectedDate.year() === year,
        })}
        onClick={
          !isDisabled
            ? (year: number) => {
                setViewDate(viewDate.clone().year(year))
                showView(VIEWS.MONTHS)
              }
            : undefined
        }
      />
    )
    if (years.length === 4) {
      rows.push(React.createElement("tr", { key: i }, years))
      years = []
    }
    year++
    i++
  }

  return <React.Fragment>{rows}</React.Fragment>
}

export default function YearsView() {
  return (
    <div className="tpdt-years">
      <table>
        <Header />
        <tbody>
          <Years />
        </tbody>
      </table>
    </div>
  )
}
