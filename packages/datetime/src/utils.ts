import moment from "moment"
import { TViews } from "./types"

type Locale = moment.Locale

export const VIEWS: { [key: string]: TViews } = {
  YEARS: "years",
  MONTHS: "months",
  DAYS: "days",
  TIME: "time",
}

export function getDaysOfWeek(locale: Locale) {
  const [weekdaysMin, weekdays] = [locale.weekdaysMin(), locale.weekdays()]
  const first = locale.firstDayOfWeek()
  const dow: Array<{ short: string; full: string }> = []
  let i = 0
  weekdaysMin.forEach(function (day, index) {
    dow[(7 + i++ - first) % 7] = { short: day, full: weekdays[index] }
  })
  return dow
}

export function alwaysValidDate(..._: any) {
  return true
}

export const DEFAULT_TIME_FORMAT = moment().localeData().longDateFormat("LT")

export const DEFAULT_DATE_FORMAT = moment().localeData().longDateFormat("LL")

export function getDateTimeFormats(
  configDateFormat: string | boolean = true,
  configTimeFormat?: string | boolean
) {
  // convert the date/timeFormat to string
  const timeFormat = !configTimeFormat
    ? ""
    : typeof configTimeFormat === "string"
    ? configTimeFormat
    : DEFAULT_TIME_FORMAT

  const dateFormat = !configDateFormat
    ? ""
    : typeof configDateFormat === "string"
    ? configDateFormat
    : DEFAULT_DATE_FORMAT

  const dateTimeFormat =
    dateFormat && timeFormat
      ? `${dateFormat} ${timeFormat}`
      : dateFormat || timeFormat

  return { timeFormat, dateFormat, dateTimeFormat }
}

export function formatHasHours(timeFormat: string) {
  return timeFormat.toLowerCase().indexOf("h") !== -1
}

export function formatHasMinutes(timeFormat: string) {
  return timeFormat.indexOf("m") !== -1
}

export function formatHasSeconds(timeFormat: string) {
  return timeFormat.indexOf("s") !== -1
}

export function formatHasAmPm(timeFormat: string) {
  return timeFormat.toLowerCase().indexOf("a") !== -1
}
