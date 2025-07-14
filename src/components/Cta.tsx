import {motion} from "motion/react"
import React from 'react'
import leftbottom from "../assets/leftbottom.png"
import righttop from "../assets/righttop.png"
import { useNavigate } from 'react-router-dom';
interface Props{
    title: React.ReactNode,
    action: string;
    children: React.ReactNode;
}


export default function Cta({title, action, children}: Props) {
  const navigate = useNavigate()

  const handleNavigation = (route: string) => {
        navigate(route)
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

  return (
    <section className='py-10 lg:py-12'>
          <div className='relative flex justify-center flex-col gap-4 items-center w-full h-[350px] md:h-[375px] lg:h-[400px] 2xl:h-[600px] rounded-xl bg-[linear-gradient(45deg,#090328,#0046cc)] text-white'>
            <img className='w-[250px] sm:w-[300px] md:w-[350px] lg:w-[400px] h-[125px] sm:h-[200px] md:h-[250px] lg:h-[300px] absolute right-0 top-0' src={leftbottom} alt="leftbottom" />
            <img className='w-[150px] sm:w-[200px] md:w-[250px] lg:w-[300px] h-[65px] sm:h-[115px] md:h-[165px] lg:h-[215px] absolute left-0 bottom-0' src={righttop} alt="righttop" />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{delay:0.25, ease: "easeInOut" }}
              viewport={{ once: true }} 
              className="flex flex-col gap-4 lg:gap-8 items-center">
            <p className='text-base sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-center font-medium'>{title}</p>
            <button
              onClick={() => handleNavigation("/contact")} 
              className='flex items-center gap-2 py-4 md:py-3 px-2 md:px-4 lg:px-6 bg-white text-black rounded-md hover:opacity-85 transition-all duration-300 ease-linear cursor-pointer'>
              {action}
              {" "}{children}
            </button>
            </motion.div>
          </div>
      </section>
  )
}
