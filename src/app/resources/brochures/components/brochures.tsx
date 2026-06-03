"use client";

import Image from "next/image";
import { useState } from "react";
import { BROCHURES } from "@/lib/brochures";
import { Icon } from "@/components";
import { BrochureDownloadModal } from "@/components/brochure-download";

export function Brochures() {
  const [modalBrochureSlug, setModalBrochureSlug] = useState<string | null>(
    null,
  );
  const modalBrochure =
    BROCHURES.find((brochure) => brochure.slug === modalBrochureSlug) ?? null;

  return (
    <>
      <section className="py-10 border-t border-border container-main mx-auto">
        <div className="grid grid-cols-1 justify-self-center md:grid-cols-2 gap-8">
          {BROCHURES.map((brochure) => (
            <div
              key={brochure.slug}
              className="bg-white flex flex-col max-w-[590px]"
            >
              <div className="relative w-full mb-4">
                <Image
                  src={brochure.thumbnail}
                  alt={brochure.title}
                  width={590}
                  height={300}
                  className="object-cover mx-auto h-[300px] w-full"
                />
                <div className="absolute left-0 bottom-0 flex items-start justify-between p-5 border-t border-white/30 bg-[rgba(227,227,227,0.30)] backdrop-blur-md w-full">
                  <div className="flex flex-col items-start gap-1">
                    <span className="leading-5 font-semibold text-sm text-white">
                      Martlet AI
                    </span>
                    <span className="leading-5 font-normal text-sm text-white">
                      Brochure
                    </span>
                  </div>
                  <span className="leading-5 font-semibold text-sm text-white">
                    {brochure.tag}
                  </span>
                </div>
              </div>

              <h2 className="text-lg font-semibold leading-7">
                {brochure.title}
              </h2>
              <p className="text-text-tertiary-600 text-base font-normal leading-6 line-clamp-3 mb-5 grow">
                {brochure.excerpt}
              </p>
              <button
                type="button"
                onClick={() => setModalBrochureSlug(brochure.slug)}
                className="text-base font-semibold leading-6 text-black flex items-center gap-2 hover:underline text-left"
              >
                Download Brochure
                <Icon name="arrow-up-right" />
              </button>
            </div>
          ))}
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
