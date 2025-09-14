import SnippetList from "@/components/layouts/snippet-list";

export default function SnippetsPage() {
  const sampleData = [
    {
      id: "reverse-string",
      category: "string-manipulation",
      title: "Reverse String",
      description: "Reverses the characters in a string.",
      languages: ["js", "cpp", "py"],
      contributors: ["technoph1le", "Vaibhav-kesarwani"],
      tags: ["string", "reverse"],
    },
    {
      id: "string-to-camel-case",
      category: "string-manipulation",
      title: "Convert String to Camel Case",
      description: "Converts a given string into camelCase.",
      languages: ["js", "java"],
      contributors: ["aumirza", "Mcbencrafter"],
      tags: ["string", "case"],
    },
  ];

  // This is for showing all the snippets
  return <SnippetList snippets={sampleData} />;
}
