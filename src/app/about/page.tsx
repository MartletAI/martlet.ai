import { CTA as SharedCTA } from "@/components/cta";
import { BreadcrumbJsonLd } from "@/components/seo/breadcrumb-json-ld";

import { Principles } from "./components/principles";
import { Story } from "./components/story";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Martlet AI — Regulatory-Grade AI for Risk Adjustment",
  description:
    "Martlet AI automates HCC coding — retrospective, RADV, and prospective — inside the customer's environment. A John Snow Labs company: 500+ organizations on the underlying stack, no venture funding, built for the long term.",
  alternates: {
    canonical: "/about",
  },
};

export default function Page() {
  return (
    <main>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "About", href: "/about" },
        ]}
      />
      {/* Definition-first hero */}
      <div className="apple-hero">
        <section
          className="max-w-[1440px] m-auto pt-32 md:pt-[160px] pb-16 md:pb-20 relative z-10 text-center"
          aria-labelledby="about-heading"
        >
          <p className="animate-fade-in mb-6">
            <span className="eyebrow-chip bg-[#0165dc]/10 text-[#0154b8]">
              About Martlet AI
            </span>
          </p>
          <h1
            id="about-heading"
            className="container-main apple-display text-[38px] md:text-[60px] animate-fade-in mb-6 max-w-[960px]"
          >
            <span className="text-gradient-steel">Regulatory-grade AI</span>
            <br />
            <span className="text-gradient-blue">for risk adjustment.</span>
          </h1>
          <p className="container-main text-lg md:text-[21px] apple-body font-medium leading-relaxed animate-fade-in animation-delay-100 m-0 max-w-[780px]">
            Martlet AI automates HCC coding and risk-adjustment workflows —
            retrospective, RADV, and prospective — for Medicare Advantage
            payers, ACOs, and risk-bearing providers, running entirely inside
            the customer&rsquo;s environment. Today the platform serves
            100,000+ lives across 10 health systems and payers.
          </p>
        </section>
      </div>

      {/* The JSL story + inherited proof */}
      <Story />

      {/* Operating principles */}
      <Principles />

      {/* CTA */}
      <SharedCTA
        title="See what regulatory-grade looks like on your charts."
        subtitle="Talk to us"
        description="A working session: bring your charts, watch the engine run inside your environment, and see every claim on this site demonstrated live."
        submitLabel="Schedule a walkthrough"
        backgroundColor="bg-white"
      />
    </main>
  );
}
