import * as React from "react"
import moment from "moment"
import * as ReactLive from "react-live"
import Highlight, { defaultProps, Language } from "prism-react-renderer"
import { github as theme } from "./themes"
import * as UI from "@tourepedia/ui"
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
        className={"react-live" + (preview && !live ? " react-preview" : "")}
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
            <React.Fragment>
              <Live.LiveEditor className="editor" tabIndex={-1} />
              <Live.LiveError className="error" />
            </React.Fragment>
          ) : null}
          <Live.LivePreview className="preview" />
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
          <pre className={className + " only-preview"} style={{ ...style }}>
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
      .react-live {
        border: 2px solid #718096;
        border-radius: 0.5rem;
        position: relative;
        margin: 60px 10px;
      }
      .react-live:before {
        content: "Editable Code Example";
        font-size: 0.9rem;
        display: block;
        bottom: 100%;
        width: 100%;
        padding: 1rem;
        text-transform: uppercase;
        color: gray;
        font-weight: bold;
        letter-spacing: 1px;
      }
      .react-live.react-preview:before {
        display: none;
      }
      .react-live > *:not(:first-child) {
        border-top: 2px solid #f7fafc;
        padding: 1rem;
      }
      .react-live > .editor {
        font-size: 1.3rem;
      }
      .react-live > .error {
        background: #fc8181;
      }
      .only-preview {
        border: 2px solid #f7fafc;
        border-radius: 0.25rem;
        position: relative;
        padding: 1rem;
        margin: 10px;
      }
      pre {
        overflow: auto;
      }
    `}</style>
  )
}
