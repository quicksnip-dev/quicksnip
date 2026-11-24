import { ImageResponse } from "next/og";
import { OG_SIZE, OgFrame } from "@/lib/og";
import { getSnippetIndex } from "@/lib/snippets";
import { unslugify } from "@/lib/utils";
import { LANGUAGE_NAMES } from "@/data/meta";

export const alt = "QuickSnip snippet category";
export const size = OG_SIZE;
export const contentType = "image/png";

export function generateStaticParams() {
  return [...new Set(getSnippetIndex().map((s) => s.category))].map((category) => ({ category }));
}

export default async function Image({ params }: { params: Promise<{ category: string }> }) {
  const { category } = await params;
  const snippets = getSnippetIndex().filter((s) => s.category === category);
  const verified = snippets.filter((s) => s.verified).length;
  const languages = [...new Set(snippets.flatMap((s) => s.languages))].map((l) => LANGUAGE_NAMES[l] ?? l);

  return new ImageResponse(
    (
      <OgFrame
        eyebrow="Snippet category"
        title={`${unslugify(category)} snippets`}
        description={`${snippets.length} snippets${verified ? `, ${verified} verified` : ""}. Copy them or install with one command.`}
        footer={[languages.slice(0, 5).join(" · "), "quicksnip.app"]}
      />
    ),
    size,
  );
}
