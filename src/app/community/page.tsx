import type { Metadata } from "next";
import Link from "next/link";

import CommunityLinks from "@/components/layouts/community-links";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { HISTORY } from "@/data/history";
import { getSnippetIndex } from "@/lib/snippets";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Community",
  description: "The people and the history behind QuickSnip: contributors, videos and where to talk with us.",
  path: "/community",
});

function getContributors() {
  const counts = new Map<string, number>();
  for (const s of getSnippetIndex()) for (const c of s.contributors) counts.set(c, (counts.get(c) ?? 0) + 1);
  return [...counts.entries()]
    .sort(([a, x], [b, y]) => y - x || a.localeCompare(b))
    .map(([name, count]) => ({ name, count }));
}

export default function CommunityPage() {
  const contributors = getContributors();

  return (
    <>
      <CommunityLinks />

      <section>
        <div className="wrapper-xs py-12 space-y-8">
          <h2 className="text-3xl font-bold text-center">History</h2>
          <ol className="relative space-y-8 border-l border-border pl-6">
            {HISTORY.map((item) => (
              <li key={item.version} className="relative">
                <span className="absolute -left-[1.85rem] top-1.5 size-3 rounded-full border-2 border-background bg-brand" />
                <p className="text-sm text-muted-foreground">
                  {item.date} · <span className="font-mono">{item.version}</span>
                </p>
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="text-muted-foreground">{item.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section>
        <div className="wrapper py-12 space-y-8">
          <div className="text-center space-y-2">
            <h2 className="text-3xl font-bold">Contributors</h2>
            <p className="text-muted-foreground">
              {contributors.length} people wrote the snippets in this collection. Thank you.
            </p>
          </div>
          <ul className="flex flex-wrap justify-center gap-2">
            {contributors.map(({ name, count }) => (
              <li key={name}>
                <Link
                  href={`https://github.com/${name}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={`@${name} · ${count} ${count === 1 ? "snippet" : "snippets"}`}
                >
                  <Avatar className="size-12 ring-2 ring-transparent transition hover:ring-brand">
                    <AvatarImage src={`https://github.com/${name}.png?size=96`} alt={`@${name}`} loading="lazy" />
                    <AvatarFallback>{name.slice(0, 2)}</AvatarFallback>
                  </Avatar>
                </Link>
              </li>
            ))}
          </ul>
          <p className="text-center text-sm text-muted-foreground">
            Plus everyone who improved the website, docs and tooling.{" "}
            <Link className="text-brand hover:underline" href="https://github.com/quicksnip-dev/quicksnip/graphs/contributors">
              See all code contributors
            </Link>
            .
          </p>
        </div>
      </section>
    </>
  );
}
