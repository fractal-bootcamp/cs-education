import React, { useState } from "react";

interface XBlockExecutableProps {
  blockIndex: number;
  text: string;
  placeholder: string;
  answer: any;
  state: "past" | "current" | "future";
  onSubmit: (code: string, answer: any, blockIndex: number) => void;
}

const XBlockExecutable = ({
  blockIndex,
  text,
  placeholder,
  answer,
  state,
  onSubmit,
}: XBlockExecutableProps) => {
  const [code, setCode] = useState(placeholder);

  const handleExecute = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(code, answer, blockIndex);
  };

  console.log(state);

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
      className={`text-xs font-mono text-black shadow-sm py-6 px-4 flex flex-col space-y-4 leading-loose ${background()}`}
    >
      <div>
        {text.split("\n").map((line, index) => (
          <p key={index} className="pb-2">
            {line}
          </p>
        ))}
      </div>
      <div>
        <form onSubmit={handleExecute} className="flex flex-col space-y-2">
          <textarea
            name="code"
            id="code"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            className="w-full h-40 bg-codeEditor text-codeGreen p-2 outline-none font-mono leading-snug"
            style={{ resize: "none" }}
          ></textarea>
          <button
            type="submit"
            className="text-black bg-white px-4 py-2 w-full border-2 border-black hover:bg-black hover:text-codeGreen"
          >
            Execute
          </button>
        </form>
      </div>
    </div>
  );
};

export default XBlockExecutable;
