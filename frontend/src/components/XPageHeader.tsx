interface XPageHeaderProps {
  title: string;
}

const XPageHeader = ({ title }: XPageHeaderProps) => {
  return <div>{title}</div>;
};

export default XPageHeader;
