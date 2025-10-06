import ArrowUpRight from "@/components/icons/ArrowUpRight";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Link } from "react-router";

const Resources = () => {
    return (
        <main>
            <section className="px-[5%] lg:py-24 py-12 flex md:items-center justify-center md:gap-10 gap-5">
                <h1 className="shrink-0 md:text-[6.75rem] text-2xl font-urbanist font-semibold md:leading-[100%] leading-[120%] text-[#002366]">
                    Axel Cyber
                    <br /> Resources
                </h1>

                <div className="flex flex-col md:gap-12 gap-3">
                    <p className="md:text-2xl text-xs leading-[140%]">
                        Axel Cyber resources provides
                        <br className="md-br" /> the latest and updated
                        <br className="md-br" /> information in the world.
                    </p>
                    <span className="md:-translate-x-1/2 w-fit bg-[#002366] text-white md:px-6 px-3 md:py-2 py-1 rounded-[3rem] font-normal md:text-2xl text-xs italic leading-[120%] whitespace-nowrap">
                        & Press
                    </span>
                </div>
            </section>

            <section className="px-[5%] md:py-8 py-6 md:space-y-16 space-y-10">
                <div className="space-y-12">
                    <div className="flex items-center md:justify-center md:gap-4 gap-2 w-full overflow-auto hide-scrollbar">
                        {["All Categories", "Tools", "E-books", "Webinars", "How-to guides", "Interviews"].map(
                            (category, index) => (
                                <Button
                                    key={category + index}
                                    className="bg-transparent first:bg-linear-(--gradient-primary) hover:bg-linear-(--gradient-primary-hover) md:px-4 px-3 md:py-2.5 py-1 border border-black md:text-base text-xs text-black first:text-white hover:text-white rounded-full"
                                >
                                    {category}
                                </Button>
                            ),
                        )}
                    </div>

                    <div className="md:h-163.5 flex md:flex-row flex-col gap-5">
                        <div className="md:w-9/20 flex flex-col justify-end gap-3 p-6 md:h-auto h-100 bg-[linear-gradient(rgba(0,0,0,0)_40%,rgba(0,0,0,0.4)_100%),url(@/assets/placeholder-1.png)] bg-no-repeat bg-cover bg-center text-white">
                            <div className="flex items-center md:gap-4 gap-2">
                                <span className="md:px-4 p-3 md:py-2.5 py-1 border border-white rounded-full md:text-base text-sm font-medium">
                                    Design
                                </span>
                                <span className="md:px-4 p-3 md:py-2.5 py-1 border border-white rounded-full md:text-base text-sm font-medium">
                                    Apr 09, 2025
                                </span>
                            </div>
                            <p className="md:text-2xl text-base leading-[140%]">
                                Designing for well-being promoting
                                <br /> acoustic and visual comfort
                            </p>
                        </div>

                        <div className="md:w-11/20 flex flex-col gap-5">
                            <div className="flex flex-col justify-end gap-3 p-6 md:h-auto h-100 bg-[linear-gradient(rgba(0,0,0,0)_40%,rgba(0,0,0,0.4)_100%),url(@/assets/placeholder-2.png)] bg-no-repeat bg-cover bg-center text-white md:flex-1">
                                <div className="flex items-center md:gap-4 gap-2">
                                    <span className="md:px-4 p-3 md:py-2.5 py-1 border border-white rounded-full md:text-base text-sm font-medium">
                                        Design
                                    </span>
                                    <span className="md:px-4 p-3 md:py-2.5 py-1 border border-white rounded-full md:text-base text-sm font-medium">
                                        Apr 09, 2025
                                    </span>
                                </div>
                                <p className="md:text-2xl text-base leading-[140%]">
                                    Designing for well-being promoting
                                    <br /> acoustic and visual comfort
                                </p>
                            </div>
                            <div className="flex flex-col justify-end gap-3 p-6 md:h-auto h-100 bg-[linear-gradient(rgba(0,0,0,0)_40%,rgba(0,0,0,0.4)_100%),url(@/assets/placeholder-3.png)] bg-no-repeat bg-cover bg-center text-white md:flex-1">
                                <div className="flex items-center md:gap-4 gap-2">
                                    <span className="md:px-4 p-3 md:py-2.5 py-1 border border-white rounded-full md:text-base text-sm font-medium">
                                        Design
                                    </span>
                                    <span className="md:px-4 p-3 md:py-2.5 py-1 border border-white rounded-full md:text-base text-sm font-medium">
                                        Apr 09, 2025
                                    </span>
                                </div>
                                <p className="md:text-2xl text-base leading-[140%]">
                                    Designing for well-being promoting
                                    <br /> acoustic and visual comfort
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid md:grid-cols-3 md:grid-rows-[repeat(3,minmax(0,512px))] gap-5">
                    {Array.from({ length: 9 }).map((_, index) => (
                        <div
                            key={index}
                            className="flex flex-col md:justify-end gap-3 md:p-6 md:bg-[linear-gradient(rgba(0,0,0,0)_40%,rgba(0,0,0,0.4)_100%),url(@/assets/placeholder-1.png)] bg-no-repeat bg-cover bg-center md:text-white rounded-[1.25rem]"
                        >
                            <figure className="md:hidden block mb-2 h-89">
                                <img src="/src/assets/placeholder-1.png" alt="" className="size-full object-cover" />
                            </figure>
                            <div className="flex items-center md:gap-4 gap-2">
                                <span className="md:px-4 p-3 md:py-2.5 py-1 border md:border-white rounded-full md:text-base text-sm font-medium">
                                    Design
                                </span>
                                <span className="md:px-4 p-3 md:py-2.5 py-1 border md:border-white rounded-full md:text-base text-sm font-medium">
                                    Apr 09, 2025
                                </span>
                            </div>
                            <p className="md:text-2xl text-base leading-[140%]">
                                Designing for well-being promoting acoustic and visual comfort
                            </p>
                        </div>
                    ))}
                </div>

                <p className="text-center md:text-2xl text-base">
                    <span>And that's not all, </span>
                    <Link to="" className="text-[#0C28D2] underline underline-offset-2">
                        View More
                    </Link>
                </p>
            </section>

            <section className="px-[5%] md:py-12 py-6">
                <div className="md:h-136.5 h-93 flex flex-col justify-between md:p-20 p-8 bg-[url(@/assets/placeholder-5.png)] bg-no-repeat bg-cover bg-center">
                    <h1 className="font-urbanist font-semibold md:text-7xl text-[2rem] leading-[120%] text-[#0C28D2] md:pt-0 pt-8">
                        Elevate your space with a dinstinctive touch!
                    </h1>
                    <Link
                        to=""
                        className={cn(
                            buttonVariants(),
                            "bg-white hover:bg-white/90 h-14 has-[>svg]:px-10 ml-auto text-black",
                        )}
                    >
                        Book a Call <ArrowUpRight />
                    </Link>
                </div>
            </section>
        </main>
    );
};

export default Resources;
