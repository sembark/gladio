import * as React from "react"
import { storiesOf } from "@storybook/react"

import Icons from "./../src/index"
import "./../src/icon.css"

const stories = storiesOf("Components/Icons", module)

stories.add("Icons", () => {
  const size = "50px"
  return (
    <div>
      {Object.keys(Icons).map((key) => {
        const Icon = Icons[key]
        if (Icon.displayName) {
          return (
            <span
              className="inline-block text-center"
              style={{ width: size, height: size }}
            >
              <Icon title={Icon.displayName} key={key} />
            </span>
          )
        }
        return null
      })}
    </div>
  )
})

stories.add("Aside text", () => {
  return (
    <div className="text-base text-center">
      <Icons.Home /> Home • <Icons.Star /> Star • <Icons.Share /> Share
    </div>
  )
})

stories.add("With rotation", () => {
  return (
    <div className="text-base text-center">
      <Icons.ChevronDown rotate="90" />
    </div>
  )
})

stories.add("With Styles", () => {
  return (
    <div className="text-base text-center">
      <Icons.Star textColor="yellow-600" marginRight="1" />
      <Icons.Star textColor="yellow-600" marginRight="1" />
      <Icons.Star textColor="yellow-600" marginRight="1" />
      <Icons.Star textColor="gray-300" marginRight="1" />
      <Icons.Star textColor="gray-300" />
    </div>
  )
})
