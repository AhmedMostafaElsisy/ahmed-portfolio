import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

const SITE_URL = "https://ahmedmostafa-dev.vercel.app";

export const metadata: Metadata = {
  // Absolute base so og:image (src/app/opengraph-image.png) resolves for LinkedIn and other crawlers.
  metadataBase: new URL(SITE_URL),
  alternates: { canonical: "/" },
  title: "AhmedOS | Ahmed Mostafa, Senior Flutter Developer",
  description:
    "Ahmed Mostafa is a senior Flutter developer in Cairo and the founder of Mudawy. His portfolio is a phone. Unlock it.",
  openGraph: {
    title: "AhmedOS | Ahmed Mostafa",
    description: "Senior Flutter developer and founder of Mudawy. The portfolio is a phone.",
    type: "website",
    url: SITE_URL,
    siteName: "AhmedOS",
  },
  twitter: {
    card: "summary_large_image",
    title: "AhmedOS | Ahmed Mostafa",
    description: "Senior Flutter developer and founder of Mudawy. The portfolio is a phone.",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f3f3f0" },
    { media: "(prefers-color-scheme: dark)", color: "#0b0b0d" },
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body>
    </html>
  );
}
