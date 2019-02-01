# Button Component

Use the render a button component

## Installation

```bash
yarn add @tourepedia/button
```

## Usage

```js
// import the component
import Button from "@tourepedia/button"

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
