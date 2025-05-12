import { useState } from 'react'
import { IoLocationOutline } from "react-icons/io5";
import { GrDocumentUpload } from "react-icons/gr";
import { FiThumbsUp } from "react-icons/fi";


export default function Jobs() {
  const [stage, setStage] = useState(1)

  const JobVacnacy = ({role, desc,location,time}:{role:string,desc:string,location: string, time: string}) => {
    return (
      <div onClick={()=>setStage(3)} className='p-2 md:p-3 lg:p-4 shadow-md border border-[#bababa] hover:border-[#0081f1] bg-white md:bg-[#f1f2f4] rounded-md transition-all duration-300 ease-linear'>
        <p className='text-xl text-[#032d7f] mb-2 md:mb-3 lg:mb-4'>{role}</p>
        <p className='text-base text-[#222222] pb-4 md:pb-6 lg:pb-8 border-b border-b-[#e9e9e9]'>{desc}</p>
        <div className='flex flex-row justify-between items-center my-2 md:my-3 lg:my-4'>
          <p className='text-black font-semibold text-base md:text-xl'>Location</p>
          <p className='text-base text-[#222222] text-sm md:text-base'>{location}</p>
        </div>
        <p className='text-xs md:text-sm'>{time}</p>
      </div>
    )
    
  } 

  return (
    <main className='bg-[#f9f9f9]'>
      <section className={`w-full md:w-[90%] max-w-screen-xl mx-auto bg-white shadow-lg px-4 md:px-6 lg:px-8 py-6 md:Py-8 lg:py-10 my-10 md:my-12 lg:my-14`}>
        <div className='flex flex-row gap-2 sm:gap-4 md:gap-6 lg:gap-8 justify-between items-center leading-none'>
          <div onClick={()=>setStage(1)} className='group flex flex-row gap-2 items-center transition-all duration-300 ease-linear cursor-pointer'>
            <p className={`leading-none text-white text-xs md:text-sm h-[16px] md:h-[20px] w-[16px] md:w-[20px] rounded-full flex justify-center items-center ${stage === 1 ? 'bg-[#002366]' : 'bg-[#727272]'} group-hover:bg-[#002366]`}>1</p>
            <p className={`${stage === 1 ? "text-[#002366]" : 'text-[#727272]'} text-xs md:text-base font-semibold group-hover:text-[#002366]`}>Job location</p>
          </div>
          <div className='flex-1 h-[1px] md:h-[1.5px] bg-[#727272]'></div>
          <div onClick={()=>setStage(2)} className='group flex flex-row gap-2 items-center transition-all duration-300 ease-linear cursor-pointer'>
            <p className={`leading-none text-white text-xs md:text-sm h-[16px] md:h-[20px] w-[16px] md:w-[20px] rounded-full flex justify-center items-center ${stage === 2 ? 'bg-[#002366]' : 'bg-[#727272]'} group-hover:bg-[#002366]`}>2</p>
            <p className={`${stage === 2 ? 'text-[#002366]' : 'text-[#727272]'} text-xs md:text-base font-semibold group-hover:text-[#002366]`}>Job position</p>
          </div>
          <div className='flex-1 h-[1px] md:h-[1.5px] bg-[#727272]'></div>
          <div onClick={()=>setStage(3)} className='group flex flex-row gap-2 items-center transition-all duration-300 ease-linear cursor-pointer'>
            <p className={`leading-none text-white text-xs md:text-sm h-[16px] md:h-[20px] w-[16px] md:w-[20px] rounded-full flex justify-center items-center ${stage === 3 ? "bg-[#002366]" : 'bg-[#727272]'} group-hover:bg-[#002366]`}>3</p>
            <p className={`${stage === 3 ? 'text-[#002366]' : 'text-[#727272]'} text-xs md:text-base font-semibold group-hover:text-[#002366]`}>Personal details</p>
          </div>
        </div>
        {
          stage === 1 ? (
            <>
              <div className='my-4 md:my-6 lg:my-8 relative'>
                <p className='absolute left-4 md:left-6 lg:left-8 top-[50%] -translate-y-[50%] text-sm md:text-base font-semibold'>Location:</p>
                <input className='h-full w-full py-3 md:py-4 pl-20 md:pl-24 lg:pl-28 text-base md:text-xl' type='text' placeholder='City, area' />
                <IoLocationOutline className='absolute text-xl right-2 md:right-4 md:right-6 lg:right-8 top-[50%] -translate-y-[50%]' />
              </div>
              <p className='text-xl md:text-2xl font-semibold mb-2 md:mb-4 lg:mb-6 text-base'>SUGGESTIONS</p>
              <div className='flex flex-row gap-2 sm:gap-3 md:gap-4 lg:gap-6'>
                <div className='border border-[#727272] hover:bg-[#727272] active:bg-[#727272] hover:text-white active:text-white px-2 md:px-3 py-1 md:py-2 text-sm md:text-base font-semibold text-[#727272] transition-all duration-300 ease-linear'>MANCHESTER</div>
                <div className='border border-[#727272] hover:bg-[#727272] active:bg-[#727272] hover:text-white active:text-white px-2 md:px-3 py-1 md:py-2 text-sm md:text-base font-semibold text-[#727272] transition-all duration-300 ease-linear' >LAGOS</div>
                <div className='border border-[#727272] hover:bg-[#727272] active:bg-[#727272] hover:text-white active:text-white px-2 md:px-3 py-1 md:py-2 text-sm md:text-base font-semibold text-[#727272] transition-all duration-300 ease-linear' >NEW YORK</div>
                <div className='border border-[#727272] hover:bg-[#727272] active:bg-[#727272] hover:text-white active:text-white px-2 md:px-3 py-1 md:py-2 text-sm md:text-base font-semibold text-[#727272] transition-all duration-300 ease-linear'>IBADAN</div>
              </div>
            </>
          ) :
          stage === 2 ? 
          <>
            <div className='my-4 md:my-6 lg:my-8 relative'>
              <p className='absolute left-4 md:left-6 lg:left-8 top-[50%] -translate-y-[50%] text-sm md:text-base font-semibold'>Roles:</p>
              <input className='h-full w-full py-3 md:py-4 pl-14 md:pl-18 lg:pl-20 text-base md:text-xl' type='text' placeholder='Job title, position' />
            </div>
            <p className='text-xl md:text-2xl font-semibold mb-2 md:mb-4 lg:mb-6 text-base'>OPEN POSITIONS</p>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-8'>
              <JobVacnacy 
                role='Data Scientist'
                desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                location='Remote'
                time='15 hours ago'
              />
              <JobVacnacy 
                role='Software Engineer'
                desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                location='Physical'
                time='2 days ago'
              />
              <JobVacnacy 
                role='Product Designer'
                desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                location='Hybrid'
                time='1 weeks ago'
              />
            </div>
          </>
          : 
          stage === 3 ?
          (
          <>
            <div className='mt-4 md:mt-6 lg:mt-8 relative'>
              <p className='absolute left-2 md:left-4 md:left-6 lg:left-8 top-[50%] -translate-y-[50%] text-sm md:text-base font-semibold'>Location:</p>
              <input className='h-full w-full py-3 md:py-4 pl-18 md:pl-24 lg:pl-28 text-base md:text-xl border-[#727272] rounded-none' type='text' placeholder='City, area' />
            </div>
            <div className='mt-2 md:mt-4 lg:mt-6 relative'>
              <p className='absolute left-2 md:left-4 md:left-6 lg:left-8 top-[50%] -translate-y-[50%] text-sm md:text-base font-semibold'>Roles:</p>
              <input className='h-full w-full py-4 pl-16 md:pl-20 lg:pl-28 text-base md:text-xl border-[#727272] rounded-none' type='text' placeholder='roles' />
            </div>
            <div className='mt-2 md:mt-4 lg:mt-6 relative'>
              <p className='absolute left-2 md:left-4 md:left-6 lg:left-8 top-[50%] -translate-y-[50%] text-sm md:text-base font-semibold'>Name:</p>
              <input className='h-full w-full py-4 pl-16 md:pl-20 lg:pl-28 text-base md:text-xl border-[#727272] rounded-none' type='text' placeholder='Smith Yinka' />
            </div>
            <div className='mt-2 md:mt-4 lg:mt-6 relative'>
              <p className='absolute left-2 md:left-4 md:left-6 lg:left-8 top-[50%] -translate-y-[50%] text-sm md:text-base font-semibold'>Phone:</p>
              <input className='h-full w-full py-4 pl-16 md:pl-20 lg:pl-28 text-base md:text-xl border-[#727272] rounded-none' type='text' placeholder='905555555' />
            </div>
            <p className='text-xl font-semibold my-2 md:my-4 lg:my-6'>Upload CV</p>
            <div className='flex justify-center items-center w-full h-[200px] md:h-[300px] lg:h-[400px] border border-[#727272]'>
              <input className='hidden' />
              <div className='flex flex-col justify-center items-center'>
                <GrDocumentUpload className='text-4xl md:text-6xl lg:text-8xl text-[#002366]' />
                <p className='mt-2 md:mt-4 lg:mt-6 flex gap-3 items-center'>
                  <span className='text-base md:text-xl underline font-semibold'>Click to upload</span>
                  <span className='text-base md:text-xl text-[#727272]'>or drag and drop</span>
                </p>
              </div>  
            </div>
          </>
          )
          : 
          <div className='w-full h-[200px] md:h-[300px] lg:h-[400px] flex justify-center items-center'>
              <div className='flex flex-col justify-center items-center'>
                <FiThumbsUp className='text-4xl md:text-6xl lg:text-8xl' />
                <p className='my-4 md:my-6 lg:my-8 text-base md:text-xl font-semibold'>We've received your application!</p>
                <p className='text-sm md:text-base text-[#727272]'>We will process it and reach out to you in few days</p>
              </div>
          </div>
        }
      </section>      
    </main>
  )
}
