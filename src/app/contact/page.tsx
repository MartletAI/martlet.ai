import { CTA } from "./components/cta"
import { Hero } from "./components/hero"

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Martlet AI",
  description: "Get in touch with Martlet AI for inquiries, support, or partnership opportunities. Our team is ready to assist with your healthcare risk solutions.",
};

export default function Page() {
  return (
    <main>
      {/* Hero Section */}
      <Hero />

      {/* CTA Section */}
      <CTA />
    </main>
  )
}