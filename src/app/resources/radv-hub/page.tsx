import { CTA as SharedCTA } from "@/components/cta";
import { BreadcrumbJsonLd } from "@/components/seo/breadcrumb-json-ld";

import { ChangeLog } from "./components/change-log";
import { Exposure } from "./components/exposure";
import { HubFaq } from "./components/hub-faq";
import { HubHero } from "./components/hub-hero";
import { OigFindings } from "./components/oig-findings";
import { PyStatus } from "./components/py-status";
import { QuickReference } from "./components/quick-reference";
import { SourceLibrary } from "./components/source-library";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CMS RADV Tracker — Audit Schedule, Deadlines, Litigation Status | Martlet AI",
  description:
    "A maintained reference for Medicare Advantage RADV: audit status by payment year, submission windows, the rule-change log since 2023, published OIG findings by plan, and Humana v. Becerra appeal status — every entry primary-sourced.",
  alternates: {
    canonical: "/resources/radv-hub",
  },
};

export default function Page() {
  return (
    <main>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Resources", href: "/resources/blog" },
          { name: "RADV Hub", href: "/resources/radv-hub" },
        ]}
      />
      {/* Masthead with last-verified stamp */}
      <HubHero />

      {/* Audit status by payment year + live windows */}
      <PyStatus />

      {/* Rule-change log + litigation tracker */}
      <ChangeLog />

      {/* Published OIG findings, by plan */}
      <OigFindings />

      {/* Extrapolation methodology + current legal status */}
      <Exposure />

      {/* Submission rules + coder checklist */}
      <QuickReference />

      {/* Regulatory questions + FAQPage schema */}
      <HubFaq />

      {/* Primary sources + hub changelog + disclaimer */}
      <SourceLibrary />

      {/* CTA */}
      <SharedCTA
        title="Selected, or expecting to be?"
        description="Bring one contract. We'll run a mock RADV on it — sampled per CMS's methodology, with evidence packets and an exposure estimate — inside your environment."
        submitLabel="Run a mock RADV"
        backgroundColor="bg-white"
      />
    </main>
  );
}
