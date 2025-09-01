import Sidebar from "@/components/layouts/sidebar";

export default function SnippetsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main>
      <Sidebar />
      <section>{children}</section>
    </main>
  );
}
