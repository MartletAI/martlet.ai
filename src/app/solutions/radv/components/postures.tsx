import Link from "next/link";
import type { ReactNode } from "react";

import { Reveal } from "@/components/reveal";

const INTERNAL_LINK_CLASS =
  "text-[#0165dc] underline decoration-[#0165dc]/30 decoration-1 underline-offset-2 hover:decoration-[#0165dc]";

const B = ({ children }: { children: ReactNode }) => (
  <strong className="font-semibold text-[#0a0a12]">{children}</strong>
);

interface Posture {
  label: string;
  title: string;
  accent: string;
  dot: string;
  card: string;
  points: ReactNode[];
}

const POSTURES: Posture[] = [
  {
    label: "Proactive — before the letter",
    title: "Mock audits, at any scale.",
    accent: "text-[#7c3aed]",
    dot: "bg-[#7c3aed]",
    card: "bg-gradient-to-b from-white to-[#f7f4ff] border-[#7c3aed]/15",
    points: [
      <>
        Sample your contracts on <B>CMS&rsquo;s own sampling methodology</B>, so
        your internal findings line up with how CMS will sample.
      </>,
      <>
        Or verify every submitted HCC across the contract, since{" "}
        <B>you cannot predict which enrollees CMS draws.</B>
      </>,
      <>
        Re-run quarterly and trend confirmation and deletion rates by coder,
        vendor and provider group, so you can see{" "}
        <B>whether last cycle&rsquo;s fixes actually held.</B>
      </>,
      <>
        Fix documentation <B>before you are selected</B>, while the people who
        wrote it are still there to ask.
      </>,
    ],
  },
  {
    label: "Reactive — after the letter",
    title: "The window is five months.",
    accent: "text-[#0165dc]",
    dot: "bg-[#0165dc]",
    card: "bg-gradient-to-b from-white to-[#eff6ff] border-[#0165dc]/15",
    points: [
      <>
        Ingest the enrollee data list and map{" "}
        <B>every audited HCC to its best evidence in hours</B>, so retrieval
        starts against a known target rather than a blank list.
      </>,
      <>
        Rank candidate records by validation strength, so{" "}
        <B>you submit the strongest one</B> rather than the first one found.
      </>,
      <>
        <B>Surface signature and credential gaps early</B>, while there is still
        time to act on them.
      </>,
      <>
        Generate coversheet-ready packets and{" "}
        <B>track intake rejections inside the window</B>, so a bounced
        submission is caught while it can still be replaced.
      </>,
    ],
  },
];

/**
 * Postures - proactive and reactive, both running on the same engine.
 */
export function Postures() {
  return (
    <section className="apple-section-gray py-20 md:py-24" aria-labelledby="postures-heading">
      <div className="container-main">
        <Reveal as="header" className="text-center max-w-[800px] mx-auto mb-12">
          <h2 id="postures-heading" className="apple-display text-[30px] md:text-[40px] mb-5">
            Before the letter. After the letter.
          </h2>
          <p className="text-lg md:text-xl apple-body leading-relaxed m-0">
            The engine runs the same way whether or not a letter has arrived.
            Before selection you sample and verify on your own schedule. After
            selection the same engine works the audit you were handed.
          </p>
        </Reveal>

        <Reveal
          as="ul"
          stagger
          className="grid grid-cols-1 lg:grid-cols-2 gap-5 list-none p-0 m-0 max-w-[1100px] mx-auto mb-10"
        >
          {POSTURES.map((posture) => (
            <li key={posture.label} className={`rounded-[28px] border p-7 md:p-9 ${posture.card}`}>
              <p className={`flex items-center gap-2 text-xs font-bold uppercase tracking-[0.12em] ${posture.accent} mb-3`}>
                <span className={`w-1.5 h-1.5 rounded-full ${posture.dot}`} aria-hidden />
                {posture.label}
              </p>
              <h3 className="text-xl md:text-2xl font-bold tracking-tight text-[#0a0a12] leading-snug mb-5">
                {posture.title}
              </h3>
              <ul className="list-none p-0 m-0 flex flex-col gap-3.5">
                {posture.points.map((point, index) => (
                  <li key={index} className="flex gap-3 items-start text-base apple-body leading-relaxed">
                    <span className={`mt-2 w-1.5 h-1.5 rounded-full shrink-0 ${posture.dot}`} aria-hidden />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </Reveal>

        <Reveal className="max-w-[900px] mx-auto">
          <p className="text-sm apple-caption leading-relaxed m-0 text-center">
            Payment-year schedules, submission windows and appeal deadlines are
            tracked on the{" "}
            <Link href="/resources/radv-hub" className={INTERNAL_LINK_CLASS}>
              RADV Hub
            </Link>
            .
          </p>
        </Reveal>
      </div>
    </section>
  );
}
