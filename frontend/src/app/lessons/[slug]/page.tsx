"use client";

import XBlockExecutable from "@/components/XBlockExecutable";
import XBlockText from "@/components/XBlockText";
import { dummyLessons } from "@/lib/dummyLessons";
import { useParams } from "next/navigation";

import { submitCode } from "@/lib/submitCode";

const page = () => {
  const params = useParams();
  const lesson = dummyLessons.find((lesson) => lesson.id === params.slug);

  return (
    <div>
      {lesson ? (
        <div>
          <p className="text-2xl font-bold text-center">{lesson.title}</p>
          <div className="flex flex-col space-y-4 p-10">
            {lesson.lessonBody.map((block, key) => {
              if (block.type === "text") {
                return <XBlockText key={key} text={block.content} />;
                // return <LessonBlockText key={key} block={block} />;
              } else if (block.type === "executable") {
                // return <LessonBlockExecutable key={key} block={block} />;
                return (
                  <XBlockExecutable
                    key={key}
                    text={block.content}
                    placeholder=""
                    answer={block.answer}
                    onSubmit={submitCode}
                  />
                );
              }
            })}
          </div>
        </div>
      ) : (
        <div>Lesson not found</div>
      )}
    </div>
  );
};

export default page;
