import React, { useMemo } from "react"
import Icons from "@tourepedia/icons"
import classNames from "classnames"
import { Omit, $PropertyType } from "utility-types"
import Box from "@tourepedia/box"

type TBoxProps = React.ComponentProps<typeof Box>

type TStatus = "info" | "error" | "success" | "warning"

type TType = "assertive" | "polite"

interface AlertProps
  extends Omit<
    TBoxProps,
    "status" | "children" | "type" | "role" | "aria-live"
  > {
  status?: TStatus
  children?: React.ReactNode
  hideIcon?: boolean
  type?: TType
}

export default function Alert({
  status: statusProp,
  type: typeProp,
  children,
  hideIcon,
  className,
  ...props
}: AlertProps) {
  if (!children) return null
  const type = typeProp || getTypeBasedOnStatus(statusProp)
  const status = statusProp || getStatusBasedOnType(type)
  const Icon = getIconBasedOnStatus(status)
  const stylesForStatus = useMemo(() => getStylesForStatus(status), [status])
  return (
    <Box
      display="flex"
      alignItems="center"
      marginTop="2"
      marginBottom="4"
      padding="1"
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
        <Box
          marginRight="3"
          width="12"
          height="12"
          display="flex"
          alignItems="center"
          justifyContent="center"
          fontSize="xl"
          className="alert__icon"
        >
          <Icon />
        </Box>
      ) : null}
      <Box className="alert__content" flex="1">
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
      Icon = Icons.Attention
      break
    case "error":
      Icon = Icons.Cancel
      break
    case "success":
      Icon = Icons.Ok
      break
    default:
      Icon = Icons.Info
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
    borderColor: (`${color}-600` as any) as $PropertyType<
      TBoxProps,
      "borderColor"
    >,
    backgroundColor: (`${color}-100` as any) as $PropertyType<
      TBoxProps,
      "backgroundColor"
    >,
    textColor: (`${color}-800` as any) as $PropertyType<TBoxProps, "textColor">,
  }
}
