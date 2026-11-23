import { ImageResponse } from "next/og";
import { OG_SIZE, OgFrame } from "@/lib/og";
import { getSnippet, getSnippetIndex } from "@/lib/snippets";
import { unslugify } from "@/lib/utils";
import { LANGUAGE_NAMES } from "@/data/meta";

export const alt = "QuickSnip snippet";
export const size = OG_SIZE;
export const contentType = "image/png";

export function generateStaticParams() {
  return getSnippetIndex().map((s) => ({ category: s.category, snippet: s.slug }));
}

export default async function Image({ params }: { params: Promise<{ category: string; snippet: string }> }) {
  const { category, snippet } = await params;
  const data = getSnippet(category, snippet);
  if (!data) return new ImageResponse(<OgFrame title="QuickSnip" />, size);

  return new ImageResponse(
    (
      <OgFrame
        eyebrow={`${unslugify(data.category)}${data.verified ? "  ·  Verified" : ""}`}
        title={data.title}
        description={data.description}
        footer={[data.languages.map((l) => LANGUAGE_NAMES[l] ?? l).join(" · "), "quicksnip.dev"]}
      />
    ),
    size,
  );
}
