# Snackbar utility and UI component

Show snackbars with ease

## Installation

```bash
yarn add @tourepedia/snackbar
```

## Usage

```js
// import show/hide utility functions
import { showSnackbar } from "@tourepedia/snackbar"

const MyComponent = () => {
  return <button onClick={() => showSnackbar("Success")}>Submit</button>
}
```

