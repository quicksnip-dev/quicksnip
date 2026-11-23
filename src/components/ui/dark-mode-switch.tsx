"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "lucide-react";
import { cn } from "@/lib/utils";

/** Two-segment light/dark toggle. Renders neutral until mounted to avoid a hydration mismatch. */
export default function DarkModeSwitch() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const isDark = mounted && resolvedTheme === "dark";
  const isLight = mounted && resolvedTheme === "light";

  const segment = (active: boolean) =>
    cn(
      "flex size-7 items-center justify-center rounded-full transition-colors",
      active ? "bg-background text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground",
    );

  return (
    <div
      role="radiogroup"
      aria-label="Color theme"
      className="inline-flex items-center gap-0.5 rounded-full border border-border bg-secondary p-0.5"
    >
      <button
        type="button"
        role="radio"
        aria-checked={isDark}
        aria-label="Dark theme"
        title="Dark theme"
        className={segment(isDark)}
        onClick={() => setTheme("dark")}
      >
        <MoonIcon size={15} aria-hidden="true" />
      </button>
      <button
        type="button"
        role="radio"
        aria-checked={isLight}
        aria-label="Light theme"
        title="Light theme"
        className={segment(isLight)}
        onClick={() => setTheme("light")}
      >
        <SunIcon size={15} aria-hidden="true" />
      </button>
    </div>
  );
}
