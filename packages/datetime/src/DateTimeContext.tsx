import * as React from "react"

import { TDateTimeContext } from "./types"

const DateTimeContext = React.createContext<TDateTimeContext>(undefined as any)

export const DateTimeProvider = DateTimeContext.Provider
export const DateTimeConsumer = DateTimeContext.Consumer

export function useDateTimeContext() {
  const dateTime = React.useContext(DateTimeContext)
  if (!dateTime) {
    console.warn(
      "DateTime Context is undefined. Please verify that you are calling useDateTimeContext() as child of <Datetime> component."
    )
  }
  return dateTime
}
