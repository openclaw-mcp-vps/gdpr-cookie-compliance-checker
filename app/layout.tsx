import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GDPR Cookie Compliance Checker",
  description: "Audit website GDPR cookie compliance automatically. Scan for violations, generate reports, and fix issues fast."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="db29c6ab-2344-4e9c-b58d-e76ce2716e64"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
