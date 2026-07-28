import Image from "next/image";
import Link from "next/link";

import { Icon } from "@/components/icon";
import { initials } from "@/lib/authors";

interface PersonCardProps {
  slug: string;
  name: string;
  titles: string[];
  image: string;
}

/**
 * PersonCard - photo (or initials fallback), name, and title lines only —
 * no bio. The full bio lives on the /author/[slug] page this links to;
 * the card is a directory entry, not the biography itself.
 */
export function PersonCard({ slug, name, titles, image }: PersonCardProps) {
  return (
    <Link
      href={`/author/${slug}`}
      className="flex flex-col items-center text-center rounded-[28px] bg-[#fbfbfd] border border-border p-7 md:p-9 h-full no-underline transition-colors hover:border-primary/40"
    >
      {image ? (
        <Image
          src={image}
          alt={name}
          width={112}
          height={112}
          className="w-28 h-28 rounded-full object-cover mb-5"
        />
      ) : (
        <div
          className="w-28 h-28 rounded-full bg-[#e9f1fe] text-[#0154b8] flex items-center justify-center text-2xl font-bold mb-5"
          aria-hidden
        >
          {initials(name)}
        </div>
      )}
      <h3 className="text-xl font-bold tracking-tight text-[#0a0a12] leading-snug mb-3">
        {name}
      </h3>
      <div className="flex flex-col gap-1 pt-3 mb-4 border-t border-border w-full">
        {titles.map((title) => (
          <p key={title} className="text-base font-medium text-text-secondary-700 leading-snug m-0">
            {title}
          </p>
        ))}
      </div>
      <span className="link-arrow text-sm! mt-auto">
        Read more
        <Icon name="arrow-right" className="w-3.5 h-3.5" aria-hidden />
      </span>
    </Link>
  );
}
