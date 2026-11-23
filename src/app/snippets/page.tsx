import type { Metadata } from "next";
import SnippetList from "@/components/layouts/snippet-list";

export const metadata: Metadata = {
  title: "Snippets",
  description: "Browse community-made code snippets. Verified TypeScript utilities install with one command.",
};

export default function SnippetsPage() {
  return <SnippetList />;
}
