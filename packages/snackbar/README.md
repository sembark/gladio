# Snackbar utility and UI component

Show snackbars with ease

## Installation

```bash
yarn add @gladio/snackbar
```

## Usage

```js
// import show/hide utility functions
import { showSnackbar } from "@gladio/snackbar"

const MyComponent = () => {
  return <button onClick={() => showSnackbar("Success")}>Submit</button>
}
```
