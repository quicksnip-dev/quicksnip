import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { RootProvider } from "fumadocs-ui/provider";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import Header from "@/components/layouts/header";
import Footer from "@/components/layouts/footer";
import { GITHUB_URL, SITE_URL } from "@/data/meta";
import { SITE_DESCRIPTION, SITE_NAME, SITE_TAGLINE } from "@/lib/seo";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const TITLE = `${SITE_NAME} — ${SITE_TAGLINE}`;

const verification: Metadata["verification"] = {
  google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  yandex: process.env.NEXT_PUBLIC_YANDEX_VERIFICATION,
  other: process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION
    ? { "msvalidate.01": process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION }
    : undefined,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: `%s · ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  keywords: [
    "code snippets",
    "typescript utilities",
    "javascript snippets",
    "shadcn registry",
    "llms.txt",
    "ai coding",
    "vibe coding",
    "open source",
  ],
  authors: [{ name: "Technophile and QuickSnip contributors", url: GITHUB_URL }],
  creator: "Technophile",
  publisher: SITE_NAME,
  category: "technology",
  alternates: { canonical: "/", types: { "text/plain": "/llms.txt" } },
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    url: "/",
    title: TITLE,
    description: SITE_DESCRIPTION,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: SITE_DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
  appleWebApp: { title: SITE_NAME, capable: true, statusBarStyle: "black-translucent" },
  formatDetection: { telephone: false, email: false, address: false },
  verification,
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#1c1c1c" },
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} grid grid-cols-[minmax(0,1fr)] grid-rows-[auto_1fr_auto] min-h-screen antialiased bg-background text-foreground`}
      >
        <RootProvider theme={{ defaultTheme: "dark", enableSystem: true, disableTransitionOnChange: true }}>
          <Header />
          <div className="min-w-0">{children}</div>
          <Footer />
        </RootProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
