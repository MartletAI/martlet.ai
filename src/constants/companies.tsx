export const companies = ["JohnSnowLabs", "WVUMedicine"] as const;

export const companiesMap = {
  JohnSnowLabs: {
    title: "John Snow Labs Boosts Risk Adjustment with Martlet AI",
    description: (
      <p className="text-base font-semibold text-center">
        John Snow Labs used Martlet AI to uncover missed HCC codes, improve RAF
        scoring, and streamline physician <br className="hidden xl:block" />
        workflows — thanks to real-time suggestions seamlessly integrated into
        their EHR, with full compliance.
      </p>
    ),
    name: "John Snow Labs",
    logo: "/logo/jsl-logo.png",
    alt: "John Snow Labs Logo",
    height: 68,
    width: 252,
    hcc: 24,
    manualReview: 30,
  },
  WVUMedicine: {
    title: "WVU Boosts Risk Adjustment with Martlet AI",
    description: (
      <p className="text-base font-semibold text-center">
        WVU Medicine used Martlet AI to uncover missed HCC codes, improve RAF
        scoring, and streamline physician <br className="hidden xl:block" />{" "}
        workflows — thanks to real-time suggestions seamlessly integrated into
        their EHR, with full compliance.
      </p>
    ),
    name: "WVU Medicine",
    logo: "/logo/wvu-medicine-logo.png",
    alt: "WVU Medicine Logo",
    height: 40,
    width: 292,
    hcc: 42,
    manualReview: 19,
  },
};
