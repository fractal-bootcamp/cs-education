"use client";

import { faAtom, faHouse } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const XNavbar = () => {
  return (
    <div className="flex items-center justify-between p-4 border-b-2 border-black font-mono text-sm">
      <div className="font-bold">Fractal Education</div>
      <div className="flex items-center space-x-6">
        <Link href="/" className="flex items-center gap-2">
          <p>Home</p>
          <FontAwesomeIcon icon={faHouse} />
        </Link>
        <Link href="/lessons" className="flex items-center gap-2">
          <p>Lessons</p>
          <FontAwesomeIcon icon={faAtom} />
        </Link>
      </div>
    </div>
  );
};

export default XNavbar;
