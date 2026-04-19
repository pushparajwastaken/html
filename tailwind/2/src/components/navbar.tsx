import React from "react";
import Link from "next/link";
import Image from "next/image";
export const Navbar = () => {
  const links = [
    { href: "/guide", title: "Guide" },
    { href: "/pricing", title: "Pricing" },
    { href: "/login", title: "Login" },
  ];
  return (
    <div className="flex items-center justify-between px-4 py-4">
      <Link href="/">
        <Image
          draggable={false}
          loading="lazy"
          alt="logo"
          src="/finta-logo-light.svg"
          height={50}
          width={50}
        />
      </Link>
      <div className="flex items-center gap-8">
        {links.map((link, index) => (
          <Link
            href={link.href}
            key={index}
            className="text-neutral-800 font-medium hover:text-neutral-500 transition duration-200"
          >
            {link.title}
          </Link>
        ))}
        <button className="bg-[#2579F4] text-white px-4 py-2 rounded-lg font-bold shadow-lg text-shadow-md tracking-wide">
          {" "}
          Start free trial
        </button>
      </div>
    </div>
  );
};
