import SnippetHeader from "@/components/layouts/snippet-header";
import SnippetSidebar from "@/components/layouts/snippet-sidebar";

import { SidebarProvider } from "@/components/ui/sidebar";

export default function SnippetsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <SnippetSidebar />
      <main className="py-4 pl-4 space-y-4 w-full">
        <SnippetHeader />
        {children}
      </main>
    </SidebarProvider>
  );
}
