import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getBrochureByFilename } from "@/lib/brochures";
import { verifyDownloadToken } from "@/lib/download-token";
import { Hero } from "./components/hero";
import { Expired } from "./components/expired";

interface PageProps {
  searchParams: Promise<{ Filename?: string; token?: string; expires?: string }>;
}

export async function generateMetadata({
  searchParams,
}: PageProps): Promise<Metadata> {
  const { Filename } = await searchParams;
  const brochure = Filename ? getBrochureByFilename(Filename) : undefined;

  return {
    title: brochure
      ? `Download ${brochure.title} | Martlet AI`
      : "Brochure Download | Martlet AI",
    description: brochure?.description ?? "Download Martlet AI brochures.",
    robots: {
      index: false,
      follow: false,
    },
  };
}

export default async function Page({ searchParams }: PageProps) {
  const { Filename, token, expires } = await searchParams;

  if (!Filename) {
    notFound();
  }

  const brochure = getBrochureByFilename(Filename);

  if (!brochure) {
    notFound();
  }

  const isValid = !!token && !!expires && verifyDownloadToken(Filename, expires, token);

  return (
    <main>
      {isValid ? <Hero brochure={brochure} /> : <Expired />}
    </main>
  );
}
