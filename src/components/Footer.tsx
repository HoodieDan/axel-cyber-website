import {motion} from "motion/react"
import { lazy, Suspense } from "react";
import { useNavigate } from "react-router-dom";
import { Mail, Instagram, Linkedin } from "lucide-react";
const BsArrowDownRight = lazy(() =>
    import("lucide-react").then(module => ({ default: module.MoveDownRight }))
)


export default function Footer() {
    const navigate = useNavigate()

    const handleNavigation = (route: string) => {
        navigate(route)
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }
  return (
    <motion.footer
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{delay:0.25, ease: "easeInOut" }}
        viewport={{ once: true }} 
        className='px-[5%] mx-auto py-10 lg:py-12 w-full'
    >
        <div className='relative flex flex-row justify-between border-b-2 border-b-[#3084da] mb-8'>
            <p className='text-2xl lg:text-3xl xl:text-4xl font-medium'>Let's connects and<br/> work together</p>
            <div className="h-[125px] md:h-[150px] lg:h-[200px] 2xl:h-[300px] w-[125px] md:w-[150px] lg:w-[200px] 2xl:w-[400px]">
                <div className="relative translate-y-[32.5%] md:translate-y-[25%] h-full w-full">
                    <Suspense fallback={<span className="w-5 h-5 inline-block animate-pulse bg-gray-300 rounded-full" />}>
                        <BsArrowDownRight  className='font-semibold absolute top-0 left-0 h-10 sm:h-12 w-10 sm:w-12'/>
                    </Suspense>
                    <div 
                        onClick={() => handleNavigation("/contact")}
                        className='cursor-pointer leading-none text-xs md:text-base px-4 absolute bottom-0 right-0 w-[75px] lg:w-[100px] 2xl:w-[200px] h-[75px] lg:h-[100px] 2xl:h-[200px] text-center rounded-full bg-[#052377] hover:bg-white active:bg-white text-white hover:text-[#052377] active:text-[#052377] active:border-2 hover:border-2 hover:border-[#052377] active:border-[#052377] flex justify-center items-center transition-colors duration-300 ease-in-out'>
                        <p>Reach out to us</p>
                    </div>
                </div>
            </div>

        </div>
        <div className='flex flex-col md:flex-row gap-6 items-start md:items-center'>
            <a
                href="mailto:info@axelcyber.com"
                className="hover:opacity-85 active:opacity-85 px-6 py-2 rounded-xl flex flex-row items-center justify-center gap-2 border-[1.5px] text-[#404040] border-[#404040] transition-opacity duration-300 ease-in-out cursor-pointer"
            >
                <Suspense fallback={<span className="w-5 h-5 inline-block animate-pulse bg-gray-300 rounded-full" />}>
                    <Mail className="size-4" />
                </Suspense>
                <p>info@axelcyber.com</p>
            </a> 
            <a target="_blank"  href="https://www.instagram.com/axelcyberltd">
                <div className='hover:opacity-85 active:opacity-85 px-6 py-2 rounded-xl flex flex-row items-center justify-center gap-2 border-[1.5px] text-[#404040] border-[#404040] transition-opacity duration-300 ease-in-out cursor-pointer'>
                    <Suspense fallback={<span className="w-5 h-5 inline-block animate-pulse bg-gray-300 rounded-full" />}>
                        <Instagram aria-hidden="true" focusable="false" className="size-4" />         
                    </Suspense>
                    <p>axelcyberltd</p>
                </div>
            </a>
            <a target="_blank" href="https://www.twitter.com/axelcyberltd">
                <div className='hover:opacity-85 active:opacity-85 px-6 py-2 rounded-xl flex flex-row items-center justify-center gap-2 border-[1.5px] text-[#404040] border-[#404040] transition-opacity duration-300 ease-in-out cursor-pointer'>
                    <Suspense fallback={<span className="w-5 h-5 inline-block animate-pulse bg-gray-300 rounded-full" />}>
                        <Linkedin aria-hidden="true" focusable="false" className="size-4" />
                    </Suspense>
                    <p>lexxadesigns</p>
                </div>
            </a>
        </div>
    </motion.footer>
  )
}
