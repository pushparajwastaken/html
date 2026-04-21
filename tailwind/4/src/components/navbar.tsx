import Image from "next/image";
export const Navbar = () => {
  return (
    <div className="mx-auto mt-4 flex max-w-4xl items-center justify-between rounded-md border-neutral-200 bg-white p-8">
      <Image
        src="https://ui.aceternity.com/logo.png"
        alt="logo"
        width={5}
        height={5}
      />
    </div>
  );
};
