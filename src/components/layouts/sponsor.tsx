import Image from "next/image";
import Link from "next/link";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { SPONSOR_URL } from "@/data/meta";

export default function Sponsor() {
  return (
    <div className="wrapper-xs pt-4 pb-12">
      <Card className="grid md:grid-cols-[1fr_auto]">
        <CardHeader>
          <CardTitle className="text-xl font-bold">
            Support the project
          </CardTitle>
          <CardDescription>
            And get a special <strong>💖 Prime Supporter</strong> role in our
            Discord server.
          </CardDescription>
        </CardHeader>
        <CardFooter>
          <Link href={SPONSOR_URL} target="_blank">
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
    </div>
  );
}
