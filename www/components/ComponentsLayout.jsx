import React from "react"
import SideBar, {
  SidebarLink,
  SidebarLinkList,
  SidebarHeading,
} from "./Sidebar"
import Layout from "./Layout"

export function ComponentsLayoutSideBar() {
  return (
    <SideBar scope="/components">
      <SidebarLinkList>
        <SidebarLink href="">Getting Started</SidebarLink>
      </SidebarLinkList>
      <SidebarLinkList>
        <SidebarHeading>Components</SidebarHeading>
        <SidebarLink href="/button">Button</SidebarLink>
        <SidebarLink href="/dialog">Dialog</SidebarLink>
      </SidebarLinkList>
    </SideBar>
  )
}

export default function ComponentsLayout({ children, meta }) {
  return (
    <Layout meta={meta} sideBar={<ComponentsLayoutSideBar />}>
      {children}
    </Layout>
  )
}
