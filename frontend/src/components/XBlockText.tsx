import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

interface XBlockTextProps {
  blockIndex: number;
  text: string;
  state: "past" | "current" | "future";
  onCheck: (blockIndex: number) => void;
}

const XBlockText = ({ blockIndex, text, state, onCheck }: XBlockTextProps) => {
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
      <div className="w-full flex justify-end">
        <button
          onClick={() => onCheck(blockIndex)}
          className={`rounded-full h-4 w-4 p-4 border-2 border-black flex justify-center items-center ${
            state === "past" ? "bg-green-500" : ""
          }`}
        >
          <FontAwesomeIcon icon={faCheck} />
        </button>
      </div>
    </div>
  );
};

export default XBlockText;
