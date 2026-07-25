export interface Brochure {
  slug: string;
  title: string;
  description: string;
  excerpt: string;
  thumbnail: string;
  pdfPath: string;
  pdfFilename: string;
  tag: string;
}

export function getBrochureByFilename(filename: string): Brochure | undefined {
  return BROCHURES.find((brochure) => brochure.pdfFilename === filename);
}

export function getBrochureDownloadUrl(pdfFilename: string): string {
  return `/resources/brochures/downloads?Filename=${encodeURIComponent(pdfFilename)}`;
}

export const BROCHURES: Brochure[] = [
  {
    slug: "martlet-ai-radv-preparation",
    title: "Automated RADV validation",
    description:
      "Learn how Martlet AI validates every submitted HCC against the medical record and builds audit-ready evidence packets for RADV.",
    excerpt:
      "How your submitted codes get checked, evidenced and packaged for CMS — and what your coders do with the results.",
    thumbnail: "/assets/brochures/martlet-ai-radv-preparation.jpg",
    pdfPath: "/brochures/Martlet AI RADV Preparation.pdf",
    pdfFilename: "Martlet AI RADV Preparation.pdf",
    tag: "RADV",
  },
  {
    slug: "automate-retrospective-coding",
    title: "Automate Retrospective Coding",
    description:
      "Learn how Martlet AI powers retrospective risk adjustment with audit-grade evidence at scale.",
    excerpt:
      "See how our retrospective engine finds undercoded HCCs while validating existing ones to maximize revenue and minimize audit risk.",
    thumbnail: "/assets/brochures/automate-retrospective-coding.jpg",
    pdfPath: "/brochures/Automate Retrospective Coding.pdf",
    pdfFilename: "Automate Retrospective Coding.pdf",
    tag: "Retrospective",
  },
  {
    slug: "automate-hedis-gap-closure",
    title: "Automate HEDIS Gap Closure",
    description:
      "Discover how health plans close HEDIS gaps faster with Martlet AI's healthcare-specific language models.",
    excerpt:
      "Explore how AI-powered chart review and gap identification help quality teams improve measure performance and member outcomes.",
    thumbnail: "/assets/brochures/automate-hedis-gap-closure.jpg",
    pdfPath: "/brochures/Automate HEDIS Gap Closure.pdf",
    pdfFilename: "Automate HEDIS Gap Closure.pdf",
    tag: "HEDIS",
  },
];
