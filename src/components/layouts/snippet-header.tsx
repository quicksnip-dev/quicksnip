import { Search } from "lucide-react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SidebarTrigger } from "@/components/ui/sidebar";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";

export default function SnippetHeader() {
  return (
    <section className="grid gap-4 items-center md:grid-cols-[auto_1fr_auto_auto]">
      <SidebarTrigger />
      <InputGroup>
        <InputGroupInput placeholder="Search 875 snippets..." />
        <InputGroupAddon>
          <Search size={16} />
        </InputGroupAddon>
      </InputGroup>
      <Select>
        <SelectTrigger className="w-[10rem]">
          <SelectValue placeholder="Sort by" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="relevance">Relevance</SelectItem>
          <SelectItem value="popularity">Popularity</SelectItem>
          <SelectItem value="recent">Most recent</SelectItem>
          <SelectItem value="oldest">The oldest</SelectItem>
        </SelectContent>
      </Select>
      <Select>
        <SelectTrigger className="w-[15rem]">
          <SelectValue placeholder="Filter by language" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="js">JavaScript</SelectItem>
          <SelectItem value="py">Python</SelectItem>
          <SelectItem value="cplusplus">C++</SelectItem>
        </SelectContent>
      </Select>
    </section>
  );
}
