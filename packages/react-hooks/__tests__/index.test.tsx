import * as React from "react"
import { render, cleanup, fireEvent } from "react-testing-library"
import "jest-dom/extend-expect"

import {
  useDidMount,
  useDidUpdate,
  useOnce,
  useFetchState,
} from "./../src/index"

afterEach(cleanup)

jest.useFakeTimers()

describe("react-hooks", () => {
  describe("Lifecycle hooks", () => {
    const didMountFn = jest.fn()
    const didUpdateFn = jest.fn()
    const onceFn = jest.fn()

    const Lifecycle = ({ count }: { count: number }) => {
      useDidMount(didMountFn)
      useDidUpdate(didUpdateFn, [count])
      useOnce(onceFn)
      return <span data-testid="count-value">{count}</span>
    }
    const LifecycleExample = () => {
      const [count, inc] = React.useState<number>(0)
      return (
        <div>
          <Lifecycle count={count} />
          <button onClick={() => inc(count + 1)}>+1</button>
        </div>
      )
    }
    it("testing useDidMount, useDidUpdate, useOnce", () => {
      const { getByText, getByTestId } = render(<LifecycleExample />)
      jest.runAllTimers()
      expect(didMountFn).toBeCalledTimes(1)
      expect(didUpdateFn).toBeCalledTimes(0)
      expect(onceFn).toBeCalledTimes(1)

      fireEvent.click(getByText("+1"))
      fireEvent.click(getByText("+1"))
      jest.runAllTimers()

      expect(getByTestId("count-value").textContent).toBe("2")
      expect(didMountFn).toBeCalledTimes(1)
      expect(didUpdateFn).toBeCalledTimes(2)
      expect(onceFn).toBeCalledTimes(1)
    })
  })
  describe("useFetchState", () => {
    type IData = string
    function Fetch({ loadData }: { loadData: () => Promise<IData> }) {
      const [data, fetch, { isFetching, errors }] = useFetchState<IData>(
        loadData
      )
      return (
        <div>
          <div data-testid="isFetching">{isFetching.toString()}</div>
          <div data-testid="data">{JSON.stringify(data)}</div>
          <div data-testid="error">{JSON.stringify(errors)}</div>
          <button data-testid="load" onClick={() => fetch()}>
            Load Data
          </button>
        </div>
      )
    }
    it("should let us store the async data fetch state", async () => {
      const fetchFn = jest.fn(() => {
        return new Promise<IData>(resolve => {
          setTimeout(() => {
            resolve("hi")
          }, 0)
        })
      })
      const { getByTestId } = render(<Fetch loadData={fetchFn} />)
      expect(getByTestId("isFetching").innerHTML).toBe("false")
      expect(getByTestId("data").innerHTML).toBe("null")
      expect(getByTestId("error").innerHTML).toBe("null")

      // now fetch the data
      fireEvent.click(getByTestId("load"))
      expect(getByTestId("isFetching").innerHTML).toBe("true")
      expect(getByTestId("data").innerHTML).toBe("null")
      expect(getByTestId("error").innerHTML).toBe("null")
      expect(fetchFn).toHaveBeenCalledTimes(1)

      // TODO: test the updation code
      // I don't know how to do it ;p
    })
  })
})
