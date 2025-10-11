"use client";

import { use } from "react";

import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";

import { unslugify } from "@/lib/utils";

interface Props {
  params: Promise<{ category: string; snippet: string }>;
}

export default function SnippetPage({ params }: Props) {
  const router = useRouter();
  const { category, snippet } = use(params);

  const handleCloseModal = () => {
    /**
     * If a snippet is visited directly from URL,
     * it won't have history to go back to.
     * Thus, fallback to `/snippets/` page.
     */
    if (window.history.length > 2) router.back();
    else router.push("/snippets");
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-secondary text-secondary-foreground p-6 rounded-lg space-y-4 shadow-lg w-[400px]">
        <h2 className="text-lg font-bold">
          {unslugify(category)} / {unslugify(snippet)}
        </h2>
        <p>Snippet details here</p>
        <Button onClick={handleCloseModal}>Close</Button>
      </div>
    </div>
  );
}
