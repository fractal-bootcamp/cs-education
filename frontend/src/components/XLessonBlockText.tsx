import React from "react";

interface XLessonBlockTextProps {
  text: string;
}

const XLessonBlockText = ({ text }: XLessonBlockTextProps) => {
  return (
    <div className="text-xs font-mono bg-black text-white shadow-sm py-6 px-4">
      {text.split("\n").map((line, index) => (
        <>
          <p key={index} className="pb-2">
            {line}
          </p>
        </>
      ))}
    </div>
  );
};

export default XLessonBlockText;
