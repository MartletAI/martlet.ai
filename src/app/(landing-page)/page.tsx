import { preload } from "react-dom";
import { Hero } from "./components/hero";
import { IndustryPartners } from "./components/industry-partners";
import { TrustAndAccuracy } from "./components/trust-and-accuracy";
import { WhyMartletAI } from "./components/why-martlet-ai";
import { CTA } from "./components/cta";

/**
 * Home - Landing page for Martlet AI
 * Displays the hero section with decorative background and products overview
 */
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Risk Adjustment AI Software | Martlet AI",
  description:
    "Risk adjustment software and HCC risk adjustment solutions. On-premise, Secure, Real-time HCC Coding & Risk Profiling. Streamline prospective, retrospective, and RADV workflows with AI-powered precision.",
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  // Preload hero background image for LCP — must be called during render to be hoisted into <head>
  preload("/assets/hero/landing.png", { as: "image", fetchPriority: "high" });

  return (
    <main>
      {/* Hero Section */}
      <Hero />

      {/* Why Martlet AI Section */}
      <WhyMartletAI />

      {/* Trust and Accuracy Section */}
      <TrustAndAccuracy />

      {/* Industry partners */}
      <IndustryPartners />

      {/* CTA Section */}
      <CTA />
    </main>
  );
}
