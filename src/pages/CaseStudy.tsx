import caseimage1 from "../assets/caseimage1.png"
import caseimage2 from "../assets/caseimage2.png"
import caseimage3 from "../assets/caseimage3.png"
import { FaArrowRightLong } from "react-icons/fa6";
import Cta from '@/components/Cta';
import { HiArrowNarrowRight } from 'react-icons/hi';

export default function CaseStudy() {
  return (
    <main>
        <section className='px-[5%] bg-[#fafafa] pt-6 sm:pt-8 pb-4 md:pt-10 md:pb-6 lg:pt-20 lg:pb-8'>
            <div className='flex flex-col md:flex-row gap-8 md:gap-12 lg:gap-16 bg-white mb-4 md:mb-6'>
                <div className='flex-1 relative'>
                    <p className='absolute top-4 md:top-6 left-0 text-3xl sm:text-4xl md:text-5xl font-semibold'>Prompt Plumber AI</p>
                    <img className='w-full h-full block' src={caseimage1} alt="case study image" />
                </div>
                <div className='flex-1'>
                    <p className='text-xl my-4 md:my-6 flex flex-row gap-2 items-center'>
                        <span>UI design</span>
                        <FaArrowRightLong />
                        <span>Product strategy</span>
                        <FaArrowRightLong />
                        <span>Prototyping</span>
                    </p>
                    <p className='text-xl mb-6 sm:mb-8 md:mb-10 lg:mb-12'>
                        A prompt engineering platform that allows for Beginners and intermediate level prompt Engineers and AI
                        enthusiasts to create very effective prompts that gets them expacted outcomes using  Popular Large Language Model
                    </p>
                    <img  src={caseimage2} alt="case study image" />
                </div>
            </div>
            <div style={{aspectRatio: '2/0.9'}}>
                <img className='w-full h-full block' src={caseimage3} alt="case study image" />
            </div>
        </section>
        <section className='h-[550px] px-[5%] flex flex-col md:flex-row gap-8'>
            <div className='flex-1 rounded-2xl bg-[linear-gradient(90deg,#012772,#0046cc)]'></div>
            <div className='flex-1 flex flex-col gap-8'>
                <div className='flex-1 rounded-2xl bg-[linear-gradient(90deg,#012772,#0046cc)]'></div>
                <div className='flex-1 rounded-2xl bg-[linear-gradient(90deg,#012772,#0046cc)]'></div>
            </div>
        </section>
        <Cta 
            title="Ready to put AI to work?" 
            action='Book a call'
        >
            <HiArrowNarrowRight className='inline' />
        </Cta>
    </main>
  )
}
