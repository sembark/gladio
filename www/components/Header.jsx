import Link from "next/link"

export default function Header() {
  return (
    <nav className="flex justify-between items-center border-b-2 border-gray-100">
      <div>
        <Link href="/">
          <a className="p-4 inline-block hover:bg-gray-100">
            Tourepedia Design System
          </a>
        </Link>
      </div>
      <div>
        <ul className="inline-block">
          <li className="inline-block">
            <Link href="/components">
              <a className="p-4 inline-block hover:bg-gray-100">Components</a>
            </Link>
          </li>
          <li className="inline-block">
            <Link href="/css">
              <a className="p-4 inline-block hover:bg-gray-100">CSS</a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}
