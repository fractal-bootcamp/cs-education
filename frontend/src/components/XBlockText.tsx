import React from "react";

interface XBlockTextProps {
  text: string;
}

const XBlockText = ({ text }: XBlockTextProps) => {
  return (
    <div className="text-xs bg-gray-100 text-black shadow-sm py-6 px-4 leading-loose">
      {text.split("\n").map((line, key) => (
        <p key={key} className="pb-2">
          {line}
        </p>
      ))}
    </div>
  );
};

export default XBlockText;
