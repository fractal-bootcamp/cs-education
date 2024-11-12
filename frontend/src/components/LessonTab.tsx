import { Lesson } from "@/types/types";
import Link from "next/dist/client/link";
import React from "react";

interface LessonTabProps {
  lesson: Lesson;
}

const LessonTab = ({ lesson }: LessonTabProps) => {
  return (
    <Link href={`/lessons/${lesson.id}`} className="p-2 border border-gray-200 rounded-md">
      <p>{lesson.title}</p>
    </Link>
  );
};

export default LessonTab;
