import React from "react"
import App, { Container } from "next/app"
import { MDXProvider } from "@mdx-js/react"

import CodeBlock from "./../components/CodeBlock"
import "@tourepedia/css/lib/styles.css"

const components = {
  pre: props => <div {...props} />,
  code: CodeBlock,
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
