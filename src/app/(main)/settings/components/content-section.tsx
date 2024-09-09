import { ContentSectionProps } from "@/types/interfaces";

const ContentSection = ({ title, desc, children }: ContentSectionProps) => {
  return (
    <div className="flex flex-1 flex-col">
      <div className="flex-none">
        <h3 className="text-lg font-medium">{title}</h3>
        <p className="text-sm text-slate-400">{desc}</p>
      </div>
      <hr className="my-4 " />
      <div className="faded-bottom -mx-4 flex-1 overflow-auto scroll-smooth px-4 md:pb-16">
        <div className="lg:max-w-xl">{children}</div>
      </div>
    </div>
  );
};

export default ContentSection;
