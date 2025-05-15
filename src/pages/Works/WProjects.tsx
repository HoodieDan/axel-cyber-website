import SectionBadge from "@/components/SectionBadge";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { projectsSrc } from "./data";

const WProjects = () => {
    return (
        <section className="flex flex-col md:gap-y-20 gap-y-10 padding-x md:py-[5.5%] py-[10vh]">
            <div className="md:space-y-8 space-y-5">
                <SectionBadge text="OUR PROJECTS" />
                <h2 className="font-medium text-center">
                    The best solutions for the
                    <br className="md:block hidden" /> best Companies
                </h2>
            </div>
            <div className="grid md:grid-cols-3 md:gap-10 gap-6">
                {projectsSrc.map(({ src, to }, i) => (
                    <div className="flex relative">
                        <img key={src + i} src={src} alt="" className="object-fill size-full" />
                        <Link to={to}>
                            <div className="absolute bottom-0 right-0 bg-gray-4 hover:bg-dark-blue-2 rounded-full size-16 transition flex items-center justify-center">
                                <ChevronRight className="size-8 stroke-2 text-white" />
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default WProjects;
