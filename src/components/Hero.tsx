import { BsArrowUpRight } from "react-icons/bs";
import heroImg from "../assets/hero-img.svg"
import face1 from "../assets/face1.png"
import face2 from "../assets/face2.png"
import face3 from "../assets/face3.png"
import face4 from "../assets/face4.png"
import { useNavigate } from "react-router-dom";

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
            <p className='text-center md:text-left text-[#3084da] mb-3 text-2xl sm:text-3xl  md:text-4xl lg:text-5xl xl:text-6xl font-bold'>
               The AI Solution Partner 
            </p>
            <p className='text-center md:text-left mb-3 md:mb-4 lg:mb-6 text-2xl sm:text-3xl  md:text-4xl lg:text-5xl xl:text-6xl font-bold text-black'>
               That Delivers Excellence
            </p>
            <p className='text-center md:text-left mb-6 md:mb-8 lg:mb-10 text-base md:text-xl lg:text-2xl font-normal text-black w-auto md:w-[90%]'>
                Axel Cyber is Dedicated team of Experts from acrosss the globe commited to building Solutions that Business Effficency and Growth with AI   
            </p>
            <div className='flex flex-col md:flex-row gap-6 mb-6 md:mb-8 lg:mb-10'>
                <button 
                    onClick={() => handleNavigation("/casestudy")} 
                    className='w-full md:w-[198px] 2xl:w-[300px] h-[48px] 2xl:h-[84px] text-white hover:text-[#0146cc] active:text-[#0146cc] rounded-md text-base bg-[linear-gradient(45deg,#0146cc,#012d82)]  hover:bg-none active:bg-none hover:bg-white active:bg-white hover:border-2 active:border-2 hover:border-[#0146cc] actvie:border-[#0146cc] transitilon-all duration-300 ease-linear cursor-pointer leading-none'>
                    Check our Case studies
                </button>
                <button
                    onClick={() => handleNavigation("/contact")} 
                    className='w-full md:w-[198px] 2xl:w-[300px] h-[48px] 2xl:h-[84px] text-black text-base border border-[#0081f1] rounded-md flex flex-row items-center justify-center gap-1 bg-[#edf1fa] active:bg-[#0081f1] hover:bg-[#0081f1] active:border-0 hover:border-0 active:text-white hover:text-white transition-all duration-300 ease-linear cursor-pointer leading-none'>
                    Discuss a Project <BsArrowUpRight />
                </button>
            </div>
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
                <div className='absolute top-0 left-0 z-10 h-[38.5%] w-[39%] text-white bg-[linear-gradient(45deg,#0146cc,#012d82)] rounded-3xl px-6 py-4 justify-between flex flex flex-col'>
                    <p className='text-3xl md:text-5xl leading-none lg:text-7xl font-semibold'>11+</p>
                    <p className='text-xs'>
                        Years plus of experience in solving probelms with AI and Machnice Learning Solutions
                    </p>
                </div>
                <img className='h-full w-full block' src={heroImg} alt="hero image" />
                <div className='absolute bottom-0 right-0 z-10 h-[38.5%] w-[39%] text-white bg-[linear-gradient(45deg,#0146cc,#012d82)] rounded-3xl p-4 flex flex-col justify-center items-start'>
                    <p className='text-3xl xl:text-4xl font-semibold'>5+</p>
                    <p className='text-xs'>
                        Continents serviced by our international team
                    </p>
                </div>
            </div>
        </div>  
    </section>
  )
}
