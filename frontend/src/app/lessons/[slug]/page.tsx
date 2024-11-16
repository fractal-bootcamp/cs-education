"use client";

import XBlockExecutable from "@/components/XBlockExecutable";
import XBlockText from "@/components/XBlockText";
import { useParams } from "next/navigation";

import { submitCode } from "@/lib/submitCode";
import XPageHeader from "@/components/XPageHeader";
import { storeTerminalOutput } from "@/stores/storeTerminalOutput";
import XTerminal from "@/components/XTerminal";
import { storeLesson } from "@/stores/storeLesson";
import { updateLessonBlocks } from "@/lib/updateLessonBlocks";
import { Lesson } from "@/types/types";

const page = () => {
  const params = useParams();
  const { lessons, updateLesson } = storeLesson();

  const lesson = lessons.find((lesson) => lesson.id === params.slug);

  if (!lesson) {
    return <div></div>;
  }

  const { terminalOutputs, createTerminalOutput } = storeTerminalOutput();

  console.log(terminalOutputs);

  const handleSubmitCode = async (code: string, answer: any, blockIndex: number) => {
    const { codeResult, codeEvaluation } = await submitCode(code, answer);
    const codeResultStringified = codeResult.toString();
    createTerminalOutput({
      id: new Date().toISOString(),
      content: codeResultStringified,
      createdDate: new Date(),
      terminalPath: "/arrays/lesson-1",
    });
    if (codeEvaluation) {
      const newLesson: Lesson = updateLessonBlocks(lesson, blockIndex);
      updateLesson(newLesson, lesson.id);
    }
  };

  return (
    <div>
      {lesson ? (
        <div>
          <XPageHeader title={lesson.title} />
          <div className="flex flex-col space-y-4 px-10 pb-56">
            {lesson.lessonBody.map((block, key) => {
              if (block.type === "text") {
                return <XBlockText key={key} text={block.content} state={block.state} />;
              } else if (block.type === "executable") {
                return (
                  <XBlockExecutable
                    key={key}
                    blockIndex={key}
                    text={block.content}
                    state={block.state}
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
