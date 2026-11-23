"use client";

import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import bash from "react-syntax-highlighter/dist/esm/languages/prism/bash";
import c from "react-syntax-highlighter/dist/esm/languages/prism/c";
import cpp from "react-syntax-highlighter/dist/esm/languages/prism/cpp";
import csharp from "react-syntax-highlighter/dist/esm/languages/prism/csharp";
import css from "react-syntax-highlighter/dist/esm/languages/prism/css";
import haskell from "react-syntax-highlighter/dist/esm/languages/prism/haskell";
import java from "react-syntax-highlighter/dist/esm/languages/prism/java";
import javascript from "react-syntax-highlighter/dist/esm/languages/prism/javascript";
import jsx from "react-syntax-highlighter/dist/esm/languages/prism/jsx";
import markdown from "react-syntax-highlighter/dist/esm/languages/prism/markdown";
import markup from "react-syntax-highlighter/dist/esm/languages/prism/markup";
import python from "react-syntax-highlighter/dist/esm/languages/prism/python";
import regex from "react-syntax-highlighter/dist/esm/languages/prism/regex";
import ruby from "react-syntax-highlighter/dist/esm/languages/prism/ruby";
import rust from "react-syntax-highlighter/dist/esm/languages/prism/rust";
import scss from "react-syntax-highlighter/dist/esm/languages/prism/scss";
import tsx from "react-syntax-highlighter/dist/esm/languages/prism/tsx";
import typescript from "react-syntax-highlighter/dist/esm/languages/prism/typescript";

const PRISM_GRAMMARS = {
  bash, c, cpp, csharp, css, haskell, java, javascript, jsx, markdown,
  markup, python, regex, ruby, rust, scss, tsx, typescript,
};
for (const [name, grammar] of Object.entries(PRISM_GRAMMARS)) SyntaxHighlighter.registerLanguage(name, grammar);

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CopyButton from "@/components/ui/copy-button";
import { languageIcons } from "@/components/ui/language-icons";
import { PRISM_LANGUAGE } from "@/data/meta";

export type CodeTab = {
  value: string;
  label: string;
  language: string;
  code: string;
  icon?: string;
};

const style = {
  margin: 0,
  padding: "1rem",
  background: "transparent",
  fontSize: "0.875rem",
};

export function CodeBlock({ code, language }: { code: string; language: string }) {
  return (
    <div className="dark relative rounded-lg border border-border bg-card text-card-foreground">
      <CopyButton value={code} className="absolute right-2 top-2 z-10" />
      <SyntaxHighlighter
        language={PRISM_LANGUAGE[language] ?? language}
        style={oneDark}
        customStyle={style}
        codeTagProps={{ style: { fontFamily: "var(--font-geist-mono)" } }}
      >
        {code.trimEnd()}
      </SyntaxHighlighter>
    </div>
  );
}

/** Tabbed code viewer, one tab per language (or any list of code tabs). */
export default function CodePreview({ tabs }: { tabs: CodeTab[] }) {
  if (!tabs.length) return null;
  return (
    <Tabs defaultValue={tabs[0].value} className="w-full">
      {tabs.length > 1 ? (
        <TabsList className="flex-wrap h-auto">
          {tabs.map((tab) => {
            const Icon = tab.icon ? languageIcons[tab.icon] : undefined;
            return (
              <TabsTrigger key={tab.value} value={tab.value} className="gap-1.5">
                {Icon ? <Icon size={14} /> : null}
                {tab.label}
              </TabsTrigger>
            );
          })}
        </TabsList>
      ) : null}
      {tabs.map((tab) => (
        <TabsContent key={tab.value} value={tab.value}>
          <CodeBlock code={tab.code} language={tab.language} />
        </TabsContent>
      ))}
    </Tabs>
  );
}
