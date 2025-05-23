import goldfrapp from "../assets/goldfrapp.png"
import pencil from "../assets/pencil.png"
import volume from "../assets/volume.png"
import information from "../assets/information.png"
import ibm from "../assets/ibm.png"
import hulu from "../assets/hulu.png"
import user from "../assets/users.png"
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

export default function Clientele() {
  return (
    <section className='py-6 sm:py-8 md:py-10 lg:py-12 flex flex-col md:flex-row gap-6 md:gap-0'>
        <div className='flex-1'>
          <div className='flex justify-start mb-4 sm:mb-6 md:mb-8 lg:mb-10'>
            <div className='flex rounded-lg flex-row py-1 sm:py-2 px-2 sm:px-4 gap-2 items-center border-2 border-[#e1e5e7] 2xl:text-xl'>
              <img src={user} alt="user" />
              <p>OUR CLIENTS</p>
            </div>
          </div>
          <p className='w-auto lg:w-[400px] 2xl:w-auto text-[#002366] text-2xl md:text-3xl font-semibold'>
            Several companies have trusted Axel Cybel for thier solutions
          </p>
          <div className='hidden md:block mt-6 sm:mt-8 md:mt-10 lg:mt-12'>
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
        </div>
        <div className='flex-1 grid grid-cols-2 md:grid-cols-3 content-around gap-4 md:gap-0'>
          <img src={goldfrapp} className='w-[125px] h-[30px]'  alt="goldfrapp" />
          <img className='w-[125px] h-[30px] place-self-end md:place-self-center' src={pencil} alt="pencil" />
          <img className='w-[125px] h-[30px] md:place-self-end' src={volume} alt="volume" />
          <img className='w-[125px] h-[30px] place-self-end md:place-self-start' src={information} alt="information" />
          <img className='w-[125px] h-[30px]  md:place-self-center' src={ibm} alt="ibm" />
          <img className='w-[125px] h-[30px] place-self-end' src={hulu} alt="hulu" />
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
