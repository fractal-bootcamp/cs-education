import { Lesson } from "@/types/types";
import LessonBlockExecutable from "./LessonBlockExecutable";
import LessonBlockText from "./LessonBlockText";

interface LessonPageProps {
  lesson: Lesson;
}

const LessonPage = ({ lesson }: LessonPageProps) => {
  return (
    <div>
      <p className="text-2xl font-bold text-center">{lesson.title}</p>
      <div className="flex flex-col gap-2">
        {lesson.lessonBody.map((block, key) => {
          if (block.type === "text") {
            return <LessonBlockText key={key} block={block} />;
          } else if (block.type === "executable") {
            return <LessonBlockExecutable key={key} block={block} />;
          }
        })}
      </div>
    </div>
  );
};

export default LessonPage;
