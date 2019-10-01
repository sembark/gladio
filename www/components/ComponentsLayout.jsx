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
        <SidebarLink href="/badge">Badge</SidebarLink>
        <SidebarLink href="/input">Input</SidebarLink>
        <SidebarLink href="/select">Select</SidebarLink>
        <SidebarLink href="/table">Table</SidebarLink>
        <SidebarLink href="/paginate">Paginate</SidebarLink>
        <SidebarLink href="/dialog">Dialog</SidebarLink>
        <SidebarLink href="/datetime">Date & Time</SidebarLink>
      </SidebarLinkList>
      <SidebarLinkList>
        <SidebarHeading>Icons</SidebarHeading>
        <SidebarLink href="/icons">Icons</SidebarLink>
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
