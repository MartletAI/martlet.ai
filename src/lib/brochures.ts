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
    slug: "bring-retrospective",
    title: "Bring Retrospective",
    description:
      "Learn how Martlet AI powers retrospective risk adjustment with audit-grade evidence at scale.",
    excerpt:
      "See how our retrospective engine finds undercoded HCCs while validating existing ones to maximize revenue and minimize audit risk.",
    thumbnail: "/assets/brochures/bring-retrospective.jpg",
    pdfPath: "/brochures/Bring Retrospective.pdf",
    pdfFilename: "Bring Retrospective.pdf",
    tag: "Retrospective",
  },
  {
    slug: "close-more-hedis-gaps",
    title: "Close More HEDIS Gaps",
    description:
      "Discover how health plans close HEDIS gaps faster with Martlet AI's healthcare-specific language models.",
    excerpt:
      "Explore how AI-powered chart review and gap identification help quality teams improve measure performance and member outcomes.",
    thumbnail: "/assets/brochures/close-more-hedis-gaps.jpg",
    pdfPath: "/brochures/Close More HEDIS Gaps.pdf",
    pdfFilename: "Close More HEDIS Gaps.pdf",
    tag: "HEDIS",
  },
];
