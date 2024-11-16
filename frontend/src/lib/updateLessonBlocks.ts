import { Lesson } from "@/types/types";

export const updateLessonBlocks = (lesson: Lesson, blockIndex: number): Lesson => {
  const newLesson: Lesson = {
    ...lesson,
    lessonBody: lesson.lessonBody.map((block, index) => {
      if (index === blockIndex) {
        return { ...block, state: "past" };
      } else if (index === blockIndex + 1) {
        return { ...block, state: "current" };
      } else {
        return block;
      }
    }),
  };
  return newLesson;
};
