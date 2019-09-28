import * as React from "react"

import { useDateTimeContext } from "./DateTimeContext"
import {
  VIEWS,
  formatHasAmPm,
  formatHasHours,
  formatHasMinutes,
  formatHasSeconds,
} from "./utils"

function Header() {
  const {
    dateFormat,
    value: selectedDate,
    viewDate,
    showView,
  } = useDateTimeContext()
  if (!dateFormat) return null

  var date = selectedDate || viewDate
  return (
    <thead key="h">
      <tr>
        <th
          className="tpdt-switch"
          colSpan={4}
          onClick={() => showView(VIEWS.DAYS)}
        >
          {date.format(dateFormat)}
        </th>
      </tr>
    </thead>
  )
}

function Hours({ dayPart }: { dayPart?: string }) {
  const { value, onChange, viewDate, timeFormat } = useDateTimeContext()
  const date = value || viewDate
  React.useEffect(() => {
    if (dayPart && onChange) {
      const hours = Number(date.format("HH"))
      // PM => AM, we need to strip the 12+ hours
      if (dayPart === "AM" && hours >= 12) {
        onChange(date.clone().hours(hours - 12))
        // AM => PM, we need to strip the 12- hours
      } else if (dayPart === "PM" && hours < 12) {
        onChange(date.clone().hours(hours + 12))
      }
    }
  }, [dayPart])
  if (!timeFormat || !formatHasHours(timeFormat)) return null
  const isAmPm = Boolean(dayPart)
  const divisor = isAmPm ? 12 : 24
  let hours = parseInt(date.format("H"), 10) % divisor
  if (isAmPm && !hours) {
    // we may also get 0 and so, when in amPm mode, this should 12
    hours = divisor
  }
  return (
    <div className="tpdt-counter">
      <label htmlFor="tpdt_time_select_hours">Hours</label>
      <select
        id="tpdt_time_select_hours"
        value={hours}
        onChange={e => {
          let hours = (divisor + parseInt(e.target.value)) % divisor
          hours = isAmPm && dayPart === "PM" ? hours + 12 : hours
          onChange && onChange(date.clone().hours(hours))
        }}
      >
        {Array.from({ length: divisor }, (_, i) => (isAmPm ? i + 1 : i)).map(
          i => (
            <option key={i} value={i}>
              {i}
            </option>
          )
        )}
      </select>
    </div>
  )
}

function Minutes() {
  const { value, onChange, viewDate, timeFormat } = useDateTimeContext()
  if (!timeFormat || !formatHasMinutes(timeFormat)) return null
  const date = value || viewDate
  const minutes = parseInt(date.format("mm"), 10)
  const divisor = 60
  return (
    <div className="tpdt-counter">
      <label htmlFor="tpdt_time_select_minutes">Minutes</label>
      <select
        id="tpdt_time_select_minutes"
        value={minutes}
        onChange={e => {
          let minutes = Number(e.target.value)
          onChange && onChange(date.clone().minutes(minutes))
        }}
      >
        {Array.from({ length: divisor }, (_, i) => i).map(i => (
          <option key={i} value={i}>
            {i}
          </option>
        ))}
      </select>
    </div>
  )
}

function Seconds() {
  const { value, onChange, viewDate, timeFormat } = useDateTimeContext()
  if (!timeFormat || !formatHasSeconds(timeFormat)) return null
  const date = value || viewDate
  const divisor = 60
  const seconds = parseInt(date.format("ss"), 10)
  return (
    <div className="tpdt-counter">
      <label htmlFor="tpdt_time_select_seconds">Seconds</label>
      <select
        value={seconds}
        id="tpdt_time_select_seconds"
        onChange={e => {
          let seconds = Number(e.target.value)
          onChange && onChange(date.clone().seconds(seconds))
        }}
      >
        {Array.from({ length: divisor }, (_, i) => i).map(i => (
          <option key={i} value={i}>
            {i}
          </option>
        ))}
      </select>
    </div>
  )
}

function DayPart({
  dayPart,
  onChange,
}: {
  dayPart: string
  onChange: (dayPart: string) => any
}) {
  const { timeFormat } = useDateTimeContext()
  if (!timeFormat || !formatHasAmPm(timeFormat)) return null
  return (
    <div className="tpdt-counter">
      <label htmlFor="tpdt_time_select_am_pm">AM / PM</label>
      <select
        id="tpdt_time_select_am_pm"
        value={dayPart}
        onChange={e => onChange(e.target.value || "AM")}
      >
        <option value="AM">AM</option>
        <option value="PM">PM</option>
      </select>
    </div>
  )
}

export default function TimesView() {
  const { value, viewDate, timeFormat } = useDateTimeContext()
  const date = value || viewDate
  const isAmPm = timeFormat && formatHasAmPm(timeFormat)
  const [dayPart, changeDayPart] = React.useState(
    isAmPm ? date.format("A") : ""
  )
  if (!timeFormat) return null

  return (
    <div className="tpdt-time">
      <table>
        <Header />
        <tbody key="b">
          <tr>
            <td>
              <div className="tpdt-counters">
                <Hours dayPart={dayPart} />
                <Minutes />
                <Seconds />
                <DayPart dayPart={dayPart} onChange={changeDayPart} />
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
