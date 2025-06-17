import {motion} from "motion/react"
import { lazy, Suspense } from "react";


interface Props{
    service: string,
    desc: string
}


const ArrowUpRight = lazy(() =>
    import("lucide-react").then((module) => ({ default: module.ArrowUpRight }))
)
export default function AdditionalServices({ service, desc }: Props) {
  return (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{delay:0.25, ease: "easeInOut" }}
        viewport={{ once: true }} 
        className='flex flex-row justify-between gap-2 items-center py-3 md:py-5 border-b border-[#4c5c75]'>
        <p className='flex-[2] md:flex-1 text-base md:text-xl lg:text-2xl font-semibold'>{service}</p>
        <p className='hidden md:block flex-1 text-xs md:text-base text-[#2f2f2f]'>{desc}</p>
        <div className="flex-1 flex justify-end items-center">
          <Suspense fallback={<span className="w-5 h-5 inline-block animate-pulse bg-gray-300 rounded-full" />}>
            <ArrowUpRight className='shrink-0 text-3xl md:text-5xl' />
          </Suspense>
        </div>
    </motion.div>
  )
}
