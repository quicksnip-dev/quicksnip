import Features from "@/components/layouts/features";
import Hero from "@/components/layouts/hero";
import AvailableFor from "@/components/layouts/available-for";
import Sponsor from "@/components/layouts/sponsor";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <AvailableFor />
      <Sponsor />
    </>
  );
}
