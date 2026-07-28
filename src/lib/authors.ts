/**
 * The single people directory for the site: blog bylines, /author/[slug]
 * profile pages, and the About page's advisory board all read from this
 * one list. A person needs exactly one entry regardless of how many of
 * those roles they fill — an advisor who later writes a post uses the
 * same slug, photo and bio rather than a second, separately-maintained
 * profile. One route (/author/) for everyone, deliberately: if an advisor
 * later publishes, their URL never has to move.
 */
interface Author {
  slug: string;
  name: string;
  /** One line per credential, most recognizable first. Shown on the card
   *  and the profile page, one per line — e.g. ["Chief Compliance Officer
   *  at Reveleer", "Medicare Finance & Government Programs, Kaiser
   *  Permanente"]. For most people this is a single-item array. */
  titles: string[];
  /** Path under /public. Leave empty until a photo exists — profile page and
   *  advisory-board card both fall back to initials. */
  image: string;
  bio: string;
  /** Only meaningful for people who author content; omit for advisors who
   *  don't. The profile page hides the line when this is unset. */
  lastUpdatedAt?: string;
}

const AUTHORS: Author[] = [
  {
    slug: "hasham-ul-haq",
    name: "Hasham Ul Haq",
    titles: ["Co-Founder"],
    image: "/assets/blog/hasham-ul-haq.jpeg",
    bio: "Hasham Ul Haq is a Data Scientist at John Snow Labs, and an AI scholar and researcher at PI School of AI. During his carrier, he has worked on numerous projects across various sectors, including healthcare. At John Snow Labs, his primary focus is to build scalable and pragmatic systems for NLP, that are both, production-ready, and give SOTA performance. In particular, he has been working on Natural Language Inference, disambiguation, Named Entity Recognition, and a lot more! Hasham also has an active research profile with a publications in NeurIPS, AAAI, and multiple scholarship grants and affiliations. Prior to John Snow Labs, he was leading search engine and knowledge base development at one of Europe’s largest telecom providers. He has also been mentoring startups in computer vision by providing trainings and designing ML architectures.",
    lastUpdatedAt: "1st January",
  },
  {
    slug: "ritwik-jain",
    name: "Ritwik Jain",
    titles: ["Co-Founder"],
    image: "/assets/blog/ritwik-jain.jpg",
    bio: "Ritwik Jain is the Co-Founder of Martlet AI, a John Snow Labs spin-off building products for the clinical coding and risk adjustment ecosystem to advance value based care. He also serves as Senior Director of Healthcare Payers at John Snow Labs, where he leads the adoption of NLP and Generative AI across major U.S. health plans. With a background in AI, digital and cloud transformation, Ritwik focuses on aligning innovation with business outcomes to improve efficiency, accuracy, and scalability in healthcare.",
    lastUpdatedAt: "1st January",
  },
  {
    slug: "bryan-lee",
    name: "Bryan W. Lee",
    titles: [
      "Chief Compliance Officer at Reveleer",
      "Medicare Finance & Government Programs, Kaiser Permanente",
    ],
    image: "/assets/advisors/bryan-lee.jpg",
    bio: "Bryan W. Lee is the Founder and Chief Solutions Officer of Anshin Health Solutions. He was previously Chief Compliance Officer and Vice President of Payer Solutions at Health Data Vision (now Reveleer), and co-founded Pyxis Health Solutions. Earlier in his career he spent more than 20 years in Medicare Advantage leadership at Kaiser Permanente and Regence BlueCross BlueShield, working in Medicare finance, risk adjustment, and government programs, followed by senior product and strategy roles at Change Healthcare, Apixio, and FJA. As Executive Advisor to Martlet AI, he brings payer-side, regulatory, and product experience across risk adjustment, RADV/IVA, HCC coding, and encounter-data integrity.",
  },
  {
    slug: "advisor-two",
    name: "Advisor Name",
    titles: ["Title, Organization"],
    image: "",
    bio: "One or two sentences on background and the focus area they advise on.",
  },
  {
    slug: "advisor-three",
    name: "Advisor Name",
    titles: ["Title, Organization"],
    image: "",
    bio: "One or two sentences on background and the focus area they advise on.",
  },
];

export function getAuthorBySlug(slug: string): Author | undefined {
  return AUTHORS.find((author) => author.slug === slug);
}

export function getAuthorByName(name: string): Author | undefined {
  // Simple check, might need normalization if names vary slightly
  return AUTHORS.find((author) => author.name === name);
}

export function getAllAuthors(): Author[] {
  return AUTHORS;
}

/** Who counts as an advisor, in display order. Defined once here so the
 *  About page's advisory-board card is the single source of truth on
 *  who's included. */
export const ADVISOR_SLUGS = ["bryan-lee", "advisor-two", "advisor-three"];

export function getAdvisors(): Author[] {
  return ADVISOR_SLUGS.map(getAuthorBySlug).filter((a) => a !== undefined);
}

/** First letter of up to two name parts, for the avatar fallback when
 *  `image` is empty. */
export function initials(name: string): string {
  return name
    .split(" ")
    .filter(Boolean)
    .map((part) => part[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}
