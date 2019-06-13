import React from "react"
import * as ReactLive from "react-live"
import Highlight, { defaultProps } from "prism-react-renderer"
import editorTheme from "prism-react-renderer/themes/dracula"
import { github as theme } from "./themes"
import * as UI from "@tourepedia/ui"
import * as HtmlLive from "./HtmlLive"

import "./code-block.css"

export default function CodeBlock({
  live,
  noInline,
  className,
  children,
  language,
}) {
  language = language || className.replace(/language-/, "")
  if (live) {
    let Live = ReactLive
    if (language === "html") {
      Live = HtmlLive
    }
    return (
      <div className="react-live">
        <Live.LiveProvider
          code={children}
          language={language}
          noInline={noInline}
          theme={editorTheme}
          scope={{
            ...React,
            ...UI,
          }}
        >
          <Live.LiveEditor className="editor" tabIndex="-1" />
          <Live.LiveError className="error" />
          <Live.LivePreview className="preview" />
        </Live.LiveProvider>
      </div>
    )
  }
  return (
    <Highlight
      {...defaultProps}
      theme={theme}
      code={children}
      language={language}
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
  )
}
