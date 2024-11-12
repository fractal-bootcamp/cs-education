import { NavigationItem } from "@/types/types";
import Link from "next/link";
import React from "react";

interface NavbarProps {
  items: NavigationItem[];
}

const Navbar = ({ items }: NavbarProps) => {
  return (
    <div className="flex items-center justify-between p-4 bg-gray-100">
      <div>Fractal Education</div>
      <div>
        {items.map((item) => (
          <Link href={item.href} className="flex items-center gap-2">
            <p>{item.label}</p>
            <item.icon />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
