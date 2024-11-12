import { LessonBlock } from "@/types/types";
import React from "react";

interface LessonBlockTextProps {
  block: LessonBlock;
}

const LessonBlockText = ({ block }: LessonBlockTextProps) => {
  return <div>{block.content}</div>;
};

export default LessonBlockText;
