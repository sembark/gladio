import * as React from "react"
import { Story, Meta } from "@storybook/react"

import Paginate from "./../src/index"
import "./../../button/styles/styles.css"
import "./../styles/styles.css"

export default {
  title: "Components/Paginate",
  component: Paginate,
} as Meta

const Template: Story<React.ComponentProps<typeof Paginate>> = ({
  onChange,
  ...props
}) => <Paginate onChange={() => {}} {...props} />

export const Default = Template.bind({})
Default.args = {
  total: 100,
  from: 1,
  to: 10,
  currentPage: 1,
  lastPage: 10,
  isFetching: false,
}

export const Fetching = Template.bind({})
Fetching.args = {
  total: 100,
  from: 1,
  to: 10,
  currentPage: 1,
  lastPage: 10,
  isFetching: true,
}
