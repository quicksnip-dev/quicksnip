import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      new URL("https://img.youtube.com/vi/**"),
      new URL("https://storage.ko-fi.com/cdn/**"),
    ],
  },
};

export default nextConfig;
