import { BadgeCheck, Bot, Code, Languages, PackageOpen, Users } from "lucide-react";

const features = [
  {
    icon: BadgeCheck,
    title: "Verified by tests",
    desc: "Verified snippets are typed and run through unit tests in CI, so edge cases are handled before code reaches your project.",
  },
  {
    icon: Bot,
    title: "Built for AI agents",
    desc: "llms.txt, a JSON API and stable snippet IDs give AI coding tools a trusted source to install from instead of generating code from scratch.",
  },
  {
    icon: PackageOpen,
    title: "One-command install",
    desc: "Every JavaScript and TypeScript snippet is a shadcn registry item. Run one command and the file lands in your lib folder.",
  },
  {
    icon: Code,
    title: "You own the code",
    desc: "No package to update and no runtime dependency. The code is copied into your project for you to read, change and keep.",
  },
  {
    icon: Languages,
    title: "Many languages",
    desc: "One snippet, many implementations: TypeScript, Python, Java, C++, Rust, Ruby, CSS and more, side by side.",
  },
  {
    icon: Users,
    title: "Made by the community",
    desc: "Hundreds of snippets written and reviewed by developers around the world. Add yours and get credited on every page.",
  },
];

export default function Features() {
  return (
    <section className="py-8">
      <div className="wrapper">
        <ul className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ icon: Icon, title, desc }) => (
            <li key={title} className="space-y-3 bg-background p-6">
              <Icon className="size-6 text-brand" aria-hidden="true" />
              <h3 className="text-lg font-semibold">{title}</h3>
              <p className="text-muted-foreground">{desc}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
