import { cn } from "@/lib/utils";
import { ISteps } from "@/types";

interface IWhyUsStepsProps extends React.ComponentProps<"div"> {
    steps: ISteps[];
}

const WhyUsSteps = ({ className, steps }: IWhyUsStepsProps) => {
    return (
        <div className={cn("isolate flex flex-col md:items-center md:gap-0 gap-10", className)}>
            {steps.map(({ description, heading, image }, index) => (
                <div key={index} className="group flex md:flex-row flex-col md:items-start md:gap-8 gap-4 md:w-9/10">
                    <div className="md:w-1/2 flex items-start justify-end">
                        <figure
                            className={cn("md:w-82.5 w-full md:h-36.5", {
                                "md:hidden": index === 1,
                            })}
                        >
                            <img src={image} alt="" className="size-full object-cover" />
                        </figure>
                        <div
                            className={cn("hidden space-y-5", {
                                "md:block text-right": index === 1,
                            })}
                        >
                            <h6 className="text-2xl text-[#000F1F] font-medium">{heading}</h6>
                            <p className="text-xl text-black/60 md:leading-7.5">{description}</p>
                        </div>
                    </div>

                    <div className="relative md:w-1/2 flex items-start md:gap-8 gap-2 md:pb-10 group-last:before:hidden md:before:block before:hidden before:absolute before:bg-[url(@/assets/timeline-dash.png)] before:bg-no-repeat before:bg-size-[auto_100%] before:left-[calc(var(--index-width)/2)] before:w-[1px] before:h-full before:-translate-x-1/2 before:-z-10 md:[--index-width:calc(var(--spacing)*19)] [--index-width:calc(var(--spacing)*10)]">
                        <div className="shrink-0 size-(--index-width) grid place-content-center rounded-full bg-linear-to-b from-[#002366] to-[#0046CC]">
                            <span className="text-white md:text-2xl text-xs font-medium">{index + 1}</span>
                        </div>
                        <div
                            className={cn("flex flex-col md:gap-5 gap-3", {
                                "md:hidden": index === 1,
                            })}
                        >
                            <h6 className="text-2xl text-[#000F1F] font-medium">{heading}</h6>
                            <p className="text-xl text-black/60 md:leading-7.5">{description}</p>
                        </div>
                        <figure
                            className={cn("hidden w-82.5 h-36.5", {
                                "md:block": index === 1,
                            })}
                        >
                            <img src={image} alt="" className="size-full object-cover" />
                        </figure>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default WhyUsSteps;
