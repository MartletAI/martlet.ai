import { SmartLink, Icon } from "@/components";
import { Reveal } from "@/components/reveal";

/**
 * Bridge - the land-and-expand loop: RADV readiness as a permanent property
 * of regulatory-grade retrospective coding.
 */
export function Bridge() {
  return (
    <section className="bg-white py-20 md:py-28" aria-labelledby="bridge-heading">
      <div className="container-main text-center max-w-[820px] mx-auto">
        <Reveal>
          <h2 id="bridge-heading" className="apple-display text-[32px] md:text-[52px] mb-6">
            Audit-readiness isn&rsquo;t a project.
            <br />
            <span className="text-gradient-blue">
              It&rsquo;s how your coding should run all year.
            </span>
          </h2>
          <p className="text-lg md:text-xl apple-body leading-relaxed mb-9">
            Every chart Martlet AI closes retrospectively is verified against
            the same checklist CMS coders apply — so the evidence packet exists
            the day the code is submitted, not five months into an audit. Run
            coding at regulatory grade, and RADV becomes a report you print.
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
