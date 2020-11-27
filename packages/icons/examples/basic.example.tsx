import * as React from "react"
import { Story, Meta } from "@storybook/react"

import Icons from "./../src/index"
import "./../src/icon.css"

export default {
  title: "Components/Icons",
  component: Icons.Home,
  argTypes: {},
} as Meta

const Template: Story<React.ComponentProps<typeof Icons.Home>> = (props) => (
  <Icons.Home {...props} />
)

export const Icon = Template.bind({})
Icon.args = {}

export const Rotation = Template.bind({})
Rotation.args = {
  rotate: "90",
}

export function AllIcons() {
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
              key={key}
            >
              <Icon title={Icon.displayName} />
            </span>
          )
        }
        return null
      })}
    </div>
  )
}

export function AsideText() {
  return (
    <div className="text-base text-center">
      <Icons.Home /> Home • <Icons.Star /> Star • <Icons.Share /> Share
    </div>
  )
}

export const Styled = Template.bind({})
Styled.args = {
  textColor: "yellow-600",
}
