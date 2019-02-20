import * as React from "react"
import { storiesOf } from "@storybook/react"

import Badge from "./../src/index"

const stories = storiesOf("Components/Badge", module)

stories.add("Basic Badge", () => <Badge>12</Badge>)
