import { BreadcrumbJsonLd } from "@/components/seo/breadcrumb-json-ld";

import { Burden } from "./components/burden";
import { CTA } from "./components/cta";
import { Hero } from "./components/hero";
import { Metrics } from "./components/metrics";
import { ProFaq } from "./components/pro-faq";
import { Segments } from "./components/segments";
import { Suspecting } from "./components/suspecting";
import { Workflow } from "./components/workflow";
import { Wvu } from "./components/wvu";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Prospective Risk Adjustment Software — Point-of-Care HCC Capture | Martlet AI",
  description:
    "Suspected conditions from labs, meds, notes, and claims — delivered as evidence-linked, MEAT-aware suggestions inside your EHR. Published suspecting methodology, configurable thresholds, and PHI that never leaves your network.",
  alternates: {
    canonical: "/solutions/prospective-risk-adjustment",
  },
};

export default function Page() {
  return (
    <main>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          {
            name: "Prospective Risk Adjustment",
            href: "/solutions/prospective-risk-adjustment",
          },
        ]}
      />
      {/* Hero + our numbers */}
      <Hero />

      {/* The clinician-burden problem + AAFP evidence */}
      <Burden />

      {/* The suspecting methodology, published */}
      <Suspecting />

      {/* Pre/in/post-visit workflow + suspect card demo */}
      <Workflow />

      {/* The adoption metrics buyers should demand */}
      <Metrics />

      {/* MA plans vs ACOs */}
      <Segments />

      {/* WVU Medicine in production */}
      <Wvu />

      {/* FAQ + schema */}
      <ProFaq />

      {/* CTA */}
      <CTA />
    </main>
  );
}
