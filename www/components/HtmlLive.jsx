import React, { useState } from "react"
import { Editor } from "react-live"
import { github } from "./themes"

const Code = React.createContext({})

export function LiveProvider({
  children,
  theme = github,
  language = "html",
  code: initialCode = "",
}) {
  const [code, changeCode] = useState(initialCode)
  const [error, handleError] = useState("")
  return (
    <Code.Provider
      value={{
        error,
        code,
        onChange: changeCode,
        onError: handleError,
        theme,
        language,
      }}
    >
      {children}
    </Code.Provider>
  )
}

export function LiveEditor(props) {
  return (
    <Code.Consumer>
      {({ code, language, theme, disabled, onChange }) => (
        <Editor
          theme={theme}
          code={code}
          language={language}
          disabled={disabled}
          onChange={onChange}
          {...props}
        />
      )}
    </Code.Consumer>
  )
}

export function LivePreview(props) {
  return (
    <Code.Consumer>
      {({ code, error }) => (
        <div {...props} dangerouslySetInnerHTML={{ __html: code }} />
      )}
    </Code.Consumer>
  )
}

export function LiveError(props) {
  return (
    <Code.Consumer>
      {({ error }) => (error ? <pre {...props}>{error}</pre> : null)}
    </Code.Consumer>
  )
}
