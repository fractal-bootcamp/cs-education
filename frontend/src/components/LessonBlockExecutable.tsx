import { LessonBlock } from "@/types/types";
import React from "react";

interface LessonBlockExecutableProps {
  block: LessonBlock;
}

const LessonBlockExecutable = ({ block }: LessonBlockExecutableProps) => {
  return <div>{block.content}</div>;
};

export default LessonBlockExecutable;
