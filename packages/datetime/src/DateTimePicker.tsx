import * as React from "react"
import moment from "moment"
import { useRootClose, useId } from "@gladio/react-hooks"
import { useTransition, animated, config } from "@react-spring/web"
import { Input } from "@gladio/input"
import classNames from "classnames"

import DateTime from "./DateTime"
import { getDateTimeFormats } from "./utils"

interface IMenuProps {
  value?: string
  isVisible: boolean
  toggle: () => any
  show: () => any
  hide: () => any
  format: string
  dateFormat: string
  timeFormat: string
  id?: string
  readOnly?: boolean
  disabled?: boolean
}

function DefaultMenu({ value, toggle }: IMenuProps) {
  return (
    <button className="tpdt-picker-toggle btn" onClick={toggle}>
      {value || "Select A Date"}
    </button>
  )
}

interface IDateTimePickerProps extends React.ComponentProps<typeof DateTime> {
  renderMenu?: typeof DefaultMenu
  id?: string
  rightAlign?: boolean
  readOnly?: boolean
  disabled?: boolean
}

export default function DateTimePicker({
  renderMenu: Menu = DefaultMenu,
  id: propsId,
  rightAlign,
  readOnly,
  disabled,
  ...props
}: IDateTimePickerProps) {
  const {
    value,
    dateFormat: configDateFormat,
    timeFormat: configTimeFormat,
  } = props

  const [isDropdownOpen, setDropdownVisibility] = React.useState<boolean>(false)
  const _id = useId("tpdt_picker_menu")
  const id = propsId || _id

  // handle the outside close
  const containerRef = React.useRef<HTMLDivElement>(null)
  useRootClose(containerRef, () => {
    setDropdownVisibility(false)
  })

  const { dateTimeFormat, dateFormat, timeFormat } = React.useMemo(
    () => getDateTimeFormats(configDateFormat, configTimeFormat),
    [configDateFormat, configTimeFormat]
  )

  // hide the dropdown when values changes
  React.useEffect(() => {
    if (value && !timeFormat && dateFormat) {
      const id = setTimeout(() => {
        setDropdownVisibility(false)
      }, 100)
      return () => {
        clearTimeout(id)
      }
    }
    return () => {}
  }, [value ? moment(value).format(dateFormat) : value])

  const transitions = useTransition(isDropdownOpen, {
    config: config.stiff,
    from: { opacity: 0, transform: "translateY(-5px)" },
    enter: { opacity: 1, transform: "translateY(0)" },
    leave: { opacity: 0, transform: "translateY(-5px)" },
  })
  return (
    <div
      className={classNames("tpdt-picker", {
        "tpdt-picker--right": rightAlign,
      })}
      ref={containerRef}
    >
      <Menu
        isVisible={isDropdownOpen}
        value={value ? moment(value).format(dateTimeFormat) : undefined}
        show={() => setDropdownVisibility(true)}
        hide={() => setDropdownVisibility(false)}
        format={dateTimeFormat}
        dateFormat={dateFormat}
        timeFormat={timeFormat}
        id={id}
        readOnly={readOnly}
        disabled={disabled}
        toggle={() => {
          setDropdownVisibility(!isDropdownOpen)
        }}
      />
      {transitions((style, item) =>
        item ? (
          <animated.div
            key={Number(item)}
            style={style}
            className="tpdt-picker-dropdown"
          >
            <label htmlFor={id}>
              <DateTime {...props} />
            </label>
          </animated.div>
        ) : null
      )}
    </div>
  )
}

interface IDateInputMenuProps
  extends Pick<
    React.HTMLProps<HTMLInputElement>,
    "onBlur" | "placeholder" | "name" | "id"
  > {}

function DateInputMenu({
  format,
  value,
  show,
  hide,
  toggle,
  isVisible,
  dateFormat,
  timeFormat,
  readOnly,
  disabled,
  ...props
}: IDateInputMenuProps & IMenuProps) {
  return (
    <Input
      {...props}
      disabled={disabled}
      type="text"
      value={value}
      readOnly
      placeholder={format}
      onClick={(e) => {
        if (typeof document !== "undefined" && !readOnly && !disabled) {
          if (document.activeElement === e.target && !isVisible) {
            show()
          }
        }
      }}
      onFocus={() => {
        if (!readOnly && !disabled) {
          show()
        }
      }}
    />
  )
}

interface IDateTimeInputProps
  extends IDateTimePickerProps,
    IDateInputMenuProps {}

export function DateTimeInput({
  onBlur,
  placeholder,
  name,
  ...props
}: IDateTimeInputProps) {
  return (
    <DateTimePicker
      renderMenu={(props) => (
        <DateInputMenu
          {...props}
          onBlur={onBlur}
          name={name}
          placeholder={placeholder}
        />
      )}
      {...props}
    />
  )
}
