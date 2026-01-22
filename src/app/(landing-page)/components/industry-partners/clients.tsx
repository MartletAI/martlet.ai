"use client";

import { JohnSnowLabs } from "./john-snow-labs";
import { WVUMedicine } from "./wvu-medicine";
import { ArkosHealth } from "./arkos-health";
import { useCallback, useId, useState } from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { SliderPagination } from "@/components/SliderPagination";

const CLIENTS = {
  johnSnowLabs: {
    logo: "/clients/john-snow-labs.svg",
    id: "johnSnowLabs",
    description:
      "John Snow Labs uses Martlet AI's engine to power it's own suite of medical coding solutions",
    component: JohnSnowLabs,
  },
  wvuMedicine: {
    logo: "/clients/wvu-medicine.svg",
    id: "wvuMedicine",
    description:
      "John Snow Labs uses Martlet AI's engine to power it's own suite of medical coding solutions",
    component: WVUMedicine,
  },
  arkosHealth: {
    logo: "/clients/arkos-health.svg",
    id: "arkosHealth",
    description:
      "Arkos uses Martlet across the full risk cycle - Retrospective, Prospective, and RADV - to drive measurable financial and operational impact.",
    component: ArkosHealth,
  },
} as const;

type ClientId = keyof typeof CLIENTS;

const clientIds = Object.keys(CLIENTS) as ClientId[];

/**
 * Client selector component with accessible tab pattern.
 * Displays industry partner logos as selectable tabs with associated content panels.
 */
export function Clients() {
  const [selectedClient, setSelectedClient] = useState<ClientId>("johnSnowLabs");
  const tabPanelId = useId();
  const currentIndex = clientIds.indexOf(selectedClient);
  const currentClient = CLIENTS[selectedClient];
  const ClientComponent = currentClient.component;

  const handleClientSelect = useCallback((clientKey: ClientId) => {
    setSelectedClient(clientKey);
  }, []);

  const handlePrev = useCallback(() => {
    const prevIndex = currentIndex === 0 ? clientIds.length - 1 : currentIndex - 1;
    setSelectedClient(clientIds[prevIndex]);
  }, [currentIndex]);

  const handleNext = useCallback(() => {
    const nextIndex = currentIndex === clientIds.length - 1 ? 0 : currentIndex + 1;
    setSelectedClient(clientIds[nextIndex]);
  }, [currentIndex]);

  const handleDotClick = useCallback((index: number) => {
    setSelectedClient(clientIds[index]);
  }, []);

  return (
    <section
      className="flex flex-col items-center justify-center gap-section"
      aria-labelledby="clients-heading"
    >
      {/* Visually hidden heading for screen readers and SEO */}
      <h3 id="clients-heading" className="sr-only">
        Our Industry Partners
      </h3>

      {/* Client selector tabs */}
      <div
        role="tablist"
        aria-label="Select an industry partner"
        className="flex items-center justify-center gap-md"
      >
        {clientIds.map((key) => {
          const client = CLIENTS[key];
          const isSelected = selectedClient === key;

          return (
            <button
              key={client.id}
              type="button"
              role="tab"
              id={`tab-${client.id}`}
              aria-selected={isSelected}
              aria-controls={tabPanelId}
              onClick={() => handleClientSelect(key)}
              className={cn(
                "h-16 bg-white px-lg flex justify-center items-center gap-md",
                "border rounded-lg shadow-xs cursor-pointer",
                "transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary",
                isSelected
                  ? "border-[3px] border-primary"
                  : "border border-border hover:border-primary/50"
              )}
            >
              <Image
                src={client.logo}
                alt={`${client.id} logo`}
                width={100}
                height={60}
                className="w-auto h-10 object-contain"
              />
              <span className="sr-only">{client.id}</span>
            </button>
          );
        })}
      </div>

      {/* Tab panel with dynamic content */}
      <div
        id={tabPanelId}
        role="tabpanel"
        aria-labelledby={`tab-${currentClient.id}`}
        aria-live="polite"
        className="flex flex-col items-center gap-lg w-full"
      >
        {/* Client description */}
        <p className="text-center text-muted-foreground text-lg font-medium max-w-content">
          {currentClient.description}
        </p>

        {/* Client-specific content component */}
        <ClientComponent />
      </div>

      {/* Slider pagination controls */}
      <SliderPagination
        totalItems={clientIds.length}
        currentIndex={currentIndex}
        onPrev={handlePrev}
        onNext={handleNext}
        onDotClick={handleDotClick}
        getAriaLabel={(index) => `View ${CLIENTS[clientIds[index]].id} details`}
      />
    </section>
  );
}
 