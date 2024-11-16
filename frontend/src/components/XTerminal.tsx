import { useEffect, useRef } from "react";
import XTerminalOutput, { XTerminalOutputProps } from "./XTerminalOutput";

interface XTerminalProps {
  terminalOutputs: XTerminalOutputProps[];
}

const XTerminal = ({ terminalOutputs }: XTerminalProps) => {
  // Always default to latest item at the bottom
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [terminalOutputs]);

  return (
    <div
      ref={scrollRef}
      className="bg-black flex flex-col fixed bottom-0 z-20 w-full p-1 h-48 border-2 border-gray-800 overflow-y-scroll"
    >
      {terminalOutputs.map((output, key) => (
        <XTerminalOutput
          key={key}
          content={output.content}
          createdDate={output.createdDate}
          terminalPath={output.terminalPath}
        />
      ))}
    </div>
  );
};

export default XTerminal;
