import React from "react"
import SideBar, {
  SidebarLink,
  SidebarLinkList,
  SidebarHeading,
} from "./Sidebar"
import Layout from "./Layout"

export function StylesLayoutSideBar() {
  return (
    <SideBar scope="/styles">
      <SidebarLinkList>
        <SidebarLink href="">Getting Started</SidebarLink>
      </SidebarLinkList>
      <SidebarLinkList scope="/foundation">
        <SidebarHeading>Foundation</SidebarHeading>
        <SidebarLink href="/breakpoints">Breakpoints</SidebarLink>
        <SidebarLink href="/colors">Colors</SidebarLink>
        <SidebarLink href="/spacing">Spacing</SidebarLink>
        <SidebarLink href="/typography">Typography</SidebarLink>
      </SidebarLinkList>
      <SidebarLinkList scope="/utilities">
        <SidebarHeading>Utilities</SidebarHeading>
        <SidebarLink href="/borders">Borders</SidebarLink>
      </SidebarLinkList>
      <SidebarLinkList scope="/components">
        <SidebarHeading>Components</SidebarHeading>
        <SidebarLink href="/button">Button</SidebarLink>
      </SidebarLinkList>
    </SideBar>
  )
}

export default function StylesLayout({
  children,
  meta,
}: {
  children: string
  meta: any
}) {
  return (
    <Layout meta={meta} title="Styles" sideBar={<StylesLayoutSideBar />}>
      {children}
    </Layout>
  )
}
