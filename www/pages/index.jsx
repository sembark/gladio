import Link from "../components/Link"
import SEO from "../components/Seo"
import DesignIcon from "./../assets/undraw_experience_design.svg"

function Home() {
  return (
    <div className="min-h-screen">
      <SEO
        title="Tourepedia Design System"
        description="Design System for building softwares for Tourepedia"
      />
      <div className="px-8 py-16 md:p-16 lg:py-20">
        <div className="max-w-xs mx-auto lg:float-right lg:w-1/2 lg:max-w-lg">
          <DesignIcon />
        </div>
        <div className="mt-10 max-w-3xl">
          <h1 className="font-normal md:font-light text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
            {process.env.appName}
          </h1>
          <h2 className="font-light text-lg sm:text-2xl md:text-2xl lg:text-3xl">
            Design guidelines and tooling for building interfaces with
            Tourepedia's Design System
          </h2>
          <div className="text-sm md:text-lg sm:text-normal mt-8">
            <Link href="/styles">
              <a className="text-blue-600 hover:text-blue-700 hover:underline">
                Styles
              </a>
            </Link>
            {" ・ "}
            <Link href="/components">
              <a className="text-blue-600 hover:text-blue-700 hover:underline">
                Components
              </a>
            </Link>
            {" ・ "}
            <a
              href="https://github.com/tourepedia/tp-ui"
              className="text-blue-600 hover:text-blue-700 hover:underline"
            >
              Open-Source
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Home
