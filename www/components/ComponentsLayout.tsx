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
        <SidebarLink href="/alert">Alert</SidebarLink>
        <SidebarLink href="/badge">Badge</SidebarLink>
        <SidebarLink href="/button">Button</SidebarLink>
        <SidebarLink href="/datetime">Date & Time</SidebarLink>
        <SidebarLink href="/dialog">Dialog</SidebarLink>
        <SidebarLink href="/input">Input</SidebarLink>
        <SidebarLink href="/paginate">Paginate</SidebarLink>
        <SidebarLink href="/select">Select</SidebarLink>
        <SidebarLink href="/snackbar">Snackbar</SidebarLink>
        <SidebarLink href="/table">Table</SidebarLink>
      </SidebarLinkList>
      <SidebarLinkList>
        <SidebarHeading>Icons</SidebarHeading>
        <SidebarLink href="/icons">Icons</SidebarLink>
      </SidebarLinkList>
    </SideBar>
  )
}

export default function ComponentsLayout({
  children,
  meta,
}: {
  children: React.ReactNode
  meta: any
}) {
  return (
    <Layout
      meta={meta}
      title="Components"
      sideBar={<ComponentsLayoutSideBar />}
    >
      {children}
    </Layout>
  )
}
