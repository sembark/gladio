# Overlays components (Tooltips/Popover)

Use it to show more information about a UI element

## Installation

```bash
yarn add @gladio/overlays
```

## Usage

```js
// import the Tooltip component
import { Tooltip } from "@gladio/overlays"

const MyComponent = () => {
  return (
    <Tooltip content="10 Notifications" position="botton">
      <span>10</span>
    </Tooltip>
  )
}
```
