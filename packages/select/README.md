# Select component

Use a custom select to enhance UX for input fields that requires selection of items

## Installation

```bash
yarn add @tourepedia/select
```

## Usage

```js
import Select, { Async } from "@tourepedia/select"

const MyComponent = () => {
  const [query, setQuery] = useState("")
  const [value, setValue] = useState()
  return (
    <div>
      <Select
        value={value}
        onChange={selectedValue => {
          setValue(selectedValue)
        }}
        onQuery={setQuery}
      />
      <Async
        onChange={selectedValue => {
          setValue(selectedValue)
        }}
        fetch={query => Promise.resolve([])}
      />
    </div>
  )
}
```
