import React from 'react'
import { BsArrowDownRight } from "react-icons/bs";
import { CiInstagram } from "react-icons/ci"
import { FaXTwitter } from "react-icons/fa6"
import { MdEmail } from 'react-icons/md';

export default function Footer() {
  return (
    <footer className='px-[5%] py-6 sm:py-8 md:py-10 lg:py-12'>
        <div className='relative pb-20 flex flex-row justify-between border-b-2 border-b-[#3084da] mb-8'>
            <p className='text-2xl w-[250px] font-semibold'>Let's Connects and work together</p>
            <BsArrowDownRight  className='text-3xl -translate-x-12 md:-translate-x-20 lg:-translate-x-24'/>
            <div className='absolute bottom-0 right-0 translate-y-[50%] w-[100px] h-[100px] text-center rounded-full bg-[#3084d4] text-white flex justtify-center items-center'>
                <p>Reach out to us</p>
            </div>
        </div>
        <div className='flex flex-col md:flex-row gap-6 items-start md:items-center'>
            <div className='p-4 rounded-2xl flex flex-row gap-2 border-[1.5px] border-[#404040]'>
                <MdEmail className='text-[#404040]' />
                <p>lexxa@designagency.com</p>
            </div>
            <div className='p-4 rounded-2xl flex flex-row gap-2 border-[1.5px] border-[#404040]'>
                <CiInstagram className='text-[#404040]' />
                <p>lexxadesigns</p>
            </div>
            <div className='p-4 rounded-2xl flex flex-row gap-2 border-[1.5px] border-[#404040]'>
                <FaXTwitter className='text-[#404040]' />
                <p>lexxadesigns</p>
            </div>
        </div>
    </footer>
  )
}
