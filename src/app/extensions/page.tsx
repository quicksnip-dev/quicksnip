import ExtensionItem, {
  NewExtensionItem,
} from "@/components/ui/extension-item";
import { EXTENSIONS } from "@/data/extensions";

export default function ExtensionsPage() {
  return (
    <section>
      <div className="wrapper py-8 space-y-8">
        <h2 className="text-3xl font-bold text-center">Extensions</h2>
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
