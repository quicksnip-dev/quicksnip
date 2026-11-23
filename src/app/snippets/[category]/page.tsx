import type { Metadata } from "next";
import { notFound } from "next/navigation";

import SnippetList from "@/components/layouts/snippet-list";
import { getListSnippets, getSnippetIndex } from "@/lib/snippets";
import { unslugify } from "@/lib/utils";
import { LANGUAGE_NAMES } from "@/data/meta";

interface Props {
  params: Promise<{ category: string }>;
}

export const dynamicParams = false;

export function generateStaticParams() {
  return [...new Set(getSnippetIndex().map((s) => s.category))].map((category) => ({ category }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category } = await params;
  const snippets = getListSnippets(category);
  const languages = [...new Set(snippets.flatMap((s) => s.languages))].map((l) => LANGUAGE_NAMES[l] ?? l);
  const name = unslugify(category);
  return {
    title: `${name} snippets`,
    description: `${snippets.length} ${name.toLowerCase()} code snippets in ${languages.slice(0, 5).join(", ")}${
      languages.length > 5 ? " and more" : ""
    }. Copy them or install with one command.`,
    alternates: { canonical: `/snippets/${category}` },
  };
}

export default async function CategoryPage({ params }: Props) {
  const { category } = await params;
  const snippets = getListSnippets(category);
  if (!snippets.length) notFound();

  return (
    <section className="space-y-4">
      <h1 className="text-2xl font-bold">{unslugify(category)}</h1>
      <SnippetList snippets={snippets} />
    </section>
  );
}
