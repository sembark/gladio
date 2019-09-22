import Link from "./Link"

export default function Header() {
  return (
    <header className="flex justify-between items-center bg-gray-100 border-b text-sm">
      <div>
        <Link href="/">
          <a className="p-4 inline-block hover:bg-gray-100">
            {process.env.appName}
          </a>
        </Link>
      </div>
      <nav>
        <Link href="/styles">
          <a className="p-4 inline-block hover:text-gray-800">Styles</a>
        </Link>
        <Link href="/components">
          <a className="p-4 inline-block hover:text-gray-800">Components</a>
        </Link>
      </nav>
    </header>
  )
}
