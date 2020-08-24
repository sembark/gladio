# Dom helpers

### Install

```
npm install --save @gladio/dom-helpers
```

### Utilities

#### isDom

check if dom is available (generally used in univeral apps)

```js
import { isDom } from "@gladio/dom-helpers"

function App() {
  if (isDom) {
    // rendering in a browser
  }
}
```

#### activeElement

Return the current active element in the dom

```js
import { activeElement } from "@gladio/dom-helpers"

const App () {
  const currentActiveElement = activeElement()
}
```

#### contains

Checks whether or not a dom node is contains another given dom node. An usecase would be for checking a active
element inside a container

```js
import { contains } from "@gladio/dom-helpers"

function App() {
  // after mount
  if (contains(container, child)) {
    // do something with it
  }
}
```
