import { Hero } from "./components/hero";
import { Blogs } from "./components/blogs";

export default function Page() {
  return(
    <main>
      {/* Hero Section */}
      <Hero />

      {/* Blogs Section */}
      <Blogs />
    </main>
  )
}