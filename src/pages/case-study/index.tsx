import AiAgentSolutions from "@/assets/ai-agent-solutions.png";
import ai1 from "@/assets/ai1.png";
import MachineLearningSolutions from "@/assets/ai1.webp";
import rocket from "@/assets/rocket.png";
import solutionImg from "@/assets/solution-img.png";
import solutionImg2 from "@/assets/solution-mobile-hero-img.png";
import AiServices from "@/components/AiServices";
import Cta from "@/components/Cta";
import { ourProjects } from "@/lib/data";
import { IProject } from "@/types";
import { lazy, Suspense, useRef, useState } from "react";
import { useNavigate } from "react-router";

interface IProjectProps extends React.ComponentProps<"div"> {
    project: IProject;
}

const IoIosArrowDroprightCircle = lazy(() =>
    import("lucide-react").then((module) => ({ default: module.ChevronRight })),
);
const HiArrowNarrowRight = lazy(() => import("lucide-react").then((module) => ({ default: module.MoveRight })));

export default function CaseStudy() {
    const navigate = useNavigate();
    const paraRef = useRef<HTMLParagraphElement>(null);
    const [index, setIndex] = useState(0);
    const solution = [
        {
            title: "AI Chatbots Solutions",
            image: ai1,
            icon: rocket,
            list: [
                "Automate 24/7 customer support without increasing headcount",
                "Reduce response time and improve customer satisfaction",
                "Scale support effortlessly during peak times or campaignes",
                "Handle repetitive inquires, freeing up human agents",
            ],
        },
        {
            title: "AI Agent Solutions",
            image: AiAgentSolutions,
            icon: rocket,
            list: [
                "Delegate complex tasks to autonous systems for efficiency",
                "Streamline internal wokrflows with minimal human intervention",
                "Reduce operational costs while maintaining high performance",
            ],
        },
        {
            title: "Machine Learning Solutions",
            image: MachineLearningSolutions,
            icon: rocket,
            list: [
                "Unlock actionable insights form large datasets",
                "Prdict customer behaviour for smarter marketing and sales",
                "Automate classification, recommendations, and forecasting",
                "Gain a competitive edge with data-driven decision making",
            ],
        },
    ];

    const Project = ({ project: { image, name, tags, slug } }: IProjectProps) => {
        return (
            <div className="flex flex-col gap-4">
                <div className="relative">
                    <img
                        className="size-full object-cover"
                        src={image}
                        alt="project image"
                        loading="lazy"
                        width={416}
                        height={525}
                    />
                    <Suspense
                        fallback={<span className="size-5 inline-block animate-pulse bg-gray-300 rounded-full" />}
                    >
                        <div
                            onClick={() => {
                                navigate("/case-study/" + slug);
                                window.scrollTo({
                                    top: 0,
                                    behavior: "smooth",
                                });
                            }}
                            className="absolute bottom-0 right-0 flex justify-center items-center w-17 h-14.5 bg-[#080f44] rounded-full"
                        >
                            <IoIosArrowDroprightCircle className="size-12 sm:size-20 lg:size-10 cursor-pointer text-white" />
                        </div>
                    </Suspense>
                </div>

                <div className="flex flex-col gap-2">
                    <h5 className="text-2xl font-semibold">{name}</h5>
                    <div className="flex items-center gap-2">
                        {tags.map((tag, index) => (
                            <div
                                key={index}
                                className="flex items-center text-[#026AA2] bg-[#F0F9FF] h-6 px-2.5 py-0.5 rounded-2xl"
                            >
                                <span className="font-medium">{tag}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    };

    return (
        <main>
            <section className="bg-white px-[5%] lg:pt-24 pt-12 pb-12 flex flex-col md:gap-12 gap-4">
                <p className="text-center md:text-5xl text-3xl font-tt-hoves font-medium w-auto md:leading-15">
                    We are commited to creating the future of Artificial
                    <br className="md:inline hidden" /> Intelligence and Human Synergy
                </p>
                <p className="mb-4 block md:hidden text-base mt-4">
                    View some of the great works we've done for our amazing clients around the world, with a great
                    design story
                </p>
                <div className="relative">
                    <img
                        className="size-full object-cover hidden md:block"
                        src={solutionImg}
                        alt="solution image"
                        loading="eager"
                        fetchPriority="high"
                        width={680}
                        height={640}
                    />
                    <img
                        className="size-full object-cover md:hidden block"
                        src={solutionImg2}
                        alt="solution image"
                        loading="eager"
                        fetchPriority="high"
                        width={1280}
                        height={345}
                    />
                    <p className="hidden md:block text-xl absolute bottom-0 translate-y-3/10 left-[28.5%] w-3/10">
                        View some of the great works we've done for our amazing clients around the world, with a great
                        design story
                    </p>
                </div>
            </section>

            <section className="bg-[#fafafa] px-[5%] lg:pt-24 pt-12 pb-12">
                <div className="flex justify-center mb-4 sm:mb-6 md:mb-8 lg:mb-10">
                    <div className="flex rounded-lg flex-row p-2 sm:px-4 gap-2 items-center border-2 border-[#e1e5e7]">
                        <img
                            className="shrink-0"
                            src={"/stars.png"}
                            alt="stars"
                            loading="lazy"
                            width={16}
                            height={16}
                        />
                        <p className="text-sm">CAPABILITIES</p>
                    </div>
                </div>
                <p
                    ref={paraRef}
                    className="text-center md:text-5xl text-3xl leading-[120%] font-medium font-tt-hoves mx-auto mb-4 sm:mb-6 md:mb-8 lg:mb-10"
                >
                    Here's how Axel Cyber can
                    <br /> solve your company's Problems
                </p>
                <AiServices
                    title={solution[index].title}
                    image={solution[index].image}
                    icon={solution[index].icon}
                    list={solution[index].list}
                />
                <div className="overflow-auto mt-6 md:mt-8 lg:mt-10 flex flex-row gap-4 justify-start sm:justify-center items-center">
                    <div
                        className="shrink-0 group w-auto cursor-pointer"
                        onClick={() => {
                            paraRef.current?.scrollIntoView({ behavior: "smooth" });
                            if (index == 0) return;
                            setIndex(0);
                        }}
                    >
                        <div className="relative rounded-full  bg-[#c1c1c1] w-full h-1 mb-1">
                            <div
                                className={`absolute rounded-full ${
                                    index == 0 ? "w-full " : "w-[0px]"
                                } group-hover:w-full h-full bg-[#3084da] top-0 left-0 transition-all duration-300 ease-linear`}
                            ></div>
                        </div>
                        <p className="text-xl text-[#4c5c75]">AI Chatbots Solutions</p>
                    </div>
                    <div
                        className="shrink-0 group w-auto cursor-pointer"
                        onClick={() => {
                            paraRef.current?.scrollIntoView({ behavior: "smooth" });
                            if (index == 1) return;
                            setIndex(1);
                        }}
                    >
                        <div className="relative rounded-full bg-[#c1c1c1] w-full h-1 mb-1">
                            <div
                                className={`absolute rounded-full ${
                                    index == 1 ? "w-full" : "w-[0px]"
                                } group-hover:w-full h-full bg-[#3084da] top-0 left-0 transition-all duration-300 ease-linear`}
                            ></div>
                        </div>
                        <p className="text-xl text-[#4c5c75]">AI Agents Solutions</p>
                    </div>
                    <div
                        className="shrink-0 group w-auto cursor-pointer"
                        onClick={() => {
                            paraRef.current?.scrollIntoView({ behavior: "smooth" });
                            if (index == 2) return;
                            setIndex(2);
                        }}
                    >
                        <div className="relative rounded-full bg-[#c1c1c1] w-full h-1 mb-1">
                            <div
                                className={`absolute rounded-full ${
                                    index == 2 ? "w-full" : "w-[0px]"
                                } group-hover:w-full h-full bg-[#3084da] top-0 left-0 transition-all duration-300 ease-linear`}
                            ></div>
                        </div>
                        <p className="text-xl text-[#4c5c75]">Machine Learning Solutions</p>
                    </div>
                </div>
            </section>

            <section className="bg-white px-[5%] lg:pt-24 pt-12 pb-12">
                <div className="flex justify-center mb-4 sm:mb-6 md:mb-8 lg:mb-10">
                    <div className="flex rounded-lg flex-row p-2 gap-2 items-center border-2 border-[#e1e5e7]">
                        <img
                            className="shrink-0"
                            src={"/stars.png"}
                            alt="stars"
                            loading="lazy"
                            width={16}
                            height={16}
                        />
                        <p className="text-sm leading-none">OUR PROJECTS</p>
                    </div>
                </div>
                <p className="text-center md:text-5xl text-3xl leading-[120%] font-medium font-tt-hoves mx-auto mb-8 md:mb-16">
                    The Best AI solutions in
                    <br /> Record Time
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
                    {ourProjects.map((project, index) => (
                        <Project key={index} project={project} />
                    ))}
                </div>
            </section>

            <Cta
                title={
                    <span>
                        Secure your Company's future by
                        <br /> Partnering with Axel Cyber
                    </span>
                }
                action="Book a call"
                className="px-[5%]"
            >
                <Suspense fallback={<span className="w-5 h-5 inline-block animate-pulse bg-gray-300 rounded-full" />}>
                    <HiArrowNarrowRight className="inline size-4" />
                </Suspense>
            </Cta>
        </main>
    );
}
