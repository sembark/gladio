import * as React from "react"
import { storiesOf } from "@storybook/react"

import Button, { ButtonGroup, ButtonToolbar } from "./../src/index"

const stories = storiesOf("Components/Button", module)

stories.add("Buttons", () => (
  <div>
    <Button>Default</Button>
    <Button primary>Primary</Button>
    <Button success>Success</Button>
    <Button error>Error</Button>
    <Button warning>Warning</Button>
    <Button accent>Accent</Button>
  </div>
))
stories.add("Disabled Buttons", () => (
  <div>
    <Button disabled>Default</Button>
    <Button disabled primary>
      Primary
    </Button>
    <Button disabled success>
      Success
    </Button>
    <Button disabled error>
      Error
    </Button>
    <Button disabled warning>
      Warning
    </Button>
    <Button disabled accent>
      Accent
    </Button>
  </div>
))
stories.add("Button Group", () => (
  <ButtonGroup>
    <Button>Default</Button>
    <Button primary>Primary</Button>
    <Button success>Success</Button>
    <Button error>Error</Button>
    <Button warning>Warning</Button>
    <Button accent>accent</Button>
  </ButtonGroup>
))

stories.add("Button Toolbar", () => (
  <ButtonToolbar>
    <Button>Default</Button>
    <Button primary>Primary</Button>
    <Button success>Success</Button>
    <ButtonGroup>
      <Button error>Error</Button>
      <Button warning>Warning</Button>
    </ButtonGroup>
    <Button accent>accent</Button>
  </ButtonToolbar>
))
