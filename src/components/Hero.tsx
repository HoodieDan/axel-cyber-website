import { BsArrowUpRight } from "react-icons/bs";
import heroImg from "../assets/hero-img.svg"

export default function Hero() {
  return (
    <section className='px-[5%] my-8 sm:my-10 md:my-12 lg:my-16 flex flex-col md:flex-row justify-between items-center gap-x-16 gap-y-8'>
        <div className='lg:flex-[1.5] lg:flex-1 xl:flex-[1.5]'>
            <p className='mb-3 md:mb-4 lg:mb-6 text-xl md:text-2xl w-auto md:w-[250px] xl:w-[375px] md:text-3xl xl:text-4xl font-bold text-black'>
                <span className='text-[#3084da]'>The All-in-One</span> Platform For Private And Secure AI
            </p>
            <p className='mb-6 md:mb-8 lg:mb-10 text-base md:text-xl font-normal text-black w-auto md:w-[300px] lg:w-[375px] xl:w-[470px]'>
                Lexxa brings you cutting-edge multilingual models, advanced retrieval and an AI
            </p>
            <div className='flex flex-row gap-6 mb-6 md:mb-8 lg:mb-10'>
                <button className='p-3 text-white rounded-xl text-base bg-[linear-gradient(45deg,#010101,#515151)]'>
                    Try the Playground
                </button>
                <button className='p-3 text-black text-base border border-[#0081f1] rounded-xl flex flex-row items-center gap-1 bg-[#e8eaf2]'>
                    Request a Demo <BsArrowUpRight />
                </button>
            </div>
        </div>
        <div style={{aspectRatio: "3/2.75"}} className='flex-1 w-full'>
            <div className='w-full h-full relative'>
                <div className='absolute top-0 left-0 z-10 h-[38.5%] w-[39%] text-black bg-[#d9d9d9] rounded-3xl px-6 py-4 justify-between flex flex flex-col'>
                    <p className='text-3xl md:text-5xl leading-none lg:text-7xl font-semibold'>2m+</p>
                    <p className='text-xs'>People have been helped with our platform on public speaking</p>
                    <div className='relative w-full h-1 bg-[#c8c7c7]'>
                        <div className='absolute w-[40%] bg-black top-0 left-0 h-full'></div>
                    </div>
                </div>
                <img className='h-full w-full block' src={heroImg} alt="hero image" />
                <div className='absolute bottom-0 right-0 z-10 h-[38.5%] w-[39%] text-white bg-[linear-gradient(45deg,#0146cc,#012d82)] rounded-3xl p-4 flex flex-col justify-center items-start'>
                    <p className='text-3xl xl:text-4xl font-semibold'>200k +</p>
                    <p className='text-xs'>People have been using our product daily on a monthly  basis</p>
                </div>
            </div>
        </div>  
    </section>
  )
}
