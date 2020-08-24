# Button Component

Use to render a button component

## Installation

```bash
yarn add @gladio/button
```

## Usage

```js
// import the component
import Button from "@gladio/button"

// use it as you would use a simple button
const MyComponent = () => {
  return (
    <div>
      <Button
        onClick={() => {
          console.log("Button was Clicked")
        }}
      >
        Click Me
      </Button>
    </div>
  )
}
```
