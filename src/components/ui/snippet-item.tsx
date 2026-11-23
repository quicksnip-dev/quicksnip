import Link from "next/link";
import type { SnippetType } from "@/types";
import { languageIcons } from "./language-icons";
import VerifiedBadge from "./verified-badge";
import { LANGUAGE_NAMES } from "@/data/meta";

export default function SnippetItem({ snippet }: { snippet: SnippetType }) {
  const { title, description, languages, verified } = snippet;

  return (
    <li>
      <Link
        href={`/snippets/${snippet.category}/${snippet.slug}`}
        className="group flex h-full flex-col gap-3 rounded-xl border border-border bg-card p-4 transition-colors hover:border-accent/60"
      >
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-semibold leading-tight group-hover:text-accent transition-colors">{title}</h3>
          {verified ? <VerifiedBadge compact /> : null}
        </div>
        <p className="text-sm text-muted-foreground line-clamp-2 flex-1">{description}</p>
        <ul className="flex flex-wrap gap-2 text-muted-foreground" aria-label="Languages">
          {languages.map((language) => {
            const Icon = languageIcons[language];
            return (
              <li key={language} title={LANGUAGE_NAMES[language] ?? language}>
                {Icon ? <Icon size={16} /> : <span className="text-xs">{language}</span>}
              </li>
            );
          })}
        </ul>
      </Link>
    </li>
  );
}
