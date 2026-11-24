import type { ReactNode } from "react";

/** Shared layout for the privacy policy and terms: title, dates, a TL;DR box, then the full text. */
export default function LegalPage({
  title,
  updated,
  tldr,
  children,
}: {
  title: string;
  /** ISO date, e.g. `2026-11-24`. */
  updated: string;
  tldr: ReactNode[];
  children: ReactNode;
}) {
  const date = new Date(`${updated}T00:00:00Z`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });

  return (
    <article className="wrapper-xs py-8 lg:py-16 prose dark:prose-invert">
      <h1 className="mb-2">{title}</h1>
      <p className="mt-0 text-sm text-secondary-foreground">
        Last updated <time dateTime={updated}>{date}</time>
      </p>

      <section aria-labelledby="tldr" className="not-prose my-8 rounded-lg border border-border p-5">
        <h2 id="tldr" className="text-base font-semibold mb-3">
          TL;DR
        </h2>
        <ul className="list-disc pl-5 space-y-1.5 text-secondary-foreground">
          {tldr.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
        <p className="mt-4 text-sm text-secondary-foreground">
          This summary is for convenience. The full text below is what applies.
        </p>
      </section>

      {children}
    </article>
  );
}
