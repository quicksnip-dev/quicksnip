import Image from "next/image";
import Link from "next/link";
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { SPONSOR_URL } from "@/data/meta";

/** Homepage support card: one clear action (Ko-fi), with contributing as a quiet alternative. */
export default function Sponsor() {
  return (
    <section className="wrapper-xs py-12">
      <Card className="grid md:grid-cols-[1fr_auto] md:items-center">
        <CardHeader>
          <CardTitle className="text-xl font-bold">Free forever. Better with every snippet.</CardTitle>
          <CardDescription>
            Sponsor to get a special <strong>💖 Prime Supporter</strong> role in our Discord, or{" "}
            <Link href="/contributing" className="font-medium text-foreground underline-offset-4 hover:text-brand hover:underline">
              add a snippet
            </Link>
            .
          </CardDescription>
        </CardHeader>
        <CardFooter>
          <Link href={SPONSOR_URL} target="_blank" rel="noopener noreferrer">
            <Image
              width={200}
              height={80}
              className="mx-auto"
              src="/assets/images/kofi-button.png"
              alt="Buy Me a Coffee at ko-fi.com"
            />
          </Link>
        </CardFooter>
      </Card>
    </section>
  );
}
