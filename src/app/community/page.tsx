"use client";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { DISCORD_URL, GITHUB_URL } from "@/data/meta";

const QUICKSNIP_YT_VIDEOS = [
  {
    id: "2_AfhnMVuSY",
    title: "We made QuickSnip even better (v1)",
  },
  {
    id: "BhRi7fJzPgk",
    title: "I built a library of code snippets for developers",
  },
];

const Communitypage = () => {
  return (
    <>
      <section>
        <div className="wrapper grid py-20 gap-8 lg:grid-cols-2">
          <div className="space-y-8 grid justify-items-center">
            <motion.div
              whileHover={{ rotate: "10deg", scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring" }}
            >
              <Image
                src="/icons/github.svg"
                alt="GitHub"
                width={150}
                height={150}
                className="shadow-[0_0_5rem_1rem_hsl(225,22%,15%)] rounded-[3rem]"
              />
            </motion.div>
            <h2 className="text-3xl font-bold text-center">
              QuickSnip is Open-Source
            </h2>
            <Button size="lg" asChild>
              <Link href={GITHUB_URL} target="_blank" rel="noopener noreferrer">
                See the code <ExternalLink />
              </Link>
            </Button>
          </div>
          <div className="space-y-8 grid justify-items-center">
            <motion.div
              whileHover={{ rotate: "-10deg", scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring" }}
            >
              <Image
                src="/icons/discord.svg"
                alt="Discord"
                width={150}
                height={150}
                className="shadow-[0_0_5rem_1rem_hsl(235,86%,65%,0.5)] rounded-[3rem]"
              />
            </motion.div>
            <h2 className="text-3xl font-bold text-center">
              Join our Discord Community
            </h2>
            <Button size="lg" asChild>
              <Link
                href={DISCORD_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                Take me there <ExternalLink />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section>
        <div className="wrapper pt-8 pb-16 space-y-8">
          <h2 className="text-xl text-muted-foreground font-bold text-center">
            Videos from Technophile
          </h2>
          <ul className="grid gap-4 sm:grid-cols-2 auto-rows-fr lg:grid-cols-3">
            {QUICKSNIP_YT_VIDEOS.map((video) => (
              <li key={video.id}>
                <Link
                  href={`https://www.youtube.com/watch?v=${video.id}`}
                  className="block space-y-2"
                >
                  <AspectRatio ratio={16 / 9} className="bg-muted rounded-lg">
                    <Image
                      src={`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`}
                      alt={video.title}
                      fill
                      className="h-full w-full rounded-lg object-cover"
                    />
                  </AspectRatio>
                  <h3 className="text-lg font-semibold">{video.title}</h3>
                </Link>
              </li>
            ))}
          </ul>
          <Button
            size="lg"
            variant="secondary"
            className="flex w-fit mx-auto"
            asChild
          >
            <Link
              href="https://www.youtube.com/@technoph1le"
              target="_blank"
              rel="noopener noreferrer"
            >
              Let me subscribe <ExternalLink />
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
};

export default Communitypage;

/**
 * Fetch `CONTRIBUTING.md`
 */
