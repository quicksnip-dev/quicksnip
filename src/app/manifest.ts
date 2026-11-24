import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "QuickSnip",
    short_name: "QuickSnip",
    description: "Verified code snippets for humans and AI.",
    start_url: "/",
    display: "standalone",
    background_color: "#1c1c1c",
    theme_color: "#1c1c1c",
    id: "/",
    scope: "/",
    lang: "en",
    categories: ["developer", "productivity", "education"],
    icons: [
      { src: "/icon.svg", sizes: "any", type: "image/svg+xml" },
      { src: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png" },
      { src: "/icon-maskable-512.png", sizes: "512x512", type: "image/png", purpose: "maskable" },
    ],
  };
}
