interface XPageHeaderProps {
  title: string;
}

const XPageHeader = ({ title }: XPageHeaderProps) => {
  return <div className="w-full text-center p-4 font-mono font-bold">{title}</div>;
};

export default XPageHeader;
