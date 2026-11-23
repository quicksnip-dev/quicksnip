import type { ExtensionType } from "@/types";

/** Keep this list honest: only mark something "available" once it ships. */
export const EXTENSIONS: ExtensionType[] = [
  {
    icon: "/assets/extensions/cli.svg",
    name: "shadcn CLI",
    description: "Install any JavaScript or TypeScript snippet into your project with the shadcn CLI. Works today.",
    status: "available",
    guide_url: "/guide/installation",
    source_url: "https://ui.shadcn.com/docs/cli",
  },
  {
    icon: "/assets/extensions/raycast.svg",
    name: "Raycast",
    description: "Browse and copy QuickSnip snippets from Raycast. Built by @lille-morille.",
    status: "community",
    guide_url: "/guide/extensions/quicksnip-raycast",
    source_url: "https://www.raycast.com/anders_morille/quicksnip",
  },
  {
    icon: "/assets/extensions/cli.svg",
    name: "MCP server",
    description: "Let Claude Code, Cursor and other MCP clients search and install verified snippets.",
    status: "planned",
    guide_url: "/guide/for-ai-agents",
  },
  {
    icon: "/assets/extensions/cli.svg",
    name: "QuickSnip CLI",
    description: "`npx quicksnip add <name>` for every language, not just JavaScript.",
    status: "planned",
    guide_url: "/guide/extensions/quicksnip-cli",
  },
  {
    icon: "/assets/extensions/vscode.svg",
    name: "VS Code",
    description: "Search and insert snippets without leaving your editor.",
    status: "planned",
    guide_url: "/guide/extensions/quicksnip-vscode",
  },
];

export const FUTURE_EXTENSIONS = [
  { name: "JetBrains", icon: "/assets/extensions/jetbrains.svg", shortcut_name: "JB" },
  { name: "NeoVim", icon: "/assets/extensions/neovim.svg", shortcut_name: "NV" },
  { name: "Vim", icon: "/assets/extensions/vim.svg", shortcut_name: "VM" },
];
