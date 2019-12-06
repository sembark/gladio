import * as React from "react"
import moment from "moment"
import { $PropertyType } from "utility-types"

type Moment = moment.Moment

import {
  TViews,
  IDateTimeState,
  IDateTimeHelpers,
  IDateTimeConfig,
  TDuration,
} from "./types"
import { alwaysValidDate, VIEWS, getDateTimeFormats } from "./utils"
import { DateTimeProvider, useDateTimeContext } from "./DateTimeContext"
import DaysView from "./DaysView"
import MonthsView from "./MonthsView"
import YearsView from "./YearsView"
import TimesView from "./TimesView"

type TDateTimeActions =
  | { type: "SET_VIEW"; payload: TViews }
  | { type: "SET_VIEW_DATE"; payload: Moment }
  | {
      type: "NAVIGATE_FORWARD"
      payload: { amount: number; type: TDuration }
    }
  | {
      type: "NAVIGATE_BACK"
      payload: { amount: number; type: TDuration }
    }

function dateTimeReducer(
  state: IDateTimeState,
  action: TDateTimeActions
): IDateTimeState {
  switch (action.type) {
    case "SET_VIEW":
      return { ...state, view: action.payload }
    case "SET_VIEW_DATE":
      return { ...state, viewDate: action.payload }
    case "NAVIGATE_FORWARD":
      return {
        ...state,
        viewDate: state.viewDate
          .clone()
          .add(action.payload.amount, action.payload.type),
      }
    case "NAVIGATE_BACK":
      return {
        ...state,
        viewDate: state.viewDate
          .clone()
          .subtract(action.payload.amount, action.payload.type),
      }
    default:
      return state
  }
}

export function useDateTime(config: IDateTimeConfig) {
  const {
    timeFormat: configTimeFormat,
    dateFormat: configDateFormat = true,
    children,
    onChange,
    value: configValue,
    clearable = true,
    ...props
  } = config

  // get the value from the props value
  // make sure we don't update if the string values is not updated
  const value = React.useMemo(() => {
    return !configValue ? undefined : moment(configValue)
  }, [(configValue || "").toString()])

  const { timeFormat, dateFormat, dateTimeFormat } = React.useMemo(
    () => getDateTimeFormats(configDateFormat, configTimeFormat),
    [configTimeFormat, configDateFormat]
  )

  const initialView = dateFormat ? VIEWS.DAYS : VIEWS.TIME

  const initialViewDate = React.useRef(
    (value ? moment(value) : moment()).startOf("month")
  ).current

  const [state, dispatch] = React.useReducer<
    React.Reducer<IDateTimeState, TDateTimeActions>
  >(dateTimeReducer, {
    view: initialView,
    viewDate: initialViewDate,
  })

  const setViewDate = React.useCallback<
    $PropertyType<IDateTimeHelpers, "setViewDate">
  >(viewDate => {
    dispatch({ type: "SET_VIEW_DATE", payload: viewDate })
  }, [])

  const showView = React.useCallback<
    $PropertyType<IDateTimeHelpers, "showView">
  >(view => {
    dispatch({ type: "SET_VIEW", payload: view })
  }, [])

  const navigateForward = React.useCallback<
    $PropertyType<IDateTimeHelpers, "navigateForward">
  >((amount, type) => {
    dispatch({ type: "NAVIGATE_FORWARD", payload: { amount, type } })
  }, [])

  const navigateBack = React.useCallback<
    $PropertyType<IDateTimeHelpers, "navigateBack">
  >((amount, type) => {
    dispatch({ type: "NAVIGATE_BACK", payload: { amount, type } })
  }, [])

  const handleChange = React.useCallback(
    (date?: Moment) => {
      if (!onChange) {
        return
      }
      if (clearable && value && date) {
        if (moment(value).isSame(date, "day")) {
          onChange()
          return
        }
      }
      onChange(date)
    },
    [onChange, value]
  )
  // automatic change the viewDate if current select date
  // is not in the current month
  React.useEffect(() => {
    const { view, viewDate } = state
    if (view === "days" && value && viewDate.month() !== value.month()) {
      setViewDate(viewDate.clone().month(value.month()))
    }
  }, [value ? value.format(dateTimeFormat) : value])

  // THE CONTEXT
  const ctx = {
    ...props,
    isValidDate: props.isValidDate || alwaysValidDate,
    ...state,
    value,
    onChange: handleChange,
    dateFormat,
    timeFormat,
    dateTimeFormat,
    setViewDate,
    showView,
    navigateForward,
    navigateBack,
    clearable,
  }

  return ctx
}

function DateTimeContextProvider(props: IDateTimeConfig) {
  const { children } = props
  const dateTimeBag = useDateTime(props)
  return <DateTimeProvider value={dateTimeBag}>{children}</DateTimeProvider>
}

const uiForView = {
  days: DaysView,
  months: MonthsView,
  years: YearsView,
  time: TimesView,
}

function Container() {
  const { view } = useDateTimeContext()
  const View = uiForView[view]
  return <View />
}

export default function DateTime(props: IDateTimeConfig) {
  return (
    <DateTimeContextProvider {...props}>
      <div className="tpdt">
        <Container />
      </div>
    </DateTimeContextProvider>
  )
}
