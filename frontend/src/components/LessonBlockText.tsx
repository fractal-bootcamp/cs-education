import { LessonBlock } from "@/types/types";
import React from "react";

interface LessonBlockTextProps {
  block: LessonBlock;
}

const LessonBlockText = ({ block }: LessonBlockTextProps) => {
  return <div className="text-xs border border-gray-300 rounded-md p-2">{block.content}</div>;
};

export default LessonBlockText;
