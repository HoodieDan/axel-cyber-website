import {motion} from 'motion/react'
import Clientele from '../components/Clientele'
import Cta from '../components/Cta';
import heroImg from "../assets/about-hero.webp"
import abt1 from "../assets/abt-exl.webp"
import abt2 from "../assets/abt-exl1.webp"

import abt3 from "../assets/exclude.webp"
import teamImg from "../assets/teammember.webp"
import heroImg2 from "../assets/aboutus-image.webp"
import { useNavigate } from 'react-router-dom';
import { lazy, Suspense } from 'react';


const BsArrowUpRight = lazy(() =>
    import("lucide-react").then(module => ({ default: module.MoveUpRight  }))
)

const RiArrowRightSLine = lazy(() =>
    import("lucide-react").then(module => ({ default: module.ChevronRight }))
)

export default function Aboutus() {
    const navigate = useNavigate()

    const handleNavigation = (path: string) => {
        navigate(path)
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }
    interface TeamMemberProps{
        name: string;
        role: string;
        img: string;
    }
    
    function TeamMember({name, role, img}: TeamMemberProps) {
        return (
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeInOut" } }}
                viewport={{ once: true }} 
            >
                <img 
                    className='block mb-2 w-full' 
                    src={img} 
                    alt={name} 
                    loading='lazy'
                    width={302}
                    height={320}
                />
                <p className='mb-2 text-xl font-semibold'>{name}</p>
                <p className='text-[#0081f1] text-base font-normal'>{role}</p>
            </motion.div>
        )
    }
    

  return (
    <main>
        <section  className='px-[5%] mx-auto my-8'>
            <div className='block md:hidden bg-white mb-4'>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeInOut" } }} 
                    className='text-2xl text-center font-semibold text-black mb-1 xl:mb-2 w-auto xl:w-[70%]'>
                    We Bring The Future of AI To You With Our Expertise 
                </motion.p>
                <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0, transition: { duration: 0.3,delay:0.15, ease: "easeInOut" } }}
                    className='text-base text-center font-normal text-black]'>
                    Lexxa empowers every enterprise to build amazing products and capture true business value with AI language
                </motion.p>
            </div>
        </section>
        <section className='px-[5%] mx-auto relative my-8 sm:my-10 md:my-12 lg:my-16'>
          <div className='hidden md:block absolute top-0 left-[5%] bg-white w-[40%] rounded-br-2xl pr-2 xl:pr-4 pt-0 lg:pt-6'>
            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeInOut" } }} 
                className='text-4xl font-medium text-black leading-none mb-2 md:mb-8 lg:mb-3'>
                We Bring The Future of AI<br /> To You With Our Expertise 
            </motion.p>
            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeInOut",delay:0.15 } }}
                className='text-xs md:text-xl font-medium text-black'>
                Axel Cyber
            </motion.p>
          </div>
          <div className='flex w-[80%] md:w-auto gap-[5%] sm:gap-2 md:gap-4 xl:gap-6 absolute top-[5%] md:top-[7%] right-[10%] 2xl:right-[5%] md:right-[7%]'>
             <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1, transition: { duration:0.5,delay:1, ease: "easeInOut" } }} 
                className='flex-[3] glassmorphism h-[25vw] md:h-[75px] lg:h-[100px] xl:h-[125px] md:w-[250px] lg:w-[325px] xl:w-[400px] rounded-2xl'
            >     
            </motion.div>
            <motion.div 
                initial={{ scale: 0 }}
                animate={{ scale: 1, transition: { duration:0.5,delay:0.5, ease: "easeInOut" } }}
                className='flex-1 h-[25vw] md:h-[75px] lg:h-[100px] xl:h-[125px] md:w-[85px] lg:w-[125px] xl:w-[150px] bg-white rounded-2xl'>                
            </motion.div>
           </div>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1, transition: { duration:0.5,delay: 1.5, ease: "easeInOut" } }} 
            className='absolute p-4 rounded-2xl bottom-[5%] md:bottom-[7%] left-[10%] md:left-[7%] 2xl:left-[5%] bg-white w-[80%] md:w-[60%] md:w-[47%] lg:w-[47.7%] xl:w-[60%]'>
            <p className='text-xl xl:text-2xl mb-2 xl:mb-4 font-semibold'>OUR TEAM</p>
            <p className='text-base xl:text-base font-normal text-[#4c5c75]'>
                Axel Cyber is a Dedicated team of Experts from across the globe comitted to building Solutions that drive Business Efficiency and Growth with AI
            </p>
          </motion.div>
          <div className='bg-white hidden md:flex flex-row gap-2 xl:gap-4 2xl:gap-6 absolute bottom-0 right-[5%] 2xl:right-[3%] rounded-tl-md'>
            <motion.div 
                initial={{ opacity: 0, y:20 }}
                animate={{ opacity: 1,y: 0, transition: { duration:0.5,delay:1.5, ease: "easeInOut" } }}
                className='text-white p-1 md:p-3 2xl:p-2 h-[90px] md:h-[85px] xl:h-[102.5px] 2xl:h-[150px]  w-[92.5px] lg:w-[125px] xl:w-[150px] 2xl:w-[175px] bg-[linear-gradient(45deg,#0146cc,#012a7a)] rounded-2xl'>
                <p className='text-sm md:text-2xl xl:text-3xl 2xl:text-2xl font-semibold mb-0 md:mb-1 2xl:mb-0'>200K+</p>
                <p className='text-xs font-normal'>People have been using our product daily on a monthly basis</p>
            </motion.div>
            <motion.div 
                initial={{ opacity: 0, y:20 }}
                animate={{ opacity: 1,y: 0, transition: { duration:0.5,delay:1.75, ease: "easeInOut" } }}
                className='text-white p-1 md:p-3 2xl:p-2 h-[90px] md:h-[85px] xl:h-[102.5px] 2xl:h-[150px] w-[92.5px] lg:w-[125px] xl:w-[150px] 2xl:w-[175px] bg-[linear-gradient(45deg,#0146cc,#012a7a)] rounded-2xl'>
                <p className='text-sm md:text-2xl xl:text-3xl 2xl:text-2xl font-semibold mb-0 md:mb-1 2xl:mb-0'>$700K</p>
                <p className='text-xs font-normal'>Monthly revenue made from Lexxa AI Agency at average</p>
            </motion.div>
          </div>
          <motion.img
            initial={{ opacity: 0}}
            animate={{ opacity: 1, transition: { duration: 0.5, ease: "easeInOut" }}}
            className="hidden md:block w-full about-hero-img"  
            src={heroImg} 
            alt="hero image"
            loading='eager'
            fetchPriority='high'
            width={1280}
            height={452}  
        />
          <motion.img
            initial={{ opacity: 0}}
            animate={{ opacity: 1, transition: { duration: 0.5, ease: "easeInOut" }}} 
            className="block md:hidden w-full" 
            src={heroImg2} 
            loading='eager'
            fetchPriority='high'
            width={576}
            height={780}
            />    
        </section>
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1,y:0, transition: { duration: 0.5,delay:0.25, ease: "easeInOut" }}}
            viewport={{ once: true }}
            className='px-[5%] mx-auto bg-white flex md:hidden flex-row gap-4'>
            <div className='flex-1 text-white px-3 py-3 h-[120px] w-[185px] bg-[linear-gradient(45deg,#0146cc,#012a7a)] rounded-2xl'>
                <p className='text-4xl font-semibold'>200k+</p>
                <p className='text-base font-normal'>People have been using our product daily on a monthly basis</p>
            </div>
            <div className='flex-1 text-white px-3 py-3 h-[120px] w-[185px] bg-[linear-gradient(45deg,#0146cc,#012a7a)] rounded-2xl'>
                <p className='text-4xl font-semibold'>$700k</p>
                <p className='text-base font-normal'>Monthly revenue made from Lexxa AI Agency at average</p>
            </div>
        </motion.div>
        <section className='px-[5%] mx-auto py-12'>
             <div className='flex justify-center mb-8 lg:mb-10'>
                 <div className='flex rounded-lg flex-row p-2 gap-2 items-center border-2 border-[#e1e5e7]'>
                    <img 
                        src={"/stars.png"} 
                        alt="stars" 
                        loading='lazy'
                        width={16}
                        height={16}
                    />
                    <p className='text-sm leading-none'>OUR TEAM</p>
                 </div>
             </div>
             <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{delay:0.25, ease: "easeInOut" }}
                viewport={{ once: true }} 
                className='text-center text-3xl mx-auto lg:text-4xl font-bold mb-10 lg:mb-12 xl:mb-16'>
                Meet the team behind Lexxa
             </motion.p>
             <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
                <TeamMember
                    name='Olivia Rhye'
                    role='Founder & CEO'
                    img={teamImg}
                />
                <TeamMember
                    name='Olivia Rhye'
                    role='Founder & CEO'
                    img={teamImg}
                />
                <TeamMember
                    name='Olivia Rhye'
                    role='Founder & CEO'
                    img={teamImg}
                />
                <TeamMember
                    name='Olivia Rhye'
                    role='Founder & CEO'
                    img={teamImg}
                />
                <TeamMember
                    name='Olivia Rhye'
                    role='Founder & CEO'
                    img={teamImg}
                />
                <TeamMember
                    name='Olivia Rhye'
                    role='Founder & CEO'
                    img={teamImg}
                />
                <TeamMember
                    name='Olivia Rhye'
                    role='Founder & CEO'
                    img={teamImg}
                />
                <TeamMember
                    name='Olivia Rhye'
                    role='Founder & CEO'
                    img={teamImg}
                />
            </div>
        </section>
        <div className='bg-[#f9f9f9]'>   
        <section className='px-[5%] mx-auto py-6 sm:py-8 md:py-10 lg:py-12'>
            <div className='flex justify-center mb-8 lg:mb-10'>
                <div className='flex rounded-lg flex-row py-2 px-4 gap-2 items-center border-2 border-[#e1e5e7]'>
                    <img 
                        className='shrink-0' 
                        src={"/stars.png"} 
                        alt="stars" 
                        loading='lazy'
                        width={16}
                        height={16}
                        />
                    <p className='text-sm leading-none'>ABOUT US</p>
                </div>
            </div>
            <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{delay:0.25, ease: "easeInOut" }}
                viewport={{ once: true }}
                className='text-center text-3xl lg:text-4xl mx-auto font-bold mb-10 lg:mb-12'>
                We're driven by cutting-<br />edge research
            </motion.p>
            <div className='relative flex flex-col md:flex-row gap-6'>
                <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1}}
                    transition={{delay:0.25,duration:0.5, ease: "easeInOut" }}
                    viewport={{ once: true }} 
                    className='flex-1 flex justify-center item-center lg:hidden aspect-[1/1]'>
                    <img 
                        className='w-full h-full object-cover rounded-2xl' 
                        src={abt3} 
                        alt='abt3'
                        loading='lazy'
                        width={900}
                        height={820} 
                    />
                </motion.div>
                <motion.div 
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1}}
                    transition={{delay:0.25,duration:0.5, ease: "easeInOut" }}
                    viewport={{ once: true }} 
                    className='hidden lg:block flex-[1.4] aspect-[2/1.25] 2xl:aspect-[2/1.85]'>
                    <img 
                        className='w-full h-full block' 
                        src={abt1} 
                        alt={"abt 1"}
                        loading='lazy'
                        width={753}
                        height={475} 
                    />
                </motion.div>
                <motion.div 
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1}}
                    transition={{delay:0.5,duration:0.5, ease: "easeInOut" }}
                    viewport={{ once: true }} 
                    className='hidden lg:block flex-1 self-start aspect-[2/0.935] 2xl:aspect-[2/1.39]'>
                    <img 
                        className=' h-full w-full block' 
                        src={abt2} 
                        alt={"abt 2"} 
                        loading='lazy'
                        width={500}
                        height={250}    
                    />
                </motion.div>
                <motion.div 
                    initial={{ opacity: 0, y:20 }}
                    whileInView={{ opacity: 1, y:0}}
                    transition={{delay:0.75,duration:0.5, ease: "easeInOut" }}
                    viewport={{ once: true }} 
                    className='hidden lg:block absolute bottom-0 right-0 bg-white w-1/2'>
                    <p className='text-2xl xl:text-3xl font-semibold mb-3 xl:mb-2'>We're driven by cutting-edge research</p>
                    <p className='text-base xl:text-xl font-normal text-[#4c5c75] mb-4'>
                        At Lexxa, we live at the forefront of ML/AI research to brong the latest advencments in language AI to our platform, and make your company grow with this
                    </p>
                    <div className='flex flex-row gap-6'>
                        <button
                            onClick={() => handleNavigation('/solutions')}  
                            className='py-2 px-6 text-white rounded-xl text-base flex flex-row items-center justify-center gap-1  bg-[linear-gradient(45deg,#0146cc,#012d82)] hover:opacity-80 active:opacity transition-all duration-300 ease-linear cursor-pointer'>
                            Check Our Work
                            <Suspense fallback={<span className="w-3 h-3 inline-block animate-pulse bg-gray-300 rounded-full" />}>
                                <RiArrowRightSLine className='size-4'/>
                            </Suspense>
                        </button>
                        <button 
                            onClick={() => handleNavigation('/contact')}
                            className='py-2 px-6 text-black text-base border border-[#0081f1] rounded-xl flex flex-row items-center justify-center gap-1 bg-[#edf1fa] hover:bg-white active:bg-white transition-all duration-300 ease-linear cursor-pointer'>
                            Discuss Your Project
                            <Suspense fallback={<span className="w-3 h-3 inline-block animate-pulse bg-gray-300 rounded-full" />}>
                                <BsArrowUpRight  className='size-4'/>
                            </Suspense>
                        </button>
                    </div>
                </motion.div>
            </div>
            <motion.div 
                initial={{ opacity: 0, y:20 }}
                whileInView={{ opacity: 1, y:0}}
                transition={{delay:0.25,duration:0.5, ease: "easeInOut" }}
                viewport={{ once: true }} 
                className='lg:hidden mt-12'>
                    <p className='text-2xl md:text-3xl font-semibold mb-2'>We're driven by cutting-edge research</p>
                    <p className='text-base md:text-xl font-normal text-[#4c5c75] mb-4'>
                        At Lexxa, we live at the forefront of ML/AI research to brong the latest advencments in language AI to our platform, and make your company grow with this
                    </p>
                    <div className='flex flex-col sm:flex-row gap-4 md:gap-6'>
                        <button  className='flex justify-center items-center flex-1 p-2 md:p-3 text-white rounded-xl text-sm md:text-base flex flex-row items-center gap-1  bg-[linear-gradient(45deg,#0146cc,#012d82)]'>
                            Check Our Work
                            <Suspense fallback={<span className="w-3 h-3 inline-block animate-pulse bg-gray-300 rounded-full" />}>
                                <RiArrowRightSLine className='-translate-y-[5%] size-4'/>
                            </Suspense>
                        </button>
                        <button className='flex justify-center items-center flex-1 text-sm md:text-base p-2 md:p-3 text-black text-base border border-[#0081f1] rounded-xl flex flex-row items-center gap-1 bg-[#edf1fa]'>
                            Discuss Your Project
                            <Suspense fallback={<span className="w-3 h-3 inline-block animate-pulse bg-gray-300 rounded-full" />}>
                                <BsArrowUpRight  className='size-4'/>
                            </Suspense>
                        </button>
                    </div>
            </motion.div>
        </section>
        </div>
        <section className='px-[5%] mx-auto py-10 lg:py-12'>
            <div className='flex justify-center md:justify-start mb-4 sm:mb-6 md:mb-8 lg:mb-10'>
                <div className='flex rounded-lg flex-row p-2 gap-2 items-center border-2 border-[#e1e5e7]'>
                    <img 
                        className='shrink-0' 
                        src={"/users.png"} 
                        alt="user" 
                        loading='lazy'
                        width={16}
                        height={16}    
                    />
                    <p className='text-sm'>OUR STORY</p>
                </div>
            </div>
            <div className='flex flex-col md:flex-row gap-6 md:gap-8 lg:gap-16 xl:gap-20 items-center'>
                <div className='flex-1'>
                    <motion.p
                        initial={{ opacity: 0,y:20 }}
                        whileInView={{ opacity: 1,y:0}}
                        transition={{delay:0.25,duration:0.5, ease: "easeInOut" }}
                        viewport={{ once: true }}  
                        className='text-center md:text-start text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-black font-semibold mb-2 md:mb-4 lg:mb-12'>
                        Cultivating AI & Machine Learning solutions to power the evolution for your company culture
                    </motion.p>
                    <motion.p
                        initial={{ opacity: 0,y:20 }}
                        whileInView={{ opacity: 1,y:0}}
                        transition={{delay:0.25,duration:0.5, ease: "easeInOut" }}
                        viewport={{ once: true }}  
                        className='text-center md:text-start text-base md:text-xl font-normal text-[#4c5c75]'>
                        We are AI solution Designers and ML/AI engineers, thinkers, and champions who are passionate about exploring the potential of language AI to make our world a better
                        place. With diverse experience and perspectives, we work trogether to bring advancements in language AI to developers everywhere.
                    </motion.p>
                </div>
                <div className='self-stretch flex-1 flex flex-col gap-4'>
                    <motion.div 
                        initial={{ opacity: 0, y:20 }}
                        whileInView={{ opacity: 1,y:0}}
                        transition={{delay:0.25,duration:0.5, ease: "easeInOut" }}
                        viewport={{ once: true }} 
                        className='w-full relative pb-4 border-b border-black flex justify-end md:justify-center items-center'>
                        <p className='text-[#14388f] text-2xl md:text-3xl lg:text-4xl absolute left-0 top-[50%] -translate-y-[50%]'>5+</p>
                        <p className='text-base md:text-xl font-normal'>Countries worked in</p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y:20 }}
                        whileInView={{ opacity: 1,y:0}}
                        transition={{delay:0.25,duration:0.5, ease: "easeInOut" }}
                        viewport={{ once: true }} 
                        className='relative pb-4 border-b border-black flex justify-end md:justify-center items-center'>
                        <p className='text-[#14388f] text-2xl md:text-3xl lg:text-4xl absolute left-0 top-[50%] -translate-y-[50%]'>12</p>
                        <p className='text-base md:text-xl font-normal'>Years of experience</p>
                    </motion.div>
                    <motion.div 
                        initial={{ opacity: 0, y:20 }}
                        whileInView={{ opacity: 1,y:0}}
                        transition={{delay:0.25,duration:0.5, ease: "easeInOut" }}
                        viewport={{ once: true }}
                        className='relative pb-4 border-b border-black flex justify-end md:justify-center items-center'>
                        <p className='text-[#14388f] text-2xl md:text-3xl lg:text-4xl absolute left-0 top-[50%] -translate-y-[50%]'>30</p>
                        <p className='text-base md:text-xl font-normal'>Experienced team members</p>
                    </motion.div>
                    <motion.div 
                        initial={{ opacity: 0, y:20 }}
                        whileInView={{ opacity: 1,y:0}}
                        transition={{delay:0.25,duration:0.5, ease: "easeInOut" }}
                        viewport={{ once: true }}
                        className='relative pb-4 border-b border-black flex justify-end md:justify-center items-center'>
                        <p className='text-[#14388f] text-2xl md:text-3xl lg:text-4xl absolute left-0 top-[50%] -translate-y-[50%]'>180+</p>
                        <p className='text-base md:text-xl font-normal'>Clients worked for</p>
                    </motion.div>
                    <motion.div 
                        initial={{ opacity: 0, y:20 }}
                        whileInView={{ opacity: 1,y:0}}
                        transition={{delay:0.25,duration:0.5, ease: "easeInOut" }}
                        viewport={{ once: true }}
                        className='relative pb-4 border-b border-black flex justify-end md:justify-center items-center'>
                        <p className='text-[#14388f] text-2xl md:text-3xl lg:text-4xl absolute left-0 top-[50%] -translate-y-[50%]'>5.1k+</p>
                        <p className='text-base md:text-xl font-normal'>Screens completed</p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y:20 }}
                        whileInView={{ opacity: 1,y:0}}
                        transition={{delay:0.25,duration:0.5, ease: "easeInOut" }}
                        viewport={{ once: true }}
                        className='relative pb-4 border-b border-black flex justify-end md:justify-center items-center'>
                        <p className='text-[#14388f] text-2xl md:text-3xl lg:text-4xl absolute left-0 top-[50%] -translate-y-[50%]'>$31k+</p>
                        <p className='text-base md:text-xl font-normal'>Screens completed</p>
                    </motion.div>
                </div>
            </div>  
        </section>
        <div className='px-[5%] mx-auto'>
        <Clientele />
        <Cta 
            title="Secure your compay's future by Partnering with Axel Cyber" 
            action='Request a Demo'
        >
            <Suspense fallback={<span className="w-3 h-3 inline-block animate-pulse bg-gray-300 rounded-full" />}>
                <BsArrowUpRight className='inline size-4' />
            </Suspense>
        </Cta>
        </div>
    </main>
  )
}
