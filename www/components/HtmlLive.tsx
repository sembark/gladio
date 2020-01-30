import React, { useState } from "react"
import { Editor } from "react-live"
import { github } from "./themes"

const Code = React.createContext<{
  code?: string
  language?: string
  theme?: any
  disabled?: boolean
  onChange?: any
  onError?: any
  error?: string
}>({})

export function LiveProvider({
  children,
  theme = github,
  language = "html",
  code: initialCode = "",
}: {
  children: React.ReactNode
  theme?: any
  language?: string
  code?: string
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

const AnyEditor: any = Editor

export function LiveEditor(props: React.ComponentProps<typeof Editor>) {
  return (
    <Code.Consumer>
      {({ code, language, theme, disabled, onChange }) => (
        <AnyEditor
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

export function LivePreview(props: any) {
  return (
    <Code.Consumer>
      {({ code }) => (
        <div {...props} dangerouslySetInnerHTML={{ __html: code }} />
      )}
    </Code.Consumer>
  )
}

export function LiveError(props: any) {
  return (
    <Code.Consumer>
      {({ error }) => (error ? <pre {...props}>{error}</pre> : null)}
    </Code.Consumer>
  )
}
