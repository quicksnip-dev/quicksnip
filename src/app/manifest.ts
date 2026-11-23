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
    icons: [
      { src: "/icon.svg", sizes: "any", type: "image/svg+xml" },
      { src: "/favicon.ico", sizes: "48x48", type: "image/x-icon" },
    ],
  };
}
