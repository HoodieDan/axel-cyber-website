import solutionImg from "../assets/solution-img.webp"
import solutionImg2 from "../assets/solution-mobile-hero-img.webp"
import solution1 from "../assets/solution1.webp"
import solution2 from "../assets/solution2.webp"
import solution3 from "../assets/solution3.webp"
import solution4 from "../assets/solution4.webp"
import solution5 from "../assets/solution5.webp"
import solution6 from "../assets/solution6.webp"
import ai1 from "../assets/ai1.webp"
import rocket from "../assets/rocket.png"
import Cta from '@/components/Cta';
import AiServices from "@/components/AiServices";
import { lazy, Suspense, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const IoIosArrowDroprightCircle = lazy(() =>
    import("lucide-react").then(module => ({ default: module.ChevronRight  }))
)
const HiArrowNarrowRight = lazy(() =>
    import("lucide-react").then(module => ({ default: module.MoveRight }))
)

export default function Solutions() {
    const navigate = useNavigate()
    const paraRef = useRef<HTMLParagraphElement>(null)
    const [index, setIndex] = useState(0)
    const solution = [
    {
        title: "AI Chatbots Solutions",
        image: ai1,
        icon: rocket,
        list: [
            "Automate 24/7 customer support without increasing headcount",
            "Reduce response time and improve customer satisfaction",
            "Scale support effortlessly during peak times or campaignes",
            "Handle repetitive inquires, freeing up human agents"
        ]
    },
    {
        title: "AI Agent Solutions",
        image: ai1,
        icon: rocket,
        list: [
            "Delegate complex tasks to autonous systems for efficiency",
            "Streamline internal wokrflows with minimal human intervention",
            "Reduce operational costs while maintaining high performance"
        ]
    },
    {
        title: "Machine Learning Solutions",
        image: ai1,
        icon: rocket,    
        list: [
            "Unlock actionable insights form large datasets",
            "Prdict customer behaviour for smarter marketing and sales",
            "Automate classification, recommendations, and forecasting",
            "Gain a competitive edge with data-driven decision making"    
        ]
    }
]

    const Project = ({img}:{img: string}) =>{
        return (
            <div className='relative h-auto'>
                <img 
                    className="w-full" 
                    src={img} 
                    alt="project image" 
                    loading="lazy"
                    width={416}
                    height={525}    
                />
                <Suspense fallback={<span className="w-5 h-5 inline-block animate-pulse bg-gray-300 rounded-full" />}>
                    <div
                        onClick={() => {
                            navigate("/case-study");
                            window.scrollTo({
                                top: 0,
                                behavior: 'smooth'
                            })
                        }}
                        className="absolute bottom-0 right-0 flex justify-center items-center h-16 w-16 bg-[#080f44] rounded-full">
                        <IoIosArrowDroprightCircle className='h-12 w-12 cursor-pointer text-white' />
                    </div>
            
                </Suspense>
            </div>
        )
    }

  return (
    <main className="px-[5%] 2xl:px-0 max-w-screen-2xl mx-auto">
        <section className="bg-white py-10 lg:py-12">
            <p className='text-center md:text-start text-3xl lg:text-4xl font-semibold my-6 md:my-8 w-auto'>
                We Are Commited To Creating The Future Of<br /> Artifiicial Intelligence
            </p>
            <p className='mb-4 block md:hidden text-base'>
                Witness some of the great works we've done for our amazing clients around the world, with great design story
            </p>
            <div className='relative'>
                <img 
                    className="w-full hidden md:block" 
                    src={solutionImg} 
                    alt='solution image' 
                    loading="eager"
                    fetchPriority="high"
                    width={680}
                    height={640}
                />
                <img 
                    className="w-full md:hidden block" 
                    src={solutionImg2} 
                    alt='solution image'
                    loading="eager"
                    fetchPriority="high"
                    width={1280}
                    height={345}
                
                />
                <p className='hidden md:block text-base md:text-xl absolute -bottom-1.5 2xl:-bottom-6 left-[26%] md:w-[200px] lg:w-[375px] 2xl:w-[500px]'>
                    Witness some of the great works we've done for our amazing clients around the world, with great design story
                </p>
            </div>
        </section>
        <section className="bg-[#fafafa] py-6 sm:py-8 md:py-10 lg:py-12">
            <div className="flex justify-center mb-4 sm:mb-6 md:mb-8 lg:mb-10">
                <div className="flex rounded-lg flex-row p-2 sm:px-4 gap-2 items-center border-2 border-[#e1e5e7]">
                    <img 
                        className="shrink-0" 
                        src={"/stars.png"} 
                        alt="stars" 
                        loading="lazy"
                        width={16}
                        height={16}
                    />
                    <p className="text-sm">CAPABILITIES</p>
                </div>
            </div>
            <p ref={paraRef} className="text-center text-3xl lg:text-4xl font-semibold mx-auto mb-4 sm:mb-6 md:mb-8 lg:mb-10" >Here's how Axel Cyber can<br /> solve your company's Problems</p>
            <AiServices 
                title={solution[index].title}
                image={solution[index].image}
                icon={solution[index].icon}
                list= {solution[index].list}
            />
            <div className="overflow-auto mt-6 md:mt-8 lg:mt-10 flex flex-row gap-4 justify-start sm:justify-center items-center">
                <div className="shrink-0 group w-auto cursor-pointer" onClick={() =>{
                    paraRef.current?.scrollIntoView({ behavior: "smooth" })
                    if(index == 0) return
                    setIndex(0) 
                } }>
                    <div className="relative rounded-full  bg-[#c1c1c1] w-full h-1 mb-1">
                        <div className={`absolute rounded-full ${index == 0 ? "w-full " : "w-[0px]"} group-hover:w-full h-full bg-[#3084da] top-0 left-0 transition-all duration-300 ease-linear`}></div>
                    </div>
                    <p className=" text-xl text-[#4c5c75]">AI Chatbots Solutions</p>
                </div>
                <div className="shrink-0 group w-auto cursor-pointer" onClick={() =>{
                    paraRef.current?.scrollIntoView({ behavior: "smooth" })
                    if(index == 1) return
                    setIndex(1)
                }}>
                    <div className="relative rounded-full bg-[#c1c1c1] w-full h-1 mb-1">
                        <div className={`absolute rounded-full ${index == 1 ? "w-full" : "w-[0px]"} group-hover:w-full h-full bg-[#3084da] top-0 left-0 transition-all duration-300 ease-linear`}></div>
                    </div>
                    <p className="text-xl text-[#4c5c75]">AI Agents Solutions</p>
                </div>
                <div className="shrink-0 group w-auto cursor-pointer" onClick={() => {
                    paraRef.current?.scrollIntoView({ behavior: "smooth" })
                    if(index == 2) return
                    setIndex(2)
                    }}>
                    <div className="relative rounded-full bg-[#c1c1c1] w-full h-1 mb-1">
                        <div className={`absolute rounded-full ${index == 2 ? "w-full" : "w-[0px]"} group-hover:w-full h-full bg-[#3084da] top-0 left-0 transition-all duration-300 ease-linear`}></div>
                    </div>
                    <p className="text-xl text-[#4c5c75]">Machine Learning Solutions</p>
                </div>
            </div>
        </section>
        <section className="bg-white py-6 sm:py-8 md:py-10 lg:py-12 lg:pb-14">
            <div className="flex justify-center mb-4 sm:mb-6 md:mb-8 lg:mb-10">
                <div className="flex rounded-lg flex-row p-2 gap-2 items-center border-2 border-[#e1e5e7]">
                    <img 
                        className="shrink-0" 
                        src={"/stars.png"} 
                        alt="stars" 
                        loading="lazy"
                        width={16}
                        height={16}    
                    />
                    <p className="text-sm leading-none">What we offer</p>
                </div>
            </div>
            <p className='text-center text-2xl md:text-3xl font-semibold md:w-[350px] 2xl:w-auto mx-auto mb-4 sm:mb-6 md:mb-8 lg:mb-10'>The best solutions for the best Companies</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                <Project 
                    img={solution1}
                />
                <Project 
                    img={solution2}
                />
                <Project 
                    img={solution3}
                />
                <Project 
                    img={solution4}
                />
                <Project 
                    img={solution5}
                />
                <Project 
                    img={solution6}
                />
            </div>
        </section>
        <Cta 
            title="Secure your Company's future by Partnering with Axel Cyber" 
            action='Book a call'
        >
            <Suspense fallback={<span className="w-5 h-5 inline-block animate-pulse bg-gray-300 rounded-full" />}>
                <HiArrowNarrowRight className='inline size-4' />
            </Suspense>
        </Cta>
    </main>
  )
}
