import { BreadcrumbJsonLd } from "@/components/seo/breadcrumb-json-ld";

import { AuditSteps } from "./components/audit-steps";
import { Bridge } from "./components/bridge";
import { CoderChecks } from "./components/coder-checks";
import { CTA } from "./components/cta";
import { Exposure } from "./components/exposure";
import { Failures } from "./components/failures";
import { Hero } from "./components/hero";
import { Postures } from "./components/postures";
import { RadvFaq } from "./components/radv-faq";
import { WhatChanged } from "./components/timeline";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "RADV Audit Software — Mock Audits, Evidence Packets, 2026 Schedule | Martlet AI",
  description:
    "CMS now audits all ~550 MA contracts annually. Run mock RADV audits on CMS's methodology, assemble CMS-ready evidence packets, and track the 2026 audit schedule — PY2020 records due August 28, 2026.",
  alternates: {
    canonical: "/solutions/radv",
  },
};

export default function Page() {
  return (
    <main>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "RADV", href: "/solutions/radv" },
        ]}
      />
      {/* Hero + audit-environment stats */}
      <Hero />

      {/* The 2023→2026 timeline + CMS's published audit schedule */}
      <WhatChanged />

      {/* The audit lifecycle, step by step, with Martlet's role */}
      <AuditSteps />

      {/* What CMS coders check + the packet assembling live */}
      <CoderChecks />

      {/* The OIG failure record */}
      <Failures />

      {/* The extrapolation math, honestly stated */}
      <Exposure />

      {/* Proactive vs reactive */}
      <Postures />

      {/* Bridge to retrospective */}
      <Bridge />

      {/* FAQ + FAQPage schema */}
      <RadvFaq />

      {/* CTA */}
      <CTA />
    </main>
  );
}
