import { SmartLink, Icon } from "@/components";
import { Reveal } from "@/components/reveal";

/**
 * Bridge - the cross-link to retrospective, earned by explaining the shared
 * mechanism rather than asserting a platform benefit.
 */
export function Bridge() {
  return (
    <section className="bg-white py-20 md:py-28" aria-labelledby="bridge-heading">
      <div className="container-main text-center max-w-[820px] mx-auto">
        <Reveal>
          <h2 id="bridge-heading" className="apple-display text-[30px] md:text-[40px] mb-6">
            The same checks, one step earlier.
          </h2>
          <p className="text-lg md:text-xl apple-body leading-relaxed mb-9">
            The validation that answers a RADV audit is the same validation that
            should run before a code is ever submitted. Teams that run it at
            coding time find the gaps while the documentation can still be
            fixed, and when a letter arrives the packets already exist. That is
            the retrospective engine, and it uses the same checks and the same
            evidence model you see here.
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
