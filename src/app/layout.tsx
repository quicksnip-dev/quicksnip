import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { RootProvider } from "fumadocs-ui/provider";
import "./globals.css";
import Header from "@/components/layouts/header";
import Footer from "@/components/layouts/footer";
import { SITE_URL } from "@/data/meta";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "QuickSnip — Verified code snippets for humans and AI",
    template: "%s · QuickSnip",
  },
  description:
    "Community-made, tested code snippets. Copy them, install them with the shadcn CLI, or let your AI coding agent use them.",
  alternates: { types: { "text/plain": "/llms.txt" } },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} grid grid-rows-[auto_1fr_auto] min-h-screen antialiased bg-background text-foreground dark`}
      >
        <Header />
        <RootProvider>{children}</RootProvider>
        <Footer />
      </body>
    </html>
  );
}
