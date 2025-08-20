import fs from "fs";
import path from "path";
import remarkGfm from "remark-gfm";
import Markdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function ContributingPage() {
  const filePath = path.join(process.cwd(), "CONTRIBUTING.md");
  const fileContent = fs.readFileSync(filePath, "utf-8");

  return (
    <article className="wrapper-xs py-8 lg:py-16 prose dark:prose-invert">
      <Markdown
        remarkPlugins={[remarkGfm]}
        children={fileContent}
        components={{
          code(props) {
            const { children, className, node, ...rest } = props;
            const match = /language-(\w+)/.exec(className || "");
            return match ? (
              <SyntaxHighlighter language={match[1]} style={oneDark}>
                {String(children).replace(/\n$/, "")}
              </SyntaxHighlighter>
            ) : (
              <code {...rest} className={className}>
                {children}
              </code>
            );
          },
        }}
      />
    </article>
  );
}
