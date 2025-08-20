import { FeaturedExtensions } from "@/components/layouts/Extensions";
import Features from "@/components/layouts/Features";
import Hero from "@/components/layouts/Hero";
// import Image from "next/image";
// import Link from "next/link";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <FeaturedExtensions />
      {/* <div className="wrapper">
        <Link href="https://ko-fi.com/D1D217QALD" target="_blank">
          <Image
            width={100}
            height={36}
            src="https://storage.ko-fi.com/cdn/kofi3.png?v=6"
            alt="Buy Me a Coffee at ko-fi.com"
          />
        </Link>
      </div> */}
    </>
  );
}
