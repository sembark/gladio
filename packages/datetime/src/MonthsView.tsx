import * as React from "react"
import { Moment } from "moment"
import classNames from "classnames"

import { capitalize, alwaysValidDate, VIEWS } from "./utils"
import { useDateTimeContext } from "./DateTimeContext"

function Header() {
  const {
    navigateBack,
    navigateForward,
    viewDate,
    showView,
  } = useDateTimeContext()
  return (
    <thead>
      <tr>
        <th
          key="year"
          className="tpdt-switch"
          onClick={() => showView("years")}
          colSpan={2}
          data-value={viewDate.year()}
        >
          {viewDate.year()}
        </th>
        <th
          key="prev"
          className="tpdt-prev"
          onClick={() => navigateBack(1, "years")}
        >
          <span>‹</span>
        </th>
        <th
          key="next"
          className="tpdt-next"
          onClick={() => navigateForward(1, "years")}
        >
          <span>›</span>
        </th>
      </tr>
    </thead>
  )
}

function Month(props: {
  key: string | number
  viewDate: Moment
  onClick?: (month: number) => any
  className?: string
  month: number
  year: number
  selectedDate?: Moment
}) {
  const { viewDate, month, onClick, selectedDate, ...otherProps } = props
  const localMoment = props.viewDate
  const monthStr = localMoment
    .localeData()
    .monthsShort(localMoment.month(month))
  const strLength = 3
  // Because some months are up to 5 characters long, we want to
  // use a fixed string length for consistency
  const monthStrFixedLength = monthStr.substring(0, strLength)
  return (
    <td
      data-value={month}
      onClick={() => {
        onClick && onClick(month)
      }}
      {...otherProps}
    >
      {capitalize(monthStrFixedLength)}
    </td>
  )
}

function Months() {
  const {
    value: selectedDate,
    viewDate,
    isValidDate,
    setViewDate,
    showView,
  } = useDateTimeContext()
  const date = selectedDate
  const month = viewDate.month()
  const year = viewDate.year()
  const rows = []
  const isValid = isValidDate || alwaysValidDate
  let months = []
  let i = 0

  while (i < 12) {
    const currentMonth = viewDate
      .clone()
      // date is irrelevant as we are only concerned about months
      .set({ year: year, month: i, date: 1 })

    const noOfDaysInMonth = currentMonth.daysInMonth()

    const daysInMonth = Array.from({ length: noOfDaysInMonth }, function(_, i) {
      return i + 1
    })

    const isDisabled =
      daysInMonth.find(function(d) {
        const day = currentMonth.clone().set("date", d)
        return isValid(day)
      }) === undefined

    months.push(
      <Month
        key={i}
        className={classNames("tpdt-month", {
          "tpdt-disabled": isDisabled,
          "tpdt-active": date && i === date.month() && year === date.year(),
        })}
        month={i}
        viewDate={viewDate}
        year={year}
        selectedDate={date && date.clone()}
        onClick={
          !isDisabled
            ? (month: number) => {
                setViewDate(viewDate.clone().month(month))
                showView(VIEWS.DAYS)
              }
            : undefined
        }
      />
    )
    // we create 4 months per row
    if (months.length === 4) {
      rows.push(<tr key={`${month}-${rows.length}`}>{months}</tr>)
      months = []
    }
    i++
  }
  return <React.Fragment>{rows}</React.Fragment>
}

export default function MonthsView() {
  return (
    <div className="tpdt-months">
      <table>
        <Header />
        <tbody>
          <Months />
        </tbody>
      </table>
    </div>
  )
}
