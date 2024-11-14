import { submitCode } from "@/lib/submitCode";
import { LessonBlock } from "@/types/types";
import React, { useState } from "react";

interface LessonBlockExecutableProps {
  block: LessonBlock;
}

const LessonBlockExecutable = ({ block }: LessonBlockExecutableProps) => {
  const [code, setCode] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const result = await submitCode(code, block.answer);
    console.log(result);
  };

  return (
    <div className="text-xs border border-gray-300 rounded-md p-2">
      <p>{block.content}</p>
      <form onSubmit={handleSubmit} className="w-full flex space-x-2">
        <textarea
          value={code}
          onChange={(e) => setCode(e.target.value)}
          className="flex-1 border border-gray-300 rounded-md p-2"
        />
        <button type="submit" className="bg-blue-500 text-white rounded-md p-2">
          Execute
        </button>
      </form>
    </div>
  );
};

export default LessonBlockExecutable;
