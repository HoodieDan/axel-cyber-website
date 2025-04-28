import { BsArrowUpRight } from "react-icons/bs";
import heroImg from "../assets/hero-img.svg"
import face1 from "../assets/face1.png"
import face2 from "../assets/face2.png"
import face3 from "../assets/face3.png"
import face4 from "../assets/face4.png"

export default function Hero() {
  return (
    <section className='px-[5%] my-8 sm:my-10 md:my-12 lg:my-16 flex flex-col lg:flex-row justify-between items-center gap-x-0 gap-y-8'>
        <div className='flex-[1.5] lg:flex-1 xl:flex-[1.5]'>
            <p className='mb-6 text-2xl lg:text-3xl xl:text-4xl font-bold text-black'>
                <span className='text-[#3084da]'>The All-in-One</span>
                {" "}Platform<br /> For Private And Secure AI
            </p>
            <p className='mb-6 text-xl font-normal text-black'>
                Axel Cyber is a Dedicated team of Experts from across the globe<br /> committed to building Solutions that drive Business Efficiency<br /> and Growth with AI 
            </p>
            <div className='flex flex-row gap-6 mb-10'>
                <button className='p-3 text-white rounded-xl text-base bg-[linear-gradient(45deg,#0146cc,#012d82)]'>Check our Case Studies</button>
                <button className='p-3 text-black text-base border border-[#0081f1] rounded-xl flex flex-row items-center gap-1 bg-[#edf1fa]'>Discuss a Project <BsArrowUpRight /></button>
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
                <div className='absolute top-0 left-0 z-10 h-[38.5%] w-[39%] text-white bg-[linear-gradient(45deg,#0146cc,#012d82)] rounded-3xl px-6 pt-4'>
                    <p className='text-5xl xl:text-6xl font-semibold'>11+</p>
                    <p className='text-xs mb-4 xl:mb-6'>years plus of experience in solving probelms with AI and Machine Learning Solutions</p>
                    <div className='relative w-full h-2 bg-[#c8c7c7]'>
                        <div className='absolute w-[40%] bg-white top-0 left-0 h-full'></div>
                    </div>
                </div>
                <img className='h-full w-full block' src={heroImg} alt="hero image" />
                <div className='absolute bottom-0 right-0 z-10 h-[38.5%] w-[39%] text-white bg-[linear-gradient(45deg,#0146cc,#012d82)] rounded-3xl p-4 flex flex-col justify-center items-start'>
                    <p className='text-3xl xl:text-4xl font-semibold'>200k +</p>
                    <p className='text-xs'>Have been serviced by solutions we made.</p>
                </div>
            </div>
        </div>  
    </section>
  )
}
