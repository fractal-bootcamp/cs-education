import XTerminalOutput, { XTerminalOutputProps } from "./XTerminalOutput";

interface XTerminalProps {
  terminalOutputs: XTerminalOutputProps[];
}

const XTerminal = ({ terminalOutputs }: XTerminalProps) => {
  return (
    <div className="bg-black flex flex-col">
      <div className="text-white font-aria font-bold p-2 text-left text-xs">Terminal</div>
      <div>
        {terminalOutputs.map((output, key) => (
          <XTerminalOutput
            key={key}
            content={output.content}
            createdDate={output.createdDate}
            terminalPath={output.terminalPath}
          />
        ))}
      </div>
    </div>
  );
};

export default XTerminal;
