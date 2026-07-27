import { BreadcrumbJsonLd } from "@/components/seo/breadcrumb-json-ld";

import { Beyond } from "./components/beyond";
import { Bridge } from "./components/bridge";
import { CoderChecks } from "./components/coder-checks";
import { CTA } from "./components/cta";
import { Engagement } from "./components/engagement";
import { Hero } from "./components/hero";
import { Postures } from "./components/postures";
import { RadvFaq } from "./components/radv-faq";
import { ReviewLevels } from "./components/review-levels";
import { WhatChanged } from "./components/timeline";
import { WhatYouGet } from "./components/what-you-get";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "RADV Audit Software — Validate Submitted Codes, Build CMS-Ready Packets | Martlet AI",
  description:
    "CMS now audits every eligible MA contract, every year. Martlet AI verifies your submitted codes against the record at 99% precision, links page-level evidence, and builds CMS-ready packets — inside your environment.",
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
      {/* Hero — our numbers, one line of CMS context */}
      <Hero />

      {/* The four concrete outcomes */}
      <WhatYouGet />

      {/* The regulatory record, 2023–2026, primary-sourced */}
      <WhatChanged />

      {/* What CMS reads for, and the same checks run here first */}
      <CoderChecks />

      {/* Human oversight: four levels */}
      <ReviewLevels />

      {/* Proactive vs reactive, with the operational facts */}
      <Postures />

      {/* Why readiness is a standing capability */}
      <Beyond />

      {/* Pricing and engagement model */}
      <Engagement />

      {/* Bridge to retrospective */}
      <Bridge />

      {/* FAQ + schema */}
      <RadvFaq />

      {/* CTA */}
      <CTA />
    </main>
  );
}
