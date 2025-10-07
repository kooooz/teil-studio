import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

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
      { url: "/logos/flavicon_teil.ico" },
      { url: "/logos/flavicon_teil.png", type: "image/png" },
    ],
    apple: [
      { url: "/logos/flavicon_teil.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: [
      { url: "/logos/flavicon_teil.ico" },
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
      </body>
    </html>
  );
}
