import * as React from "react"
import { storiesOf } from "@storybook/react"

import Paginate from "./../src/index"
import "./../../button/styles/styles.css"
import "./../styles/styles.css"

const stories = storiesOf("Components/Paginate", module)

stories.add("Paginate", () => (
  <div>
    <Paginate
      total={100}
      from={1}
      to={10}
      currentPage={1}
      lastPage={10}
      onChange={page => {}}
      isFetching={false}
    />
  </div>
))
