import React from "react"
import Document, { Head, Main, NextScript } from "next/document"

function Link({ href, ...props }) {
  return <link href={href} {...props} />
}

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }
  render() {
    return (
      <html lang="en" className="bg-gray-100">
        <Head>
          <meta name="theme-color" content="#000000" />
          <Link rel="manifest" href="/manifest.json" />
          <Link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
          <Link rel="icon" href="/favicon.ico" type="image/x-icon" />
        </Head>
        <body className="tds bg-white leading-relaxed text-gray-800">
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
