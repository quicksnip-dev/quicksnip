import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { RootProvider } from "fumadocs-ui/provider";
import "./globals.css";
import Header from "@/components/layouts/header";
import Footer from "@/components/layouts/footer";
import { GITHUB_URL, SITE_URL } from "@/data/meta";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const DESCRIPTION =
  "Community-made, tested code snippets. Copy them, install them with the shadcn CLI, or let your AI coding agent use them.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "QuickSnip — Verified code snippets for humans and AI",
    template: "%s · QuickSnip",
  },
  description: DESCRIPTION,
  applicationName: "QuickSnip",
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
  alternates: { canonical: "/", types: { "text/plain": "/llms.txt" } },
  openGraph: {
    type: "website",
    siteName: "QuickSnip",
    url: SITE_URL,
    title: "QuickSnip — Verified code snippets for humans and AI",
    description: DESCRIPTION,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "QuickSnip — Verified code snippets for humans and AI",
    description: DESCRIPTION,
  },
  robots: { index: true, follow: true },
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
      </body>
    </html>
  );
}
