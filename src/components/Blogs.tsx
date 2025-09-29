import { useContextValue } from "@/context";
import { motion } from "motion/react";
import { lazy, Suspense } from "react";
import { useNavigate } from "react-router";

const ArrowUpRight = lazy(() => import("lucide-react").then((module) => ({ default: module.ArrowUpRight })));

interface Props {
    image: string;
    title: string;
    description: string;
    date: string;
    link?: string;
    author: string;
    topic: string;
    timeStamp: string;
    id: string;
    index: number;
}

export default function Blogs({ image, title, description, date, author, topic, timeStamp, id, index }: Props) {
    const { setActiveIndex } = useContextValue();
    const topicArray = topic.split(", ");
    const navigate = useNavigate();
    const handleNavigate = () => {
        setActiveIndex(index);
        navigate(`/blog/${id}`);
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, ease: "easeInOut" }}
            viewport={{ once: true }}
            className="rounded-lg hover:shadow-lg active:shadow-lg transition-all duration-300 ease-linear"
        >
            <div className="w-full h-57">
                <img className="block w-full h-full object-cover rounded-xl" src={image} alt={title} />
            </div>
            <div className="px-4 pb-4">
                <p className="py-2 text-base text-[#797979]">
                    {author} - {timeStamp}
                </p>
                <div className="flex justify-between gap-4">
                    <p className="text-xl font-semibold pb-2">{title}</p>
                    <Suspense
                        fallback={<span className="w-5 h-5 inline-block animate-pulse bg-gray-300 rounded-full" />}
                    >
                        <ArrowUpRight onClick={handleNavigate} className="text-2xl cursor-pointer" />
                    </Suspense>
                </div>
                <p className="text-[#4c5c75] mb-6">{description}</p>
                <div className="flex flex-row gap-4 items-center">
                    {topicArray.map((item, index) => (
                        <p
                            key={index}
                            className="px-3 py-1 rounded-md text-white bg-[linear-gradient(456deg,#014594,#0181f1)]"
                        >
                            {item}
                        </p>
                    ))}

                    <p className="text-[#4c5c75]">{date}</p>
                </div>
            </div>
        </motion.div>
    );
}
