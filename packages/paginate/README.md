# Paginate Component

Use this component to show the pagination in your application

## Installation

```
npm install --save @tourepedia/paginate
```

## Usage

```js
import Paginate from "@tourepedia/paginate"

function App(props) {
  return (
    <div>
      <Paginate
        total={props.total}
        from={props.from}
        to={props.to}
        currentPage={props.currentPage}
        lastPage={props.lastPage}
        isFetching={props.isFetchin}
        onChange={page => props.fetch({ page })}
      />
    </div>
  )
}
```
