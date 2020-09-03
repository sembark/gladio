import * as React from "react"
import Box from "@gladio/box"
import classNames from "classnames"
import { useId } from "@gladio/react-hooks"
import { OverlayTrigger, OverlayDelay, OverlayTriggerProps } from "./Overlay"

type CommonProps = Pick<
  OverlayTriggerProps,
  "placement" | "trigger" | "interactive"
> & {
  children: React.ReactNode
  content: React.ReactNode
}

const defaultDelay: OverlayDelay = { show: 0, hide: 250 }

export function Tooltip({ content, children, ...props }: CommonProps) {
  const id = useId("tooltip")
  return (
    <OverlayTrigger
      delay={defaultDelay}
      interactive
      {...props}
      overlay={({ props, show, arrowProps }) => (
        <Box
          id={id}
          className={classNames("tooltip", { "tooltip--show": show })}
          role="tooltip"
          hidden={!show}
          display={show ? "block" : undefined}
          margin="0"
          fontSize="sm"
          {...props}
        >
          <Box className="tooltip__arrow" {...arrowProps} />
          <Box
            className="tooltip__inner"
            maxWidth="sm"
            paddingX="3"
            paddingY="2"
            textColor="white"
            backgroundColor="gray-800"
            rounded
          >
            {content}
          </Box>
        </Box>
      )}
    >
      {(props) => <span {...props}>{children}</span>}
    </OverlayTrigger>
  )
}

export function Popover({ content, children, ...props }: CommonProps) {
  const id = useId("popover")
  return (
    <OverlayTrigger
      delay={defaultDelay}
      interactive
      {...props}
      overlay={({ props, show, arrowProps }) => (
        <Box
          className={classNames("popover", { "popover--show": show })}
          role="tooltip"
          hidden={!show}
          display={show ? "block" : undefined}
          id={id}
          {...props}
        >
          <Box className="popover__arrow" {...arrowProps} />
          <Box
            className="popover__inner"
            backgroundColor="white"
            rounded="lg"
            border
            boxShadow="lg"
            maxWidth="sm"
          >
            {content}
          </Box>
        </Box>
      )}
    >
      {(props) => <span {...props}>{children}</span>}
    </OverlayTrigger>
  )
}
