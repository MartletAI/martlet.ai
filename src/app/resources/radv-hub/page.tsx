import { CTA as SharedCTA } from "@/components/cta";
import { BreadcrumbJsonLd } from "@/components/seo/breadcrumb-json-ld";

import { ChangeLog } from "./components/change-log";
import { HubHero } from "./components/hub-hero";
import { PyStatus } from "./components/py-status";
import { QuickReference } from "./components/quick-reference";
import { SourceLibrary } from "./components/source-library";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CMS RADV Tracker — Audit Schedule, Deadlines, Litigation Status | Martlet AI",
  description:
    "A maintained reference for Medicare Advantage RADV: audit status by payment year, PY2020/PY2021 submission windows, the rule-change log since 2023, and Humana v. Becerra appeal status — every entry primary-sourced.",
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

      {/* Submission rules + coder checklist */}
      <QuickReference />

      {/* Primary sources + hub changelog + disclaimer */}
      <SourceLibrary />

      {/* CTA */}
      <SharedCTA
        title="Selected, or expecting to be?"
        subtitle="Working session"
        description="Bring one contract. We'll run a mock RADV on it — sampled per CMS's methodology, with evidence packets and an exposure estimate — inside your environment."
        submitLabel="Run a mock RADV"
        backgroundColor="bg-white"
      />
    </main>
  );
}
