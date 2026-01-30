
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
  title: "Martlet AI | Smarter Risk Adjustment",
  description: "On-premise, Secure, Real-time HCC Coding & Risk Profiling. Streamline prospective, retrospective, and RADV workflows with AI-powered precision.",
};

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <Hero />
      
      {/* Trust and Accuracy Section */}
      <TrustAndAccuracy />

      {/* Industry partners */}
      <IndustryPartners />

      {/* Why Martlet AI Section */}
      <WhyMartletAI />

      {/* CTA Section */}
      <CTA />
    </main>
  );
}


