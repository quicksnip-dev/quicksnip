import { BadgeCheck } from "lucide-react";
import { cn } from "@/lib/utils";

export default function VerifiedBadge({ compact = false, className }: { compact?: boolean; className?: string }) {
  return (
    <span
      title="Typed and covered by unit tests"
      className={cn("inline-flex items-center gap-1 text-brand text-sm font-medium", className)}
    >
      <BadgeCheck size={16} aria-hidden="true" />
      {compact ? <span className="sr-only">Verified</span> : "Verified"}
    </span>
  );
}
