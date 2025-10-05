"use client";

import { useRouter } from "next/navigation";
import { use } from "react";

interface Props {
  params: Promise<{ category: string; snippet: string }>;
}

export default function SnippetDetail({ params }: Props) {
  const router = useRouter();
  const { category, snippet } = use(params);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-[400px]">
        <h2 className="text-lg font-bold">{snippet}</h2>
        <p className="mt-2 text-sm text-gray-600">
          Snippet details for {category}/{snippet}
        </p>
        <button
          onClick={() => router.push("/snippets")}
          className="mt-4 px-4 py-2 rounded hover:bg-gray-300"
        >
          Close
        </button>
      </div>
    </div>
  );
}
