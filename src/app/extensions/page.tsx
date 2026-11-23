import type { Metadata } from "next";
import ExtensionItem, {
  NewExtensionItem,
} from "@/components/ui/extension-item";
import { EXTENSIONS } from "@/data/extensions";

export const metadata: Metadata = {
  title: "Extensions",
  description: "Use QuickSnip from the shadcn CLI, Raycast, AI agents and more.",
  alternates: { canonical: "/extensions" },
};

export default function ExtensionsPage() {
  return (
    <section>
      <div className="wrapper py-8 space-y-8">
        <h1 className="text-3xl font-bold text-center">Extensions</h1>
        <ul className="grid gap-4 sm:grid-cols-2 auto-rows-fr lg:grid-cols-3">
          {EXTENSIONS.map((extension) => (
            <ExtensionItem key={extension.name} extension={extension} />
          ))}
          <NewExtensionItem />
        </ul>
      </div>
    </section>
  );
}

/**
 * 📦 Official Extensions

    VS Code Extension (coming soon)

    QuickSnip CLI (optional later)

🔌 Community Extensions

    ✅ Raycast Extension

    🔜 Vim Plugin

    ⌨️ Obsidian Snippet Sync

    💡 (Form to submit your own tool)

📚 How to Build One

    Short guide: “Build your own extension using QuickSnip API”

    Link to API docs or SDK

    Example template repo
 */
