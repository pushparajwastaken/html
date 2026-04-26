import Image from "next/image";

export default function Home() {
  return (
    <div className="relative h-full w-full flex items-center justify-center ">
      <Pattern />
      <div className="h-80 w-60 border z-10 border-neutral-200 rounded-xl relative shadow-2xl"></div>
    </div>
  );
}
const Pattern = () => {
  return (
    <div className="absolute inset-0 z-0 roundend-lg m-auto bg-[image:repeating-linear-gradient(315deg,_var(--pattern-fg)_0,_var(--pattern-fg)_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px] bg-fixed pointer-events-none"></div>
  );
};
