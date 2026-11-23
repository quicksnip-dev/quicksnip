import SnippetHeader from "@/components/layouts/snippet-header";
import SnippetSidebar from "@/components/layouts/snippet-sidebar";
import SnippetsLoader from "@/components/layouts/snippets-loader";

import { SidebarProvider } from "@/components/ui/sidebar";

export default function SnippetsLayout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <SnippetsLoader />
      <SnippetSidebar />
      <main className="p-4 space-y-6 w-full min-w-0">
        <SnippetHeader />
        {children}
      </main>
    </SidebarProvider>
  );
}
