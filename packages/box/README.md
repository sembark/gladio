# Box

Base component to use the css with defined props instead of class names e.g. instead of passing
`className="bg-green-100"`, we can now pass `backgroundColor="green-100"`. This component has full typescript support
for all available props with there values, removing any kind of typo errors in class names.

## Installation

```
npm install --save @gladio/box
```

This package also installs the required css module `@gladio/css` which should be imported in your application.

## Usage

This component accepts almost all the props to add any styles that can be applied using class name. Some props also
have responsive values which can be passed directly via props only.

```js
import Box from "@gladio/box"

function App() {
  return (
    <Box
      as="button"
      backgroundColor="green-300"
      backgroundColorHover="green-200"
      textColor="green-800"
      padding="4"
      paddingLg="6"
      border="2"
      rounded="lg"
      outlineFocus="none"
    >
      Some Text Here
    </Box>
  )
}
```
