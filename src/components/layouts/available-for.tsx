import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SITE_URL } from "@/data/meta";

const WAYS = [
  {
    title: "Copy & paste",
    who: "For everyone",
    code: "Browse → Copy → Paste",
    href: "/snippets",
    cta: "Browse snippets",
  },
  {
    title: "shadcn CLI",
    who: "For web developers",
    code: "npx shadcn add www.quicksnip.app/r/slugify.json",
    href: "/guide/installation",
    cta: "Installation guide",
  },
  {
    title: "AI coding agents",
    who: "For vibe coders",
    code: `${SITE_URL.replace("https://", "")}/llms.txt`,
    href: "/guide/for-ai-agents",
    cta: "Connect your AI",
  },
];

export default function AvailableFor() {
  return (
    <section>
      <div className="wrapper py-12 space-y-8">
        <div className="text-center space-y-2">
          <h2 className="text-3xl font-bold">Use it your way</h2>
          <p className="text-muted-foreground">The same snippets, three ways in.</p>
        </div>
        <ul className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {WAYS.map((way) => (
            <li key={way.title} className="flex flex-col gap-4 rounded-2xl border border-border p-6">
              <div>
                <p className="text-sm text-muted-foreground">{way.who}</p>
                <h3 className="text-xl font-semibold">{way.title}</h3>
              </div>
              <code className="block rounded-lg bg-secondary px-3 py-2 font-mono text-sm overflow-x-auto whitespace-nowrap">
                {way.code}
              </code>
              <Link href={way.href} className="mt-auto inline-flex items-center gap-1 text-brand hover:underline">
                {way.cta} <ArrowRight size={14} />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
