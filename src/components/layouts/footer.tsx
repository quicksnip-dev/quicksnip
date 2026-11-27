import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SiDiscord, SiGithub, SiReddit, SiYoutube } from "react-icons/si";

import { LogoIcon } from "@/components/ui/logo";
import { AUTHOR, DISCORD_URL, GITHUB_URL, REDDIT_URL, SPONSOR_URL, YOUTUBE_URL } from "@/data/meta";

type FooterLink = { name: string; url: string };

const COLUMNS: { title: string; links: FooterLink[] }[] = [
  {
    title: "Resources",
    links: [
      { name: "Guide", url: "/guide" },
      { name: "Blog", url: "/blog" },
      { name: "For AI agents", url: "/guide/for-ai-agents" },
      { name: "llms.txt", url: "/llms.txt" },
    ],
  },
  {
    title: "Community",
    links: [
      { name: "Contribute", url: "/contributing" },
      { name: "Contributors", url: "/community" },
      { name: "Extensions", url: "/extensions" },
      { name: "Changelog", url: `${GITHUB_URL}/releases` },
      { name: "Sponsor", url: SPONSOR_URL },
    ],
  },
];

const SOCIALS = [
  { icon: SiGithub, name: "GitHub", url: GITHUB_URL },
  { icon: SiDiscord, name: "Discord", url: DISCORD_URL },
  { icon: SiReddit, name: "Reddit", url: REDDIT_URL },
  { icon: SiYoutube, name: "YouTube", url: YOUTUBE_URL },
];

const LEGAL: FooterLink[] = [
  { name: "Privacy", url: "/privacy" },
  { name: "Terms", url: "/terms" },
  { name: "MIT License", url: `${GITHUB_URL}/blob/main/LICENSE` },
];

const PRODUCT_HUNT_URL =
  "https://www.producthunt.com/products/quicksnip/launches/quicksnip?embed=true&utm_source=badge-featured&utm_medium=badge&utm_campaign=badge-quicksnip";
const productHuntBadge = (theme: "light" | "dark") =>
  `https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=704385&theme=${theme}&t=1795806597979`;

const isExternal = (url: string) => url.startsWith("http");
const externalProps = { target: "_blank", rel: "noopener noreferrer" };

function FooterLink({ name, url }: FooterLink) {
  const external = isExternal(url);
  return (
    <Link
      href={url}
      {...(external ? externalProps : {})}
      className="group inline-flex items-center gap-0.5 text-secondary-foreground transition-colors hover:text-brand"
    >
      {name}
      {external ? (
        <ArrowUpRight size={14} aria-hidden="true" className="opacity-50 transition-opacity group-hover:opacity-100" />
      ) : null}
    </Link>
  );
}

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="wrapper-lg grid grid-cols-2 gap-10 py-12 md:grid-cols-[minmax(0,2fr)_minmax(0,1fr)_minmax(0,1fr)_auto]">
        <div className="col-span-2 space-y-5 md:col-span-1">
          <Link href="/" className="flex w-fit items-center gap-2" aria-label="QuickSnip home">
            <LogoIcon />
            <span className="text-lg font-bold">QuickSnip</span>
          </Link>
          <p className="max-w-xs text-secondary-foreground">
            Verified code snippets for humans and AI. Copy them, install them, or let your coding agent use them.
          </p>
          <ul className="flex gap-4" aria-label="QuickSnip elsewhere">
            {SOCIALS.map(({ icon: Icon, name, url }) => (
              <li key={name}>
                <Link
                  href={url}
                  {...externalProps}
                  aria-label={name}
                  title={name}
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Icon size={20} />
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <nav aria-label="Footer" className="contents">
          {COLUMNS.map((column) => (
            <div key={column.title}>
              <h2 className="mb-4 text-sm font-semibold">{column.title}</h2>
              <ul className="space-y-2.5">
                {column.links.map((link) => (
                  <li key={link.name}>
                    <FooterLink {...link} />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>

        <div className="col-span-2 md:col-span-1">
          <Link href={PRODUCT_HUNT_URL} {...externalProps} className="inline-block">
            {/* Plain <img>: a remote SVG badge that needs no optimization. One variant per theme;
                lazy loading keeps the hidden one from being fetched. */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={productHuntBadge("light")}
              alt="QuickSnip on Product Hunt"
              width={250}
              height={54}
              loading="lazy"
              className="dark:hidden"
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={productHuntBadge("dark")}
              alt="QuickSnip on Product Hunt"
              width={250}
              height={54}
              loading="lazy"
              className="hidden dark:block"
            />
          </Link>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="wrapper-lg flex flex-col gap-3 py-6 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
          <p>
            Built by{" "}
            <Link
              href={AUTHOR.github}
              {...externalProps}
              className="font-medium text-foreground transition-colors hover:text-brand"
            >
              Technophile
            </Link>{" "}
            · Maintained by{" "}
            <Link href="/community" className="font-medium text-foreground transition-colors hover:text-brand">
              the community
            </Link>
          </p>
          <p className="flex flex-wrap items-center gap-x-4 gap-y-1">
            <span>© 2024–{new Date().getFullYear()} QuickSnip contributors</span>
            {LEGAL.map(({ name, url }) => (
              <Link
                key={name}
                href={url}
                {...(isExternal(url) ? externalProps : {})}
                className="transition-colors hover:text-brand"
              >
                {name}
              </Link>
            ))}
          </p>
        </div>
      </div>
    </footer>
  );
}
