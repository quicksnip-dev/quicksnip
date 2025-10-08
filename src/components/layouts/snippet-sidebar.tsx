"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarRail,
} from "@/components/ui/sidebar";
import { unslugify } from "@/lib/utils";
import { useSnippetsStore } from "@/store/useSnippetsStore";
import Link from "next/link";

// const categories = [
//   {
//     title: "Routing",
//     url: "/routing",
//     count: 23,
//   },
//   {
//     title: "Data Fetching",
//     url: "#",
//     isActive: true,
//     count: 86,
//   },
//   {
//     title: "Rendering",
//     url: "#",
//     count: 34,
//   },
//   {
//     title: "Caching",
//     url: "#",
//     count: 64,
//   },
//   {
//     title: "Styling",
//     url: "#",
//     count: 98,
//   },
//   {
//     title: "Optimizing",
//     url: "#",
//     count: 45,
//   },
//   {
//     title: "Configuring",
//     url: "#",
//     count: 123,
//   },
//   {
//     title: "Testing",
//     url: "#",
//     count: 56,
//   },
//   {
//     title: "Authentication",
//     url: "#",
//     count: 87,
//   },
//   {
//     title: "Deploying",
//     url: "#",
//     count: 234,
//   },
//   {
//     title: "Upgrading",
//     url: "#",
//     count: 12,
//   },
//   {
//     title: "Examples",
//     url: "#",
//     count: 56,
//   },
// ];

export default function SnippetSidebar() {
  const { setCategory, categories } = useSnippetsStore();
  const cats = categories();

  return (
    <Sidebar collapsible="none" className="border-r border-border">
      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <Link href="/snippets" onClick={() => setCategory("All")}>
                  All
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <Link href="/snippets/categories">Categories</Link>
              </SidebarMenuButton>
              {cats.length ? (
                <SidebarMenuSub>
                  {cats.map((item) => (
                    <SidebarMenuSubItem key={item.name}>
                      <SidebarMenuSubButton
                        className="py-4"
                        asChild
                        isActive={item.name === "current"}
                      >
                        <Link
                          href={`/snippets/${item.name}`}
                          onClick={() => setCategory(item.name)}
                          className="flex items-center justify-between"
                        >
                          <span>{unslugify(item.name)}</span>
                          <span className="text-muted-foreground">
                            {item.count}
                          </span>
                        </Link>
                      </SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                  ))}
                </SidebarMenuSub>
              ) : null}
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
