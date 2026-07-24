import type { Metadata } from "next";

import { CTA as SharedCTA } from "@/components/cta";
import { BreadcrumbJsonLd } from "@/components/seo/breadcrumb-json-ld";

import { Brochures } from "./components/brochures";

export const metadata: Metadata = {
  title: "Martlet AI Brochures | Product Guides & Solution Overviews",
  description:
    "Download Martlet AI brochures to learn more about retrospective risk adjustment, HEDIS gap closure, and our healthcare AI solutions.",
  alternates: {
    canonical: "/resources/brochures",
  },
};

export default function Page() {
  return (
    <main>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Brochures", href: "/resources/brochures" },
        ]}
      />

      {/* Brochure grid */}
      <Brochures />

      {/* CTA */}
      <SharedCTA
        title="Want to see it running on your charts, not a slide?"
        subtitle="Talk to us"
        description="A working session: watch the engine run inside your environment, and see every claim in these brochures demonstrated live."
        submitLabel="Schedule a walkthrough"
        backgroundColor="bg-white"
      />
    </main>
  );
}
