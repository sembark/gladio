import * as React from "react"
import moment from "moment"
import { useRootClose, useId } from "@tourepedia/react-hooks"
import { useTransition, animated, config } from "react-spring"
import { Input } from "@tourepedia/input"

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
}

export default function DateTimePicker({
  renderMenu: Menu = DefaultMenu,
  id: propsId,
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

  const transitions = useTransition(isDropdownOpen, null, {
    config: config.stiff,
    from: { opacity: 0, transform: "translateY(-5px)" },
    enter: { opacity: 1, transform: "translateY(0)" },
    leave: { opacity: 0, transform: "translateY(-5px)" },
  })
  return (
    <div className="tpdt-picker" ref={containerRef}>
      <Menu
        isVisible={isDropdownOpen}
        value={value ? moment(value).format(dateTimeFormat) : undefined}
        show={() => setDropdownVisibility(true)}
        hide={() => setDropdownVisibility(false)}
        format={dateTimeFormat}
        dateFormat={dateFormat}
        timeFormat={timeFormat}
        id={id}
        toggle={() => {
          setDropdownVisibility(!isDropdownOpen)
        }}
      />
      {transitions.map(({ item, key, props: style }) =>
        item ? (
          <animated.div
            key={key}
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
  ...props
}: IDateInputMenuProps & IMenuProps) {
  return (
    <Input
      {...props}
      type="text"
      value={value}
      readOnly
      placeholder={format}
      onClick={e => {
        if (typeof document !== "undefined") {
          if (document.activeElement === e.target && !isVisible) {
            show()
          }
        }
      }}
      onFocus={() => {
        show()
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
      renderMenu={props => (
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
