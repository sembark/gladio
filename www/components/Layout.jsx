import React from "react"
import Header from "./Header"
import SEO from "./Seo"

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
        <main className="w-full py-8 px-8">
          <div className="max-w-4xl mx-auto">
            <div>
              <h2 className="text-3xl md:text-4xl font-light">{meta.title}</h2>
              <p className="md:text-xl font-light">{meta.description}</p>
            </div>
            <div className="mt-20">{children}</div>
          </div>
        </main>
      </div>
    </div>
  )
}
