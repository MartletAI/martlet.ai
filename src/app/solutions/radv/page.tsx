import { Hero } from "./components/hero";
import { Approaches } from "./components/approaches";
import { Pipeline } from "./components/pipeline";
import { Outputs } from "./components/outputs";
import { CTA } from "./components/cta";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "RADV Audits Solution for Compliance | Martlet AI",
  description: "Ensure precise risk score validation and compliance with Martlet AI's RADV audits solutions, enhancing audit accuracy and efficiency.",
};

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