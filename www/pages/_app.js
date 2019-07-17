import React from "react"
import App, { Container } from "next/app"
import { MDXProvider } from "@mdx-js/react"

import CodeBlock from "./../components/CodeBlock"
import "@tourepedia/ui/styles/index.css"

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
  inlineCode: props => (
    <code
      className="bg-gray-100 text-red-500 px-1 py-1px rounded leading-loose"
      {...props}
    />
  ),
  blockquote: props => (
    <blockquote
      className="border-l-4 text-gray-600 border-gray-300 px-2 pt-4 mb-4 pb-px bg-gray-100"
      {...props}
    />
  ),
}

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  render() {
    const { Component, pageProps } = this.props

    return (
      <Container>
        <MDXProvider components={components}>
          <Component {...pageProps} />
        </MDXProvider>
      </Container>
    )
  }
}

export default MyApp
