import SnippetSidebar from "@/components/layouts/snippet-sidebar";

export default function SnippetsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main>
      <SnippetSidebar />
      <section>{children}</section>
    </main>
  );
}
