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
      { url: "/favicon.ico", sizes: "16x16" },
      { url: "/logos/flavicon_teil.png", sizes: "16x16" },
      { url: "/logos/flavicon_teil.svg", type: "image/svg+xml" },
    ],
    apple: [
      { url: "/logos/flavicon_teil.png", sizes: "32x32" },
    ],
    shortcut: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="16x16" />
        <link rel="icon" href="/logos/flavicon_teil.png" sizes="16x16" />
        <link rel="icon" href="/logos/flavicon_teil.svg" type="image/svg+xml" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/logos/flavicon_teil.png" sizes="32x32" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}>
        <div className="flex-1 flex flex-col">
          {children}
        </div>
        <CookieConsent />
      </body>
    </html>
  );
}
