import Link from "next/link";
import { EXTENSIONS } from "@/data/extensions";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";

export const FeaturedExtensions = () => {
  return (
    <section>
      <div className="wrapper py-8 grid justify-items-center gap-6">
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
