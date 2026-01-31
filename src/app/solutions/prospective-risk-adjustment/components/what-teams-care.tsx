import Image from "next/image";
import { Icon } from "@/components/icon";
import { SectionLabel } from "@/components/section-label";

const CARDS = [
  {
    icon: "file-checked" as const,
    title: "Visit Prep Summary",
    description: "Prioritized gaps, documentation cues, and routing signals.",
  },
  {
    icon: "message-notification" as const,
    title: "Suggestion Card",
    description:
      "Condition + evidence snippets + MEAT signals + recommended next action.",
  },
  {
    icon: "data-flow" as const,
    title: "Workflow Export",
    description: "Structured output for queues, QA, and integration pipelines.",
  },
];

export function WhatTeamsCare() {
  return (
    <section
      aria-labelledby="outputs-heading"
      className="outputs-section relative py-10 overflow-hidden"
    >
      {/* Background Image */}
      <div className="max-w-[1440px] m-auto absolute inset-0 z-0">
        <Image
          src="/assets/section-background/why-we-care.png"
          alt=""
          width={1440}
          height={800}
          className="absolute right-0 top-0 opacity-5 w-full h-auto pointer-events-none"
          aria-hidden="true"
          priority={false}
        />
      </div>

      <div className="container-main flex flex-col gap-[46px] relative z-10">
        {/* Header Section */}
        <header className="flex flex-col items-center gap-spacing-xl">
					<SectionLabel className="text-outputs-accent mb-3">Outputs</SectionLabel>
					<h2
						id="outputs-heading"
						className="section-heading text-center mb-4 px-8 md:px-0"
					>
						What care teams get in one view
					</h2>

					<p className="text-xl leading-[30px] text-center text-text-tertiary-600 font-normal">
						Everything needed to act without forcing people to dig through
						charts.
					</p>
        </header>

        {/* Cards Grid */}
        <ul
          role="list"
          className="flex flex-col items-center md:flex-row justify-center gap-[22px]"
        >
          {CARDS.map((card) => (
            <li key={card.title} className="flex-1 max-w-[400px] h-[210px]">
              <article className="outputs-card h-full flex flex-col gap-[17px]">
                {/* Icon Container */}
                <div className="outputs-icon-container" aria-hidden="true">
                  <Icon
                    name={card.icon}
                    className="w-5 h-5 text-outputs-accent"
                  />
                </div>

                {/* Card Content */}
                <div className="flex flex-col gap-spacing-xs">
                  <h3 className="font-semibold text-lg leading-7 text-foreground">
                    {card.title}
                  </h3>
                  <p className="text-base leading-6 font-normal text-text-card-body">
                    {card.description}
                  </p>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}