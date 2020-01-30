import React from "react"
import BaseLink, { LinkProps } from "next/link"

export default function Link({
  href,
  ...props
}: LinkProps & { children: React.ReactNode }) {
  return <BaseLink href={href} as={href} {...props} />
}
