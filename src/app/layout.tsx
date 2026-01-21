import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components";

export const metadata: Metadata = {
  title: "Martlet AI | Smarter Risk Adjustment",
  description:
    "On-premise, Secure, Real-time HCC Coding & Risk Profiling. Streamline prospective, retrospective, and RADV workflows with AI-powered precision.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
