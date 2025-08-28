import { FeaturedExtensions } from "@/components/layouts/Extensions";
import Features from "@/components/layouts/Features";
import Hero from "@/components/layouts/Hero";
import Sponsor from "@/components/layouts/Sponsor";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <FeaturedExtensions />
      <Sponsor />
    </>
  );
}
