import React from "react";

interface XBlockTextProps {
  text: string;
  state: "past" | "current" | "future";
}

const XBlockText = ({ text, state }: XBlockTextProps) => {
  const background = (): string => {
    if (state === "past") {
      return "bg-green-100";
    } else if (state === "current") {
      return "bg-gray-100";
    } else {
      return "hidden";
    }
  };
  return (
    <div
      className={`text-xs font-mono text-black shadow-sm py-6 px-4 leading-loose ${background()}`}
    >
      {text.split("\n").map((line, key) => (
        <p key={key} className="pb-2">
          {line}
        </p>
      ))}
    </div>
  );
};

export default XBlockText;
