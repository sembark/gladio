import React from "react"
import Header from "./Header"
import SEO from "./Seo"
import CodeBlock from "./CodeBlock"

export default function Layout({ children, sideBar, meta }) {
  return (
    <div>
      <Header />
      {meta ? (
        <SEO
          title={`${meta.title} | Tourepedia Design System`}
          description={meta.description}
        />
      ) : null}
      <div className="flex">
        <div className="w-64 bg-gray-100 border-r">{sideBar}</div>
        <main className="w-full py-8 px-3 sm:px-4 md:px-5 overflow-auto">
          <div className="max-w-6xl mx-auto">
            <div className="mb-8">
              <h2 className="text-3xl md:text-4xl font-light">{meta.title}</h2>
              <p className="md:text-xl font-light">{meta.description}</p>
            </div>
            {meta.name ? (
              <div className="mb-8">
                <h2>Installation</h2>
                <CodeBlock language="bash">
                  {`npm install --save ${meta.name}`}
                </CodeBlock>
              </div>
            ) : null}
            {meta.usage ? (
              <div className="mb-8">
                <h2>Usage</h2>
                <CodeBlock language="jsx">{meta.usage}</CodeBlock>
              </div>
            ) : null}
            <div className="mt-12">{children}</div>
          </div>
        </main>
      </div>
    </div>
  )
}
