import { ExtensionItem } from "@/components/layouts/Extensions";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { EXTENSIONS, FUTURE_EXTENSIONS } from "@/data/extensions";

import Link from "next/link";

export const ExtensionsAvatarGroup = () => {
  return (
    <div className="flex -space-x-4">
      {FUTURE_EXTENSIONS.map((extension) => (
        <Avatar key={extension.name} className="size-14 bg-secondary p-3">
          <AvatarImage src={extension.icon} alt={extension.name} />
          <AvatarFallback>{extension.shortcut_name}</AvatarFallback>
        </Avatar>
      ))}
    </div>
  );
};

const ExtensionsPage = () => {
  return (
    <section>
      <div className="container py-8 space-y-8">
        <h2 className="text-3xl font-bold text-center">Extensions</h2>
        <ul className="grid gap-4 sm:grid-cols-2 auto-rows-fr lg:grid-cols-3">
          {EXTENSIONS.map((extension) => (
            <ExtensionItem key={extension.name} extension={extension} />
          ))}
          <Link
            href="/guide/extensions"
            className="bg-transparent h-full outline-2 outline-secondary transition-colors duration-200 hover:outline-muted space-y-4 p-6 rounded-lg grid gap-4 place-content-center justify-items-center text-secondary-foreground"
          >
            <ExtensionsAvatarGroup />
            <span className="text-lg font-semibold">
              Add your extension here...
            </span>
          </Link>
        </ul>
      </div>
    </section>
  );
};

export default ExtensionsPage;

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
