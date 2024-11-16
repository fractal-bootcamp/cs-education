import React, { useState } from "react";

interface XBlockExecutableProps {
  text: string;
  placeholder: string;
  onExecute: (code: string) => void;
}

const XBlockExecutable = ({ text, placeholder, onExecute }: XBlockExecutableProps) => {
  const [code, setCode] = useState(placeholder);

  const handleExecute = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onExecute(code);
  };

  return (
    <div className="text-xs font-mono bg-gray-800 text-white shadow-sm py-6 px-4 flex flex-col space-y-4">
      <div>
        {text.split("\n").map((line, index) => (
          <>
            <p key={index} className="pb-2">
              {line}
            </p>
          </>
        ))}
      </div>
      <div>
        <form onSubmit={handleExecute} className="flex flex-col space-y-2">
          <textarea
            name="code"
            id="code"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            className="w-full h-40 bg-black text-codeGreen p-2 outline-none"
            style={{ resize: "none" }}
          ></textarea>
          <button
            type="submit"
            className="text-black bg-white px-4 py-2 w-full hover:bg-black hover:text-codeGreen"
          >
            Execute
          </button>
        </form>
      </div>
    </div>
  );
};

export default XBlockExecutable;
