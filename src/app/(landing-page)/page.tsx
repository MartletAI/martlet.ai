import type { Metadata } from "next";

import { Capabilities } from "./components/capabilities";
import { CaseStudies } from "./components/case-studies";
import { CTA } from "./components/cta";
import { Engagement } from "./components/engagement";
import { EvidenceShowcase } from "./components/evidence";
import { FAQ } from "./components/faq";
import { Hero } from "./components/hero";
import { Products } from "./components/hero/products";
import { IndustryPartners } from "./components/industry-partners";
import { RadvNow } from "./components/radv-now";
import { TrustAndAccuracy } from "./components/trust-and-accuracy";
import { WhyMartletAI } from "./components/why-martlet-ai";

/**
 * Home - Landing page for Martlet AI
 * Evidence-led: hero + proof bar, RADV urgency, evidence linkage,
 * workflows, differentiators, customer proof, compliance, CTA.
 */

export const metadata: Metadata = {
  title: "Risk Adjustment AI Software — HCC Coding & RADV | Martlet AI",
  description:
    "HCC coding software that closes 95% of retrospective cases automatically: chase list prioritization, MEAT validation, mock RADV audits, and 837/EDPS submission-ready outputs — run inside your environment.",
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return (
    <main>
      {/* Hero + proof bar */}
      <Hero />

      {/* The star: regulatory-grade HCC coding, shown live */}
      <EvidenceShowcase />

      {/* Why now: CMS RADV expansion */}
      <RadvNow />

      {/* Three workflows */}
      <Products />

      {/* Full platform capabilities */}
      <Capabilities />

      {/* Three differentiators */}
      <WhyMartletAI />

      {/* Customer proof */}
      <CaseStudies />

      {/* Compliance pillars */}
      <TrustAndAccuracy />

      {/* Pricing and engagement model — stated once, sitewide */}
      <Engagement />

      {/* Partners strip */}
      <IndustryPartners />

      {/* FAQ + FAQPage schema */}
      <FAQ />

      {/* CTA */}
      <CTA />
    </main>
  );
}
