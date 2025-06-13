import {motion} from "motion/react"
import goldfrapp from "../assets/goldfrapp.webp"
import pencil from "../assets/pencil.webp"
import volume from "../assets/volume.webp"
import information from "../assets/information.webp"
import ibm from "../assets/ibm.webp"
import hulu from "../assets/hulu.webp"
import { lazy, Suspense } from "react"

const FaQuoteLeft = lazy(()=> 
  import("lucide-react").then((module) => ({ default: module.Quote }))
)

const FaQuoteRight = lazy(()=> 
  import("lucide-react").then((module) => ({ default: module.Quote }))
)

export default function Clientele() {
  return (
    <section className='py-6 sm:py-8 md:py-10 lg:py-12 flex flex-col md:flex-row gap-6 md:gap-0'>
        <div className='flex-1'>
          <div className='flex justify-start mb-4 sm:mb-6 md:mb-8 lg:mb-10'>
            <div className='flex rounded-lg flex-row py-1 sm:py-2 px-2 sm:px-4 gap-2 items-center border-2 border-[#e1e5e7] 2xl:text-xl'>
              <img 
                src={"/users.png"} 
                alt="user" 
                loading="lazy"
                width={16}
                height={16}
              />
              <p>OUR CLIENTS</p>
            </div>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, ease: "easeInOut" }}
            viewport={{ once: true }} 
            className='w-auto lg:w-[400px] 2xl:w-auto text-[#002366] text-2xl md:text-3xl font-semibold'>
            Several companies have trusted Axel Cybel for thier solutions
          </motion.p>
          <div className='hidden md:block mt-6 sm:mt-8 md:mt-10 lg:mt-12'>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, ease: "easeInOut" }}
            viewport={{ once: true }}
            className='mb-4 text-base text-[#666666] w-auto lg:w-[300px] 2xl:w-auto'>
            <Suspense fallback={<span className="w-3 h-3 inline-block animate-pulse bg-gray-300 rounded-full" />}>
               <FaQuoteLeft  className='text-xs inline rotate-180 -translate-y-1'/>
            </Suspense>{" "}Working with us will unlock results that your deserves to experience
            {" "}
            <Suspense fallback={<span className="w-3 h-3 inline-block animate-pulse bg-gray-300 rounded-full" />}>
              <FaQuoteRight className='text-xs inline -translate-y-1' />
            </Suspense>
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, ease: "easeInOut" }}
            viewport={{ once: true }} 
            className='text-base'>
              <span className='text-[#0081f1]'>Olayinka D. Adeyefa</span>{" "}
              <span className='font-bold'>-</span>{" "}
              <span className='text-[#c0c0c0]'>Co-founder at Axel Cyber</span>
          </motion.p>
          </div>
        </div>
        <div className='flex-1 grid grid-cols-2 md:grid-cols-3 content-around gap-4 md:gap-0'>
          <motion.img
            initial={{ scale: 0}}
            whileInView={{ scale: 1}}
            transition={{ delay: 0.25, ease: "easeInOut" }}
            viewport={{ once: true }} 
            src={goldfrapp} 
            className='w-[125px] h-[30px]'  
            alt="goldfrapp" 
            loading="lazy"
            width={125}
            height={30}
          />
          <motion.img
            initial={{ scale: 0}}
            whileInView={{ scale: 1}}
            transition={{ delay: 0.35, ease: "easeInOut" }}
            viewport={{ once: true }}
            className='w-[125px] h-[30px] place-self-end md:place-self-center' 
            src={pencil} 
            alt="pencil" 
            loading="lazy"
            width={125}
            height={30}
          />
          <motion.img
            initial={{ scale: 0}}
            whileInView={{ scale: 1}}
            transition={{ delay: 0.45, ease: "easeInOut" }}
            viewport={{ once: true }} 
            className='w-[125px] h-[30px] md:place-self-end' 
            src={volume} 
            alt="volume" 
            loading="lazy"
            width={125}
            height={30}
          />
          <motion.img
            initial={{ scale: 0}}
            whileInView={{ scale: 1}}
            transition={{ delay: 0.45, ease: "easeInOut" }}
            viewport={{ once: true }} 
            className='w-[125px] h-[30px] place-self-end md:place-self-start' 
            src={information} 
            alt="information" 
            loading="lazy"
            width={125}
            height={30}
          />
          <motion.img
            initial={{ scale: 0}}
            whileInView={{ scale: 1}}
            transition={{ delay: 0.55, ease: "easeInOut" }}
            viewport={{ once: true }} 
            className='w-[125px] h-[30px]  md:place-self-center' 
            src={ibm} 
            alt="ibm" 
            loading="lazy"
            width={125}
            height={30}
          />
          <motion.img
            initial={{ scale: 0}}
            whileInView={{ scale: 1}}
            transition={{ delay: 0.65, ease: "easeInOut" }}
            viewport={{ once: true }} 
            className='w-[125px] h-[30px] place-self-end' 
            src={hulu} 
            alt="hulu" 
            loading="lazy"
            width={125}
            height={30}
          />
        </div>
        <div className='block md:hidden mt-6 sm:mt-8 md:mt-10 lg:mt-12'>
          <p className='mb-4 text-base text-[#666666] w-auto lg:w-[300px] 2xl:w-auto'>
            <FaQuoteLeft  className='text-xs inline -translate-y-1'/>{" "}
              Working with us will unlock results that your deserves to experience
            {" "}<FaQuoteRight className='text-xs inline -translate-y-1' />
          </p>
          <p className='text-base'>
              <span className='text-[#0081f1]'>Olayinka D. Adeyefa</span>{" "}
              <span className='font-bold'>-</span>{" "}
              <span className='text-[#c0c0c0]'>Co-founder at Axel Cyber</span>
          </p>
          </div>
      </section>
  )
}
