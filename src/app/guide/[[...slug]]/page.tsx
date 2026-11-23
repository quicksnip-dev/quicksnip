import { source } from "@/lib/source";
import { DocsBody, DocsDescription, DocsPage, DocsTitle } from "fumadocs-ui/page";
import { notFound } from "next/navigation";
import { getMDXComponents } from "../../../../mdx-components";

export default async function Page(props: { params: Promise<{ slug?: string[] }> }) {
  const params = await props.params;

  const page = source.getPage(params.slug);
  if (!page) notFound();

  const MDX = page.data.body;

  return (
    <DocsPage
      toc={page.data.toc}
      editOnGithub={{
        owner: "quicksnip-dev",
        repo: "quicksnip",
        sha: "main",
        path: `content/docs/${page.path}`,
      }}
      full={page.data.full}
    >
      <DocsTitle>{page.data.title}</DocsTitle>
      <DocsDescription>{page.data.description}</DocsDescription>
      <DocsBody>
        <MDX components={getMDXComponents()} />
      </DocsBody>
    </DocsPage>
  );
}

export async function generateStaticParams() {
  return source.generateParams();
}

export async function generateMetadata(props: { params: Promise<{ slug?: string[] }> }) {
  const params = await props.params;
  const page = source.getPage(params.slug);
  if (!page) notFound();

  return {
    title: page.data.title,
    description: page.data.description,
    alternates: { canonical: page.url },
    openGraph: { type: "article", url: page.url, title: `${page.data.title} · QuickSnip`, description: page.data.description },
  };
}
