"use client";

import { useEffect, useRef } from "react";
import { usePathname, useRouter } from "next/navigation";
import { Search } from "lucide-react";

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { InputGroup, InputGroupAddon, InputGroupInput } from "@/components/ui/input-group";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { LANGUAGE_NAMES } from "@/data/meta";
import { useSnippetsStore } from "@/store/useSnippetsStore";
import type { SnippetSummary } from "@/lib/snippets";

export default function SnippetHeader({ summary }: { summary: SnippetSummary }) {
  const router = useRouter();
  const pathname = usePathname();
  const inputRef = useRef<HTMLInputElement>(null);
  const { query, setQuery, language, setLanguage, verifiedOnly, setVerifiedOnly } = useSnippetsStore();
  const languages = summary.languages;

  // On a detail page, typing a search takes you back to the list.
  const isDetail = pathname.split("/").filter(Boolean).length > 2;
  const onQuery = (value: string) => {
    setQuery(value);
    if (isDetail) router.push("/snippets");
  };

  // Support deep links like /snippets?q=debounce (also used by the WebSite SearchAction).
  useEffect(() => {
    const q = new URLSearchParams(window.location.search).get("q");
    if (q) setQuery(q);
  }, [setQuery]);

  // "/" focuses search, like on most docs and icon sites.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement;
      if (e.key === "/" && !["INPUT", "TEXTAREA"].includes(target.tagName)) {
        e.preventDefault();
        inputRef.current?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <section className="grid gap-3 items-center md:grid-cols-[auto_1fr_auto_auto]">
      <SidebarTrigger />
      <InputGroup>
        <InputGroupInput
          ref={inputRef}
          value={query}
          onChange={(e) => onQuery(e.target.value)}
          placeholder={`Search ${summary.total} snippets...`}
          aria-label="Search snippets"
        />
        <InputGroupAddon>
          <Search size={16} />
        </InputGroupAddon>
        <InputGroupAddon align="inline-end" className="hidden sm:flex">
          <kbd className="rounded border border-border bg-secondary px-1.5 font-mono text-xs text-muted-foreground">/</kbd>
        </InputGroupAddon>
      </InputGroup>
      <Select value={language} onValueChange={setLanguage}>
        <SelectTrigger className="w-[11rem]" aria-label="Filter by language">
          <SelectValue placeholder="All languages" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All languages</SelectItem>
          {languages.map(({ name, count }) => (
            <SelectItem key={name} value={name}>
              {LANGUAGE_NAMES[name] ?? name} <span className="text-muted-foreground">{count}</span>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <div className="flex items-center gap-2 pr-1">
        <Switch id="verified-only" checked={verifiedOnly} onCheckedChange={setVerifiedOnly} />
        <Label htmlFor="verified-only" className="whitespace-nowrap">
          Verified only
        </Label>
      </div>
    </section>
  );
}
