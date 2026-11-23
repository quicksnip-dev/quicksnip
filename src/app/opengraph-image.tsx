import { ImageResponse } from "next/og";
import { OG_SIZE, OgFrame } from "@/lib/og";
import { getSnippetSummary } from "@/lib/snippets";

export const alt = "QuickSnip — Verified code snippets for humans and AI";
export const size = OG_SIZE;
export const contentType = "image/png";

export default function Image() {
  const { total, verified } = getSnippetSummary();
  return new ImageResponse(
    (
      <OgFrame
        title="Verified code snippets for humans and AI"
        description="Tested, typed utilities you can copy — or let your AI coding tool install in one command. Made by the community."
        footer={["quicksnip.dev", `${total} snippets · ${verified} verified · MIT`]}
      />
    ),
    size,
  );
}
