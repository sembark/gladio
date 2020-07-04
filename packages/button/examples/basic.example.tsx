import * as React from "react"
import { storiesOf } from "@storybook/react"

import Button, { ButtonGroup, ButtonToolbar } from "./../src/index"
import "./../styles/styles.css"

const stories = storiesOf("Components/Button", module)

stories.add("Basic Buttons", () => (
  <div>
    <Button>Default</Button>
    <Button primary>Primary</Button>
    <Button secondary>Secondary</Button>
    <Button tertiary>Tertiary</Button>
  </div>
))

stories.add("Full Width/Block Button", () => (
  <div className="p-4 max-w-lg mx-auto">
    <Button fullWidth branded primary>
      Full Width Button
    </Button>
  </div>
))

stories.add("Small Button", () => (
  <div className="p-4 max-w-lg mx-auto">
    <Button primary sm>
      Me Small
    </Button>
  </div>
))

stories.add("Buttons with Semantics/Context/Colors", () => (
  <div className="p-4">
    <div className="mb-8">
      <h4>Default</h4>
      <Button primary>Primary</Button>
      <Button>Secondary</Button>
      <Button tertiary>Tertiary</Button>
    </div>
    <div className="mb-8">
      <h4>Branded/Main</h4>
      <Button primary branded>
        Primary
      </Button>
      <Button branded>Secondary</Button>
      <Button tertiary branded>
        Tertiary
      </Button>
    </div>
    <div className="mb-8">
      <h4>Accent</h4>
      <Button primary accent>
        Primary
      </Button>
      <Button accent>Secondary</Button>
      <Button tertiary accent>
        Tertiary
      </Button>
    </div>
    <div className="mb-8">
      <h4>Success</h4>
      <Button primary success>
        Primary
      </Button>
      <Button success>Secondary</Button>
      <Button tertiary success>
        Tertiary
      </Button>
    </div>
    <div className="mb-8">
      <h4>Danger</h4>
      <Button primary danger>
        Primary
      </Button>
      <Button danger>Secondary</Button>
      <Button tertiary danger>
        Tertiary
      </Button>
    </div>
    <div className="mb-8">
      <h4>Warning</h4>
      <Button primary warning>
        Primary
      </Button>
      <Button warning>Secondary</Button>
      <Button tertiary warning>
        Tertiary
      </Button>
    </div>
    <div className="mb-8">
      <h4>Light</h4>
      <div className="p-2 bg-black">
        <Button primary light>
          Primary
        </Button>
        <Button light>Secondary</Button>
        <Button tertiary light>
          Tertiary
        </Button>
      </div>
    </div>
  </div>
))
stories.add("Disabled Buttons", () => (
  <div>
    <Button disabled>Default</Button>
    <Button disabled branded>
      Primary
    </Button>
    <Button disabled success>
      Success
    </Button>
    <Button disabled danger>
      Danger
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
    <Button branded>Primary</Button>
    <Button success>Success</Button>
    <Button danger>Danger</Button>
    <Button warning>Warning</Button>
    <Button accent>accent</Button>
  </ButtonGroup>
))

stories.add("Button Toolbar", () => (
  <ButtonToolbar>
    <Button>Default</Button>
    <Button branded>Primary</Button>
    <Button success>Success</Button>
    <ButtonGroup>
      <Button danger>Danger</Button>
      <Button warning>Warning</Button>
    </ButtonGroup>
    <Button accent>accent</Button>
  </ButtonToolbar>
))
