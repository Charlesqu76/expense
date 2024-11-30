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
    <header className="h-16 flex items-center px-2">
      <ul className="flex space-x-2">
        {menuItems.map((item, index) => (
          <li key={index} className="">
            <Link
              className={clsx(
                path === item && "border-b pb-1 border-b-cyan-700"
              )}
              href={item}
            >
              {capitalize(item)}
            </Link>
          </li>
        ))}
      </ul>
    </header>
  );
};

export default Header;
