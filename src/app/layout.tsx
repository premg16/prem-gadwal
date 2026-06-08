import type { Metadata } from "next";
import { DM_Serif_Display, Inter, DM_Mono } from "next/font/google";
import "./globals.css";

const serif = DM_Serif_Display({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-serif",
  display: "swap",
});

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const mono = DM_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Prem Sai Gadwal",
  description:
    "Full-Stack Developer and AI Engineer. Building production-scale AI systems and web applications with Next.js, TypeScript, and Python.",
  icons: { icon: "/icon.ico", shortcut: "/icon.ico" },
  openGraph: {
    title: "Prem Sai Gadwal",
    description: "Full-Stack Developer & AI Engineer",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${serif.variable} ${sans.variable} ${mono.variable}`}
    >
      <body className="font-sans bg-bg text-text antialiased">
        <div className="grain" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
