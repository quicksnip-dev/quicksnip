export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://quicksnip.dev").replace(/\/$/, "");
export const GITHUB_URL = "https://github.com/quicksnip-dev/quicksnip";
export const DISCORD_URL = "https://discord.com/invite/Nm5K46yUy5";
export const SPONSOR_URL = "https://ko-fi.com/D1D217QALD";
export const YOUTUBE_URL = "https://www.youtube.com/@technoph1le";

export const LANGUAGE_NAMES: Record<string, string> = {
  ts: "TypeScript",
  tsx: "TSX",
  js: "JavaScript",
  jsx: "JSX",
  py: "Python",
  java: "Java",
  cs: "C#",
  cpp: "C++",
  c: "C",
  rs: "Rust",
  rb: "Ruby",
  hs: "Haskell",
  sh: "Bash",
  css: "CSS",
  scss: "SCSS",
  html: "HTML",
  regex: "Regex",
};

/** Prism language names for syntax highlighting. */
export const PRISM_LANGUAGE: Record<string, string> = {
  ts: "typescript",
  tsx: "tsx",
  js: "javascript",
  jsx: "jsx",
  py: "python",
  java: "java",
  cs: "csharp",
  cpp: "cpp",
  c: "c",
  rs: "rust",
  rb: "ruby",
  hs: "haskell",
  sh: "bash",
  css: "css",
  scss: "scss",
  html: "markup",
  regex: "regex",
};

export const installCommand = (name: string) => `npx shadcn@latest add ${SITE_URL}/r/${name}.json`;
