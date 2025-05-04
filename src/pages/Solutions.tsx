import solutionImg from "../assets/solution-img.png"
import stars from "../assets/stars.png";
import solution1 from "../assets/solution1.png"
import solution2 from "../assets/solution2.png"
import solution3 from "../assets/solution3.png"
import solution4 from "../assets/solution4.png"
import solution5 from "../assets/solution5.png"
import solution6 from "../assets/solution6.png"

import { IoIosArrowDroprightCircle } from "react-icons/io"
import Cta from '@/components/Cta';
import { HiArrowNarrowRight } from 'react-icons/hi';


export default function Solutions() {

    const Project = ({img}:{img: string}) =>{
        return (
            <div className='relative'>
                <img className="w-full" src={img} alt="project image" />
                <IoIosArrowDroprightCircle className='absolute bottom-0 right-0 text-7xl' />
            </div>
        )
    }

  return (
    <main>
        <section className="px-[5%] bg-white py-6 sm:py-8 md:py-10 lg:py-12">
            <p className='text-2xl md:text-3xl font-semibold mb-4 md:mb-8 w-auto md:w-[300px] lg:w-[450px] 2xl:w-auto'>Experience The Future of A Great Company with Our AI Tools</p>
            <div className='relative'>
                <img className="w-full" src={solutionImg} alt='solution image' />
                <p className='hidden md:block text-base md:text-xl absolute -bottom-2 left-[26.5%] md:w-[200px] lg:w-[350px] 2xl:w-[700px]'>
                    Witness some of the great works we've done for our amazing clients around the world, with great design story
                </p>
            </div>
        </section>
        <p className='px-[5%] mb-4 block md:hidden text-base'>
            Witness some of the great works we've done for our amazing clients around the world, with great design story
        </p>
        <section className="px-[5%] bg-white py-6 sm:py-8 md:py-10 lg:py-12 lg:pb-14">
            <div className="flex justify-center mb-4 sm:mb-6 md:mb-8 lg:mb-10">
                <div className="flex rounded-lg flex-row py-1 sm:py-2 px-2 sm:px-4 gap-2 items-center border-2 border-[#e1e5e7]">
                    <img className="shrink-0" src={stars} alt="stars" />
                    <p className="text-sm md:text-base 2xl:text-xl">What we offer</p>
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
            title="Ready to put AI to work?" 
            action='Book a call'
        >
            <HiArrowNarrowRight className='inline' />
        </Cta>
    </main>
  )
}
