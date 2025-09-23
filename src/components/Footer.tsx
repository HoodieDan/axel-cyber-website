import { motion } from "motion/react";
import { Suspense } from "react";
import { useNavigate } from "react-router-dom";
import ArrowDownRight from "./icons/ArrowDownRight";
import Envelope from "./icons/Envelope";
import Instagram from "./icons/Instagram";
import LinkedIn from "./icons/LinkedIn";

export default function Footer() {
    const navigate = useNavigate();

    const handleNavigation = (route: string) => {
        navigate(route);
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };
    return (
        <motion.footer
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, ease: "easeInOut" }}
            viewport={{ once: true }}
            className="px-[5%] mx-auto py-10 lg:py-12 w-full"
        >
            <div className="relative flex flex-row justify-between border-b-2 border-b-[#3084da] mb-8">
                <p className="text-2xl md:text-5xl font-medium font-tt-hoves">
                    Let's connects and
                    <br /> work together
                </p>
                <div className="h-[125px] md:h-[150px] lg:h-[200px] 2xl:h-[300px] w-[125px] md:w-[150px] lg:w-[200px] 2xl:w-[400px]">
                    <div className="relative h-full w-full">
                        <Suspense
                            fallback={<span className="w-5 h-5 inline-block animate-pulse bg-gray-300 rounded-full" />}
                        >
                            <ArrowDownRight className="absolute md:top-0 top-4 left-0 -translate-x-full md:size-18.5 size-6 stroke-5" />
                        </Suspense>
                        <div
                            onClick={() => handleNavigation("/contact")}
                            className="cursor-pointer px-4 absolute bottom-0 right-0 translate-y-1/2 md:size-40.5 size-26 text-center rounded-full bg-[#052377] hover:bg-white active:bg-white text-white hover:text-[#052377] active:text-[#052377] active:border-2 hover:border-2 hover:border-[#052377] active:border-[#052377] flex justify-center items-center transition-colors duration-300 ease-in-out"
                        >
                            <p className="text-sm md:text-xl font-semibold leading-6">
                                Reach out
                                <br /> to us
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
                <a
                    href="mailto:info@axelcyber.com"
                    className="hover:opacity-85 active:opacity-85 px-6 py-2 rounded-xl flex flex-row items-center justify-center gap-2 border-[1.5px] text-[#404040] border-[#404040] transition-opacity duration-300 ease-in-out cursor-pointer"
                >
                    <Suspense
                        fallback={<span className="w-5 h-5 inline-block animate-pulse bg-gray-300 rounded-full" />}
                    >
                        <Envelope className="size-5" />
                    </Suspense>
                    <p>info@axelcyber.com</p>
                </a>
                <a target="_blank" href="https://www.instagram.com/axelcyberltd" rel="noopener">
                    <div className="hover:opacity-85 active:opacity-85 px-6 py-2 rounded-xl flex flex-row items-center justify-center gap-2 border-[1.5px] text-[#404040] border-[#404040] transition-opacity duration-300 ease-in-out cursor-pointer">
                        <Suspense
                            fallback={<span className="w-5 h-5 inline-block animate-pulse bg-gray-300 rounded-full" />}
                        >
                            <Instagram aria-hidden="true" focusable="false" className="size-5" />
                        </Suspense>
                        <p>axelcyberltd</p>
                    </div>
                </a>
                <a target="_blank" href="https://www.twitter.com/axelcyberltd" rel="noopener">
                    <div className="hover:opacity-85 active:opacity-85 px-6 py-2 rounded-xl flex flex-row items-center justify-center gap-2 border-[1.5px] text-[#404040] border-[#404040] transition-opacity duration-300 ease-in-out cursor-pointer">
                        <Suspense
                            fallback={<span className="w-5 h-5 inline-block animate-pulse bg-gray-300 rounded-full" />}
                        >
                            <LinkedIn aria-hidden="true" focusable="false" className="size-5" />
                        </Suspense>
                        <p>lexxadesigns</p>
                    </div>
                </a>
            </div>
        </motion.footer>
    );
}
