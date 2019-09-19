import BaseLink from "next/link"

export default function Link({ href, ...props }) {
  return <BaseLink href={href} as={href} {...props} />
}
