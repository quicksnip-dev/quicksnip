import Link from "next/link";
import { GITHUB_URL } from "@/data/meta";
import { getStats } from "@/lib/snippets";

/** Live project numbers, shown big and centered right above the footer. */
export default function Stats() {
  const { snippets, verified, contributors } = getStats();
  const items = [
    { value: snippets, label: "snippets" },
    { value: verified, label: "verified by tests" },
    { value: contributors, label: "contributors" },
  ];

  return (
    <section aria-labelledby="stats-heading" className="wrapper-xs pt-8 pb-20 text-center">
      <h2 id="stats-heading" className="text-sm text-muted-foreground">
        100% open source.{" "}
        <Link href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="hover:text-brand">
          Built in public on GitHub.
        </Link>
      </h2>
      <dl className="mt-8 grid grid-cols-3 divide-x divide-border">
        {items.map(({ value, label }) => (
          <div key={label} className="flex flex-col-reverse gap-2 px-2">
            <dt className="text-sm text-muted-foreground">{label}</dt>
            <dd className="text-4xl font-bold tracking-tight tabular-nums sm:text-6xl">{value}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
