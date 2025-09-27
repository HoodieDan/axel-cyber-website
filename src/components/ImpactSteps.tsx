import { cn } from "@/lib/utils";

type ISteps = {
    image: string;
    heading: string;
    description: string;
};
interface IImpactStepsProps extends React.ComponentProps<"div"> {
    steps: ISteps[];
}

const ImpactSteps = ({ className, steps }: IImpactStepsProps) => {
    return (
        <div className={cn("isolate flex flex-col md:items-center md:gap-0 gap-10", className)}>
            {steps.map(({ description, heading, image }, index) => (
                <div
                    key={index}
                    className="group flex md:flex-row flex-col md:h-100 items-start md:gap-20 gap-4 md:w-9/10"
                >
                    <figure className="shrink-0 md:h-full h-36.5 md:w-auto w-full">
                        <img src={image} alt="" className="w-full md:h-23/25 h-full object-cover" />
                    </figure>
                    <div className="relative md:h-full flex items-start md:gap-8 gap-2 group-last:before:hidden md:before:block before:hidden before:absolute before:left-[calc(var(--index-width)/2)] before:w-[1px] before:h-full before:bg-[#948E8E] before:-z-10 md:[--index-width:calc(var(--spacing)*14)] [--index-width:calc(var(--spacing)*10)]">
                        <div className="shrink-0 size-(--index-width) grid place-content-center rounded-full bg-linear-to-b from-[#002366] to-[#0046CC]">
                            <span className="text-white md:text-2xl text-xs font-medium">{index + 1}</span>
                        </div>
                        <div className="flex flex-col md:gap-5 gap-3">
                            <h6 className="md:text-4xl text-xl text-[#000F1F] font-medium">{heading}</h6>
                            <p className="md:text-2xl text-sm text-black/60 md:leading-7.5">{description}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ImpactSteps;
