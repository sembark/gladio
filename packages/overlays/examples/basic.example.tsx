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
  <Box textAlign="center" display="flex" justifyContent="between" paddingX="8">
    <Popover
      trigger="click"
      content={
        <Box>
          <Box padding="2" backgroundColor="gray-100" roundedTop="lg">
            Information Title
          </Box>
          <Box padding="2">Some details here..</Box>
        </Box>
      }
    >
      <Box as="button">Bottom...</Box>
    </Popover>
    <Popover
      trigger="click"
      placement="top"
      content={
        <Box>
          <Box padding="2" backgroundColor="gray-100" roundedTop="lg">
            Information Title
          </Box>
          <Box padding="2">Some details here..</Box>
        </Box>
      }
    >
      <Box as="button">Top...</Box>
    </Popover>
    <Popover
      trigger="click"
      placement="right"
      content={
        <Box>
          <Box padding="2" backgroundColor="gray-100" roundedTop="lg">
            Information Title
          </Box>
          <Box padding="2">Some details here..</Box>
        </Box>
      }
    >
      <Box as="button">Right...</Box>
    </Popover>
    <Popover
      trigger="click"
      placement="left"
      content={
        <Box>
          <Box padding="2" backgroundColor="gray-100" roundedTop="lg">
            Information Title
          </Box>
          <Box padding="2">Some details here..</Box>
        </Box>
      }
    >
      <Box as="button">Left...</Box>
    </Popover>
  </Box>
))
