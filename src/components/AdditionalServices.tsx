import { motion } from "motion/react";
import ArrowNarrowUpRight from "./icons/ArrowNarrowUpRight";

interface Props {
    service: string;
    desc: string;
}

export default function AdditionalServices({ service, desc }: Props) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, ease: "easeInOut" }}
            viewport={{ once: true }}
            className="flex flex-row justify-between gap-34 items-center py-5 border-b border-[#4c5c75]"
        >
            <p className="md:flex-1/2 text-lg md:text-[2.5rem] leading-[120%]">{service}</p>
            <p className="md:flex-2/5 hidden md:block text-lg leading-[160%] text-[#2f2f2f]">{desc}</p>
            <ArrowNarrowUpRight className="md:flex-1/10 shrink-0 md:size-17.5 size-5.5" />
        </motion.div>
    );
}
