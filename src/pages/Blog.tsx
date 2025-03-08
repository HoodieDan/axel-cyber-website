import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Cta from '../components/Cta'
import { HiArrowNarrowRight } from "react-icons/hi";
import { IoIosSearch } from "react-icons/io"
export default function Blog() {
  return (
    <main>
        <Header />
        <div className='px-[5%] py-4 my-6 lg:my-8 xl:my-10 flex  justify-between items-center'>
            <p className='text-2xl md:text-3xl lg:text-4xl font-semibold'>Latest Articles Blog</p>
            <div className='relative w-[300px]'>
                <input className='w-full p-3 pl-8 rounded-md border border-[#0046cc]' type='text' />
                <IoIosSearch className='absolute text-2xl left-3 top-[50%] -translate-y-[50%]' />
            </div>
        </div>
        <div className='mx-[5%] mb-4 md:mb-6 lg:mb-10 flex rounded-full flex-col md:flex-row px-2 py-2 justify-between items-center bg-[#e3e7ea]'>
            <p className=' flex-1 text-center rounded-full hover:bg-[linear-gradient(45deg,#032D7F,#0241BA)] p-4 text-sm hover:text-white text-[#4c5c75]'>Financial Services Sector</p>
            <p className='flex-1 text-center rounded-full hover:bg-[linear-gradient(45deg,#032D7F,#0241BA)] p-4 text-sm hover:text-white text-[#4c5c75]'>Healthcare and Med Sciences Sector </p>
            <p className='flex-1 text-center rounded-full hover:bg-[linear-gradient(45deg,#032D7F,#0241BA)] p-4 text-sm hover:text-white text-[#4c5c75]'>Manufacturing Sector</p>
            <p className='flex-1 text-center rounded-full hover:bg-[linear-gradient(45deg,#032D7F,#0241BA)] p-4 text-sm hover:text-white text-[#4c5c75]'>Energy and Utilities Sector</p>
            <p className='flex-1 text-center rounded-full hover:bg-[linear-gradient(45deg,#032D7F,#0241BA)] p-4 text-sm hover:text-white text-[#4c5c75]'>Public Sector</p>
        </div>
        <Cta 
            title="Ready to put AI to work?" 
            action='Book a call'
        >
            <HiArrowNarrowRight className='inline' />
        </Cta>
        <Footer />
    </main>
  )
}
