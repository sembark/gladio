import React, { TableHTMLAttributes } from "react"
import App from "next/app"
import { MDXProvider } from "@mdx-js/react"

import CodeBlock from "./../components/CodeBlock"
import "@gladio/ui/styles/index.css"

// unregister serviceWorker worker
if (typeof window !== "undefined")
  if ("serviceWorker" in window.navigator) {
    navigator.serviceWorker.ready.then(registration => {
      registration.unregister()
    })
  }

const components = {
  pre: (props: React.HTMLProps<HTMLPreElement>) => <>{props.children}</>,
  code: CodeBlock,
  h2: (props: React.HTMLProps<HTMLHeadingElement>) => (
    <h2 className="mt-12 mb-4" {...props} />
  ),
  h3: (props: React.HTMLProps<HTMLHeadingElement>) => (
    <h3 className="mt-8 mb-4" {...props} />
  ),
  p: (props: React.HTMLProps<HTMLParagraphElement>) => (
    <p className="mb-4" {...props} />
  ),
  table: (props: React.HTMLProps<HTMLTableElement>) => (
    <table className="table table-bordered table-striped" {...props} />
  ),
  inlineCode: (props: React.HTMLProps<HTMLDivElement>) => (
    <code
      className="text-accent-700 p-1 rounded bg-gray-100 shadow text-sm"
      {...props}
    />
  ),
  blockquote: (props: React.HTMLProps<HTMLQuoteElement>) => (
    <blockquote
      className="border-l-4 text-gray-600 border-gray-300 px-2 py-4 my-4 bg-gray-100"
      {...props}
    />
  ),
}

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <MDXProvider components={components}>
        <Component {...pageProps} />
      </MDXProvider>
    )
  }
}

export default MyApp
