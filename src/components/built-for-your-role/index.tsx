import { SectionWithHeading } from "../section";
import { Contents } from "./contents";
import { Tabs } from "./tabs";

export function BuiltForYourRole() {
  return (
    <div className="bg-[rgba(230,239,255,0.5)]">
      <SectionWithHeading
        aria-labelledby="risk-adjustment"
        titleClassName="mb-8"
        title="Built for your role"
      >
        <Tabs />
        <p className="text-center mt-8">
          Doctors, Hospitals, Health Systems, and Point of Care Clinics
        </p>
        <Contents />
      </SectionWithHeading>
    </div>
  );
}
