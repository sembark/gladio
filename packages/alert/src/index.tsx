import React from "react"
import Icons from "@tourepedia/icons"
import classNames from "classnames"
import { Omit } from "utility-types"

interface AlertProps
  extends Omit<
    React.HTMLProps<HTMLDivElement>,
    "status" | "children" | "type" | "role" | "aria-live"
  > {
  status?: "info" | "error" | "success" | "warning"
  children?: React.ReactNode
  hideIcon?: boolean
  type?: "assertive" | "polite"
}

export default function Alert({
  status,
  type,
  children,
  hideIcon,
  className,
  ...props
}: AlertProps) {
  if (!children) return null
  if (!type) {
    if (status === "error") {
      type = "assertive"
    } else {
      type = "polite"
    }
  }
  if (!status) {
    if (type === "assertive") {
      status = "error"
    } else {
      status = "info"
    }
  }
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
  return (
    <div
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
        <div className="alert__icon">
          <Icon />
        </div>
      ) : null}
      <div className="alert__content">{children}</div>
    </div>
  )
}
