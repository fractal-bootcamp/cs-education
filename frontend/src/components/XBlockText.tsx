import React from "react";

interface XBlockTextProps {
  text: string;
}

const XBlockText = ({ text }: XBlockTextProps) => {
  return (
    <div className="text-xs font-mono bg-gray-800 text-white shadow-sm py-6 px-4">
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

export default XBlockText;
