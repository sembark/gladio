import * as React from "react"
import { storiesOf } from "@storybook/react"

import { Tooltip, Popover } from "./../src/index"
import Box from "@gladio/box"
import "./../styles/styles.css"

const stories = storiesOf("Components/Overlays", module)

stories.add("Tooltip", () => (
  <Box textAlign="center" display="flex" justifyContent="around">
    <Tooltip content="More information here">Bottom</Tooltip>
    <Tooltip content="More information here" placement="right">
      Right
    </Tooltip>
    <Tooltip content="More information here" placement="top">
      Top
    </Tooltip>
    <Tooltip content="More information here" placement="left">
      Left
    </Tooltip>
  </Box>
))

stories.add("Popover", () => (
  <Box textAlign="center">
    <Popover
      content={
        <Box>
          <Box padding="2" backgroundColor="gray-100" roundedTop="lg">
            Information Title
          </Box>
          <Box padding="2">Some details here..</Box>
        </Box>
      }
    >
      <Box as="button">More...</Box>
    </Popover>
  </Box>
))
