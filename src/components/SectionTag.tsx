import { cn } from "@/lib/utils";
import Sparkle from "./icons/Sparkle";

interface IServiceTag extends React.ComponentProps<"div"> {
    tag: string;
    Icon?: React.ElementType;
}

const SectionTag = ({ className, Icon = Sparkle, tag }: IServiceTag) => {
    return (
        <div
            className={cn(
                "flex items-center gap-2.5 mx-auto p-2.5 rounded-md border border-[#E1E5E7] w-fit uppercase",
                className,
            )}
        >
            <Icon className="size-4 text-light-blue stroke-1" />
            <p className="text-sm text-[#4C5C75] font-medium">{tag}</p>
        </div>
    );
};

export default SectionTag;
