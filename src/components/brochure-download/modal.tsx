"use client";

import { useEffect, useRef } from "react";
import type { Brochure } from "@/lib/brochures";
import { BrochureDownloadForm } from "./form";

interface BrochureDownloadModalProps {
  brochure: Brochure | null;
  open: boolean;
  onClose: () => void;
}

export function BrochureDownloadModal({ brochure, open, onClose }: BrochureDownloadModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (open) {
      dialog.showModal();
    } else {
      dialog.close();
    }
  }, [open]);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    const handleClose = () => onClose();
    dialog.addEventListener("close", handleClose);
    return () => dialog.removeEventListener("close", handleClose);
  }, [onClose]);

  if (!brochure) return null;

  return (
    <dialog
      ref={dialogRef}
      className="fixed inset-0 z-50 m-0 h-full w-full max-h-none max-w-none border-0 bg-transparent p-4 backdrop:bg-black/50 open:flex open:items-center open:justify-center"
      onClick={(event) => {
        if (event.target === dialogRef.current) {
          onClose();
        }
      }}
    >
      <div
        role="document"
        className="relative w-full max-w-[480px] rounded-[12px] border border-[#E4E7EC] bg-white p-6 md:p-8 shadow-[0px_6px_20.6px_0px_rgba(0,0,0,0.05)]"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close download form"
          className="absolute right-4 top-4 text-[#667085] hover:text-foreground transition-colors text-2xl leading-none"
        >
          ×
        </button>

        <h2 className="text-xl md:text-2xl font-semibold text-foreground mb-1 pr-8">
          Download Brochure
        </h2>
        <p className="text-sm text-[#475467] mb-6">{brochure.title}</p>

        <BrochureDownloadForm brochure={brochure} onSuccess={onClose} />
      </div>
    </dialog>
  );
}
