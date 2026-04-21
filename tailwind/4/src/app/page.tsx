import { Navbar } from "@/components/navbar";
import Image from "next/image";
/*
5 responsive sizes:-
sm
md
ld 
xl 
2xl
*/
export default function Home() {
  return (
    <div className="h-screen bg-neutral-300">
      <Navbar />
    </div>
  );
}
