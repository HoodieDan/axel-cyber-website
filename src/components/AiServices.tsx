import { lazy, Suspense } from "react";
import { useNavigate } from "react-router";
import { Button } from "./ui/button";

interface AiServicesProps {
    title: string;
    image: string;
    icon: string;
    list: string[];
}

const ChevronRight = lazy(() => import("lucide-react").then((module) => ({ default: module.ChevronRight })));

export default function AiServices({ title, image, list, icon }: AiServicesProps) {
    const navigate = useNavigate();
    const handleNavigate = () => {
        navigate("/contact");
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };
    return (
        <div className="md:pl-15 p-5 shadow-md border border-[#e3e7ea] rounded-2xl bg-white flex flex-col gap-6 lg:gap-10 sm:flex-row items-center">
            <div className="sm:flex-1 flex flex-col md:gap-19.5 gap-6">
                <div className="flex flex-col gap-6">
                    <div className="size-18 flex justify-center items-center bg-[#f4f6f8] rounded-full">
                        <img className="size-6" src={icon} alt="rocket" />
                    </div>

                    <div className="flex flex-col gap-6">
                        <p className="text-2xl md:text-4xl font-medium">{title}</p>
                        <img
                            className="size-full object-cover md:hidden block"
                            src={image}
                            alt="image"
                            loading="lazy"
                            width={300}
                            height={315}
                        />
                    </div>

                    <ul className="list-disc flex flex-col gap-4">
                        {list.map((item, index) => (
                            <li className="text-[#4C5C75] text-base" key={index}>
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>

                <Button
                    onClick={handleNavigate}
                    className="md:h-13.5 h-11 w-fit md:text-lg has-[>svg]:px-5 rounded-xl bg-[linear-gradient(45deg,#032D7F,#0241BA)] transition-all duration-300 ease-linear cursor-pointer"
                >
                    <span>Reach Out</span>
                    <Suspense
                        fallback={<span className="w-5 h-5 inline-block animate-pulse bg-gray-300 rounded-full" />}
                    >
                        <ChevronRight className="md:size-5 size-4" />
                    </Suspense>
                </Button>
            </div>

            <div className="sm:flex-1 md:block hidden">
                <img
                    className="size-full object-cover"
                    src={image}
                    alt="image"
                    loading="lazy"
                    width={300}
                    height={315}
                />
            </div>
        </div>
    );
}
