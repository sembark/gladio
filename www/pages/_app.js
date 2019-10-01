import React from "react"
import App from "next/app"
import { MDXProvider } from "@mdx-js/react"

import CodeBlock from "./../components/CodeBlock"
import "@tourepedia/ui/styles/index.css"

// unregister serviceWorker worker
if (typeof window !== "undefined")
  if ("serviceWorker" in window.navigator) {
    navigator.serviceWorker.ready.then(registration => {
      registration.unregister()
    })
  }

const components = {
  pre: props => <div {...props} />,
  code: CodeBlock,
  h2: props => <h2 className="mt-12 mb-4" {...props} />,
  h3: props => <h3 className="mt-8 mb-4" {...props} />,
  p: props => <p className="mb-4" {...props} />,
  inlineCode: props => (
    <code
      className="text-accent-700 p-1 rounded bg-gray-100 shadow text-sm"
      {...props}
    />
  ),
  blockquote: props => (
    <blockquote
      className="border-l-4 text-gray-600 border-gray-300 px-2 py-4 my-4 bg-gray-100"
      {...props}
    />
  ),
}

class MyApp extends App {
  render() {
    const { Component } = this.props
    return (
      <MDXProvider components={components}>
        <Component />
      </MDXProvider>
    )
  }
}

export default MyApp
