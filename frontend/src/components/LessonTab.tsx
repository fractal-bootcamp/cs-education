import { Lesson } from "@/types/types";
import React from "react";

interface LessonTabProps {
  lesson: Lesson;
}

const LessonTab = ({ lesson }: LessonTabProps) => {
  return (
    <div className="p-2 border border-gray-200 rounded-md">
      <p>{lesson.title}</p>
    </div>
  );
};

export default LessonTab;
