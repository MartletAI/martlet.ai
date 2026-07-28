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
    </main>
  );
}