"use client";

import Link from "next/link";

interface XLessonTabProps {
  title: string;
  path: string;
}

const XLessonTab = ({ title, path }: XLessonTabProps) => {
  return (
    <Link href={path} className="p-2 text-left text-xs border-[0.5px] border-black font-thin">
      {title}
    </Link>
  );
};

export default XLessonTab;
