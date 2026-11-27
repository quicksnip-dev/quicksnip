import { ImageResponse } from "next/og";
import { OG_SIZE, OgFrame } from "@/lib/og";
import { blog, formatDate } from "@/lib/source";

export const alt = "QuickSnip blog post";
export const size = OG_SIZE;
export const contentType = "image/png";

export function generateStaticParams() {
  return blog.getPages().map((p) => ({ slug: p.slugs[0] }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blog.getPage([slug]);

  return new ImageResponse(
    (
      <OgFrame
        eyebrow="Blog"
        title={post?.data.title ?? "QuickSnip Blog"}
        footer={[post ? `${post.data.author} · ${formatDate(post.data.date)}` : "", "quicksnip.app/blog"]}
      />
    ),
    size,
  );
}
