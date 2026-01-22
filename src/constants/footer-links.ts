import { IconProps } from "@/components";

export const FOOTER_LINKS = {
  PRODUCTS: {
    title: "Products",
    links: [
      { label: "Prospective Risk Adjustment", href: "/solutions/prospective" },
      { label: "Retrospective Review", href: "/solutions/retrospective" },
      { label: "RADV Audit Readiness", href: "/solutions/radv" },
    ],
  },
  RESOURCES: {
    title: "Resources",
    links: [
      { label: "Blogs", href: "/blogs" },
      { label: "Contact Us", href: "/contact-us" },
    ],
  },
  COPY_RIGHT: "© 2025 Untitled UI. All rights reserved.",
  LEGAL: [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms of Services", href: "/terms-of-services" },
    { label: "Refund Policy", href: "/refund-policy" },
    { label: "AI Acceptable Use Policy", href: "/ai-acceptable-use-policy" },
  ],
  SOCIAL: [
    { icon: "social-x" as IconProps["name"], href: "/x" },
    { icon: "linkedin" as IconProps["name"], href: "/linkedin" },
    { icon: "facebook" as IconProps["name"], href: "/facebook" },

  ],
};