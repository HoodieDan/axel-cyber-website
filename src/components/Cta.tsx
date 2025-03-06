import React from 'react'
import leftbottom from "../assets/leftbottom.png"
import righttop from "../assets/righttop.png"
interface Props{
    title: string;
    action: string;
    children: React.ReactNode;
}

export default function Cta({title, action, children}: Props) {
  return (
    <section className='px-[5%] py-6 sm:py-8 md:py-10 lg:py-12'>
          <div className='relative flex justify-center flex-col gap-4 items-center w-full h-[400px] rounded-xl bg-[linear-gradient(45deg,#090328,#0046cc)] text-white'>
            <img className='absolute right-0 top-0' src={leftbottom} alt="leftbottom" />
            <img className='absolute left-0 bottom-0' src={righttop} alt="righttop" />
            <p className='text-2xl text-center w-[400px] font-semibold'>{title}</p>
            <button className='p-2 bg-white text-black rounded-md'>
              {action}
              {" "}{children}
            </button>
          </div>
      </section>
  )
}
