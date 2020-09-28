import * as React from "react"
import { Moment, unitOfTime } from "moment"
import { Omit } from "utility-types"

export type TViews = "time" | "days" | "months" | "years"

export type TDuration = unitOfTime.DurationConstructor

export interface IDateTimeState {
  view: TViews
  viewDate: Moment
}

export interface IDateTimeHelpers {
  showView: (view: TViews) => any
  setViewDate: (viewDate: Moment) => any
  navigateForward: (amount: number, type: TDuration) => any
  navigateBack: (amount: number, type: TDuration) => any
}

export interface IDateTimeConfig {
  timeFormat?: boolean | string
  dateFormat?: boolean | string
  children?: React.ReactNode
  onChange?: (date?: Moment) => any
  value?: Moment | string
  isValidDate?: (currentDate: Moment, selectedDate?: Moment | string) => boolean
  clearable?: boolean
  min?: Moment | string
  max?: Moment | string
}

export type TDateTimeContext = IDateTimeHelpers &
  IDateTimeState &
  Omit<IDateTimeConfig, "timeFormat" | "dateFormat" | "value"> & {
    timeFormat?: string
    dateFormat?: string
    dateTimeFormat: string
    value?: Moment
    isValidDate: (
      currentDate: Moment,
      selectedDate?: Moment | string
    ) => boolean
  }
