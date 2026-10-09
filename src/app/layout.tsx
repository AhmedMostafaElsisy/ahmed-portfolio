import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { DEFAULT_PALETTE, PALETTE_STORAGE_KEY, palettes } from "@/lib/palettes";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AhmedOS | Ahmed Mostafa, Senior Flutter Developer",
  description:
    "Ahmed Mostafa is a senior Flutter developer in Cairo and the founder of Mudawy. His portfolio is a phone. Unlock it.",
  openGraph: {
    title: "AhmedOS | Ahmed Mostafa",
    description: "Senior Flutter developer and founder of Mudawy. The portfolio is a phone.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f3f3f0" },
    { media: "(prefers-color-scheme: dark)", color: "#0b0b0d" },
  ],
};

// Applies the saved palette before first paint so there is no color flash.
const paletteScript = `(() => {
  try {
    const saved = localStorage.getItem(${JSON.stringify(PALETTE_STORAGE_KEY)});
    const allowed = ${JSON.stringify(palettes.map((p) => p.id))};
    if (saved && allowed.includes(saved)) document.documentElement.dataset.palette = saved;
  } catch (e) {}
})();`;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-palette={DEFAULT_PALETTE} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: paletteScript }} />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body>
    </html>
  );
}
