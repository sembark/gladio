import * as React from "react"
import { storiesOf } from "@storybook/react"

const stories = storiesOf("Styles/Components/Button", module)

stories.add(
  "Basic Buttons",
  () => (
    <div className="px-4">
      <div className="mb-4">
        <button className="btn btn-primary">.btn .btn-primary</button>
        <button className="btn">.btn</button>
        <button className="btn btn-tertiary">.btn .btn-tertiary</button>
        <button className="btn" type="submit">
          .btn type=["submit"]
        </button>
      </div>
    </div>
  ),
  {
    info: {
      text:
        "Buttons have three levels of hierarchy: **Primary**, **Secondary**, **Tertiary**",
    },
  }
)

stories.add("Colorschemas/Semantics for Buttons", () => (
  <div className="px-4">
    <div className="mb-6">
      <h3 className="mb-2">Branded Buttons</h3>
      <div className="mb-4">
        <button className="btn btn-primary branded">
          .btn .btn-primary .branded
        </button>
        <button className="btn branded">.btn .branded</button>
        <button className="btn btn-tertiary branded">
          .btn .btn-tertiary .branded
        </button>
      </div>
    </div>
    <div className="mb-6">
      <h3 className="mb-2">Default Buttons</h3>
      <div className="mb-4">
        <button className="btn btn-primary">.btn .btn-primary</button>
        <button className="btn">.btn</button>
        <button className="btn btn-tertiary">.btn .btn-tertiary</button>
      </div>
    </div>
    <div className="mb-6">
      <h3 className="mb-2">Light Buttons</h3>
      <div className="mb-4 p-4 bg-gray-700">
        <button className="btn btn-primary light">
          .btn .btn-primary .light
        </button>
        <button className="btn light">.btn .light</button>
        <button className="btn btn-tertiary light">
          .btn .btn-tertiary .light
        </button>
      </div>
    </div>
    <div className="mb-6">
      <h3 className="mb-2">Success/Green Buttons</h3>
      <div className="mb-4">
        <button className="btn btn-primary success">
          .btn .btn-primary .success
        </button>
        <button className="btn success">.btn .success</button>
        <button className="btn btn-tertiary success">
          .btn .btn-tertiary .success
        </button>
      </div>
    </div>
    <div className="mb-6">
      <h3 className="mb-2">Danger/Red Buttons</h3>
      <div className="mb-4">
        <button className="btn btn-primary danger">
          .btn .btn-primary .danger
        </button>
        <button className="btn danger">.btn .danger</button>
        <button className="btn btn-tertiary danger">
          .btn .btn-tertiary .danger
        </button>
      </div>
    </div>
    <div className="mb-6">
      <h3 className="mb-2">Warning/Yellow Buttons</h3>
      <div className="mb-4">
        <button className="btn btn-primary warning">
          .btn .btn-primary .warning
        </button>
        <button className="btn warning">.btn .warning</button>
        <button className="btn btn-tertiary warning">
          .btn .btn-tertiary .warning
        </button>
      </div>
    </div>
    <div className="mb-6">
      <h3 className="mb-2">Accent/Special Buttons</h3>
      <div className="mb-4">
        <button className="btn btn-primary accent">
          .btn .btn-primary .accent
        </button>
        <button className="btn accent">.btn .accent</button>
        <button className="btn btn-tertiary accent">
          .btn .btn-tertiary .accent
        </button>
      </div>
    </div>
  </div>
))

stories.add("Full Width", () => (
  <div className="p-4 max-w-lg mx-auto">
    <button className="btn btn-primary full-width">Full Width Button</button>
  </div>
))

stories.add("Link Buttons", () => (
  <div>
    <a href="#" className="btn">
      Default
    </a>
    <a href="#" className="btn btn-secondary">
      Secondary
    </a>
    <a href="#" className="btn btn-primary">
      Primary
    </a>
    <a href="#" className="btn btn-secondary brand">
      Secondary (theme brand)
    </a>
  </div>
))

stories.add("Disabled Buttons", () => (
  <div>
    <button disabled className="btn">
      Default
    </button>
    <button disabled className="btn btn-secondary">
      Secondary
    </button>
    <button disabled className="btn btn-primary">
      Primary
    </button>
    <button disabled className="btn branded">
      Default (theme brand)
    </button>
  </div>
))

stories.add("Button Group", () => (
  <div className="btn-group">
    <button className="btn">Default</button>
    <button className="btn btn-secondary">Secondary</button>
    <button className="btn branded">Primary</button>
    <button className="btn btn-secondary branded">Secondary</button>
  </div>
))

stories.add("Button Toolbar", () => (
  <div className="bg-gray-100 p-4">
    <div className="btn-toolbar">
      <button className="btn">Image</button>
      <button className="btn">H1-6</button>
      <div className="btn-group">
        <button className="btn">
          <i>I</i>
        </button>
        <button className="btn">
          <u>U</u>
        </button>
        <button className="btn">
          <del>S</del>
        </button>
      </div>
      <div className="btn-group">
        <button className="btn">Aa</button>
        <button className="btn">AA</button>
        <button className="btn">aa</button>
      </div>
      <button className="btn btn-tertiary branded">Make a Copy</button>
      <div className="btn-group">
        <button disabled className="btn btn-tertiary">
          Upload
        </button>
      </div>
    </div>
  </div>
))
stories.add("Button Toolbar with Toolbar", () => (
  <div>
    <div className="btn-toolbar">
      <button className="btn">Toolbar > btn</button>
    </div>
    <div className="btn-toolbar">
      <button className="btn">Toolbar + Toolbar > btn</button>
      <button className="btn branded">New</button>
      <div className="btn-group">
        <button className="btn">
          <i>I</i>
        </button>
        <button className="btn">
          <u>U</u>
        </button>
        <button className="btn">
          <del>S</del>
        </button>
      </div>
      <button className="btn">Aa</button>
      <button className="btn btn-tertiary">Save Changes</button>
      <div className="btn-group">
        <button disabled className="btn btn-tertiary">
          Upload
        </button>
      </div>
    </div>
  </div>
))
