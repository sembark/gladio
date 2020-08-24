# React Hooks

Some helper react hooks

## Install

```
npm install --save @gladio/react-hooks
```

## Usage

### useDidMount

Call a function on component's didMount Lifecycle

```js
import { useDidMount } from "@gladio/react-hooks"

function App() {
  useDidMount(() => {
    // only called on mount
    fetchTheData()
  })
}
```

### useDidUpdate

Call a function only in component's didUpdate Lifecycle.

```js
import { useDidUpdate } from "@gladio/react-hooks"

function App({ count }) {
  useDidUpdate(() => {
    // called when the count changes
  }, [count])
}
```

### useOnce

Only call a function once in a component's Lifecycle

```js
import { useOnce } from "@gladio/react-hooks"

function App() {
  useOnce(() => {
    // only called once
    fetchTheData()
  })
}
```

### useEnforceFocus

Enforces focus to be contained in a container and return back to last focused element based on a condition

```js
useEnforceFocus(
  containerRef, // React.Ref: of the container
  shouldBeFocused, // boolean: (true) to toggle the focus enforcement
  config: {
    autoFocus // boolean: (true) should the container be autoFocus
    enforceFocus // boolean: (true) should return the focus to the last focused element
  }
)
```

```js
import { useRef, useState } from "react"
import { useEnforceFocus } from "@gladio/react-hooks"

function App() {
  const containerRef = useRef()
  const [shouldBeFocused, toggleShouldFocus] = useState(false)
  // will focus the form container when shouldBeFocused is set to true
  useEnforceFocus(containerRef, shouldBeFocused)
  return (
    <div>
      <form className="container" ref={containerRef}>
        <input type="email" autoFocus />
        <button type="submit">Save</button>
      </form>
      <button onClick={() => toggleShouldFocus(!shouldBeFocused)}>
        Toggle Focus
      </button>
    </div>
  )
}
```
