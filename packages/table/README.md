# Table Component

## Installation

```bash
npm install --save @gladio/table
```

## Usage

```js
import Table from "@gladio/table"

function App() {
  return (
    <Table bordered caption="Caption here">
      <thead>
        <tr>
          <th>Heading</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Cell</td>
        </tr>
      </tbody>
    </Table>
  )
}
```
