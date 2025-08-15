import type { ExtensionType } from "@/types";

export const EXTENSIONS: ExtensionType[] = [
  {
    icon: "/extensions/raycast.svg",
    name: "Raycast",
    description: "Raycast extension for QuickSnip.",
    guide_url: "/guide/extensions/quicksnip-raycast",
    source_url: "https://github.com",
    downloads: 3580,
  },
  {
    icon: "/extensions/vscode.svg",
    name: "VS Code",
    description: "VS Code extension for QuickSnip.",
    guide_url: "/guide/extensions/quicksnip-vscode",
    source_url: "https://github.com",
    downloads: 8400,
  },
];

export const FUTURE_EXTENSIONS = [
  {
    name: "JetBrains",
    icon: "/extensions/jetbrains.svg",
    shortcut_name: "JB",
  },
  {
    name: "NeoVim",
    icon: "/extensions/neovim.svg",
    shortcut_name: "NV",
  },
  {
    name: "Vim",
    icon: "/extensions/vim.svg",
    shortcut_name: "VM",
  },
];
