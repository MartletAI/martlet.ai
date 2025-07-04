"use client";
import { tabs } from "@/constants/tabs";
import { useRoleStore } from "@/libs/store";

export function Tabs() {
  const { role, setRole } = useRoleStore((state) => state);

  return (
    <nav
      className="border-[2px] border-primary-shade-1 rounded-[60px] py-3 px-6 gap-4 w-fit  m-auto flex lg:py-6 lg:px-12 lg:gap-16 xl:w-[600px] justify-around"
      role="tablist"
      aria-label="Audience selection tabs"
    >
      {tabs.map((tab) => (
        <button
          key={tab}
          role="tab"
          aria-selected={role === tab}
          className={`font-3xl cursor-pointer text-primary-shade-1 ${
            role === tab ? "font-bold underline" : null
          }`}
          onClick={() => setRole(tab)}
        >
          {tab}
        </button>
      ))}
    </nav>
  );
}
