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
import { countLanguages, useSnippetsStore } from "@/store/useSnippetsStore";

export default function SnippetHeader() {
  const router = useRouter();
  const pathname = usePathname();
  const inputRef = useRef<HTMLInputElement>(null);
  const { snippets, query, setQuery, language, setLanguage, verifiedOnly, setVerifiedOnly } = useSnippetsStore();
  const languages = countLanguages(snippets);

  // On a detail page, typing a search takes you back to the list.
  const isDetail = pathname.split("/").filter(Boolean).length > 2;
  const onQuery = (value: string) => {
    setQuery(value);
    if (isDetail) router.push("/snippets");
  };

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
          placeholder={snippets.length ? `Search ${snippets.length} snippets...` : "Search snippets..."}
          aria-label="Search snippets"
        />
        <InputGroupAddon>
          <Search size={16} />
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
