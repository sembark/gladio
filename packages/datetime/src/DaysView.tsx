import * as React from "react"
import moment from "moment"
import classNames from "classnames"

import { getDaysOfWeek, VIEWS, DEFAULT_DATE_FORMAT } from "./utils"
import { useDateTimeContext } from "./DateTimeContext"

type Moment = moment.Moment

function Header() {
  const {
    navigateForward,
    navigateBack,
    showView,
    viewDate,
  } = useDateTimeContext()
  const date = viewDate
  const locale = date.localeData()
  const dow = React.useMemo(() => getDaysOfWeek(locale), [locale])
  return (
    <thead key="th">
      <tr key="h">
        <th
          key="s"
          role="button"
          className="tpdt-switch"
          onClick={() => showView(VIEWS.MONTHS)}
          colSpan={5}
          data-value={viewDate.month()}
        >
          <span>{locale.months(date) + " " + date.year()}</span>
        </th>
        <th
          key="p"
          className="tpdt-prev"
          role="button"
          onClick={() => navigateBack(1, "months")}
        >
          <span>‹</span>
        </th>
        <th
          key="n"
          className="tpdt-next"
          role="button"
          onClick={() => navigateForward(1, "months")}
        >
          <span>›</span>
        </th>
      </tr>
      <tr key="d">
        {dow.map((day, index) => (
          <th
            key={day.full + index}
            title={day.full}
            aria-label={day.full}
            className="tpdt-dow"
          >
            {day.short}
          </th>
        ))}
      </tr>
    </thead>
  )
}

function Footer() {
  const { timeFormat, value, viewDate, showView } = useDateTimeContext()
  const date = value || viewDate
  if (!timeFormat || !date) return null
  return (
    <tfoot key="tf">
      <tr>
        <td
          onClick={() => showView(VIEWS.TIME)}
          colSpan={7}
          className="tpdt-time-toggle"
        >
          {date.format(timeFormat)}
        </td>
      </tr>
    </tfoot>
  )
}

function Day(props: {
  key: string
  date: Moment
  onSelect?: () => any
  className?: string
}) {
  const { onSelect, date, ...otherProps } = props
  const { dateFormat } = useDateTimeContext()
  return (
    <td
      aria-label={date.format(dateFormat || DEFAULT_DATE_FORMAT)}
      role="button"
      onClick={onSelect}
      {...otherProps}
    >
      {date.date()}
    </td>
  )
}

function Days() {
  const { isValidDate, viewDate, onChange, value } = useDateTimeContext()
  const date = viewDate
  const selected = value
  const currentYear = date.year()
  const currentMonth = date.month()

  let weeks: Array<React.ReactNode> = []
  let days: Array<React.ReactNode> = []

  // go to the first day of week in which this month starts
  // e.g. if the month starts on Tuesday, we do the Sunday (prev month)
  const currentDay = date.clone().startOf("month").startOf("week")

  const lastDay = date.clone().endOf("month").endOf("week")

  while (currentDay.isBefore(lastDay)) {
    const isDisabled = !isValidDate(currentDay, selected)
    const day = currentDay.clone()
    days.push(
      <Day
        key={currentDay.format("M_D")}
        date={currentDay.clone()}
        onSelect={
          !isDisabled
            ? () => {
                // update the date/month/year in the selected or view Date
                onChange &&
                  onChange(
                    (selected || viewDate)
                      .clone()
                      .month(day.month())
                      .year(day.year())
                      .date(day.date())
                  )
              }
            : undefined
        }
        className={classNames("tpdt-day", {
          "tpdt-old":
            (currentDay.year() === currentYear &&
              currentDay.month() < currentMonth) ||
            currentDay.year() < currentYear,
          "tpdt-new":
            (currentDay.year() === currentYear &&
              currentDay.month() > currentMonth) ||
            currentDay.year() > currentYear,
          "tpdt-active": selected && currentDay.isSame(selected, "day"),
          "tpdt-today": currentDay.isSame(moment(), "day"),
          "tpdt-disabled": isDisabled,
        })}
      />
    )

    // create a new row at each seven days
    if (days.length === 7) {
      weeks.push(<tr key={currentDay.format("M_D")}>{days}</tr>)
      days = []
    }
    currentDay.add(1, "d")
  }

  return <React.Fragment>{weeks}</React.Fragment>
}

export default function DaysView() {
  return (
    <div className="tpdt-days">
      <table>
        <Header />
        <tbody>
          <Days />
        </tbody>
        <Footer />
      </table>
    </div>
  )
}
