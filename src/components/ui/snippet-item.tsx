import Image from "next/image";
import { Card, CardTitle } from "./card";
import type { SnippetType } from "@/types";

interface SnippetItemProps {
  snippet: SnippetType;
}

export default function SnippetItem({ snippet }: SnippetItemProps) {
  const { title, languages } = snippet;

  return (
    <Card>
      <CardTitle>{title}</CardTitle>
      <ul className="flex gap-2">
        {languages.map((language) => (
          <li>
            <Image
              src={`/assets/icons/${language}.svg`}
              alt=""
              width={24}
              height={24}
            />
          </li>
        ))}
      </ul>
    </Card>
  );
}
