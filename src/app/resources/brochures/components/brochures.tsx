"use client";

import Image from "next/image";
import { useState } from "react";
import { BROCHURES } from "@/lib/brochures";
import { Icon } from "@/components";
import { BrochureDownloadModal } from "@/components/brochure-download";
import { Reveal } from "@/components/reveal";

export function Brochures() {
  const [modalBrochureSlug, setModalBrochureSlug] = useState<string | null>(
    null,
  );
  const modalBrochure =
    BROCHURES.find((brochure) => brochure.slug === modalBrochureSlug) ?? null;

  return (
    <>
      <section className="apple-section-gray pt-[132px] md:pt-[160px] pb-16 md:pb-20" aria-labelledby="brochures-heading">
        <div className="container-main">
          <h1 id="brochures-heading" className="text-[26px] md:text-[32px] font-bold tracking-tight text-[#0a0a12] mb-8 md:mb-10 text-center">
            Brochures
          </h1>

          <Reveal
            as="ul"
            stagger
            className="grid grid-cols-1 sm:grid-cols-2 gap-6 list-none p-0 m-0 max-w-[900px] mx-auto"
          >
            {BROCHURES.map((brochure) => (
              <li
                key={brochure.slug}
                className="rounded-2xl bg-white border border-border overflow-hidden flex flex-col h-full"
              >
                <div className="relative w-full aspect-3/2 overflow-hidden">
                  <Image
                    src={brochure.thumbnail}
                    alt={brochure.title}
                    fill
                    sizes="(min-width: 640px) 420px, 100vw"
                    className="object-cover"
                  />
                </div>

                <div className="flex flex-col flex-1 p-6">
                  <p className="text-xs apple-caption mb-2">
                    Martlet AI · Brochure
                  </p>

                  <h2 className="text-base font-bold tracking-tight text-[#0a0a12] leading-snug mb-2">
                    {brochure.title}
                  </h2>

                  <p className="text-sm apple-body leading-relaxed mb-4 grow">
                    {brochure.excerpt}
                  </p>

                  <button
                    type="button"
                    onClick={() => setModalBrochureSlug(brochure.slug)}
                    className="text-sm font-semibold text-[#0165dc] flex items-center gap-1.5 hover:gap-2 transition-all mt-auto text-left"
                  >
                    Download brochure
                    <Icon name="arrow-up-right" className="size-3.5" />
                  </button>
                </div>
              </li>
            ))}
          </Reveal>
        </div>
      </section>

      <BrochureDownloadModal
        brochure={modalBrochure}
        open={modalBrochureSlug !== null}
        onClose={() => setModalBrochureSlug(null)}
      />
    </>
  );
}
