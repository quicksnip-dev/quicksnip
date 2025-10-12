import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// import CopyToClipboard from "./CopyToClipboard";
// import CopyURLButton from "./CopyURLButton";

type Props = {
  languages: string[];
  snippets: Record<string, string>;
};

const CodePreview = ({ languages, snippets }: Props) => {
  return (
    <div className="w-full">
      <Tabs defaultValue={languages[0]}>
        <TabsList>
          {languages.map((language) => (
            <TabsTrigger key={language} value={language}>
              {language}
            </TabsTrigger>
          ))}
        </TabsList>
        {Object.keys(snippets).map((language) => {
          const code = snippets[language as keyof typeof snippets];

          return (
            <TabsContent value={language} key={language}>
              <SyntaxHighlighter
                language={language}
                style={oneDark}
                wrapLines={true}
                customStyle={{ margin: "0", maxHeight: "22rem" }}
              >
                {code}
              </SyntaxHighlighter>
            </TabsContent>
          );
        })}
      </Tabs>
    </div>
  );
};

export default CodePreview;
