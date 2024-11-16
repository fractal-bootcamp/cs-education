"use client";

import XBlockExecutable from "@/components/XBlockExecutable";
import XBlockText from "@/components/XBlockText";
import { dummyLessons } from "@/lib/dummyLessons";
import { useParams } from "next/navigation";

import { submitCode } from "@/lib/submitCode";
import XPageHeader from "@/components/XPageHeader";
import { storeTerminalOutput } from "@/stores/storeTerminalOutput";
import XTerminal from "@/components/XTerminal";

const page = () => {
  const params = useParams();
  const lesson = dummyLessons.find((lesson) => lesson.id === params.slug);

  const { terminalOutputs, createTerminalOutput } = storeTerminalOutput();

  console.log(terminalOutputs);

  const handleSubmitCode = async (code: string, answer: any) => {
    const { codeResult } = await submitCode(code, answer);
    const codeResultStringified = codeResult.toString();
    createTerminalOutput({
      id: new Date().toISOString(),
      content: codeResultStringified,
      createdDate: new Date(),
      terminalPath: "/arrays/lesson-1",
    });
  };

  return (
    <div>
      {lesson ? (
        <div>
          <XPageHeader title={lesson.title} />
          <div className="flex flex-col space-y-4 px-10">
            {lesson.lessonBody.map((block, key) => {
              if (block.type === "text") {
                return <XBlockText key={key} text={block.content} />;
              } else if (block.type === "executable") {
                return (
                  <XBlockExecutable
                    key={key}
                    text={block.content}
                    placeholder=""
                    answer={block.answer}
                    onSubmit={handleSubmitCode}
                  />
                );
              }
            })}
          </div>
          <div>
            <XTerminal terminalOutputs={terminalOutputs} />
          </div>
        </div>
      ) : (
        <div>Lesson not found</div>
      )}
    </div>
  );
};

export default page;
