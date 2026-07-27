import { BreadcrumbJsonLd } from "@/components/seo/breadcrumb-json-ld";

import { Beyond } from "./components/beyond";
import { Bridge } from "./components/bridge";
import { CoderChecks } from "./components/coder-checks";
import { CTA } from "./components/cta";
import { Hero } from "./components/hero";
import { Postures } from "./components/postures";
import { RadvFaq } from "./components/radv-faq";
import { ReviewLevels } from "./components/review-levels";
import { Specifics } from "./components/specifics";
import { WhatYouGet } from "./components/what-you-get";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "RADV Audit Software — Validate Submitted Codes, Build CMS-Ready Packets | Martlet AI",
  description:
    "Verify every submitted HCC against the record at 99% precision, close 95% automatically, and build CMS-ready evidence packets — on codes submitted years ago, by anyone, inside your environment.",
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
      {/* Hero — our numbers */}
      <Hero />

      {/* The four concrete outcomes */}
      <WhatYouGet />

      {/* The six checks + packet demo */}
      <CoderChecks />

      {/* Human oversight: four levels */}
      <ReviewLevels />

      {/* Proactive and reactive, both on the same engine */}
      <Postures />

      {/* Spec surface: inputs, sampling, config, outputs, reporting */}
      <Specifics />

      {/* What running it continuously gives you */}
      <Beyond />

      {/* Bridge to retrospective */}
      <Bridge />

      {/* Product FAQ + schema */}
      <RadvFaq />

      {/* CTA */}
      <CTA />
    </main>
  );
}
