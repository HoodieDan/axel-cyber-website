import { motion, Variants } from "motion/react";
import { Suspense } from "react";
import { useNavigate } from "react-router";
import face1 from "../assets/face1.png";
import face2 from "../assets/face2.png";
import face3 from "../assets/face3.png";
import face4 from "../assets/face4.png";
import ArrowUpRight from "./icons/ArrowUpRight";
import heroImg from "/hero-img.webp";

const itemsVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeInOut" } },
};

export default function Hero() {
    const navigate = useNavigate();

    const handleNavigation = (route: string) => {
        navigate(route);
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <section className="px-[5%] mx-auto mt-8 mb-12 sm:my-10 md:my-12 lg:my-16 flex flex-col md:flex-row justify-between items-center gap-x4 lg:gap-x8 gap-y-6">
            <div className="flex-1">
                <motion.p
                    initial="hidden"
                    animate="show"
                    variants={{
                        hidden: {},
                        show: {
                            transition: {
                                staggerChildren: 0.2,
                                delayChildren: 0.2,
                            },
                        },
                    }}
                    className="flex flex-row gap-2 justify-center md:justify-start text-[#0143c2] text-3xl md:text-[3.125rem] font-tt-hoves"
                >
                    <motion.p variants={itemsVariants} className="leading-none">
                        The
                    </motion.p>
                    <motion.p variants={itemsVariants} className="leading-none">
                        {" "}
                        AI Solution
                    </motion.p>
                    <motion.p variants={itemsVariants} className="leading-none">
                        {" "}
                        Partner
                    </motion.p>
                </motion.p>
                <motion.p
                    initial="hidden"
                    animate="show"
                    variants={{
                        hidden: {},
                        show: {
                            transition: {
                                staggerChildren: 0.2,
                                delayChildren: 0.4,
                            },
                        },
                    }}
                    className="flex gap-2 justify-center md:justify-start mb-4 md:mb-6 text-3xl md:text-[3.125rem] font-tt-hoves text-black"
                >
                    <motion.p variants={itemsVariants} className="leading-none">
                        That
                    </motion.p>
                    <motion.p variants={itemsVariants} className="leading-none">
                        Delivers
                    </motion.p>
                    <motion.p variants={itemsVariants} className="leading-none">
                        Excellence
                    </motion.p>
                </motion.p>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, transition: { duration: 0.5, delay: 0.5, ease: "easeInOut" } }}
                    className="font-normal text-center md:text-left mb-4 md:mb-6 text-base lg:text-xl text-black"
                >
                    Axel Cyber is Dedicated team of Experts from acrosss the globe
                    <br className="md:inline hidden" /> commited to building Solutions that Business Effficency
                    <br className="md:inline hidden" /> and Growth with AI
                </motion.p>
                <motion.div
                    initial="hidden"
                    animate="show"
                    variants={{
                        hidden: {},
                        show: {
                            transition: {
                                staggerChildren: 0.2,
                                delayChildren: 0.6,
                            },
                        },
                    }}
                    className="flex flex-col md:flex-row gap-4 md:gap-5 mb-4 md:mb-8 lg:mb-10"
                >
                    <motion.button
                        variants={itemsVariants}
                        onClick={() => handleNavigation("/casestudy")}
                        className="h-12.5 whitespace-nowrap py-3 lg:py-4 px-4 md:px-6 lg:px-8 3xl:px-4 text-white rounded-md text-sm bg-[linear-gradient(45deg,#0146cc,#012d82)] hover:bg-[linear-gradient(45deg,#025aff,#0146cc)] cursor-pointer leading-none transition-all duration-300 ease-linear"
                    >
                        Check our Case studies
                    </motion.button>
                    <motion.button
                        variants={itemsVariants}
                        onClick={() => handleNavigation("/contact")}
                        className="h-12.5 whitespace-nowrap py-3 lg:py-4 px-4 lg:px-6 3xl:px-3 text-black text-sm border border-[#0081f1] rounded-md flex flex-row items-center justify-center gap-1 bg-[#edf1fa] hover:opacity-70 transition-all duration-300 ease-linear cursor-pointer leading-none"
                    >
                        Discuss a Project
                        <Suspense
                            fallback={<span className="w-2 h-2 inline-block animate-pulse bg-gray-300 rounded-full" />}
                        >
                            <ArrowUpRight className="size-4" />
                        </Suspense>
                    </motion.button>
                </motion.div>
                <div className="flex flex-row items-center gap-4.5">
                    <div className="flex flex-row items-center -space-x-1 shrink-0">
                        <img className="size-6" src={face1} alt="" />
                        <img className="size-6" src={face2} alt="" />
                        <img className="size-6" src={face3} alt="" />
                        <img className="size-6" src={face4} alt="" />
                    </div>
                    <p className="text-[#4c5c75] md:text-base text-xs font-medium">
                        Join certified solutions experts by Multiple companies
                    </p>
                </div>
            </div>

            <div className="w-full md:w-141 md:h-128 h-82.5 relative">
                <motion.div
                    initial={{ opacity: 0, x: -30, y: -30 }}
                    animate={{ opacity: 1, x: 0, y: 0, transition: { duration: 0.5, delay: 1, ease: "easeInOut" } }}
                    className="absolute top-0 left-0 z-10 h-[38.5%] w-[39%] text-white font-medium bg-[linear-gradient(45deg,#0146cc,#012d82)] rounded-2xl px-3 md:px-4 lg:px-6 2xl:px-3 py-2 md:py-3 lg:py-4 2xl:py-2 justify-center flex flex-col"
                >
                    <p className="md:text-[50px] text-xl leading-none font-figtree font-medium mb-2 md:mb-3">11+</p>
                    <p className="md:text-sm text-xs leading-none">
                        Years plus of experience in solving probelms with AI and Machnice Learning Solutions
                    </p>
                </motion.div>
                <motion.img
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, transition: { duration: 0.5, delay: 0.5, ease: "easeInOut" } }}
                    className="size-full objectcover"
                    src={heroImg}
                    alt="hero image"
                    width={500}
                    height={455}
                    loading="eager"
                    fetchPriority="high"
                    style={{ willChange: "transform" }}
                />
                <motion.div
                    initial={{ opacity: 0, x: 30, y: 30 }}
                    animate={{ opacity: 1, x: 0, y: 0, transition: { duration: 0.5, delay: 1, ease: "easeInOut" } }}
                    className="absolute bottom-0 right-0 z-10 h-[38.5%] w-[39%] text-white font-medium bg-[linear-gradient(45deg,#0146cc,#012d82)] rounded-2xl px-3 md:px-4 lg:px-6 2xl:px-3 py-2 md:py-3 lg:py-4 2xl:py-2 flex flex-col justify-center items-start"
                >
                    <p className="md:text-[50px] text-xl font-figtree font-medium mb-2 md:mb-3 leading-none">5+</p>
                    <p className="md:text-sm text-xs leading-none">Continents serviced by our international team</p>
                </motion.div>
            </div>
        </section>
    );
}
