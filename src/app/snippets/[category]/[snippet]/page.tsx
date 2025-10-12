"use client";

import { use } from "react";

import { useRouter } from "next/navigation";
import Link from "next/link";

import { Loader, XIcon } from "lucide-react";

import { FullSnippet } from "@/types";
import { useFetch } from "@/hooks/use-fetch";
import { Button } from "@/components/ui/button";
import CodePreview from "@/components/layouts/code-preview";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface Props {
  params: Promise<{ category: string; snippet: string }>;
}

export default function SnippetPage({ params }: Props) {
  const router = useRouter();
  const { category, snippet } = use(params);
  const { data, loading } = useFetch<FullSnippet>(
    `/data/snippets/${category}/${snippet}.json`
  );

  const handleCloseModal = () => {
    /**
     * If a snippet is visited directly from URL,
     * it won't have history to go back to.
     * Thus, fallback to `/snippets/` page.
     */
    if (window.history.length > 2) router.back();
    else router.push("/snippets");
  };

  if (loading) return <Loader />;
  if (!data) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <Card className="wrapper-xs">
        <CardHeader className="flex items-center justify-between gap-4">
          <h2 className="text-2xl font-bold">{data.title}</h2>
          <Button onClick={handleCloseModal} size="icon">
            <XIcon />
          </Button>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>{data.description}</p>
          <CodePreview languages={data.languages} snippets={data.snippets} />
        </CardContent>
        <CardFooter className="grid gap-4">
          <div className="flex items-center gap-4">
            <p className="font-bold">Contributors: </p>
            <div className="*:data-[slot=avatar]:ring-background flex -space-x-2 *:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:grayscale">
              {data.contributors.map((contributor) => (
                <Avatar
                  key={contributor}
                  className="w-8 h-8"
                  title={`@${contributor}`}
                >
                  <AvatarImage
                    src={`https://github.com/${contributor}.png`}
                    alt={`@${contributor}`}
                  />
                  <AvatarFallback>{contributor.slice(0, 2)}</AvatarFallback>
                </Avatar>
              ))}
            </div>
          </div>
          <ul className="flex items-center flex-wrap gap-2">
            {data.tags.map((tag) => (
              <li key={tag}>
                <Link
                  className="border border-border font-semibold pt-1 pb-2 px-3 rounded-md leading-tight"
                  href={`/snippets/tags/${tag}`}
                >
                  {tag}
                </Link>
              </li>
            ))}
          </ul>
        </CardFooter>
      </Card>
    </div>
  );
}
