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
} from "@/components/ui/sidebar";
import { unslugify } from "@/lib/utils";
import { countCategories, useSnippetsStore } from "@/store/useSnippetsStore";

export default function SnippetSidebar() {
  const pathname = usePathname();
  const { snippets, verifiedOnly, setVerifiedOnly } = useSnippetsStore();
  const categories = countCategories(snippets);
  const activeCategory = pathname.split("/")[2];
  const verifiedCount = snippets.filter((s) => s.verified).length;

  return (
    <Sidebar className="z-40 border-r border-border">
      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton asChild isActive={pathname === "/snippets" && !verifiedOnly}>
                <Link href="/snippets" onClick={() => setVerifiedOnly(false)} className="flex justify-between">
                  <span className="flex items-center gap-2">
                    <LayoutGrid size={16} /> All
                  </span>
                  <span className="text-muted-foreground">{snippets.length || ""}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton asChild isActive={pathname === "/snippets" && verifiedOnly}>
                <Link href="/snippets" onClick={() => setVerifiedOnly(true)} className="flex justify-between">
                  <span className="flex items-center gap-2">
                    <BadgeCheck size={16} className="text-accent" /> Verified
                  </span>
                  <span className="text-muted-foreground">{verifiedCount || ""}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel>Categories</SidebarGroupLabel>
          <SidebarMenu>
            {categories.map((item) => (
              <SidebarMenuItem key={item.name}>
                <SidebarMenuButton asChild isActive={item.name === activeCategory}>
                  <Link href={`/snippets/${item.name}`} className="flex items-center justify-between">
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
