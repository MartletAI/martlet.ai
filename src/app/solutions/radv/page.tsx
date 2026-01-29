import { Hero } from "./components/hero";
import { Approaches } from "./components/approaches";
import { Pipeline } from "./components/pipeline";
import { Outputs } from "./components/outputs";
import { CTA } from "./components/cta";

export default function Page() {
  return (
    <main>
      {/* Hero Section */}
      <Hero />

      {/* Approaches Section */}
      <Approaches />

      {/* Pipeline Section */}
      <Pipeline />

      {/* Outputs Section */}
      <Outputs />

      {/* CTA Section */}
      <CTA />
    </main>
  )
}