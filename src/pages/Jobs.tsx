import { ChangeEvent, KeyboardEvent, lazy, Suspense, useEffect, useState } from 'react'
import dayjs from 'dayjs';
import axios from 'axios';


const JobForm = lazy(() => import('@/components/JobForm'))
const IoLocationOutline = lazy(() => import("lucide-react").then(module => ({ default: module.MapPin })))
const IoCheckmarkOutline = lazy(() => import("lucide-react").then(module => ({ default: module.Check })))
const FiThumbsUp = lazy(() => import("lucide-react").then(module => ({ default: module.ThumbsUp })))

interface jobsType{
   _id: string, 
    title: string,
    dept: string,
    location: string,
    desc: string,
    status: string,
    job_type: string,
    experience: string,
    date: string,
    image: string,
    createdAt: string,
    updatedAt: string,
}



export default function Jobs() {
  const endpoint = "https://axel-cyber.vercel.app/api/job"
  const [loading,setLoading] = useState(false)
  const [jobs,setJobs] = useState<jobsType[]>([])
  const [location,setLocation] = useState("")
  const [position,setPosition] = useState("")
  const [dragOver,setDragOver] = useState(false)
  const [cvFileName,setCvFileName] = useState<string | null>(null)
  const [stage, setStage] = useState(1)

  const handleChange = (e : ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value
      setLocation(value) 
      // const filteredJobs = jobs.filter((job: any)=>{
      //   return job.location.includes(value)
      // })
      // setJobs(filteredJobs)
  }

  const handleChange2 = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setPosition(value)
    // const filteredJobs = jobs.filter((job: any)=>{
    //   return job.title.includes(value)
    // })

    // setJobs(filteredJobs)
  }

  const fetchJobs = async() => {
    try{
      setLoading(true)
      const response = await axios.get(endpoint)
      setLoading(false)
      if(response.status === 200){
        setJobs(response.data.jobs)
      }else{
        setJobs([])
      }
    }catch(err){
      setLoading(false)
      console.error("errror: ", err)
      setJobs([])
    }
  }

  const getDifferenceInDate = (pastDate : string, presentDate = dayjs())=>{
    const past = dayjs(pastDate)

    const years = presentDate.diff(past, 'year')
    if(years > 0) return `${years} year${years> 1 ? "s" : ""} ago`
    
    const months = presentDate.diff(past, 'month')
    if(months > 0) return `${months} month${months > 1 ? "s" : ""} ago`
    
    const weeks = presentDate.diff(past, "week")
    if(weeks > 0) return `${weeks} week${weeks > 1 ? "s" : ""} ago`

    const days = presentDate.diff(past, "day")
    if(days > 0) return `${days} day${days > 1 ? "s" : ""} ago`

    return "Today"

  }

  useEffect(()=>{
    fetchJobs()
  },[])

  const JobVacnacy = ({role, desc,location,time}:{role:string,desc:string,location: string, time: string}) => {
    return (
      <div onClick={()=>{setStage(3); setCvFileName(null)}} className='p-2 md:p-3 lg:p-4 shadow-md border border-[#bababa] hover:border-[#0081f1] bg-white md:bg-[#f1f2f4] rounded-md transition-all duration-300 ease-linear'>
        <p className='text-xl text-[#032d7f] mb-2 md:mb-3 lg:mb-4'>{role}</p>
        <p className='text-base text-[#222222] pb-4 md:pb-6 lg:pb-8 border-b border-b-[#e9e9e9]'
          dangerouslySetInnerHTML={{__html: desc}}
        />
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
      <section className={`w-full px-[5%] 2xl:px-0 mx-auto bg-white shadow-lg py-6 md:py-8 lg:py-10 my-10 md:my-12 lg:my-14`}>
        <div className='flex flex-row gap-2 sm:gap-4 md:gap-6 lg:gap-8 justify-between items-center leading-none'>
          <div onClick={()=>setStage(1)} className='group flex flex-row gap-2 items-center transition-all duration-300 ease-linear cursor-pointer'>
            <p 
              className={`leading-none text-white text-xs md:text-sm h-[16px] md:h-[20px] w-[16px] md:w-[20px] rounded-full flex justify-center items-center ${stage === 1 ? 'bg-[#002366]' : stage > 1 ? 'bg-[#008000]' :'bg-[#727272]'} ${stage=== 1 && 'group-hover:bg-[#002366]'}`}>
              {
                stage > 1 ? 
                  <Suspense fallback={<span className="w-3 h-3 inline-block animate-pulse bg-gray-300 rounded-full" />}>
                    <IoCheckmarkOutline className='text-white h-3 md:w-4 h-3 md:h-4' />  
                  </Suspense>
                   : 1
              }
            </p>
            <p className={`${stage === 1 ? "text-[#002366]" :stage > 1 && location ? 'text-[#008000]'  :'text-[#727272]'} text-xs md:text-base font-semibold ${stage === 1 && 'group-hover:text-[#002366]' }`}>Job location</p>
          </div>
          <div className='flex-1 h-[1px] md:h-[1.5px] bg-[#727272]'></div>
          <div onClick={()=>{
              setStage(2)
            }} className='group flex flex-row gap-2 items-center transition-all duration-300 ease-linear cursor-pointer'>
            <p className={`leading-none text-white text-xs md:text-sm h-[16px] md:h-[20px] w-[16px] md:w-[20px] rounded-full flex justify-center items-center ${stage === 2 ? 'bg-[#002366]': stage > 2 ? 'bg-[#008000]' : 'bg-[#727272]'} ${ stage > 2 && "group-hover:bg-[#002366]"}`}>
              {
                stage > 2 ? 
                  <Suspense fallback={<span className="w-3 h-3 inline-block animate-pulse bg-gray-300 rounded-full" />}>
                    <IoCheckmarkOutline className='text-white h-3 md:w-4 h-3 md:h-4' />  
                  </Suspense>
                   : 2
              }
            </p>
            <p className={`${stage === 2 ? 'text-[#002366]': stage > 2 ? 'text-[#008000]' : 'text-[#727272]'} text-xs md:text-base font-semibold ${stage > 2 && "group-hover:text-[#002366]"}`}>
              Job position
            </p>
          </div>
          <div className='flex-1 h-[1px] md:h-[1.5px] bg-[#727272]'></div>
          <div 
            // onClick={()=>{
            // setStage(3)
            // setCvFileName(null)
            // }} 
            className='group flex flex-row gap-2 items-center transition-all duration-300 ease-linear cursor-pointer'>
            <p className={`leading-none text-white text-xs md:text-sm h-[16px] md:h-[20px] w-[16px] md:w-[20px] rounded-full flex justify-center items-center ${stage === 3 ? "bg-[#002366]" : stage > 3 ? 'bg-[#008000]' :'bg-[#727272]'} ${ stage > 3 && "group-hover:bg-[#002366]"}"`}>
              {
                stage > 3 ? 
                  <Suspense fallback={<span className="w-3 h-3 inline-block animate-pulse bg-gray-300 rounded-full" />}>
                    <IoCheckmarkOutline className='text-white h-3 md:w-4 h-3 md:h-4' />  
                  </Suspense>
                  : 3
              }
            </p>
            <p className={`${stage === 3 ? 'text-[#002366]' : stage > 3 ? 'text-[#008000]' : 'text-[#727272]'} text-xs md:text-base font-semibold ${ stage > 3 && 'group-hover:text-[#002366]'}`}>Personal details</p>
          </div>
        </div>
        {
          stage === 1 ? (
            <>
              <div className='my-4 md:my-6 lg:my-8 relative'>
                <p className='absolute left-4 md:left-6 lg:left-8 top-[50%] -translate-y-[50%] text-sm md:text-base font-semibold'>Location:</p>
                <input 
                  className='h-full w-full py-3 md:py-4 pl-20 md:pl-24 lg:pl-28 text-base md:text-xl text-black' 
                  type='text' 
                  placeholder='City, area' 
                  value={location}
                  onChange={handleChange}
                  onKeyDown={ (e:KeyboardEvent<HTMLInputElement> ) =>{
                      if(e.key === "Enter"){
                        setStage(2)
                      }
                  }
                }
                  />
                  <Suspense fallback={<span className="w-5 h-5 inline-block animate-pulse bg-gray-300 rounded-full" />}>
                    <IoLocationOutline className='absolute h-5 w-5 md:w-7 md:h-7 right-2 md:right-4 md:right-6 lg:right-8 top-[50%] -translate-y-[50%]' />   
                  </Suspense>
               
              </div>
              <p className='text-xl md:text-2xl font-semibold mb-2 md:mb-4 lg:mb-6 text-base'>SUGGESTIONS</p>
              <div className='flex flex-row gap-2 sm:gap-3 md:gap-4 lg:gap-6'>
                <div
                  onClick={()=>setLocation("manchester")} 
                  className='border border-[#727272] hover:bg-[#727272] active:bg-[#727272] hover:text-white active:text-white px-2 md:px-3 py-1 md:py-2 text-sm md:text-base font-semibold text-[#727272] transition-all duration-300 ease-linear'
                >
                    MANCHESTER
                </div>
                <div
                  onClick={()=> setLocation("lagos")}
                  className='border border-[#727272] hover:bg-[#727272] active:bg-[#727272] hover:text-white active:text-white px-2 md:px-3 py-1 md:py-2 text-sm md:text-base font-semibold text-[#727272] transition-all duration-300 ease-linear' 
                >
                    LAGOS
                </div>
                <div 
                  onClick={()=>setLocation("new york")}
                  className='border border-[#727272] hover:bg-[#727272] active:bg-[#727272] hover:text-white active:text-white px-2 md:px-3 py-1 md:py-2 text-sm md:text-base font-semibold text-[#727272] transition-all duration-300 ease-linear' 
                >
                  NEW YORK
                </div>
                <div
                  onClick={()=>setLocation("ibadan")} 
                  className='border border-[#727272] hover:bg-[#727272] active:bg-[#727272] hover:text-white active:text-white px-2 md:px-3 py-1 md:py-2 text-sm md:text-base font-semibold text-[#727272] transition-all duration-300 ease-linear'>IBADAN</div>
              </div>
            </>
          ) :
          stage === 2 ? 
          <>
            <div className='my-4 md:my-6 lg:my-8 relative'>
              <p className='absolute left-4 md:left-6 lg:left-8 top-[50%] -translate-y-[50%] text-sm md:text-base font-semibold'>Roles:</p>
              <input 
                className='h-full w-full py-3 md:py-4 pl-14 md:pl-18 lg:pl-20 text-base md:text-xl text-black' 
                type='text' 
                placeholder='Job title, position'
                value={position}
                onChange={handleChange2}
                />
            </div>
            <p className='text-xl md:text-2xl font-semibold mb-2 md:mb-4 lg:mb-6 text-base'>OPEN POSITIONS</p>
              {
                loading ? (
                  <div className='w-full h-[200px] md:h-[300px] lg:h-[350px] flex justify-center items-center'>
                    <p className='text-xl md:text-2xl font-semibold text-[#475467]'>Loading...</p>
                  </div>
                ) : jobs.length > 0 ? (
                  <div className='grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-8'>
                    {
                      jobs.filter((job: any)=>{
                        return stage > 1 && position.trim() !== ""
                        ? job.title.toLowerCase().includes(position.toLowerCase()) 
                        : job.location.toLowerCase().includes(location.toLowerCase())
                      }).map((job: any, index: number) => {
                        return (
                          <JobVacnacy 
                            key={index}
                            role={job.title}
                            desc={job.desc}
                            location={job.location}
                            time={getDifferenceInDate(job.createdAt)}
                          />
                        )
                      })
                    }
                  </div>
                ) : (
                  <div className='w-full h-[200px] md:h-[300px] lg:h-[350px] flex justify-center items-center'>
                    <p className='text-xl md:text-2xl font-semibold text-[#475467]'>No jobs found</p>
                  </div>
                )
              }
          </>
          : 
          stage === 3 ?
            <Suspense fallback={<></>}>
              <JobForm 
                setStage={setStage} 
                dragOver={dragOver} 
                setDragOver={setDragOver} 
                cvFileName={cvFileName} 
                setCvFileName={setCvFileName} 
              />
            </Suspense>
          : 
          <div className='w-full h-[200px] md:h-[300px] lg:h-[400px] flex justify-center items-center'>
              <div className='flex flex-col justify-center items-center'>
                <Suspense fallback={<span className="w-7 h-7 inline-block animate-pulse bg-gray-300 rounded-full" />}>
                  <FiThumbsUp className='w-14 sm:w-16 md:w-20 lg:w-24 w-14 sm:h-16 md:h-20 lg:h-24' />
                </Suspense>
                
                <p className='my-4 md:my-6 lg:my-8 text-base md:text-xl font-semibold'>We've received your application!</p>
                <p className='text-sm md:text-base text-[#727272]'>We will process it and reach out to you in few days</p>
              </div>
          </div>
        }
      </section>      
    </main>
  )
}
