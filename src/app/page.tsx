import Features from "@/components/layouts/features";
import Hero from "@/components/layouts/hero";
import AvailableFor from "@/components/layouts/available-for";
import Sponsor from "@/components/layouts/sponsor";
import JsonLd from "@/components/ui/json-ld";
import { DISCORD_URL, GITHUB_URL, SITE_URL, YOUTUBE_URL } from "@/data/meta";

export default function Home() {
  return (
    <>
      <JsonLd
        data={[
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "QuickSnip",
            url: SITE_URL,
            description: "Verified code snippets for humans and AI.",
            potentialAction: {
              "@type": "SearchAction",
              target: `${SITE_URL}/snippets?q={search_term_string}`,
              "query-input": "required name=search_term_string",
            },
          },
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "QuickSnip",
            url: SITE_URL,
            logo: `${SITE_URL}/icon-512.png`,
            sameAs: [GITHUB_URL, DISCORD_URL, YOUTUBE_URL],
          },
        ]}
      />
      <Hero />
      <Features />
      <AvailableFor />
      <Sponsor />
    </>
  );
}
