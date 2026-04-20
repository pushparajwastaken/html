import Image from "next/image";
import { Hero } from "@/components/hero";
export default function Home() {
  //h-screen kyuki 100 view port height chahiye mtlb full screen

  return (
    <div className="font-display flex h-screen justify-center bg-neutral-900">
      <Hero />
    </div>
  );
}
