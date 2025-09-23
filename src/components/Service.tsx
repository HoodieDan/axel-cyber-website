import { motion } from "motion/react";

interface Props {
    delay: number;
    topic: string;
    title: string;
    desc: string;
    image: string;
}

export default function Service({ topic, title, desc, image, delay }: Props) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: delay, ease: "easeInOut" }}
            viewport={{ once: true }}
            className="flex-1 space-y-11 bg-white rounded-lg transition-all duration-300 ease-linear p-7 border border-[#e1e5e7]"
        >
            <div className="flex flex-col">
                <p className="text-sm inline p-2 border border-[#e1e5e7] rounded-md mb-7 w-fit">{topic}</p>
                <p className="text-3xl font-medium mb-4">{title}</p>
                <p className="text-[4c5c75]">{desc}</p>
            </div>

            <div>
                <img
                    className="block w-full h-[200px]"
                    src={image}
                    alt={title}
                    loading="lazy"
                    width={300}
                    height={200}
                />
            </div>
        </motion.div>
    );
}
