import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import CookieConsent from "@/components/CookieConsent";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "teil.studio - Brand Strategy Built Around People",
  description: "Brand strategy consultant specializing in positioning, story, and identity that connects and evolves as culture shifts. Building brands with audience insight and modern tools.",
  icons: {
    icon: [
      { url: "/logos/flavicon_teil.svg", type: "image/svg+xml", sizes: "16x16" },
    ],
    apple: [
      { url: "/logos/flavicon_teil.svg", sizes: "180x180", type: "image/svg+xml" },
    ],
    shortcut: [
      { url: "/logos/flavicon_teil.svg", sizes: "16x16" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}>
        <div className="flex-1 flex flex-col">
          {children}
        </div>
        <CookieConsent />
      </body>
    </html>
  );
}
