import { ScrollArea } from "@/components/ui/scroll-area";
import { ContentSectionProps } from "@/types/interfaces";

const ContentSection = ({ title, desc, children }: ContentSectionProps) => {
  return (
    <div className="flex flex-1 flex-col mt-12 lg:mt-0">
      <div className="flex-none space-y-3 w-full border-b pb-4 pt-3 mb-5">
        <h3 className="text-lg font-medium">{title}</h3>
        <p className="text-sm text-slate-400">{desc}</p>
      </div>
      <ScrollArea>
        <div className="faded-bottom -mx-4 flex-1 overflow-auto scroll-smooth px-4 md:pb-16">
          <div className="lg:max-w-xl">{children}</div>
        </div>
      </ScrollArea>
    </div>
  );
};

export default ContentSection;
