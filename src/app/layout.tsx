import "./globals.css";
import type { Metadata } from "next";
import { Header } from "@/components/header";

export const metadata: Metadata = {
  title: "Martlet AI",
  description:
    "Smarter Rist Adjustment with Martlet AI, On-premise, Secure, Real-time, HCC Coding & Risk Profiling",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="absolute overflow-x-hidden w-full">
      <link
        rel="preload"
        as="image"
        href="backgrounds/hero-section-parrot.avif"
      />
      <body className={`antialiased`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
