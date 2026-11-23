"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { SiDiscord, SiGithub } from "react-icons/si";

import Logo from "@/components/ui/logo";
import DarkModeSwitch from "@/components/ui/dark-mode-switch";
import { cn } from "@/lib/utils";
import { DISCORD_URL, GITHUB_URL } from "@/data/meta";

const NAV_ITEMS = [
  { name: "Snippets", url: "/snippets" },
  { name: "Guide", url: "/guide" },
  { name: "Extensions", url: "/extensions" },
  { name: "Community", url: "/community" },
  { name: "Contributing", url: "/contributing" },
];

const SOCIAL_ITEMS = [
  { icon: SiGithub, name: "GitHub", url: GITHUB_URL },
  { icon: SiDiscord, name: "Discord", url: DISCORD_URL },
];

export default function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu on navigation.
  useEffect(() => setIsMobileMenuOpen(false), [pathname]);

  const isActive = (url: string) => pathname === url || pathname.startsWith(`${url}/`);

  return (
    <>
      <div className="h-(--header-height) w-full" aria-hidden="true" />
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 border-b border-border bg-background/95 backdrop-blur-md transition-shadow",
          isScrolled && "shadow-sm",
        )}
      >
        <div className="wrapper-lg flex h-(--header-height) items-center justify-between gap-4">
          <Logo />

          <div className="flex items-center gap-4">
            <nav aria-label="Main" className="hidden items-center gap-7 lg:flex">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.name}
                  href={item.url}
                  aria-current={isActive(item.url) ? "page" : undefined}
                  className={cn(
                    "font-medium transition-colors hover:text-brand",
                    isActive(item.url) ? "text-foreground" : "text-muted-foreground",
                  )}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            <span className="hidden h-6 w-px bg-border lg:block" aria-hidden="true" />
            <DarkModeSwitch />
            <span className="hidden h-6 w-px bg-border lg:block" aria-hidden="true" />

            <div className="hidden items-center gap-3 lg:flex">
              {SOCIAL_ITEMS.map(({ icon: Icon, name, url }) => (
                <Link
                  key={name}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={name}
                  title={name}
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Icon size={20} />
                </Link>
              ))}
            </div>

            <button
              type="button"
              className="rounded-lg p-2 text-foreground transition-colors hover:bg-accent lg:hidden"
              onClick={() => setIsMobileMenuOpen((open) => !open)}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.nav
              aria-label="Mobile"
              className="fixed top-(--header-height) right-4 z-50 mt-2 w-72 overflow-hidden rounded-2xl border border-border bg-popover p-4 shadow-2xl lg:hidden"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.15 }}
            >
              <ul className="space-y-1">
                {NAV_ITEMS.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.url}
                      aria-current={isActive(item.url) ? "page" : undefined}
                      className={cn(
                        "block rounded-lg px-3 py-2.5 font-medium transition-colors hover:bg-accent hover:text-accent-foreground",
                        isActive(item.url) && "bg-accent text-accent-foreground",
                      )}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="mt-4 flex gap-2 border-t border-border pt-4">
                {SOCIAL_ITEMS.map(({ icon: Icon, name, url }) => (
                  <Link
                    key={name}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-border py-2.5 font-medium transition-colors hover:bg-accent"
                  >
                    <Icon size={18} /> {name}
                  </Link>
                ))}
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
