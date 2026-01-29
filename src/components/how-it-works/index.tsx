import { Icon } from "@/components/icon";
import { SectionLabel } from "@/components/section-label";
import { ReactNode } from "react";

export interface Step {
  title: string;
  description: string;
  points: string[];
  fill: string;
  icon: ReactNode;
  id: string;
}

interface HowItWorksProps {
  steps: Step[];
  label?: string;
  heading: string;
  subheading: string;
}

export function HowItWorks({
  steps,
  label = "How it works",
  heading,
  subheading,
}: HowItWorksProps) {
  return (
    <section id="how-it-works" className="gradient-why-martlet py-10">
      <div className="flex flex-col items-center pb-12">
        <SectionLabel className="text-indicator-prospective mb-3">{label}</SectionLabel>
        <h2 className="section-heading pb-5">{heading}</h2>
        <p className="font-normal text-xl text-center text-text-tertiary-600 max-w-content">
          {subheading}
        </p>
      </div>

      <div className="relative container-main flex max-w-[1250px]! h-[510px] overflow-x-auto overflow-y-hidden no-scrollbar">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1240"
          height="504"
          viewBox="0 0 1240 504"
          fill="none"
          className="absolute top-0 left-0 z-10"
          aria-hidden="true"
        >
          <path
            d="M395.798 447.04V452.795C395.798 478.752 374.756 499.795 348.798 499.795H51C25.0426 499.795 4 478.752 4 452.795V51C4 25.0426 25.0426 4 51 4H348.798C374.756 4 395.798 25.0426 395.798 51V180.947C395.798 186.47 400.276 190.947 405.798 190.947H417.58C423.103 190.947 427.58 186.47 427.58 180.947V51.0001C427.58 25.0427 448.623 4 474.58 4H768.731C794.689 4 815.731 25.0426 815.731 51V180.947C815.731 186.47 820.208 190.947 825.731 190.947H839.597C845.12 190.947 849.597 186.47 849.597 180.947V51.0001C849.597 25.0427 870.639 4 896.597 4H1188.66C1214.62 4 1235.66 25.0426 1235.66 51V251.897V452.795C1235.66 478.752 1214.62 499.795 1188.66 499.795H896.597C870.639 499.795 849.597 478.752 849.597 452.795V447.04"
            stroke="url(#paint0_linear_1902_2924)"
            strokeWidth="8"
          />
          <defs>
            <linearGradient
              id="paint0_linear_1902_2924"
              x1="1235.66"
              y1="251.897"
              x2="4"
              y2="251.897"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#08ACF3" />
              <stop offset="0.480769" stopColor="#7F56D9" />
              <stop offset="1" stopColor="#F48321" />
            </linearGradient>
          </defs>
        </svg>

        {steps.map((step, index) => (
          <article
            key={index}
            className={`relative w-full max-w-[400px] min-w-[400px] h-[496px] bg-white py-3 px-4 rounded-[44px] shadow-card border border-border-light mt-1 ${
              index === 1 ? "mx-[22px]" : ""
            }`}
          >
            {step.id === "step-2" && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="438"
                height="100"
                viewBox="0 0 438 100"
                fill="none"
                className="absolute -bottom-7 -left-5"
                aria-hidden="true"
              >
                <g filter="url(#filter0_d_1902_2925)">
                  <path
                    d="M24.5988 17.5996C24.5988 47.423 48.7755 71.8912 78.5988 71.8912H218.935H359.271C389.095 71.8912 413.271 47.4229 413.271 17.5996"
                    stroke="url(#paint0_linear_1902_2925)"
                    strokeWidth="8"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_d_1902_2925"
                    x="-0.000391006"
                    y="-0.000391006"
                    width="437.872"
                    height="99.491"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                  >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="3" />
                    <feGaussianBlur stdDeviation="10.3" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_1902_2925"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_1902_2925"
                      result="shape"
                    />
                  </filter>
                  <linearGradient
                    id="paint0_linear_1902_2925"
                    x1="413.271"
                    y1="44.7454"
                    x2="24.5988"
                    y2="44.7454"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#6B5ADD" />
                    <stop offset="1" stopColor="#985FB0" />
                  </linearGradient>
                </defs>
              </svg>
            )}
            <div className="flex bg-white flex-col items-center gap-[17px] px-6 py-6 rounded-[40px] border-10 border-border-light h-full relative z-10">
              {step.icon}
              <div className="flex flex-col gap-1 text-start">
                <h3 className="font-semibold text-xl leading-7 text-foreground">
                  {step.title}
                </h3>
                <p className="font-medium text-base leading-6 text-[#252B37]">
                  {step.description}
                </p>
              </div>

              <ul className="flex flex-col gap-4 self-stretch pt-2">
                {step.points.map((point, i) => (
                  <li key={i} className="flex gap-3 items-start">
                    <div
                      className={`shrink-0 w-6 h-6 rounded-full flex items-center justify-center ${step.fill}`}
                    >
                      <Icon name="checked" className="size-3 text-white" />
                    </div>
                    <span className="font-normal text-base text-[#252B37] leading-6">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
