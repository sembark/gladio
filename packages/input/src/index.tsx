import * as React from "react"
import classNames from "classnames"
import Box, { MergeWithBoxProps } from "@gladio/box"
import "@gladio/css"

export type InputProps = MergeWithBoxProps<
  React.HTMLProps<HTMLInputElement> & {
    hasError?: boolean
  }
>
export const Input = React.forwardRef(
  (
    { className, type, hasError, ...props }: InputProps,
    ref: React.Ref<HTMLInputElement>
  ) => {
    const Input = Box as unknown as React.ComponentType<InputProps>
    const isRadio = type === "radio"
    const isRadioOrCheckbox = type === "checkbox" || isRadio
    return (
      <Input
        as="input"
        backgroundColor="white"
        border
        borderColor="gray-400"
        rounded={isRadio ? "full" : "default"}
        paddingY={isRadioOrCheckbox ? "0" : "ie-y"}
        paddingX={isRadioOrCheckbox ? "0" : "ie-x"}
        verticalAlign={isRadioOrCheckbox ? "middle" : undefined}
        display={isRadioOrCheckbox ? "inline-block" : "block"}
        lineHeight="normal"
        maxWidth="full"
        boxShadow="inner"
        outlineFocus="none"
        borderColorFocus="primary-600"
        boxShadowFocus="outline"
        ref={ref}
        type={type}
        width={
          type === "email" || type === "text" || type === "password"
            ? "full"
            : undefined
        }
        className={classNames(
          "input",
          hasError ? "has-error" : undefined,
          className
        )}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

type SelectProps = MergeWithBoxProps<
  React.HTMLProps<HTMLSelectElement> & {
    hasError?: boolean
  }
>
export const Select = React.forwardRef(
  (
    { className, hasError, ...props }: SelectProps,
    ref: React.Ref<HTMLSelectElement>
  ) => {
    const Select = Input as unknown as React.ComponentType<SelectProps>
    return (
      <Select
        as="select"
        ref={ref}
        className={classNames(
          "input",
          hasError ? "has-error" : undefined,
          className
        )}
        {...props}
      />
    )
  }
)
Select.displayName = "Select"

type TextAreaProps = MergeWithBoxProps<
  React.HTMLProps<HTMLTextAreaElement> & {
    hasError?: boolean
  }
>
export const TextArea = React.forwardRef(
  (
    { className, hasError, ...props }: TextAreaProps,
    ref: React.Ref<HTMLTextAreaElement>
  ) => {
    const TextArea = Input as unknown as React.ComponentType<TextAreaProps>
    return (
      <TextArea
        as="textarea"
        ref={ref}
        lineHeight="normal"
        height="auto"
        width="full"
        className={classNames(
          "input",
          hasError ? "has-error" : undefined,
          className
        )}
        {...props}
      />
    )
  }
)
TextArea.displayName = "TextArea"

export function FormGroup({
  className,
  hasError,
  ...props
}: React.ComponentProps<typeof Box> & { hasError?: boolean }) {
  return (
    <Box
      marginBottom="4"
      className={classNames(
        "form-group",
        hasError ? "has-error" : undefined,
        className
      )}
      {...props}
    />
  )
}

export function InputGroup({
  className,
  hasError,
  ...props
}: React.ComponentProps<typeof Box> & {
  hasError?: boolean
}) {
  return (
    <Box
      rounded
      display="flex"
      alignItems="stretch"
      lineHeight="normal"
      className={classNames(
        "input-group",
        hasError ? "has-error" : undefined,
        className
      )}
      {...props}
    />
  )
}

export function InputGroupAddon({
  className,
  ...props
}: React.ComponentProps<typeof Box>) {
  return (
    <Box
      display="inline"
      padding="ie-y"
      border
      borderColor="gray-500"
      className={classNames("input-group-addon", className)}
      {...props}
    />
  )
}

export function ErrorMessage(props: React.ComponentProps<typeof Box>) {
  return (
    <Box
      backgroundColor="red-100"
      textColor="red-800"
      marginTop="2"
      display="block"
      rounded
      fontSize="sm"
      paddingY="1"
      paddingX="3"
      className={"error-message"}
      style={{
        width: "fit-content",
      }}
      {...props}
    />
  )
}
