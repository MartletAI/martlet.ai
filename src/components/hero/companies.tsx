"use client";
import Image from "next/image";
import { useCompanyStore } from "@/libs/store";
import { companies, companiesMap } from "@/constants/companies";

export function Companies() {
  const { company, setCompany } = useCompanyStore((state) => state);
  return (
    <div className="w-full flex-col mt-16 min-[1440px]:mt-32 bg-white rounded-[25px] min-h-[280px] gap-4 flex xl:flex-row justify-around p-8 items-center">
      <p className="font-semibold text-xl mt-4 md:text-2xl">
        Trusted by Leading <br /> Healthcare Institutions
      </p>
      {companies?.map((key) => {
        const { width, height, logo, alt } = companiesMap[key];
        const isSelected = company === key;

        return (
          <button
            key={key}
            onClick={() => setCompany(key)}
            className={`border flex cursor-pointer items-center justify-center border-[#F5F6F8] ${
              isSelected
                ? "border-[3px] shadow-[0px_5px_16px_0px_#1B1F3B33]"
                : "border-[1px]"
            } h-[100px] py-2 px-4`}
          >
            <picture
              style={{
                position: "relative",
                width: `${width}px`,
                height: `${height}px`,
              }}
            >
              <source
                srcSet={logo?.replace(/\.png$/, ".avif")}
                type="image/avif"
              />
              <source
                srcSet={logo?.replace(/\.png$/, ".webp")}
                type="image/webp"
              />
              <Image
                src={logo}
                alt={alt}
                fill
                sizes={`(${width}px)`}
                className="object-contain"
              />
            </picture>
          </button>
        );
      })}
    </div>
  );
}
