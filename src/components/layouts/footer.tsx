import { ExternalLink } from "lucide-react";
import Link from "next/link";
import { DISCORD_URL, GITHUB_URL, SPONSOR_URL } from "@/data/meta";

const NAV_ITEMS = [
  { name: "Contribute", url: "/contributing", external: false },
  { name: "llms.txt", url: "/llms.txt", external: false },
  { name: "Changelog", url: `${GITHUB_URL}/releases`, external: true },
  { name: "Sponsor", url: SPONSOR_URL, external: true },
  { name: "GitHub", url: GITHUB_URL, external: true },
  { name: "Discord", url: DISCORD_URL, external: true },
];

const Footer = () => {
  return (
    <footer className="border-t border-border text-secondary-foreground">
      <div className="wrapper-lg py-8 grid gap-8 md:grid-cols-[1fr_auto]">
        <p>
          Released under the{" "}
          <Link href={`${GITHUB_URL}/blob/main/LICENSE`} className="text-foreground font-semibold">
            MIT License.
          </Link>
          <br />
          Copyright © 2024–{new Date().getFullYear()} QuickSnip contributors
        </p>
        <ul className="flex md:items-center gap-4 md:gap-8 flex-col md:flex-row flex-wrap">
          {NAV_ITEMS.map((item) => (
            <li key={item.name}>
              <Link
                href={item.url}
                target={item.external ? "_blank" : "_self"}
                rel={item.external ? "noopener noreferrer" : undefined}
                className="flex items-center gap-1 font-semibold hover:text-brand transition-colors"
              >
                {item.name}
                {item.external ? <ExternalLink size={14} /> : null}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
