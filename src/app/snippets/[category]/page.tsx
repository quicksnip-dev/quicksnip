import SnippetList from "@/components/layouts/snippet-list";

export default function Categories() {
  const sampleData = [
    {
      id: "truncate-string",
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

  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-bold">String Manipulation</h2>
      <SnippetList snippets={sampleData} />
    </section>
  );
}
