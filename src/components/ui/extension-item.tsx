import Link from "next/link";
import Image from "next/image";
import type { ExtensionStatus, ExtensionType } from "@/types";

const STATUS_LABEL: Record<ExtensionStatus, string> = {
  available: "Available",
  community: "Community-built",
  planned: "Planned",
};
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./card";
import { Button } from "./button";
import { FUTURE_EXTENSIONS } from "@/data/extensions";
import { Avatar, AvatarFallback, AvatarImage } from "./avatar";

export default function ExtensionItem({
  extension,
}: {
  extension: ExtensionType;
}) {
  return (
    <Card className="justify-start gap-4">
      <CardHeader className="grid grid-cols-[auto_1fr] items-center gap-4">
        <div className="bg-secondary p-4 rounded-lg">
          <Image
            src={extension.icon}
            alt=""
            aria-hidden="true"
            width={40}
            height={40}
          />
        </div>
        <div className="space-y-1">
          <CardTitle className="text-2xl font-bold">{extension.name}</CardTitle>
          <p
            className={
              extension.status === "planned" ? "text-sm text-muted-foreground" : "text-sm font-medium text-brand"
            }
          >
            {STATUS_LABEL[extension.status]}
          </p>
        </div>
      </CardHeader>
      <CardContent className="flex-1">
        <CardDescription className="text-base">
          {extension.description}
        </CardDescription>
      </CardContent>
      <CardFooter>
        <CardAction className="flex flex-wrap gap-4">
          <Button asChild>
            <Link href={extension.guide_url}>Guide</Link>
          </Button>
          {extension.source_url ? (
            <Button asChild variant="outline">
              <Link href={extension.source_url} target="_blank" rel="noopener noreferrer">
                Source
              </Link>
            </Button>
          ) : null}
        </CardAction>
      </CardFooter>
    </Card>
  );
}

export function NewExtensionItem() {
  return (
    <Link
      href="/guide/extensions"
      className="bg-transparent h-full outline-2 outline-secondary transition-colors duration-200 hover:outline-muted space-y-4 p-6 rounded-lg grid gap-4 place-content-center justify-items-center text-secondary-foreground"
    >
      <ExtensionsAvatarGroup />
      <span className="text-lg font-semibold">Add your extension here...</span>
    </Link>
  );
}

function ExtensionsAvatarGroup() {
  return (
    <div className="flex -space-x-4">
      {FUTURE_EXTENSIONS.map((extension) => (
        <Avatar key={extension.name} className="size-14 bg-secondary p-3">
          <AvatarImage src={extension.icon} alt={extension.name} />
          <AvatarFallback>{extension.shortcut_name}</AvatarFallback>
        </Avatar>
      ))}
    </div>
  );
}
