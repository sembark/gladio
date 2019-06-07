import Header from "./../components/Header"

function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="px-8 py-16 md:p-16 lg:py-20 max-w-4xl">
        <h1 className="text-4xl md:text-6xl font-light">
          Tourepedia Design System
        </h1>
        <h2 className="text-2xl md:text-3xl font-light">
          Design guidelines and tooling for building interfaces with
          Tourepedia's design system
        </h2>
      </div>
    </div>
  )
}
export default Home
