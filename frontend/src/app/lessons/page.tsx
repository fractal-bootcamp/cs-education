import XLessonTab from "@/components/XLessonTab";
import { dummyLessons } from "@/lib/dummyLessons";
import React from "react";

const Page = () => {
  return (
    <div className="p-2 flex flex-col gap-4">
      {dummyLessons.map((lesson, key) => (
        <XLessonTab key={key} title={lesson.title} path={`/lessons/${lesson.id}`} />
      ))}
    </div>
  );
};

export default Page;
