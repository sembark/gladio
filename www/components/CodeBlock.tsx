import * as React from "react"
import moment from "moment"
import * as ReactLive from "react-live"
import Highlight, { defaultProps, Language } from "prism-react-renderer"
import { github as theme } from "./themes"
import * as UI from "@gladio/ui"
import * as HtmlLive from "./HtmlLive"

export default function CodeBlock({
  live,
  preview,
  noInline,
  className,
  children,
  language,
}: {
  live?: boolean
  preview?: boolean
  noInline?: boolean
  className?: string
  language?: string
  children: string
}) {
  language = language || (className || "").replace(/language-/, "") || "sh"
  if (live || preview) {
    let Live = ReactLive
    if (language === "html") {
      Live = HtmlLive as any
    }
    return (
      <div
        className={
          "react-live md:flex flex-wrap border-2 border-gray-600 rounded relative my-12" +
          (preview && !live ? " react-preview" : "")
        }
      >
        <Live.LiveProvider
          code={children}
          language={language as Language}
          noInline={noInline}
          theme={theme}
          scope={{
            ...React,
            moment,
            ...UI,
          }}
        >
          {live ? (
            <div className="md:w-1/2 md:border-r border-gray-300">
              <div className="text-xs py-2 px-4 uppercase text-gray-600 font-bold tracking-wider">
                Code Editor
              </div>
              <Live.LiveEditor className="text-xl" tabIndex={-1} />
              <Live.LiveError className="bg-red-100" />
            </div>
          ) : null}
          <Live.LivePreview className={`${live ? "md:w-1/2" : "w-full"} p-2`} />
        </Live.LiveProvider>
        <Styles />
      </div>
    )
  }
  return (
    <>
      <Highlight
        {...defaultProps}
        theme={theme}
        code={children}
        language={language as Language}
      >
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre
            className={
              className +
              " only-preview rounded border-2 border-gray-300 relative p-4 my-2"
            }
            style={{ ...style }}
          >
            {tokens.map((line, i) => (
              <div key={i} {...getLineProps({ line, key: i })}>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </pre>
        )}
      </Highlight>
      <Styles />
    </>
  )
}

function Styles() {
  return (
    <style jsx global>{`
      pre {
        overflow: auto;
      }
    `}</style>
  )
}
