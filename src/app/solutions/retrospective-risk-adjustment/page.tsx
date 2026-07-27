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
    "Retrospective HCC coding closed end-to-end: chase list prioritization, MEAT validation at 99% precision, v24/v28 dual mapping, and adds and deletes in the format your submission pipeline expects — inside your environment.",
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

      {/* Animated pipeline: chase list → submission file */}
      <Pipeline />

      {/* The rules, enforced + live verification demo */}
      <Rules />

      {/* Economics, as one block: what the work costs today, then the three
          ways it can be bought. Placed after the demo so the comparison comes
          from a source the reader has already seen do the work. */}
      <Problem />
      <Economics />

      {/* Reference material below the case for the product, not above it:
          the submission calendar and the v28 transition are useful once
          you're evaluating, not reasons to keep reading. */}
      <Submissions />
      <V28 />

      {/* Bridge to RADV */}
      <Bridge />

      {/* FAQ + schema */}
      <RetroFaq />

      {/* CTA */}
      <CTA />
    </main>
  );
}
