import { Hero } from "./components/hero"
import { Contents } from "./components/contents"

export default function Page() {
  return (
    <main>
      {/* Hero Section */}
      <Hero />

      {/* Contents Section */}
      <Contents />
    </main>
  )
}