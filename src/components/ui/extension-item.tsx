import Link from "next/link";
import Image from "next/image";
import type { ExtensionType } from "@/types";
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

export default function ExtensionItem({
  extension,
}: {
  extension: ExtensionType;
}) {
  return (
    <Card className="justify-start gap-4">
      <CardHeader className="grid grid-cols-[auto_1fr] items-center gap-4">
        <div className="bg-primary p-4 rounded-lg">
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
          <p className="text-muted-foreground">
            <strong>Downloads: </strong>
            {new Intl.NumberFormat().format(extension.downloads)}
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
          <Button asChild variant="outline">
            <Link
              href={extension.source_url}
              target="_blank"
              rel="noopener noreferrer"
            >
              Source
            </Link>
          </Button>
        </CardAction>
      </CardFooter>
    </Card>
  );
}
