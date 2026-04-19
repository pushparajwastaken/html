import { Container } from "@/components/container";
import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
export default function Home() {
  return (
    <div className="[background:radial-gradient((125%_100%_at_50%_0%,_#FFF_6.32%,_#E0F0FF_29.28%,_#E7EFFD_68.68%,_#FFF_100%))] h-screen relative ">
      <div className="max-w-7xl mx-auto absolute inset-0 h-full w-full">
        {" "}
        <div className="z-0 pointer-events-none absolute inset-y-0 left-0 h-full w-px bg-linear-to-b from-neutral-300/50 via-neutral-200 to-transparent" />
        <div className="z-0 pointer-events-none absolute inset-y-0 right-0 h-full w-px bg-linear-to-b from-neutral-300/50 via-neutral-200 to-transparent" />
      </div>
      <Container>
        <Navbar />
        <Hero />
      </Container>
      <div className="relative">
        <div className="h-px w-full absolute inset-x-0 bg-gradient-to-r from-neutral-300/50 via-neutral-200 to-transparent pointer-events-none z-0">
          <div className="max-w-7xl mx-auto p-4">
            <img
              src="/hero-ui-v6.webp"
              alt="banner"
              width={1000}
              height={1000}
              className="rounded-2xl w-full object-cover object-left-top border-neutral-200 shadow-md mask-b-from-0% to-100% "
            />
          </div>
        </div>
      </div>
    </div>
  );
}
