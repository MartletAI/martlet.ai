import { BreadcrumbJsonLd } from "@/components/seo/breadcrumb-json-ld";

import { Bridge } from "./components/bridge";
import { CTA } from "./components/cta";
import { Economics } from "./components/economics";
import { Hero } from "./components/hero";
import { Pipeline } from "./components/pipeline";
import { Problem } from "./components/problem";
import { RetroFaq } from "./components/retro-faq";
import { Rules } from "./components/rules";
import { Submissions } from "./components/submissions";
import { V28 } from "./components/v28";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Retrospective Risk Adjustment Software — 95% Automated HCC Coding | Martlet AI",
  description:
    "Retrospective HCC coding closed end-to-end: chase list prioritization, MEAT validation at 99% precision, v24/v28 dual mapping, and add/delete deltas for your 837/EDPS pipeline — inside your environment.",
  alternates: {
    canonical: "/solutions/retrospective-risk-adjustment",
  },
};

export default function Page() {
  return (
    <main>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          {
            name: "Retrospective Risk Adjustment",
            href: "/solutions/retrospective-risk-adjustment",
          },
        ]}
      />
      {/* Hero + our numbers */}
      <Hero />

      {/* The manual math */}
      <Problem />

      {/* Animated pipeline: chase list → 837 */}
      <Pipeline />

      {/* Two-way coding + submission calendar */}
      <Submissions />

      {/* v28 in real numbers */}
      <V28 />

      {/* The rules, enforced + live verification demo */}
      <Rules />

      {/* TCO comparison */}
      <Economics />

      {/* Bridge to RADV */}
      <Bridge />

      {/* FAQ + schema */}
      <RetroFaq />

      {/* CTA */}
      <CTA />
    </main>
  );
}
