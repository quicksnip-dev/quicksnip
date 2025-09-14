import Image from "next/image";
import { Card, CardContent, CardTitle } from "./card";
import type { SnippetType } from "@/types";
import Link from "next/link";
import { languageIcons } from "./language-icons";

interface SnippetItemProps {
  snippet: SnippetType;
}

export default function SnippetItem({ snippet }: SnippetItemProps) {
  const { title, languages } = snippet;

  return (
    <Link href={`/snippets/${snippet.category}/${snippet.id}`}>
      <Card className="py-2 hover:outline-2 hover:outline-border">
        <CardContent className="space-y-4 px-4">
          <CardTitle className="text-lg font-bold">{title}</CardTitle>
          <ul className="flex gap-2 ml-auto w-fit flex-wrap">
            {languages.map((language) => {
              const Icon = languageIcons[language.toLowerCase()];
              return <li key={language}>{Icon ? <Icon size={24} /> : null}</li>;
            })}
          </ul>
        </CardContent>
      </Card>
    </Link>
  );
}
