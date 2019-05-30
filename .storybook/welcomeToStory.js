import React from "react"

import { storiesOf } from "@storybook/react"

storiesOf("Welcome", module)
  .addParameters({
    options: {
      showPanel: false,
    },
    info: {
      header: false,
      disabled: true,
      source: false,
    },
  })
  .add("Welcome", () => (
    <div className="bg-gray-100 px-3 py-6 min-h-screen font-thin">
      <div className="max-w-2xl mx-auto">
        <h1 className="font-normal text-4xl mb-3">
          Welcome to our component library.
        </h1>
        <p className="mb-3">
          Here we build clean, beautiful and accessible component which are used
          accross the tourepedia organization.
        </p>
      </div>
      <hr className="h-1 bg-gray-200" />
      <div className="max-w-2xl mx-auto">
        <h3 className="font-normal text-2xl mb-3">Project structure</h3>
        <p>
          This project is bootstrapped with{" "}
          <a href="https://lerna.js.org/" className="text-blue-600">
            lerna
          </a>{" "}
          and hold multiple packages in it's <code>projects</code> directory. To
          get an idea on how to create a new package, look into the{" "}
          <code>packages/badge</code>'s implementation. All the styles for the
          components resides inside <code>packages/css</code> module. We are
          using{" "}
          <a href="https://tailwindcss.com/" className="text-blue-600">
            Tailwindcss
          </a>{" "}
          as our css framework which a utility-first css framework. All the
          components have examples you can browse and contribute new ones.
        </p>
      </div>
    </div>
  ))
