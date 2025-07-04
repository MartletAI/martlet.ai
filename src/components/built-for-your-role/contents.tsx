import { Button } from "../ui/button";
import VideoPlayer from "../video-player";
import { Feature } from "./feature";

export function Contents() {
  return (
    <div className="mt-16 flex flex-col xl:flex-row justify-between 2xl:justify-evenly gap-8">
      <div>
        <h3 className="text-[2rem] lg:text-[2.5rem] leading-[1.15] whitespace-nowrap">
          Smarter Coding at <br /> the Point of Care
        </h3>
        <p className="mt-4 mb-4 text-[14px] min-[414px]:text-base whitespace-nowrap">
          Real-time suggestions inside your EHR. <br />
          Martlet analyzes notes and recommends HCC codes,
          <br /> questions, and care points — right during the visit.
        </p>
        <Feature content="Instant clinical prompts" />
        <Feature content="Auto HCC coding" />
        <Feature content="Seamless EHR workflow" />

        <Button className="mt-4 xl:mt-8">See How It Works</Button>
      </div>
      <VideoPlayer
        src="/build-for-your-role/providers"
        ariaLabel="Step-by-step demonstration: Martlet AI seamlessly integrating with Electronic Health Records (EHR) systems, showcasing multi-workflow automation for patient data synchronization, clinical decision support, and billing compliance"
      />
    </div>
  );
}
