"use client";

import { useEffect } from "react";

interface BrochureDownloadTriggerProps {
  pdfPath: string;
  pdfFilename: string;
}

function triggerDownload(pdfPath: string, filename: string) {
  const link = document.createElement("a");
  link.href = pdfPath;
  link.download = filename;
  link.rel = "noopener";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

export function BrochureDownloadTrigger({
  pdfPath,
  pdfFilename,
}: BrochureDownloadTriggerProps) {
  useEffect(() => {
    triggerDownload(pdfPath, pdfFilename);
  }, [pdfPath, pdfFilename]);

  return null;
}
