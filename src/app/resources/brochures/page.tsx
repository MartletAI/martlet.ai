import type { Metadata } from "next";

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
    </main>
  );
}
