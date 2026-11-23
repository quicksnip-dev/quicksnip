import type { Metadata } from "next";
import { notFound } from "next/navigation";

import SnippetList from "@/components/layouts/snippet-list";
import { getSnippetIndex } from "@/lib/snippets";
import { unslugify } from "@/lib/utils";

interface Props {
  params: Promise<{ category: string }>;
}

export const dynamicParams = false;

export function generateStaticParams() {
  return [...new Set(getSnippetIndex().map((s) => s.category))].map((category) => ({ category }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category } = await params;
  return {
    title: `${unslugify(category)} snippets`,
    description: `Community-made ${unslugify(category).toLowerCase()} code snippets.`,
  };
}

export default async function CategoryPage({ params }: Props) {
  const { category } = await params;
  if (!getSnippetIndex().some((s) => s.category === category)) notFound();

  return (
    <section className="space-y-4">
      <h1 className="text-2xl font-bold">{unslugify(category)}</h1>
      <SnippetList category={category} />
    </section>
  );
}
