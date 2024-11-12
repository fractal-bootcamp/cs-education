import LessonTab from "@/components/LessonTab";
import { dummyLessons } from "@/lib/dummyLessons";
import React from "react";

const Page = () => {
  return (
    <div className="p-2 flex flex-col gap-4">
      {dummyLessons.map((lesson) => (
        <LessonTab lesson={lesson} />
      ))}
    </div>
  );
};

export default Page;
