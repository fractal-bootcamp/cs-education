import { dummyLessons } from "@/lib/dummyLessons";
import { Lesson, LessonBlock } from "@/types/types";
import { create } from "zustand";

interface StoreLessonState {
  lessons: Lesson[];
  updateLessons: (newLessons: Lesson[]) => void;
  updateLesson: (newLesson: Lesson, lessonId: string) => void;
  updateBlock: (newBlock: LessonBlock, lessonId: string, blockId: string) => void;
}

export const storeLesson = create<StoreLessonState>((set) => ({
  lessons: dummyLessons,
  updateLesson: (newLesson: Lesson, lessonId: string) =>
    set((state) => ({
      lessons: state.lessons.map((les) => {
        if (les.id === lessonId) {
          return newLesson;
        } else {
          return les;
        }
      }),
    })),
  updateLessons: (newLessons: Lesson[]) => set(() => ({ lessons: [...newLessons] })),
  updateBlock: (newBlock: LessonBlock, lessonId: string, blockId: string) =>
    set((state) => ({
      lessons: state.lessons.map((lesson) => {
        if (lessonId === lesson.id) {
          return {
            ...lesson,
            lessonBody: lesson.lessonBody.map((b) => {
              if (b.id === blockId) {
                return { ...newBlock };
              } else {
                return b;
              }
            }),
          };
        } else {
          return lesson;
        }
      }),
    })),
}));
