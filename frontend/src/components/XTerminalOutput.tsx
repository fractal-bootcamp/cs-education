export interface XTerminalOutputProps {
  content: string;
  createdDate: Date;
  terminalPath: string;
}

const XTerminalOutput = ({ content, createdDate, terminalPath }: XTerminalOutputProps) => {
  return (
    <div className="p-2 bg-black font-mono text-xs flex flex-col">
      <div className="flex space-x-2">
        <div className="text-blue-500">fractal-education</div>
        <div className="text-red-500">{createdDate.toISOString()}</div>
        <div className="text-purple-500">{terminalPath}</div>
        <div className="text-codeGreen">(main)</div>
        <div className="text-codeGreen">{`>>`}</div>
      </div>
      <div className="text-codeGreen">{content}</div>
    </div>
  );
};

export default XTerminalOutput;
