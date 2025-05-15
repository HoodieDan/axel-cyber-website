import Rocket from "@/components/icons/Rocket";
import SectionBadge from "@/components/SectionBadge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";
import { useCallback, useState } from "react";
import { capabilities } from "./data";

const WCapabilities = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleIndexChange = useCallback((index: number) => {
        setActiveIndex(index);
    }, []);

    return (
        <section className="flex flex-col md:gap-y-14 gap-y-10 padding-x md:py-[5.5%] py-[10vh] bg-gray-1">
            <div className="md:space-y-8 space-y-5">
                <SectionBadge text="Capabilities" />
                <h2 className="font-medium text-center">
                    Here's how Axel Cyber can
                    <br className="md:block hidden" /> solve your company's Problems
                </h2>
            </div>

            <div className="flex flex-col gap-12">
                <div className="flex lg:flex-row flex-col lg:items-center items-start lg:justify-between md:gap-0 gap-6 border border-gray-2 py-5 pr-5 lg:pl-15 pl-5 rounded-2xl shadow">
                    <div className="flex flex-col">
                        <div className="size-18 bg-[#F4F6F8] grid place-content-center rounded-full lg:mb-8 mb-6">
                            <Rocket />
                        </div>
                        <h3 className="lg:mb-5 font-normal">{capabilities[activeIndex].title}</h3>
                        <div className="lg:block hidden">
                            <ul className="list-disc pl-4 text-dark-blue marker:text-base">
                                {capabilities[activeIndex].bulletPoints.map((point, index) => (
                                    <li key={point + index} className="text-lg font-normal">
                                        {point}
                                    </li>
                                ))}
                            </ul>
                            <Button className="bg-[linear-gradient(45deg,#0146cc,#012d82)] w-fit h-10 mt-12">
                                Reach Out <ChevronRight className="size-4" />
                            </Button>
                        </div>
                    </div>
                    <img src={capabilities[activeIndex].image} alt={capabilities[activeIndex].title} />
                    <div className="lg:hidden block">
                        <ul className="list-disc pl-2 text-dark-blue marker:text-base">
                            {capabilities[activeIndex].bulletPoints.map((point, index) => (
                                <li key={point + index} className="font-normal">
                                    {point}
                                </li>
                            ))}
                        </ul>
                        <Button className="bg-[linear-gradient(45deg,#0146cc,#012d82)] w-fit h-10 mt-8">
                            Reach Out <ChevronRight className="size-4" />
                        </Button>
                    </div>
                </div>
                <div className="flex items-center lg:justify-center gap-6 whitespace-nowrap overflow-x-auto hide-scrollbar">
                    {capabilities.map(({ title }, index) => (
                        <div
                            key={title + index}
                            className="flex flex-col items-center cursor-pointer"
                            onClick={() => handleIndexChange(index)}
                        >
                            <div
                                className={cn("h-0.5 w-full bg-[#C1C1C1]", {
                                    "bg-light-blue": activeIndex === index,
                                })}
                            />
                            <span className="text-[#4C5C75] text-lg font-semibold">{title}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WCapabilities;
