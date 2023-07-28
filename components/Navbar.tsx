"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Navbar = () => {
  const pathname = usePathname();

  const active = "text-[#EEB33B] font-[700]";

  return (
    <div className="w-full flex py-4">
      <nav className="w-full flex px-[10px] rounded-[100px] py-4 bg-[#40392F]">
        <div className="flex w-full">
          <div className="flex w-full items-center justify-between">
            <div className="flex gap-3 items-center">
              <Image
                src="/mainlogo.png"
                width={1000}
                height={1000}
                quality={100}
                className="w-12 h-12 rounded-full object-cover"
                alt="logo"
              />
              <h2 className="text-[#EEB33B] text-[20px] font-[700]">
                Bug Bounty Brigade
              </h2>
            </div>
            <ul className="flex gap-16 items-center">
              <Link href="/" className={pathname === "/" ? active : ""}>
                Home
              </Link>
              <Link
                href="events"
                className={pathname.includes("events") ? active : ""}
              >
                Events
              </Link>
              <Link
                href="blogs"
                className={pathname.includes("blogs") ? active : ""}
              >
                Blogs
              </Link>
              <Link
                href="about"
                className={pathname.includes("about") ? active : ""}
              >
                About us
              </Link>
              <button className="py-[12px] font-[400] px-[40px] rounded-full text-black bg-[#EEB33B]">
                Join our community
              </button>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;