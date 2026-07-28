import Image from "next/image";

import { Reveal } from "@/components/reveal";

interface Advisor {
  name: string;
  title: string;
  bio: string;
  /** Path under /public, e.g. "/assets/advisors/jane-doe.jpg". Leave empty
   *  until the photo is dropped in — the card falls back to initials. */
  image: string;
}

/** Placeholder profiles — replace name, title, bio and image for each of the
 *  three advisors. See public/assets/advisors/README.md for photo specs. */
const ADVISORS: Advisor[] = [
  {
    name: "Advisor Name",
    title: "Title, Organization",
    bio: "One or two sentences on background and the focus area they advise on.",
    image: "",
  },
  {
    name: "Advisor Name",
    title: "Title, Organization",
    bio: "One or two sentences on background and the focus area they advise on.",
    image: "",
  },
  {
    name: "Advisor Name",
    title: "Title, Organization",
    bio: "One or two sentences on background and the focus area they advise on.",
    image: "",
  },
];

function initials(name: string): string {
  return name
    .split(" ")
    .filter(Boolean)
    .map((part) => part[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

const CONTENT = {
  TITLE: "Advisory board.",
} as const;

/**
 * AdvisoryBoard - three profiles, photo + name + title + bio. Falls back to
 * an initials circle when a photo hasn't been added yet.
 */
export function AdvisoryBoard() {
  return (
    <section className="bg-white py-20 md:py-24" aria-labelledby="advisory-board-heading">
      <div className="container-main">
        <Reveal as="header" className="text-center max-w-[720px] mx-auto mb-12">
          <h2 id="advisory-board-heading" className="apple-display text-[32px] md:text-[48px]">
            {CONTENT.TITLE}
          </h2>
        </Reveal>

        <Reveal
          as="ul"
          stagger
          className="grid grid-cols-1 md:grid-cols-3 gap-5 list-none p-0 m-0 max-w-[1100px] mx-auto"
        >
          {ADVISORS.map((advisor, index) => (
            <li
              key={`${advisor.name}-${index}`}
              className="flex flex-col items-center text-center rounded-[28px] bg-[#fbfbfd] border border-border p-7 md:p-9"
            >
              {advisor.image ? (
                <Image
                  src={advisor.image}
                  alt={advisor.name}
                  width={112}
                  height={112}
                  className="w-28 h-28 rounded-full object-cover mb-5"
                />
              ) : (
                <div
                  className="w-28 h-28 rounded-full bg-[#e9f1fe] text-[#0154b8] flex items-center justify-center text-2xl font-bold mb-5"
                  aria-hidden
                >
                  {initials(advisor.name)}
                </div>
              )}
              <h3 className="text-lg font-bold tracking-tight text-[#0a0a12] leading-snug mb-1">
                {advisor.name}
              </h3>
              <p className="text-sm font-medium text-muted mb-4">{advisor.title}</p>
              <p className="text-[15px] apple-body leading-relaxed m-0">{advisor.bio}</p>
            </li>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
