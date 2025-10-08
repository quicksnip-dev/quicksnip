import { createMDX } from "fumadocs-mdx/next";

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      new URL("https://img.youtube.com/vi/**"),
      new URL("https://storage.ko-fi.com/cdn/**"),
    ],
  },
};

export default withMDX(config);
