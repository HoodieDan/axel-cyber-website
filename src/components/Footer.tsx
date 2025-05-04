import { BsArrowDownRight } from "react-icons/bs";
import { CiInstagram } from "react-icons/ci"
import { FaXTwitter } from "react-icons/fa6"
import { MdEmail } from 'react-icons/md';

export default function Footer() {
  return (
    <footer className='px-[5%] py-6 sm:py-8 md:py-10 lg:py-12'>
        <div className='relative flex flex-row justify-between border-b-2 border-b-[#3084da] mb-8'>
            <p className='text-2xl w-[250px] 2xl:w-auto font-semibold'>Let's Connects and work together</p>
            {/* <BsArrowDownRight  className='text-3xl -translate-x-12 md:-translate-x-20 lg:-translate-x-24'/> */}
            <div className="h-[125px] md:h-[150px] lg:h-[200px] 2xl:h-[300px] w-[125px] md:w-[150px] lg:w-[200px] 2xl:w-[400px]">
                <div className="relative translate-y-[32.5%] md:translate-y-[25%] h-full w-full">
                    <BsArrowDownRight  className='font-semibold absolute top-0 left-0 text-2xl md:text-3xl lg:text-4xl'/>
                    <div className='cursor-pointer leading-none text-xs md:text-base leading-none px-4 absolute bottom-0 right-0 w-[75px] lg:w-[100px] 2xl:w-[200px] h-[75px] lg:h-[100px] 2xl:h-[200px] text-center rounded-full bg-[#052377] hover:bg-white active:bg-white text-white hover:text-[#052377] active:text-[#052377] active:border-2 hover:border-2 hover:border-[#052377] active:border-[#052377] flex justify-center items-center transition-all duration-300 ease-linear'>
                        <p>Reach out to us</p>
                    </div>
                </div>
            </div>

        </div>
        <div className='flex flex-col md:flex-row gap-6 items-start md:items-center'>
            <div className='p-4 rounded-2xl flex flex-row items-center gap-2 border-[1.5px] border-[#404040]'>
                <MdEmail className='text-[#404040]' />
                <p>lexxa@designagency.com</p>
            </div>
            <div className='p-4 rounded-2xl flex flex-row items-center gap-2 border-[1.5px] border-[#404040]'>
                <CiInstagram className='text-[#404040]' />
                <p>lexxadesigns</p>
            </div>
            <div className='p-4 rounded-2xl flex flex-row items-center gap-2 border-[1.5px] border-[#404040]'>
                <FaXTwitter className='text-[#404040]' />
                <p>lexxadesigns</p>
            </div>
        </div>
    </footer>
  )
}
