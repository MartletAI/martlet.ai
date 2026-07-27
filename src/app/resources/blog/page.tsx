import { CTA as SharedCTA } from "@/components/cta";
import { BreadcrumbJsonLd } from "@/components/seo/breadcrumb-json-ld";

import { Blogs } from "./components/blogs";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Martlet AI Blog | Risk Adjustment Insights",
  description: "Stay updated with Martlet AI blogs for the latest product features, technological advancements, and insights into our solutions and industry trends.",
  alternates: {
    canonical: "/resources/blog",
  },
};

interface PageProps {
  searchParams: Promise<{ tag?: string }>;
}

export default async function Page({ searchParams }: PageProps) {
  const { tag } = await searchParams;

  return (
    <main>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Blog", href: "/resources/blog" },
        ]}
      />

      {/* Post grid */}
      <Blogs activeTag={tag} />

      {/* CTA */}
      <SharedCTA
        title="Bring your charts. We'll show you the evidence."
        description="A working session: watch the engine run inside your environment, and see every regulatory claim on this site demonstrated on your own data."
        submitLabel="Schedule a walkthrough"
        backgroundColor="bg-white"
      />
    </main>
  );
}