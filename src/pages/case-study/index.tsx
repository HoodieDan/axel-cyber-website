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
import { AnimatePresence, motion } from "motion/react";
import { lazy, Suspense, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router";

interface IProjectProps extends React.ComponentProps<"div"> {
    project: IProject;
}

const IoIosArrowDroprightCircle = lazy(() =>
    import("lucide-react").then((module) => ({ default: module.ChevronRight })),
);
const HiArrowNarrowRight = lazy(() => import("lucide-react").then((module) => ({ default: module.MoveRight })));

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

export default function CaseStudy() {
    const navigate = useNavigate();
    const paraRef = useRef<HTMLParagraphElement>(null);
    const [index, setIndex] = useState(0);
    const [animKey, setAnimKey] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % solution.length);
        }, 10000); // 10 seconds

        return () => clearInterval(intervalId); // Cleanup on component unmount
    }, []);

    const Project = ({ project: { image, name, tags, slug } }: IProjectProps) => {
        return (
            <div className="flex flex-col gap-4">
                <div
                    className="relative cursor-pointer"
                    onClick={() => {
                        navigate("/case-study/" + slug);
                        window.scrollTo({
                            top: 0,
                            behavior: "smooth",
                        });
                    }}
                >
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
                        <div className="absolute bottom-0 right-0 flex justify-center items-center w-17 h-14.5 bg-[#080f44] rounded-full">
                            <IoIosArrowDroprightCircle className="size-12 sm:size-20 lg:size-10 text-white" />
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
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="text-center md:text-5xl text-3xl font-tt-hoves font-medium w-auto md:leading-15"
                >
                    We are commited to creating the future of Artificial
                    <br className="md:inline hidden" /> Intelligence and Human Synergy
                </motion.p>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                    className="mb-4 block md:hidden text-base mt-4"
                >
                    View some of the great works we've done for our amazing clients around the world, with a great
                    design story
                </motion.p>
                <div className="relative">
                    <motion.img
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                        className="size-full object-cover hidden md:block"
                        src={solutionImg}
                        alt="solution image"
                        loading="eager"
                        fetchPriority="high"
                        width={680}
                        height={640}
                    />
                    <motion.img
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
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
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="flex justify-center mb-4 sm:mb-6 md:mb-8 lg:mb-10"
                >
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
                </motion.div>
                <motion.p
                    ref={paraRef}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-center md:text-5xl text-3xl leading-[120%] font-medium font-tt-hoves mx-auto mb-4 sm:mb-6 md:mb-8 lg:mb-10"
                >
                    Here's how Axel Cyber can
                    <br /> solve your company's Problems
                </motion.p>
                <AnimatePresence mode="wait">
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.5 }}
                    >
                        <AiServices
                            title={solution[index].title}
                            image={solution[index].image}
                            icon={solution[index].icon}
                            list={solution[index].list}
                        />
                    </motion.div>
                </AnimatePresence>
                <div className="overflow-auto mt-6 md:mt-8 lg:mt-10 flex flex-row gap-4 justify-start sm:justify-center items-center">
                    <div
                        className="shrink-0 group w-auto cursor-pointer"
                        onClick={() => {
                            paraRef.current?.scrollIntoView({ behavior: "smooth" });
                            if (index == 0) return;
                            setIndex(0);
                            setAnimKey((k) => k + 1);
                        }}
                    >
                        <div className="relative rounded-full  bg-[#c1c1c1] w-full h-1 mb-1 progress-track">
                            <div
                                className={`progress-fill ${
                                    index > 0 ? "full" : index === 0 ? `animate animate-${animKey}` : "empty"
                                }`}
                            />
                        </div>
                        <p className="text-xl text-[#4c5c75]">AI Chatbots Solutions</p>
                    </div>
                    <div
                        className="shrink-0 group w-auto cursor-pointer"
                        onClick={() => {
                            paraRef.current?.scrollIntoView({ behavior: "smooth" });
                            if (index == 1) return;
                            setIndex(1);
                            setAnimKey((k) => k + 1);
                        }}
                    >
                        <div className="relative rounded-full bg-[#c1c1c1] w-full h-1 mb-1">
                            <div
                                className={`progress-fill ${
                                    index > 1 ? "full" : index === 1 ? `animate animate-${animKey}` : "empty"
                                }`}
                            />
                        </div>
                        <p className="text-xl text-[#4c5c75]">AI Agents Solutions</p>
                    </div>
                    <div
                        className="shrink-0 group w-auto cursor-pointer"
                        onClick={() => {
                            paraRef.current?.scrollIntoView({ behavior: "smooth" });
                            if (index == 2) return;
                            setIndex(2);
                            setAnimKey((k) => k + 1);
                        }}
                    >
                        <div className="relative rounded-full bg-[#c1c1c1] w-full h-1 mb-1">
                            <div className={`progress-fill ${index === 2 ? `animate animate-${animKey}` : "empty"}`} />
                        </div>
                        <p className="text-xl text-[#4c5c75]">Machine Learning Solutions</p>
                    </div>
                </div>
            </section>

            <section className="bg-white px-[5%] lg:pt-24 pt-12 pb-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="flex justify-center mb-4 sm:mb-6 md:mb-8 lg:mb-10"
                >
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
                </motion.div>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-center md:text-5xl text-3xl leading-[120%] font-medium font-tt-hoves mx-auto mb-8 md:mb-16"
                >
                    The Best AI solutions in
                    <br /> Record Time
                </motion.p>
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={{
                        visible: {
                            transition: {
                                staggerChildren: 0.2,
                            },
                        },
                    }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10"
                >
                    {ourProjects.map((project, index) => (
                        <motion.div
                            key={index}
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
                            }}
                        >
                            <Project project={project} />
                        </motion.div>
                    ))}
                </motion.div>
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
