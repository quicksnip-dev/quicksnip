import SnippetHeader from "@/components/layouts/snippet-header";
import SnippetSidebar from "@/components/layouts/snippet-sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { getSnippetSummary } from "@/lib/snippets";

export default function SnippetsLayout({ children }: { children: React.ReactNode }) {
  const summary = getSnippetSummary();

  return (
    <SidebarProvider>
      <SnippetSidebar summary={summary} />
      <main id="main" className="p-4 space-y-6 w-full min-w-0">
        <SnippetHeader summary={summary} />
        {children}
      </main>
    </SidebarProvider>
  );
}
