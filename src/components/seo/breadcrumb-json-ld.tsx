import { absoluteMartletUrl, safeJsonLdStringify } from "@/lib/json-ld";

export interface BreadcrumbCrumb {
  name: string;
  /** Path starting with / (e.g. /solutions/radv) */
  href: string;
}

interface BreadcrumbJsonLdProps {
  items: BreadcrumbCrumb[];
}

export function BreadcrumbJsonLd({ items }: BreadcrumbJsonLdProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((crumb, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: crumb.name,
      item: absoluteMartletUrl(crumb.href),
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: safeJsonLdStringify(jsonLd) }}
    />
  );
}
