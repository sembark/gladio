import * as React from "react"
import { Omit } from "utility-types"
import { contains, ownerDocument } from "@tourepedia/dom-helpers"
import classNames from "classnames"
import { Input } from "@tourepedia/input"

const { useState, useEffect, useRef } = React

function Loader({ duration = 500 }: { duration?: number }) {
  const [deg, setDeg] = useState<number>(0)
  useEffect(() => {
    const handler = requestAnimationFrame(() => {
      setDeg((deg + (360 / (duration || 150)) * 16) % 360)
    })
    return () => {
      cancelAnimationFrame(handler)
    }
  }, [deg])
  return (
    <div
      style={{
        position: "absolute",
        right: "10px",
        bottom: "10px",
        width: "20px",
        height: "20px",
        borderRadius: "50%",
        overflow: "hidden",
        border: "2px solid #a0aec0",
        borderTop: "none",
        borderLeft: "none",
        transform: `rotate(${deg}deg)`,
      }}
    />
  )
}

export interface SelectProps {
  className?: string
  creatable?: boolean
  disabled?: boolean
  fetchOnMount?: boolean
  label?: React.ReactNode
  labelKey?: string
  multiple?: boolean
  name?: string
  onBlur?: (e: any) => void
  onChange: (value: any | Array<any>, name: string) => void
  onFocus?: (e: any) => void
  onQuery?: (query: string) => void
  options?: Array<any>
  placeholder?: string
  query?: string
  required?: boolean
  searchable?: boolean
  value?: any | Array<any>
  isLoading?: boolean
}

