export default function SnippetsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main>
      <aside>Sidebar here</aside>
      <section>{children}</section>
    </main>
  );
}
