import Cta from '../components/Cta'
import { HiArrowNarrowRight } from "react-icons/hi";
import { IoIosSearch } from "react-icons/io"
import coverPic from "../assets/coverpic.png"
import avatar from "../assets/Avatar.png"
import BlogsComp from '@/components/BlogsComp';

export default function Blog() {
  return (
    <main>
        <div className='px-[5%] py-4 my-6 lg:my-8 xl:my-10 flex flex-col md:flex-row  justify-between gap-2 md:items-center'>
            <p className='text-2xl md:text-3xl lg:text-4xl font-semibold'>Latest Articles Blog</p>
            <div className='relative w-[300px]'>
                <input className='w-full p-3 pl-8 rounded-md border border-[#0046cc]' type='text' />
                <IoIosSearch className='absolute text-2xl left-3 top-[50%] -translate-y-[50%]' />
            </div>
        </div>
        <div className='w-[700px] overflow-scroll lg:overflow-hidden md:w-[90%] ml-[5%] md:mx-[5%] mb-4 md:mb-6 lg:mb-10 flex rounded-full flex-row px-2 py-2 justify-between items-center bg-[#e3e7ea] '>
            <p className='shrink-0 flex-1 text-center rounded-full hover:bg-[linear-gradient(45deg,#032D7F,#0241BA)] p-4 text-xs hover:text-white text-[#4c5c75]'>Financial Services Sector</p>
            <p className='shrink-0 flex-1 text-center rounded-full hover:bg-[linear-gradient(45deg,#032D7F,#0241BA)] p-4 text-xs hover:text-white text-[#4c5c75]'>Healthcare and Med Sciences Sector </p>
            <p className='shrink-0 flex-1 text-center rounded-full hover:bg-[linear-gradient(45deg,#032D7F,#0241BA)] p-4 text-xs hover:text-white text-[#4c5c75]'>Manufacturing Sector</p>
            <p className='shrink-0 flex-1 text-center rounded-full hover:bg-[linear-gradient(45deg,#032D7F,#0241BA)] p-4 text-xs hover:text-white text-[#4c5c75]'>Energy and Utilities Sector</p>
            <p className='shrink-0 flex-1 text-center rounded-full hover:bg-[linear-gradient(45deg,#032D7F,#0241BA)] p-4 text-xs hover:text-white text-[#4c5c75]'>Public Sector</p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 px-[5%]'>
            <BlogsComp 
                coverPic={coverPic}
                title='Introducing Lexxa:Best AI agency in africa'
                profilePic={avatar}
                name='Esther Ebere'
                date='12th June 2021'
                time='3 mins read'
                topics={['Manufacturing', 'Finance', 'Energy']}
            />
            <BlogsComp 
                coverPic={coverPic}
                title='Introducing Lexxa:Best AI agency in africa'
                profilePic={avatar}
                name='Esther Ebere'
                date='12th June 2021'
                time='3 mins read'
                topics={['Manufacturing', 'Finance', 'Energy']}
            />
            <BlogsComp 
                coverPic={coverPic}
                title='Introducing Lexxa:Best AI agency in africa'
                profilePic={avatar}
                name='Esther Ebere'
                date='12th June 2021'
                time='3 mins read'
                topics={['Manufacturing', 'Finance', 'Energy']}
            />
            <BlogsComp 
                coverPic={coverPic}
                title='Introducing Lexxa:Best AI agency in africa'
                profilePic={avatar}
                name='Esther Ebere'
                date='12th June 2021'
                time='3 mins read'
                topics={['Manufacturing', 'Finance', 'Energy']}
            />
            <BlogsComp 
                coverPic={coverPic}
                title='Introducing Lexxa:Best AI agency in africa'
                profilePic={avatar}
                name='Esther Ebere'
                date='12th June 2021'
                time='3 mins read'
                topics={['Manufacturing', 'Finance', 'Energy']}
            />
            <BlogsComp 
                coverPic={coverPic}
                title='Introducing Lexxa:Best AI agency in africa'
                profilePic={avatar}
                name='Esther Ebere'
                date='12th June 2021'
                time='3 mins read'
                topics={['Manufacturing', 'Finance', 'Energy']}
            />
        </div>
        <Cta 
            title="Ready to put AI to work?" 
            action='Book a call'
        >
            <HiArrowNarrowRight className='inline' />
        </Cta>
    </main>
  )
}
