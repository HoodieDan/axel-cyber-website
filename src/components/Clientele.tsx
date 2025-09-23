import { motion } from "motion/react";
import goldfrapp from "../assets/goldfrapp.webp";
import hulu from "../assets/hulu.webp";
import ibm from "../assets/ibm.webp";
import information from "../assets/information.webp";
import pencil from "../assets/pencil.webp";
import volume from "../assets/volume.webp";

export default function Clientele() {
    return (
        <section className="py-6 sm:py-8 md:py-10 lg:py-12 flex flex-col md:flex-row gap-8 md:gap-10">
            <div className="flex-1">
                <div className="flex justify-center md:justify-start mb-6">
                    <div className="flex rounded-lg flex-row p-2 gap-2 items-center border-2 border-[#e1e5e7]">
                        <img src={"/users.png"} alt="user" loading="lazy" width={16} height={16} />
                        <p className="text-sm leading-none">OUR CLIENTS</p>
                    </div>
                </div>

                <div className="md:space-y-17.5">
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.25, ease: "easeInOut" }}
                        viewport={{ once: true }}
                        className="text-[#002366] text-3xl md:text-5xl font-medium"
                    >
                        Several companies have
                        <br className="md:inline hidden" /> trusted Axel Cybel for thier
                        <br className="md:inline hidden" /> solutions
                    </motion.p>
                    <div className="hidden md:block">
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.35, ease: "easeInOut" }}
                            viewport={{ once: true }}
                            className="mb-2 text-2xl text-[#666666] "
                        >
                            “Working with us will unlock results that
                            <br /> your company deserves to experience.”
                        </motion.p>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.45, ease: "easeInOut" }}
                            viewport={{ once: true }}
                            className="text-2xl"
                        >
                            <span className="text-[#0081f1] font-semibold">Olayinka D. Adeyefa</span> <span>-</span>{" "}
                            <span className="text-[#c0c0c0]">CEO Axel Cyber</span>
                        </motion.p>
                    </div>
                </div>
            </div>
            <div className="flex-1 grid grid-cols-2 md:grid-cols-3 content-center gap-10 md:gap-37.5">
                <motion.img
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: 0.25, ease: "easeInOut" }}
                    viewport={{ once: true }}
                    src={goldfrapp}
                    className="w-[90px] md:w-[125px] h-[20px] md:h-[30px]"
                    alt="goldfrapp"
                    loading="lazy"
                    width={125}
                    height={30}
                />
                <motion.img
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: 0.35, ease: "easeInOut" }}
                    viewport={{ once: true }}
                    className="w-[90px] md:w-[125px] h-[20px] md:h-[30px] place-self-end md:place-self-center"
                    src={pencil}
                    alt="pencil"
                    loading="lazy"
                    width={125}
                    height={30}
                />
                <motion.img
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: 0.45, ease: "easeInOut" }}
                    viewport={{ once: true }}
                    className="w-[90px] md:w-[125px] h-[20px] md:h-[30px] md:place-self-end"
                    src={volume}
                    alt="volume"
                    loading="lazy"
                    width={125}
                    height={30}
                />
                <motion.img
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: 0.45, ease: "easeInOut" }}
                    viewport={{ once: true }}
                    className="w-[90px] md:w-[125px] h-[20px] md:h-[30px] place-self-end md:place-self-start"
                    src={ibm}
                    alt="information"
                    loading="lazy"
                    width={125}
                    height={30}
                />
                <motion.img
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: 0.55, ease: "easeInOut" }}
                    viewport={{ once: true }}
                    className="w-[90px] md:w-[125px] h-[20px] md:h-[30px] md:place-self-center"
                    src={hulu}
                    alt="ibm"
                    loading="lazy"
                    width={125}
                    height={30}
                />
                <motion.img
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: 0.65, ease: "easeInOut" }}
                    viewport={{ once: true }}
                    className="w-[90px] md:w-[125px] h-[20px] md:h-[30px] place-self-end"
                    src={information}
                    alt="hulu"
                    loading="lazy"
                    width={125}
                    height={30}
                />
            </div>
            <div className="block md:hidden mt-4 md:mt-10 lg:mt-12">
                <p className="mb-4 text-2xl text-[#666666] w-auto lg:w-[300px] 2xl:w-auto">
                    “Working with us will unlock results that your company deserves to experience.”
                </p>
                <p className="text-2xl">
                    <span className="text-[#0081f1] font-semibold">Olayinka D. Adeyefa</span> <span>- </span>
                    <span className="text-[#c0c0c0]">Co-founder at Axel Cyber</span>
                </p>
            </div>
        </section>
    );
}
