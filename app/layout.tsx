import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "StandupSync – Turn Slack Standups into Progress Reports",
  description: "Aggregates daily standup messages from Slack channels into formatted progress reports for stakeholders. Built for engineering and project managers."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="6e51a230-4fd8-4111-8211-76f73caa51d4"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">
        {children}
      </body>
    </html>
  );
}
