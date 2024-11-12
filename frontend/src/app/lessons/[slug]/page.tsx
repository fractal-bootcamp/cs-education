"use client";

import LessonPage from "@/components/LessonPage";
import { dummyLessons } from "@/lib/dummyLessons";
import { useParams } from "next/navigation";

const page = () => {
  const params = useParams();
  const lesson = dummyLessons.find((lesson) => lesson.id === params.slug);
  return <div>{lesson ? <LessonPage lesson={lesson} /> : <div>Lesson not found</div>}</div>;
};

export default page;
