import { Lesson } from "@/types/types";
import LessonBlockExecutable from "./LessonBlockExecutable";
import LessonBlockText from "./LessonBlockText";

interface LessonPageProps {
  lesson: Lesson;
}

const LessonPage = ({ lesson }: LessonPageProps) => {
  return (
    <div>
      <h1>{lesson.title}</h1>
      <div>
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
