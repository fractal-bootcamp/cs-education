"use client";

import { NavigationItem } from "@/types/types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";

interface NavbarProps {
  items: NavigationItem[];
}

const Navbar = ({ items }: NavbarProps) => {
  console.log(items);
  return (
    <div className="flex items-center justify-between p-4 bg-gray-100">
      <div>Fractal Education</div>
      <div className="flex items-center gap-4">
        {items.map((item, key) => (
          <Link key={key} href={item.href} className="flex items-center gap-2">
            <p>{item.label}</p>
            <FontAwesomeIcon icon={item.icon} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
