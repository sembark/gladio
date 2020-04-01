import * as React from "react"
import { storiesOf } from "@storybook/react"

import Icons from "./../src/index"
import "./../src/icon.css"

const stories = storiesOf("Components/Icons", module)

stories.add("Icons", () => {
  const size = "50px"
  return (
    <div className="text-xl text-primary-600">
      {Object.keys(Icons).map(key => {
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

stories.add("Icon aside text", () => {
  return (
    <div className="text-base text-center">
      <Icons.Home /> Home • <Icons.Star /> Star • <Icons.Share /> Share
    </div>
  )
})
