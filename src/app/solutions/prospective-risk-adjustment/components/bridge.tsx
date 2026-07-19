import { SmartLink, Icon } from "@/components";
import { Reveal } from "@/components/reveal";

/**
 * Bridge - prospective feeds the same engine: captured at the visit,
 * proven at submission.
 */
export function Bridge() {
  return (
    <section className="bg-white py-20 md:py-28" aria-labelledby="pro-bridge-heading">
      <div className="container-main text-center max-w-[820px] mx-auto">
        <Reveal>
          <h2 id="pro-bridge-heading" className="apple-display text-[32px] md:text-[52px] mb-6">
            Captured at the visit.
            <br />
            <span className="text-gradient-blue">Proven at submission.</span>
          </h2>
          <p className="text-lg md:text-xl apple-body leading-relaxed mb-9">
            Conditions confirmed at the point of care flow into the same
            engine that runs your retrospective review — validated against the
            CMS checklist, packaged with evidence, and submitted as clean
            deltas. One engine, one evidence model, one audit trail across all
            three workflows.
          </p>
          <SmartLink
            href="/solutions/retrospective-risk-adjustment"
            className="btn btn-gradient btn-lg h-[52px]! py-3! px-7! text-lg! font-semibold!"
          >
            See retrospective coding
            <Icon name="arrow-right" className="h-4 w-4" aria-hidden />
          </SmartLink>
        </Reveal>
      </div>
    </section>
  );
}
