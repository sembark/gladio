import * as React from "react"
import { storiesOf } from "@storybook/react"

const stories = storiesOf("Styles/Components/Button", module)

stories.add("Basic Buttons", () => (
  <div>
    <button className="btn">Default</button>
    <button className="btn btn-primary">Primary</button>
    <button className="btn btn-success">Success</button>
    <button className="btn btn-error">Error</button>
    <button className="btn btn-warning">Warning</button>
    <button className="btn btn-accent">Accent</button>
  </div>
))

stories.add("Link Buttons", () => (
  <div>
    <a href="#" className="btn">
      Default
    </a>
    <a href="#" className="btn btn-primary">
      Primary
    </a>
    <a href="#" className="btn btn-success">
      Success
    </a>
    <a href="#" className="btn btn-error">
      Error
    </a>
    <a href="#" className="btn btn-warning">
      Warning
    </a>
    <a href="#" className="btn btn-accent">
      Accent
    </a>
  </div>
))

stories.add("Disabled Buttons", () => (
  <div>
    <button disabled className="btn">
      Default
    </button>
    <button disabled className="btn btn-primary">
      Primary
    </button>
    <button disabled className="btn btn-success">
      Success
    </button>
    <button disabled className="btn btn-error">
      Error
    </button>
    <button disabled className="btn btn-warning">
      Warning
    </button>
    <button disabled className="btn btn-accent">
      Accent
    </button>
  </div>
))

stories.add("Button Group", () => (
  <div className="btn-group">
    <button className="btn">Default</button>
    <button className="btn btn-primary">Primary</button>
    <button className="btn btn-success">Success</button>
    <button className="btn btn-error">Error</button>
    <button className="btn btn-warning">Warning</button>
    <button className="btn btn-accent">Accent</button>
  </div>
))

stories.add("Button Toolbar", () => (
  <div>
    <div className="btn-toolbar">
      <button className="btn">Default</button>
      <button className="btn btn-primary">Primary</button>
      <div className="btn-group">
        <button className="btn btn-success">Success</button>
        <button className="btn btn-error">Error</button>
      </div>
      <button className="btn btn-warning">Warning</button>
      <div className="btn-group">
        <button className="btn btn-accent">Accent</button>
        <button disabled className="btn btn-accent">
          Accent
        </button>
      </div>
      <button disabled className="btn btn-warning">
        Warning
      </button>
    </div>
  </div>
))
stories.add("Button Toolbar with Toolbar", () => (
  <div>
    <div className="btn-toolbar">
      <button className="btn">Toolbar > btn</button>
    </div>
    <div className="btn-toolbar">
      <button className="btn">Toolbar > btn</button>
      <button className="btn btn-primary">Primary</button>
      <div className="btn-group">
        <button className="btn btn-success">Toolbar > Group > btn</button>
        <button className="btn btn-error">Error</button>
      </div>
      <div className="btn-toolbar">
        <button className="btn">Default</button>
        <button className="btn btn-primary">Primary</button>
        <div className="btn-group">
          <button className="btn btn-success">Success</button>
          <button className="btn btn-error">Error</button>
        </div>
      </div>
    </div>
  </div>
))
