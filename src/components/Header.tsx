"use client";
import { usePathname } from "next/navigation";
import React from "react";
import Link from "next/link";
import { capitalize } from "@/util";
import clsx from "clsx";

const menuItems = ["expense", "category", "summary"];

const Header = () => {
  const path = usePathname().split("/")[1];
  return (
    <header className="shadow-md h-16 flex items-center px-4 md:px-8 mb-2">
      <div className="container mx-auto">
        <ul className="flex space-x-4 md:space-x-8">
          {menuItems.map((item, index) => (
            <li key={index} className="relative">
              <Link
                className={clsx(
                  "px-3 py-2 rounded-md transition-all duration-300 hover:bg-white/10",
                  path === item
                    ? "font-medium  text-[#1677ff]"
                    : "hover:text-[#1677ff]"
                )}
                href={item}
              >
                {capitalize(item)}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Header;
