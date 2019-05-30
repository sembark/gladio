import * as React from "react"
import { storiesOf } from "@storybook/react"

import "./../lib/styles.css"

const stories = storiesOf("Styles/Welcome", module)

stories
  .addParameters({
    options: {
      showPanel: false,
    },
    info: {
      header: false,
    },
  })
  .add("Welcome to our styles", () => (
    <div className="antialiased bg-gray-100 font-sans px-5 py-8">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-3xl mb-4">
          Tourepedia Styles: Built with{" "}
          <a
            href="https://tailwindcss.com/"
            className="text-primary-400 hover:text-primary-500"
          >
            Tailwind
          </a>
        </h1>
        <p>Create something beautiful with all utility styles.</p>
      </div>
    </div>
  ))
