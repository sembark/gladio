import Link from "./Link"
import Logo from "./../public/48x48_icon.svg"

export default function Header() {
  return (
    <header className="flex justify-between items-center bg-gray-100 border-b text-sm">
      <div>
        <Link href="/">
          <a className="px-4 py-2 inline-flex items-center hover:bg-gray-100">
            <Logo className="w-8 h-8" />
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
