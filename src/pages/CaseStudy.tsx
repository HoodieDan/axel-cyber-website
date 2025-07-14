import caseimage1 from "../assets/caseimage4.webp"
import caseimage2 from "../assets/caseimage2.webp"
import caseimage3 from "../assets/caseimage3.webp"
import caseimage4 from "../assets/caseimage-mobile.svg"
import Cta from '@/components/Cta';
import { lazy, Suspense } from "react";


const FaArrowRightLong = lazy(() => import("lucide-react").then(module => ({ default: module.MoveRight  })))
const HiArrowNarrowRight = lazy(() => import("lucide-react").then(module => ({ default: module.MoveUpRight  })))


export default function CaseStudy() {
  return (
    <main className="px-[5%] 2xl:px-0 max-w-screen-2xl mx-auto">
        <section className='bg-[#fafafa] pb-4 md:pb-6 pt-16 lg:pt-20 lg:pb-8'>
            <div className='flex flex-col md:flex-row gap-8 md:gap-10 bg-white mb-4 md:mb-6'>
                <div className='flex-1 lg:flex-[1.15] relative'>
                    <p className='absolute top-4 md:top-6 left-0 text-3xl sm:text-4xl lg:text-5xl 2xl:text-4xl font-semibold'>Prompt Plumber AI</p>
                    <img 
                        className='w-full h-full hidden sm:block' 
                        src={caseimage1} 
                        alt="case study image" 
                        loading="eager"
                        fetchPriority="high"
                        width={608}
                        height={860}
                    />
                    <img 
                        className='w-full h-full block sm:hidden' 
                        src={caseimage4} 
                        alt="case study image" 
                        loading="eager"
                        fetchPriority="high"
                        width={400}
                        height={560}
                    />
                </div>
                <div className='flex flex-col flex-1'>
                    <p className='text-xl my-4 md:my-6 flex flex-row gap-2 items-center'>
                        <span className="whitespace-nowrap font-semibold">UI design</span>
                        <Suspense fallback={<span className="w-3 h-3 inline-block animate-pulse bg-gray-300 rounded-full" />}>
                            <FaArrowRightLong />
                        </Suspense>
                        <span className="whitespace-nowrap font-semibold">Product strategy</span>
                        <Suspense fallback={<span className="w-3 h-3 inline-block animate-pulse bg-gray-300 rounded-full" />}>
                            <FaArrowRightLong />
                        </Suspense>
                        <span className="whitespace-nowrap font-semibold">Prototyping</span>
                    </p>
                    <p className='text-xl mb-10 lg:mb-12'>
                        A prompt engineering platform that allows for Beginners and intermediate level prompt Engineers and AI
                        enthusiasts to create very effective prompts that get them thier expacted outcomes using  Popular Large Language Model
                    </p>
                    <img 
                        className="flex-1" 
                        src={caseimage2} alt="case study image" 
                        loading="lazy"
                        width={608}
                        height={620}
                    />
                </div>
            </div>
            <div>
                <img 
                    className='aspect-[16/12] lg:aspect-[16/9] w-full h-full block' 
                    src={caseimage3} 
                    alt="case study image" 
                    loading="lazy"
                    width={1200}
                    height={720}
                />
            </div>
        </section>
        <section className='pb-6 md:pb-10 lg:pb-20 xl:pb-40 h-[1200px] md:h-[550px] 2xl:h-[900px] flex flex-col md:flex-row gap-8'>
            <div className='flex-[1.5] md:flex-1 rounded-2xl bg-[linear-gradient(90deg,#012772,#0046cc)]'></div>
            <div className='flex-1 flex flex-col gap-8'>
                <div className='flex-1 rounded-2xl bg-[linear-gradient(90deg,#012772,#0046cc)]'></div>
                <div className='flex-1 rounded-2xl bg-[linear-gradient(90deg,#012772,#0046cc)]'></div>
            </div>
        </section>
        <Cta 
            title={<>Secure your company's future by<br /> Partnering with Axel Cyber</>}
            action='Book a call'
        >
            <Suspense fallback={<span className="w-5 h-5 inline-block animate-pulse bg-gray-300 rounded-full" />}>
                <HiArrowNarrowRight className='inline size-4' />    
            </Suspense>
        
        </Cta>
    </main>
  )
}
