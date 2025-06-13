import {motion} from "motion/react"
import heroImg from "/hero-img.webp"
import face1 from "../assets/face1.png"
import face2 from "../assets/face2.png"
import face3 from "../assets/face3.png"
import face4 from "../assets/face4.png"
import { useNavigate } from "react-router-dom";
import { lazy,Suspense } from "react";


const BsArrowUpRight = lazy(()=>
    import("lucide-react").then((module) => ({ default: module.MoveUpRight }))
)

const itemsVariants = {
    hidden: { opacity: 0, y: 20},
    show: {opacity:1, y: 0, transition: { duration: 0.3, ease: "easeInOut" }}
}

export default function Hero() {
    const navigate = useNavigate()

    const handleNavigation = (route: string) => {
        navigate(route)
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }
    
  return (
    <section className='w-[90%] max-w-screen-xl mx-auto my-8 sm:my-10 md:my-12 lg:my-16 flex flex-col md:flex-row justify-between items-center gap-x-6 lg:gap-x-10 gap-y-8'>
        <div className='flex-1 lg:flex-[1.5] lg:flex-1 xl:flex-[1.5]'>
            <motion.p
                initial="hidden"
                animate="show"
                variants={{
                    hidden: {},
                    show: {
                        transition: {
                            staggerChildren: 0.2,
                            delayChildren: 0.2,
                        },
                    },
                }} 
                className='flex flex-row gap-2 text-center md:text-left text-[#3084da] mb-3 text-2xl sm:text-3xl  md:text-4xl lg:text-5xl xl:text-6xl font-bold'
            >
               <motion.p variants={itemsVariants}>The</motion.p> 
               <motion.p variants={itemsVariants} > AI Solution</motion.p> 
               <motion.p variants={itemsVariants}> Partner</motion.p> 
            </motion.p>
            <motion.p
                initial="hidden"
                animate="show"
                variants={{
                    hidden: {},
                    show: {
                        transition: {
                            staggerChildren: 0.2,
                            delayChildren: 0.4,
                        },
                    },
                }} 
                className='flex gap-2 text-center md:text-left mb-3 md:mb-4 lg:mb-6 text-2xl sm:text-3xl  md:text-4xl lg:text-5xl xl:text-6xl font-bold text-black'
                >
                <motion.p variants={itemsVariants}>That</motion.p> 
                <motion.p variants={itemsVariants}>Delivers</motion.p> 
                <motion.p variants={itemsVariants}>Excellence</motion.p>
            </motion.p>
            <motion.p
                initial={{opacity:0}}
                animate={{opacity:1, transition:{duration:0.5,delay:0.5,ease:"easeInOut"}}} 
                className='text-center md:text-left mb-6 md:mb-8 lg:mb-10 text-base md:text-xl lg:text-2xl font-normal text-black w-auto md:w-[90%]'>
                Axel Cyber is Dedicated team of Experts from acrosss the globe commited to building Solutions that Business Effficency and Growth with AI   
            </motion.p>
            <motion.div
                initial="hidden"
                animate="show"
                variants={{
                    hidden: {},
                    show: {
                        transition: {
                            staggerChildren: 0.2,
                            delayChildren: 0.6,
                        },
                    },
                }} 
                className='flex flex-col md:flex-row gap-4 md:gap-6 mb-6 md:mb-8 lg:mb-10'>
                <motion.button
                    variants={itemsVariants}
                    onClick={() => handleNavigation("/casestudy")} 
                    className='py-3 lg:py-4 px-4 md:px-6 lg:px-8 text-white rounded-md text-base bg-[linear-gradient(45deg,#0146cc,#012d82)] hover:bg-[linear-gradient(45deg,#025aff,#0146cc)] cursor-pointer leading-none transition-all duration-300 ease-linear'>
                    Check our Case studies
                </motion.button>
                <motion.button
                    variants={itemsVariants}
                    onClick={() => handleNavigation("/contact")}
                    className='py-3 lg:py-4 px-4 lg:px-6 text-black text-base border border-[#0081f1] rounded-md flex flex-row items-center justify-center gap-1 bg-[#edf1fa] hover:opacity-70 transition-all duration-300 ease-linear cursor-pointer leading-none'
                >
                    Discuss a Project 
                    <Suspense fallback={<span className="w-3 h-3 inline-block animate-pulse bg-gray-300 rounded-full" />}>
                        <BsArrowUpRight />
                    </Suspense>
                    
                </motion.button>
            </motion.div>
            <div className='flex flex-row items-center'>
                <div className='flex flex-row items-center'>
                    <img className='w-[20px] h-[20px]' src={face1} alt="" />
                    <img className='w-[20px] h-[20px] -translate-x-1' src={face2} alt="" />
                    <img className='w-[20px] h-[20px] -translate-x-2' src={face3} alt="" />
                    <img className='w-[20px] h-[20px] -translate-x-3' src={face4} alt="" />
                </div>
                <p>Join certified soluitons experts by xyz companies</p>
            </div>
        </div>
        <div style={{aspectRatio: "3/2.75"}} className='flex-1 w-full'>
            <div className='w-full h-full relative'>
                <motion.div
                    initial={{opacity:0,x:-30, y:-30}}
                    animate={{opacity:1, x:0, y:0, transition:{duration:0.5,delay:1,ease:"easeInOut"}}} 
                    className='absolute top-0 left-0 z-10 h-[38.5%] w-[39%] text-white bg-[linear-gradient(45deg,#0146cc,#012d82)] rounded-3xl px-6 py-4 justify-between flex flex-col'>
                    <p className='text-3xl md:text-5xl leading-none lg:text-7xl font-semibold'>11+</p>
                    <p className='text-xs'>
                        Years plus of experience in solving probelms with AI and Machnice Learning Solutions
                    </p>
                </motion.div>
                <motion.img
                    initial={{opacity:0}}
                    animate={{opacity:1, transition:{duration:0.5,delay:0.5,ease:"easeInOut"}}}
                    className='h-full w-full block' 
                    src={heroImg} 
                    alt="hero image" 
                    width={500}
                    height={455}
                    loading="eager" 
                    fetchPriority="high"
                    />
                <motion.div
                    initial={{opacity:0,x:30, y:30}}
                    animate={{opacity:1, x:0, y:0, transition:{duration:0.5,delay:1,ease:"easeInOut"}}}  
                    className='absolute bottom-0 right-0 z-10 h-[38.5%] w-[39%] text-white bg-[linear-gradient(45deg,#0146cc,#012d82)] rounded-3xl p-4 flex flex-col justify-center items-start'>
                    <p className='text-3xl xl:text-4xl font-semibold'>5+</p>
                    <p className='text-xs'>
                        Continents serviced by our international team
                    </p>
                </motion.div>
            </div>
        </div>  
    </section>
  )
}
