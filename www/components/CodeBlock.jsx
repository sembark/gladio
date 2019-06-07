import React from "react"
import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live"
import Highlight, { defaultProps } from "prism-react-renderer"
import editorTheme from "prism-react-renderer/themes/dracula"
import { github as theme } from "./themes"
import Button from "@tourepedia/button"
import Dialog, { useDialog } from "@tourepedia/dialog"

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
    return (
      <div className="react-live">
        <LiveProvider
          code={children}
          language={language}
          noInline={noInline}
          theme={editorTheme}
          scope={{
            ...React,
            Button,
            Dialog,
            useDialog,
          }}
        >
          <LiveEditor className="editor" tabIndex="-1" />
          <LiveError className="error" />
          <LivePreview className="preview" />
        </LiveProvider>
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
        <pre className={className} style={{ ...style, padding: "20px" }}>
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
