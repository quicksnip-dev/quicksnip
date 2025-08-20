import {
  Code,
  Terminal,
  Paintbrush,
  Rocket,
  Book,
  PlusCircle,
} from "lucide-react";

const features = [
  {
    icon: <Code className="h-6 w-6" />,
    title: "Developer-Friendly",
    desc: "Tailored for developers to create and iterate fast, with minimal overhead and maximum flexibility.",
  },
  {
    icon: <Terminal className="h-6 w-6" />,
    title: "CLI Support",
    desc: "Command-line interface support for seamless development and workflow integration.",
  },
  {
    icon: <Paintbrush className="h-6 w-6" />,
    title: "Easily Customizable",
    desc: "Every block is built to be editable. From layout to logic, style to structure—make it your own.",
  },
  {
    icon: <Rocket className="h-6 w-6" />,
    title: "v0 Support",
    desc: "Launch fast with confidence. Perfect for MVPs, prototypes, and weekend projects.",
  },
  {
    icon: <Book className="h-6 w-6" />,
    title: "Full Documentation",
    desc: "Comprehensive documentation to understand every feature and maximize your development experience.",
  },
  {
    icon: <PlusCircle className="h-6 w-6" />,
    title: "Contribute Yours",
    desc: "Add your own blocks to the library and become part of the MVPBlocks community.",
  },
];
export default function Features() {
  return (
    <section className="relative py-4 my-6">
      <div className="wrapper">
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((item, idx) => (
            <li key={idx} className="space-y-3 rounded-xl bg-card p-6">
              <div className="text-accent w-fit transform-gpu rounded-full bg-background p-4">
                {item.icon}
              </div>
              <h4 className="text-lg font-bold">{item.title}</h4>
              <p className="text-muted-foreground">{item.desc}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
