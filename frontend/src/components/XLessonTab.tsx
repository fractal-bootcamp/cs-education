interface XLessonTabProps {
  title: string;
}

const XLessonTab = ({ title }: XLessonTabProps) => {
  return <div>{title}</div>;
};

export default XLessonTab;
