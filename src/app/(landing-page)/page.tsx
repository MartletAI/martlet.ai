
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
  title: "Martlet AI | HCC Risk Adjustment AI software",
  description: "On-premise, Secure, Real-time HCC Coding & Risk Profiling. Streamline prospective, retrospective, and RADV workflows with AI-powered precision.",
  keywords: ["martlet", "ai risk adjustment", "ai risk adjustment tool", "ai risk adjustment platform", "ai risk adjustment software", "ai-powered risk adjustment software", "risk adjustment ai platform", "risk adjustment ai software", "risk adjustment ai tool", "risk adjustment software", "risk adjustment platform", "hcc risk adjustment software", "hcc coding software", "hcc coding tool", "hcc software"],
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


