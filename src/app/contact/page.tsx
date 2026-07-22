import { Hero } from "./components/hero"

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Martlet AI",
  description: "Talk to Martlet AI about retrospective coding, RADV readiness, or prospective capture. Request a 30-minute working session on your own charts, inside your environment.",
  alternates: {
    canonical: "/contact",
  },
};

export default function Page() {
  return (
    <main>
      {/* Hero + form */}
      <Hero />
    </main>
  )
}
