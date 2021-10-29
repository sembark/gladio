import React, { useMemo } from "react"
import Icons from "@gladio/icons"
import classNames from "classnames"
import { Omit, $PropertyType } from "utility-types"
import Box from "@gladio/box"

type TBoxProps = React.ComponentProps<typeof Box>

type TStatus = "info" | "error" | "success" | "warning"

type TType = "assertive" | "polite"

export interface AlertProps
  extends Omit<
    TBoxProps,
    "status" | "children" | "type" | "role" | "aria-live"
  > {
  status?: TStatus
  children?: React.ReactNode
  hideIcon?: boolean
  type?: TType
  title?: string
}

function Alert({
  status: statusProp,
  type: typeProp,
  children,
  hideIcon,
  className,
  title,
  ...props
}: AlertProps) {
  if (!children && !title) return null
  const type = typeProp || getTypeBasedOnStatus(statusProp)
  const status = statusProp || getStatusBasedOnType(type)
  const Icon = getIconBasedOnStatus(status)
  const stylesForStatus = useMemo(() => getStylesForStatus(status), [status])
  return (
    <Box
      display="flex"
      alignItems="start"
      marginTop="2"
      marginBottom="4"
      padding="3"
      border
      rounded="lg"
      {...stylesForStatus}
      {...props}
      role={type === "assertive" ? "alert" : "status"}
      aria-live={type}
      className={classNames(
        "alert",
        {
          [`alert--${status}`]: status && status !== "info",
        },
        className
      )}
    >
      {!hideIcon ? (
        <Box marginRight="3" className="alert__icon" opacity="75">
          <Icon style={{ transform: "translateY(2px)" }} />
        </Box>
      ) : null}
      <Box className="alert__content" flex="1">
        {title ? (
          <Box fontWeight="semibold" marginBottom={children ? "2" : "0"}>
            {title}
          </Box>
        ) : null}
        {children}
      </Box>
    </Box>
  )
}

function getTypeBasedOnStatus(status?: TStatus): TType {
  if (status === "error") {
    return "assertive"
  }
  return "polite"
}

function getStatusBasedOnType(type?: TType): TStatus {
  if (type === "assertive") {
    return "error"
  }
  return "info"
}

function getIconBasedOnStatus(status: TStatus) {
  let Icon
  switch (status) {
    case "warning":
      Icon = Icons.AttentionSolid
      break
    case "error":
      Icon = Icons.CancelCircleSolid
      break
    case "success":
      Icon = Icons.OkCircleSolid
      break
    default:
      Icon = Icons.InfoSolid
      break
  }
  return Icon
}

function getStylesForStatus(status: TStatus) {
  switch (status) {
    case "error":
      return getStylesForColor("red")
    case "success":
      return getStylesForColor("green")
    case "warning":
      return getStylesForColor("yellow")
    default:
      return getStylesForColor("gray")
  }
}

function getStylesForColor(
  color: string
): Pick<TBoxProps, "borderColor" | "backgroundColor" | "textColor"> {
  return {
    borderColor: `${color}-300` as any as $PropertyType<
      TBoxProps,
      "borderColor"
    >,
    backgroundColor: `${color}-100` as any as $PropertyType<
      TBoxProps,
      "backgroundColor"
    >,
    textColor: `${color}-800` as any as $PropertyType<TBoxProps, "textColor">,
  }
}

export default Alert
