import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import { GITHUB_URL } from "@/data/meta";
import { getSnippetIndex } from "@/lib/snippets";

const Hero = () => {
  const snippets = getSnippetIndex();
  const verified = snippets.filter((s) => s.verified).length;
  const contributors = new Set(snippets.flatMap((s) => s.contributors)).size;

  return (
    <section>
      <div className="wrapper grid grid-cols-1 gap-8 py-12 md:py-20 lg:grid-cols-[1.1fr_1fr] items-center">
        <article className="min-w-0 space-y-6">
          <Link
            className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-3 py-1 text-sm font-medium hover:bg-muted transition-colors"
            href="/guide/for-ai-agents"
          >
            <span className="size-2 rounded-full bg-brand" aria-hidden="true" />
            New: install snippets with shadcn & AI agents
            <ArrowRight size={14} />
          </Link>
          <h1 className="text-4xl lg:text-6xl font-bold tracking-tight">
            Verified <span className="text-brand">&lt;code&gt;</span> snippets for humans and AI
          </h1>
          <p className="text-xl text-muted-foreground max-w-xl">
            Tested, typed utilities you can copy, or let your AI coding tool install in one command. You own the
            code. No dependencies. Made by the community.
          </p>
          <div className="flex flex-wrap gap-2">
            <Button asChild size="lg">
              <Link href="/snippets">Browse snippets</Link>
            </Button>
            <Button asChild size="lg" variant="secondary">
              <Link href="/guide">Get started</Link>
            </Button>
            <Button asChild size="lg" variant="secondary">
              <Link href={GITHUB_URL} target="_blank" rel="noopener noreferrer">
                GitHub
              </Link>
            </Button>
          </div>
          <dl className="flex flex-wrap gap-x-8 gap-y-2 pt-2 text-sm">
            {[
              [snippets.length, "snippets"],
              [verified, "verified by tests"],
              [contributors, "contributors"],
            ].map(([value, label]) => (
              <div key={label} className="flex items-baseline gap-1.5">
                <dt className="sr-only">{label}</dt>
                <dd className="text-2xl font-bold">{value}</dd>
                <span className="text-muted-foreground">{label}</span>
              </div>
            ))}
          </dl>
        </article>

        <div className="dark min-w-0 rounded-2xl border border-neutral-800 bg-[#1b1b1b] text-neutral-200 shadow-xl overflow-hidden font-mono text-xs sm:text-sm">
          <div className="flex items-center gap-1.5 border-b border-neutral-800 px-4 py-3">
            <span className="size-3 rounded-full bg-neutral-700" />
            <span className="size-3 rounded-full bg-neutral-700" />
            <span className="size-3 rounded-full bg-neutral-700" />
            <span className="ml-3 text-xs text-muted-foreground">terminal</span>
          </div>
          <div className="space-y-1 p-5 leading-relaxed overflow-x-auto">
            <p>
              <span className="text-brand">$</span> npx shadcn add quicksnip.dev/r/debounce.json
            </p>
            <p className="text-muted-foreground">✔ Created 1 file:</p>
            <p className="text-muted-foreground">
              {"  "}- lib/debounce.ts <span className="text-brand">✓ verified</span>
            </p>
          </div>
          <div className="border-t border-neutral-800 p-5 leading-relaxed overflow-x-auto">
            <p>
              <span className="text-[#c678dd]">import</span> {"{ debounce }"} <span className="text-[#c678dd]">from</span>{" "}
              <span className="text-[#98c379]">&quot;@/lib/debounce&quot;</span>;
            </p>
            <p>&nbsp;</p>
            <p>
              <span className="text-[#c678dd]">const</span> search = <span className="text-[#61afef]">debounce</span>(
              (q) =&gt; <span className="text-[#61afef]">fetchResults</span>(q), <span className="text-[#d19a66]">300</span>);
            </p>
            <p>
              search.<span className="text-[#61afef]">cancel</span>();{" "}
              <span className="text-muted-foreground">{"// typed, tested, yours"}</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
