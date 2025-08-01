import Link from "next/link";
import { Button } from "../ui/button";

const Hero = () => {
  return (
    <section className="mt-20">
      <div className="container grid md:grid-cols-2">
        <article className="space-y-6 py-12">
          <Link
            className="block bg-secondary px-4 py-2 rounded-md w-fit text-lg font-semibold hover:bg-muted transition-colors duration-200 leading-none"
            href="https://github.com/quicksnip-dev/quicksnip"
          >
            v2.3.1
          </Link>
          <h1 className="text-4xl lg:text-7xl font-bold">
            A collection of <span className="text-accent">&lt;code&gt;</span>{" "}
            snippets
          </h1>
          <p className="text-2xl font-semibold text-muted-foreground">
            Made by the community.
          </p>
          <div className="flex flex-wrap gap-2">
            <Button asChild size="lg" className=" rounded-full">
              <Link href="/snippets">View all snippets</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="secondary"
              className=" rounded-full"
            >
              <Link href="/snippets">Get Started</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="secondary"
              className=" rounded-full"
            >
              <Link href="/snippets">GitHub</Link>
            </Button>
          </div>
        </article>
        <div className="p-8">
          <div className="w-full h-full bg-secondary rounded-2xl border-2 border-muted shadow-xl shadow-neutral-900"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
