import { SmartLink, Icon } from "@/components";
import { Reveal } from "@/components/reveal";

/**
 * Bridge - the expand-to-land loop: regulatory-grade retrospective coding
 * makes RADV a byproduct.
 */
export function Bridge() {
  return (
    <section className="bg-white py-20 md:py-28" aria-labelledby="retro-bridge-heading">
      <div className="container-main text-center max-w-[820px] mx-auto">
        <Reveal>
          <h2 id="retro-bridge-heading" className="apple-display text-[30px] md:text-[40px] mb-6">
            Code it right once.
            <br />
            <span className="text-gradient-blue">The audit is already answered.</span>
          </h2>
          <p className="text-lg md:text-xl apple-body leading-relaxed mb-9">
            Every chart closed here is verified against the same checks a RADV
            audit applies. If your contract is selected, the evidence packets
            already exist — nothing has to be reconstructed from records that
            are years old, by people who may no longer be there to ask.
          </p>
          <SmartLink
            href="/solutions/radv"
            className="btn btn-gradient btn-lg h-[52px]! py-3! px-7! text-lg! font-semibold!"
          >
            See RADV readiness
            <Icon name="arrow-right" className="h-4 w-4" aria-hidden />
          </SmartLink>
        </Reveal>
      </div>
    </section>
  );
}
