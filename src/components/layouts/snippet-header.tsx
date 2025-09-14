import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

export default function SnippetHeader() {
  return (
    <section className="grid gap-4 md:grid-cols-[1fr_auto_auto]">
      <div className="relative">
        <div className="absolute left-2 top-1/2 transform -translate-y-1/2">
          <Search size={16} />
        </div>
        <Input
          placeholder="Search 875 snippets..."
          type="search"
          className="pl-8 w-full"
        />
      </div>
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
