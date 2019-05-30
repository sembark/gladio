import * as React from "react"
import { render, cleanup, fireEvent } from "react-testing-library"
import "jest-dom/extend-expect"

import { useDidMount, useDidUpdate, useOnce } from "./../src/index"

afterEach(cleanup)

describe("react-hooks", () => {
  describe("Lifecycle hooks", () => {
    const didMountFn = jest.fn()
    const didUpdateFn = jest.fn()
    const onceFn = jest.fn()
    jest.useFakeTimers()

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
})