export function Select({
  className = "",
  creatable = false,
  disabled = false,
  fetchOnMount,
  label,
  labelKey = "name",
  multiple,
  name: propName,
  onBlur,
  onChange,
  onFocus,
  onQuery,
  options = [],
  placeholder = "Type to search...",
  query = "",
  required,
  searchable = true,
  value,
  isLoading,
}: SelectProps) {
  const groupRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const [isFocused, changeFocusState] = useState<boolean>(false)
  useEffect(() => {
    if (fetchOnMount) {
      onQuery && onQuery(query || "")
    }
  }, [fetchOnMount])
  const [focusedOption, changeFocusedOption] = useState<number | undefined>(
    undefined
  )
  const name: string = propName || (multiple ? "select[]" : "select")
  if (
    creatable &&
    (!options || options.length === 0) &&
    query &&
    query.trim()
  ) {
    options = (options || []).concat([
      {
        id: query.trim(),
        name: query.trim(),
        created: true,
      },
    ])
  }
  if (value) {
    let moreOptions = []
    if (Array.isArray(value)) {
      moreOptions = value
    } else {
      moreOptions = [value]
    }
    // only push the more options if they are not already present in
    // the options list
    moreOptions = moreOptions.filter(
      moreOption => !options.some(option => option.id === moreOption.id)
    )
    options = options.concat(moreOptions)
  }
  function setIsFouced(isFocused: boolean) {
    changeFocusState(isFocused)
    if (!isFocused) {
      onBlur && onBlur({ target: { name } })
    }
  }
  // handle the focused state
  useEffect(() => {
    const document = ownerDocument()
    if (!document || disabled || !groupRef.current) {
      return () => {}
    }
    function handleClick(e: any) {
      const container = groupRef.current
      if (contains(container, e.target)) {
        if (!isFocused) {
          setIsFouced(true)
        }
      } else if (isFocused) {
        setIsFouced(false)
      }
    }
    document.addEventListener("click", handleClick)
    document.addEventListener("keyup", handleClick)
    return () => {
      document.removeEventListener("click", handleClick)
      document.removeEventListener("keyup", handleClick)
    }
  }, [isFocused, groupRef.current])
  // handle the keyboad navigation
  useEffect(() => {
    const document = ownerDocument()
    // handle the base cases where no need to manage the keyboad focus stuff
    if (!isFocused || !document || disabled || !options || !options.length) {
      changeFocusedOption(undefined)
      return () => {}
    }
    // if no option is focused
    // focus the first selected option or first option if no option is selected
    if (focusedOption === undefined) {
      const firstSelectedValue = Array.isArray(value) ? value[0] : value
      if (!firstSelectedValue) {
        changeFocusedOption(0)
      } else {
        const selectedOptionIndex = options.findIndex(
          o => o.id === firstSelectedValue.id
        )
        changeFocusedOption(selectedOptionIndex)
      }
    }
    function handleKeyDown(e: any) {
      const { key } = e
      const numberOfOptions = options.length
      switch (key) {
        case "ArrowDown":
          changeFocusedOption(((focusedOption || 0) + 1) % numberOfOptions)
          break
        case "ArrowUp":
          changeFocusedOption(
            (() => {
              const x = ((focusedOption || 0) - 1) % numberOfOptions
              return x < 0 ? x + numberOfOptions : x
            })()
          )
          break
        case "Enter":
          e.preventDefault()
          const option = options[focusedOption || 0]
          const checked = value
            ? Array.isArray(value)
              ? value.some(v => v.id === option.id)
              : (value as any).id === option.id
            : false
          handleOptionClick(option, !checked)
          break
        default:
          break
      }
    }
    document.addEventListener("keydown", handleKeyDown)
    return () => {
      document.removeEventListener("keydown", handleKeyDown)
    }
  }, [isFocused, focusedOption, options, value])
  function handleOptionClick(option: any, checked: boolean) {
    const newValues = checked
      ? Array.isArray(value)
        ? value.concat([option])
        : option
      : Array.isArray(value)
      ? value.filter(v => v.id !== option.id)
      : undefined
    onChange(newValues, name)
    if (!multiple && newValues) {
      setTimeout(() => {
        setIsFouced(false)
      })
    }
  }
  return (
    <div className={classNames("select", className)} data-focused={isFocused}>
      <div role="group" ref={groupRef}>
        {label ? <label htmlFor={name}>{label}</label> : null}
        <Input
          type="search"
          value={
            isFocused ? query : !multiple && value ? value[labelKey] : query
          }
          disabled={disabled}
          onChange={e => {
            onQuery && onQuery(e.currentTarget.value)
          }}
          id={name}
          onFocus={onFocus}
          required={required}
          readOnly={!searchable}
          placeholder={placeholder}
          aria-haspopup={true}
          aria-autocomplete={searchable ? "inline" : "list"}
          autoComplete="off"
          ref={inputRef}
        />
        {isLoading ? <Loader /> : null}
        <ol role="listbox" aria-multiselectable={multiple}>
          {isFocused && options.length === 0 ? (
            <li role="option" aria-readonly={true}>
              Type to search...
            </li>
          ) : null}
          {options.map((option, i) => {
            const checked = value
              ? Array.isArray(value)
                ? value.some(v => v.id === option.id)
                : (value as any).id === option.id
              : false
            return (
              <li
                key={option.id}
                role="option"
                aria-selected={checked}
                data-focused={i === focusedOption}
                title={option.title || option.description}
                tabIndex={-1}
                onClick={() => {
                  !disabled && handleOptionClick(option, !checked)
                }}
              >
                {option[labelKey]}
              </li>
            )
          })}
        </ol>
      </div>
      {value && Array.isArray(value) ? (
        <ul className="selected-list">
          {value.map(v => (
            <li
              key={v.id}
              title="Click to unselect"
              role="button"
              onClick={() =>
                !disabled &&
                onChange(value.filter(val => val.id !== v.id) as any, name)
              }
            >
              {v[labelKey]}
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  )
}

export interface AsyncProps
  extends Omit<SelectProps, "onQuery" | "options" | "query">,
    Partial<Pick<SelectProps, "onQuery" | "options" | "query">> {
  fetch: (query: string) => Promise<any[]>
  debounceBy?: number
}

export function Async({ fetch, debounceBy = 300, ...otherProps }: AsyncProps) {
  const [query, setQuery] = useState<string>("")
  const [isLoading, changeLoading] = useState<boolean>(false)
  const [options, setOptions] = useState<Array<any>>([])
  const lastDeboundeHandler = useRef<number>()
  useEffect(() => {
    return () => {
      typeof window !== "undefined" &&
        window.clearTimeout(lastDeboundeHandler.current)
    }
  }, [lastDeboundeHandler])
  return (
    <Select
      options={options}
      query={query}
      isLoading={isLoading}
      onQuery={query => {
        changeLoading(true)
        setQuery(query)
        clearTimeout(lastDeboundeHandler.current)
        lastDeboundeHandler.current = window.setTimeout(() => {
          fetch(query)
            .then(setOptions)
            .then(resp => {
              changeLoading(false)
              return resp
            })
            .catch(error => {
              isLoading && changeLoading(false)
              return Promise.reject(error)
            })
        }, debounceBy)
      }}
      {...otherProps}
    />
  )
}

export default Select
