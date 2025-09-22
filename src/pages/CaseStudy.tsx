import HeadOfClaims from "@/assets/head-of-claims.png";
import Cta from "@/components/Cta";
import { Button } from "@/components/ui/button";
import { ourProjects } from "@/lib/data";
import { cn } from "@/lib/utils";
import { MoveUpRight } from "lucide-react";
import { lazy, Suspense, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const HiArrowNarrowRight = lazy(() => import("lucide-react").then((module) => ({ default: module.MoveUpRight })));

export default function CaseStudy() {
    const { caseSlug } = useParams();
    const navigate = useNavigate();
    const project = ourProjects.find((p) => p.slug === caseSlug);

    useEffect(() => {
        if (!project) {
            navigate("/case-study");
        }
    }, [project, navigate]);

    if (!project) {
        return null;
    }

    return (
        <main className="lg:px-10 px-4">
            <section className="flex flex-col gap-14 py-10">
                <div className="grid lg:grid-cols-2 grid-cols-1 gap-10 items-center">
                    <div className="space-y-2">
                        <h2 className="lg:text-5xl text-2xl text-[#052377] font-semibold uppercase">{project.name}</h2>
                        <p className="lg:text-2xl text-sm">{project.description}</p>
                    </div>
                    <div>
                        <h3 className="lg:text-[2.75rem] text-base text-[#0C28D2] leading-[140%] font-semibold lg:text-left text-center">
                            THE CHALLENGE AND PROCESS INVOLVED IN CREATING THE SOLUTION
                        </h3>
                    </div>
                </div>

                <div className="grid lg:grid-cols-2 grid-cols-1 gap-10 items-center">
                    <div
                        className={cn("grid grid-cols-2 gap-2 rounded-2xl overflow-hidden", {
                            "grid-cols-1": project.layout === "tablet",
                        })}
                    >
                        {project.showcase.map((image, index) => (
                            <figure key={index} className={cn({ "first:col-span-2": project.layout === "desktop" })}>
                                <img src={image} alt="" className="size-full" />
                            </figure>
                        ))}
                    </div>
                    <div className="flex flex-col gap-2">
                        {project.process.map(({ Icon, description, name }, index) => (
                            <div
                                key={name + index}
                                className="flex items-start lg:gap-10 gap-6 bg-linear-to-b from-0% from-[#002366] to-100% to-[#0046CC] text-white rounded-2xl lg:px-8 lg:py-6 p-4"
                            >
                                <div className="lg:h-9.5 h-5 lg:px-4 px-2 lg:py-2.5 py-1.5 flex items-center gap-2.5 bg-white rounded-3xl text-black">
                                    <span className="lg:text-base text-[0.625rem] font-medium">{name}</span>
                                    <Icon className="lg:size-4 size-2" />
                                </div>
                                <p className="lg:text-base text-[0.625rem] font-medium">{description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="grid lg:grid-cols-2 grid-cols-1 gap-10 items-start">
                    <div className="flex flex-col gap-2">
                        <h3 className="lg:text-[2.5rem] text-2xl text-[#0C28D2] font-semibold">Outcomes</h3>
                        <p className="lg:text-2xl text-base">{project.outcomes}</p>
                        <div className="flex items-center gap-0.5 mt-4">
                            <Button
                                variant="outline"
                                className="h-10 rounded-full border-[#0C28D2] text-[#0C28D2] hover:text-[#0C28D2]"
                            >
                                Learn More
                            </Button>
                            <Button
                                variant="outline"
                                className="h-10 rounded-full border-[#0C28D2] text-[#0C28D2] hover:text-[#0C28D2]"
                            >
                                <MoveUpRight />
                            </Button>
                        </div>
                    </div>
                    <div>
                        <img src={project.timeline} alt="" className="size-full object-cover" />
                    </div>
                </div>
            </section>

            <section className="flex flex-col gap-14 py-20">
                <h3 className="lg:text-[2.75rem] text-2xl text-[#0C28D2] text-center font-semibold">
                    WHAT OUR CLIENT SAYS
                </h3>
                <div className="flex flex-col gap-10 text-white bg-linear-to-r from-0% from-[#090328] to-100% to-[#0046CC] rounded-4xl lg:px-16 px-10 lg:py-21.5 py-16">
                    <h4 className="lg:text-4xl text-2xl font-medium text-center">
                        "The delivery of EngageX exceeded expectations. Our L&D clients now see us as a cutting-edge
                        platform because the system looks modern, the workflow is clear, and the outputs are traceable.
                        The project positioned us as a serious player in the enterprise training space."
                    </h4>
                    <div className="flex flex-col gap-2 items-center">
                        <img src={HeadOfClaims} alt="" />
                        <div className="text-center space-y-1">
                            <h5 className="lg:text-[2rem] text-[1.75rem] font-bold">Henry Charles</h5>
                            <span className="lg:text-[1.75rem] text-2xl font-medium text-[#E1E2E9]">
                                Head of Claims, Engage X
                            </span>
                        </div>
                    </div>
                </div>
            </section>

            <Cta
                title={
                    <>
                        Secure your company's future by
                        <br /> Partnering with Axel Cyber
                    </>
                }
                action="Book a call"
            >
                <Suspense fallback={<span className="w-5 h-5 inline-block animate-pulse bg-gray-300 rounded-full" />}>
                    <HiArrowNarrowRight className="inline size-4" />
                </Suspense>
            </Cta>
        </main>
    );
}
