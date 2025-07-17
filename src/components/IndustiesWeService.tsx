import {motion} from "motion/react"
import laptop from "../assets/laptop-02.png";
import publicSector from "../assets/public_sector.webp";
import publicMob from "../assets/public-service-mobile.svg"
import energyMob from "../assets/energy-mobile.svg"
import energy from "../assets/energy.webp";
import healthcare from "../assets/health_center.webp"; 
import finanacial from "../assets/financial_services.webp";
import engineering from "../assets/engineering.webp";

export default function IndustiesWeService() {
  return (
    <section className="px-[5%] w-full mx-auto mt-4 md:mt-60 lg::mt-54 py-6 sm:py-8 md:py-10 lg:py-12">
        <div className="flex justify-center mb-4 sm:mb-6 md:mb-8 lg:mb-10">
            <div className="flex rounded-lg flex-row p-2 gap-2 items-center border-2 border-[#e1e5e7]">
                <img 
                    src={laptop} 
                    alt="laptop" 
                    width={16}
                    height={16}
                    loading="lazy"    
                />
                <p className="text-sm leading-none">
                    SOME INDUSTRIES WE SERVICE 
                </p>
            </div>
        </div>
        <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{delay:0.25, ease: "easeInOut" }}
            viewport={{ once: true }} 
            className="text-center mx-auto text-center text-3xl lg:text-4xl font-semibold mb-6 sm:mb-8 md:mb-10 lg:mb-12">
            We Use our AI solutions<br /> for all industries
        </motion.p>
        <div
            className="flex w-full flex-col lg:flex-row justify-between gap-4 md:gap-6 mb-4 md:mb-6">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0}}
                transition={{delay:0.25, ease: "easeInOut" }}
                viewport={{ once: true }}
                className="filter active:grayscale hover:grayscale transition-all duration-300 ease-linear flex-1 h-auto">
                <img 
                    className="hidden lg:block h-full w-full" 
                    src={publicSector} 
                    alt="public sector" 
                    loading="lazy"
                    width={440}
                    height={190}
                />
                <img 
                    className="block lg:hidden h-full w-full" 
                    src={publicMob} 
                    alt="public sector" 
                    loading="lazy"
                    width={440}
                    height={190}
                />
            </motion.div>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0}}
                transition={{delay:0.35, ease: "easeInOut" }}
                viewport={{ once: true }}
                className="filter active:grayscale hover:grayscale transition-all duration-300 ease-linear flex-1 h-auto">
                <img 
                    className="hidden lg:block w-full h-full" 
                    src={energy} 
                    alt="energy" 
                    loading="lazy"
                    width={440}
                    height={190}
                />
                <img 
                    className="block lg:hidden w-full h-full" 
                    src={energyMob} 
                    alt="energy" 
                    loading="lazy"
                    width={440}
                    height={190}
                />
            </motion.div>
        </div>
        <div className="flex flex-col lg:flex-row justify-between gap-6 mb-2 md:mb-6">
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0}}
                transition={{delay:0.25, ease: "easeInOut" }}
                viewport={{ once: true }}
                className="filter active:grayscale hover:grayscale transition-all duration-300 ease-linear flex-1 h-auto">
                <img 
                    className="block w-full" 
                    src={healthcare} 
                    alt="healthcare" 
                    loading="lazy"
                    width={290}
                    height={180}
                />
            </motion.div>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0}}
                transition={{delay:0.35, ease: "easeInOut" }}
                viewport={{ once: true }} 
                className="filter active:grayscale hover:grayscale transition-all duration-300 ease-linear flex-1 h-auto">
                <img 
                    className="block w-full" 
                    src={finanacial} 
                    alt="financial services" 
                    loading="lazy"
                    width={290}
                    height={180}
                />
            </motion.div>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0}}
                transition={{delay:0.45, ease: "easeInOut" }}
                viewport={{ once: true }} 
                className="filter active:grayscale hover:grayscale transition-all duration-300 ease-linear flex-1 h-auto">
                <img 
                    className="block w-full" 
                    src={engineering} 
                    alt="engineering" 
                    loading="lazy"
                    width={290}
                    height={180}    
                />
            </motion.div>
        </div>
    </section>
  )
}
