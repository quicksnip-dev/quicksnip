import { EXTENSIONS } from "@/data/extensions";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";
import type { ExtensionType } from "@/types";

export const FeaturedExtensions = () => {
  return (
    <section>
      <div className="container py-8 grid justify-items-center gap-6">
        <h2 className="text-center text-2xl">Available for:</h2>
        <div className="flex gap-4 flex-wrap">
          {EXTENSIONS.map((extension) => (
            <Link key={extension.name} href={extension.guide_url}>
              <Avatar className="size-14 bg-secondary p-3 hover:bg-muted">
                <AvatarImage src={extension.icon} alt={extension.name} />
                <AvatarFallback>{extension.name.slice(0, 2)}</AvatarFallback>
              </Avatar>
            </Link>
          ))}
        </div>
        <Button variant="secondary" size="lg" asChild>
          <Link href="/extensions">View more</Link>
        </Button>
      </div>
    </section>
  );
};

export const ExtensionItem = ({ extension }: { extension: ExtensionType }) => {
  return (
    <li className="bg-secondary space-y-4 p-6 rounded-lg text-secondary-foreground h-full">
      <div className="grid grid-cols-[auto_1fr] items-center gap-4">
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
          <h3 className="text-2xl font-bold">{extension.name}</h3>
          <p className="text-muted-foreground">
            <strong>Downloads: </strong>
            {new Intl.NumberFormat().format(extension.downloads)}
          </p>
        </div>
      </div>
      <p>{extension.description}</p>
      <div className="flex flex-wrap gap-4">
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
      </div>
    </li>
  );
};
