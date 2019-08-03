import * as React from "react"
import { storiesOf } from "@storybook/react"

const stories = storiesOf("Styles/Components/Paginate", module)

stories.add("Paginate", () => (
  <div className="max-w-lg mx-auto">
    <nav className="paginate">
      <mark>
        <b>100-150</b> <i>of</i> <b>2000</b>
      </mark>
      <ul>
        <li>
          <button className="btn" title="Previous Page">
            &lt; Prev
          </button>
        </li>
        <li>
          <button className="btn" title="Refresh this Page">
            Refresh
          </button>
        </li>
        <li>
          <button className="btn" title="Next Page">
            Next &gt;
          </button>
        </li>
      </ul>
    </nav>
  </div>
))
