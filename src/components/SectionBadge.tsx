import { cn } from "@/lib/utils";
import { Sparkle } from "lucide-react";
import { HTMLAttributes } from "react";

interface ISectionBadgeProps extends HTMLAttributes<HTMLDivElement> {
    text: string;
}

const SectionBadge = ({ className, text }: ISectionBadgeProps) => {
    return (
        <div
            className={cn(
                "flex items-center gap-x-1 mx-auto py-1 px-2 rounded-md border border-gray-2 w-fit",
                className,
            )}
        >
            <Sparkle className="size-4 text-light-blue stroke-1" />
            <p className="uppercase">{text}</p>
        </div>
    );
};

export default SectionBadge;
