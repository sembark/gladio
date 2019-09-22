import React from "react"
import Link from "./Link"

const SideBarLinkListScope = React.createContext("")
const SideBarScope = React.createContext("")

export function SidebarLink({ href, children }) {
  return (
    <SideBarLinkListScope.Consumer>
      {scope => (
        <li className="mt-2">
          <Link href={`${scope}${href}`}>
            <a className="text-primary-600 hover:text-primary-800 hover:underline">
              {children}
            </a>
          </Link>
        </li>
      )}
    </SideBarLinkListScope.Consumer>
  )
}

export function SidebarLinkList({ children, scope = "" }) {
  return (
    <SideBarScope.Consumer>
      {rootScope => (
        <SideBarLinkListScope.Provider value={`${rootScope}${scope}`}>
          <ul className="my-4">{children}</ul>
        </SideBarLinkListScope.Provider>
      )}
    </SideBarScope.Consumer>
  )
}

export function SidebarHeading({ children }) {
  return <h3 className="mt-8 text-base">{children}</h3>
}

export default function SideBar({ children, scope = "" }) {
  return (
    <SideBarScope.Provider value={scope}>
      <section className="py-4 px-3 text-sm">{children}</section>
    </SideBarScope.Provider>
  )
}
