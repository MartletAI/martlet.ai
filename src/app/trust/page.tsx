import { CTA as SharedCTA } from "@/components/cta";
import { BreadcrumbJsonLd } from "@/components/seo/breadcrumb-json-ld";

import { Architecture } from "./components/architecture";
import { Controls } from "./components/controls";
import { Hero } from "./components/hero";
import { TrustFaq } from "./components/trust-faq";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Trust & Security — In-Environment Deployment, Zero PHI Egress | Martlet AI",
  description:
    "Martlet AI runs on-premises, in your private cloud, or air-gapped: no vendor cloud, no external AI API calls, and PHI that never leaves your network. Pacific AI certified governance, versioned models, and a complete audit trail.",
  alternates: {
    canonical: "/trust",
  },
};

export default function Page() {
  return (
    <main>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Trust & Security", href: "/trust" },
        ]}
      />
      {/* Hero + architectural stats */}
      <Hero />

      {/* Boundary diagram + deployment models */}
      <Architecture />

      {/* Controls mapping + AI governance + data handling */}
      <Controls />

      {/* Security-review FAQ + schema */}
      <TrustFaq />

      {/* CTA */}
      <SharedCTA
        title="Send this page to your security team."
        description="Then bring us their questions. We'll walk your reviewers through deployment, controls, and AI governance — and leave them a compliance packet they can file."
        submitLabel="Request the compliance packet"
        backgroundColor="bg-white"
      />
    </main>
  );
}
