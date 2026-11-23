"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BadgeCheck, LayoutGrid } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
  useSidebar,
} from "@/components/ui/sidebar";
import { unslugify } from "@/lib/utils";
import { useSnippetsStore } from "@/store/useSnippetsStore";
import type { SnippetSummary } from "@/lib/snippets";

export default function SnippetSidebar({ summary }: { summary: SnippetSummary }) {
  const pathname = usePathname();
  const { isMobile, setOpenMobile } = useSidebar();
  const verifiedOnly = useSnippetsStore((s) => s.verifiedOnly);
  const setVerifiedOnly = useSnippetsStore((s) => s.setVerifiedOnly);
  const activeCategory = pathname.split("/")[2];

  const close = () => {
    if (isMobile) setOpenMobile(false);
  };

  return (
    <Sidebar className="z-40 border-r border-border" aria-label="Snippet categories">
      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton asChild isActive={pathname === "/snippets" && !verifiedOnly}>
                <Link
                  href="/snippets"
                  onClick={() => {
                    setVerifiedOnly(false);
                    close();
                  }}
                  className="flex justify-between"
                >
                  <span className="flex items-center gap-2">
                    <LayoutGrid size={16} /> All
                  </span>
                  <span className="text-muted-foreground">{summary.total}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton asChild isActive={pathname === "/snippets" && verifiedOnly}>
                <Link
                  href="/snippets"
                  onClick={() => {
                    setVerifiedOnly(true);
                    close();
                  }}
                  className="flex justify-between"
                >
                  <span className="flex items-center gap-2">
                    <BadgeCheck size={16} className="text-brand" /> Verified
                  </span>
                  <span className="text-muted-foreground">{summary.verified}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel>Categories</SidebarGroupLabel>
          <SidebarMenu>
            {summary.categories.map((item) => (
              <SidebarMenuItem key={item.name}>
                <SidebarMenuButton asChild isActive={item.name === activeCategory}>
                  <Link
                    href={`/snippets/${item.name}`}
                    onClick={close}
                    className="flex items-center justify-between"
                  >
                    <span>{unslugify(item.name)}</span>
                    <span className="text-muted-foreground">{item.count}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
