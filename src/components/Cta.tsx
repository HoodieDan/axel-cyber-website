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
          <div className='relative flex justify-center flex-col gap-4 items-center w-full h-[350px] md:h-[375px] lg:h-[400px] rounded-xl bg-[linear-gradient(45deg,#090328,#0046cc)] text-white'>
            <img className='w-[250px] sm:w-[300px] md:w-[350px] lg:w-[400px] h-[125px] sm:h-[200px] md:h-[250px] lg:h-[300px] absolute right-0 top-0' src={leftbottom} alt="leftbottom" />
            <img className='w-[150px] sm:w-[200px] md:w-[250px] lg:w-[300px] h-[65px] sm:h-[115px] md:h-[165px] lg:h-[215px] absolute left-0 bottom-0' src={righttop} alt="righttop" />
            <p className='text-base sm:text-xl md:text-2xl text-center w-auto md:w-[400px] font-semibold'>{title}</p>
            <button className='p-2 bg-white text-black rounded-md'>
              {action}
              {" "}{children}
            </button>
          </div>
      </section>
  )
}
