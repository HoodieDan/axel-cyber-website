import laptop from "../assets/laptop-02.png";
import publicSector from "../assets/public_sector.webp";
import energy from "../assets/energy.webp";
import healthcare from "../assets/health_center.webp"; 
import finanacial from "../assets/financial_services.webp";
import engineering from "../assets/engineering.webp";

export default function IndustiesWeService() {
  return (
    <section className="w-[90%] max-w-screen-xl mx-auto mt-4 md:mt-36 lg:mt-28 py-6 sm:py-8 md:py-10 lg:py-12">
        <div className="flex justify-center mb-4 sm:mb-6 md:mb-8 lg:mb-10">
            <div className="flex rounded-lg flex-row py-1 sm:py-2 px-2 sm:px-4 gap-2 items-center border-2 border-[#e1e5e7]">
                <img 
                    src={laptop} 
                    alt="laptop" 
                    width={16}
                    height={16}
                    loading="lazy"    
                />
                <p className="text-sm sm:text-base 2xl:text-xl">
                    SOME INDUSTRIES WE SERVICE 
                </p>
            </div>
        </div>
        <p className="w-auto md:w-[470px] 2xl:w-auto mx-auto text-center text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold mb-6 sm:mb-8 md:mb-10 lg:mb-12">
            We Use our AI solutions for all industries
        </p>
        <div className="flex w-full flex-col lg:flex-row justify-between gap-4 md:gap-6 mb-4 md:mb-6">
            <div className="filter active:grayscale hover:grayscale transition-all duration-300 ease-linear flex-1 h-auto">
                <img 
                    className="block h-full w-full" 
                    src={publicSector} 
                    alt="public sector" 
                    loading="lazy"
                    width={440}
                    height={190}
                />
            </div>
            <div className="filter active:grayscale hover:grayscale transition-all duration-300 ease-linear flex-1 h-auto">
                <img 
                    className="block w-full" 
                    src={energy} 
                    alt="energy" 
                    loading="lazy"
                    width={440}
                    height={190}
                />
            </div>
        </div>
        <div className="flex flex-col lg:flex-row justify-between gap-6 mb-2 md:mb-6">
            <div className="filter active:grayscale hover:grayscale transition-all duration-300 ease-linear flex-1 h-auto">
                <img 
                    className="block w-full" 
                    src={healthcare} 
                    alt="healthcare" 
                    loading="lazy"
                    width={290}
                    height={180}
                />
            </div>
            <div className="filter active:grayscale hover:grayscale transition-all duration-300 ease-linear flex-1 h-auto">
                <img 
                    className="block w-full" 
                    src={finanacial} 
                    alt="financial services" 
                    loading="lazy"
                    width={290}
                    height={180}
                />
            </div>
            <div className="filter active:grayscale hover:grayscale transition-all duration-300 ease-linear flex-1 h-auto">
                <img 
                    className="block w-full" 
                    src={engineering} 
                    alt="engineering" 
                    loading="lazy"
                    width={290}
                    height={180}    
                />
            </div>
        </div>
    </section>
  )
}
