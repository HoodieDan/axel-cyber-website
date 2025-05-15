import { ChangeEvent, DragEvent, useEffect, useState } from 'react'
import { IoLocationOutline } from "react-icons/io5";
import { GrDocumentUpload } from "react-icons/gr";
import { FiThumbsUp } from "react-icons/fi";
import { IoCheckmarkOutline } from "react-icons/io5";
import { IoCloseSharp } from "react-icons/io5";
import {Formik, Form, Field, ErrorMessage} from "formik"
import * as yup from "yup"
import dayjs from 'dayjs';
import axios from 'axios';

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
  const validationSchema = yup.object({
    location: yup.string().required("Location is required"),
    roles: yup.string().required("Roles is required"),
    name: yup.string().required("Name is required"),
    phone: yup
          .string()
          .matches(/^[0-9]+$/, "Phone number must be digits")
          .min(11, "Phone number must be at least 11 digits")
          .required("Phone number is required"),
    cv: yup.mixed().required("CV is required") 
  })
  const endpoint = "https://veoc-tech-cms.vercel.app/api/job"
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
      const filteredJobs = jobs.filter((job: any)=>{
        return job.location.includes(value)
      })
      setJobs(filteredJobs)
  }

  const handleChange2 = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setPosition(value)
    const filteredJobs = jobs.filter((job: any)=>{
      return job.title.includes(value)
    })
    setJobs(filteredJobs)
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
            <p 
              className={`leading-none text-white text-xs md:text-sm h-[16px] md:h-[20px] w-[16px] md:w-[20px] rounded-full flex justify-center items-center ${stage === 1 ? 'bg-[#002366]' : stage > 1 && location ? 'bg-[#008000]' :'bg-[#727272]'} ${stage=== 1 && 'group-hover:bg-[#002366]'}`}>
              {
                stage > 1 && location ? <IoCheckmarkOutline className='text-white text-sm md:text-base' /> : 1
              }
            </p>
            <p className={`${stage === 1 ? "text-[#002366]" :stage > 1 && location ? 'text-[#008000]'  :'text-[#727272]'} text-xs md:text-base font-semibold ${stage === 1 && 'group-hover:text-[#002366]' }`}>Job location</p>
          </div>
          <div className='flex-1 h-[1px] md:h-[1.5px] bg-[#727272]'></div>
          <div onClick={()=>{
            if(location !== ""){
              setStage(2)
            }
            }} className='group flex flex-row gap-2 items-center transition-all duration-300 ease-linear cursor-pointer'>
            <p className={`leading-none text-white text-xs md:text-sm h-[16px] md:h-[20px] w-[16px] md:w-[20px] rounded-full flex justify-center items-center ${stage === 2 ? 'bg-[#002366]': stage > 2 ? 'bg-[#008000]' : 'bg-[#727272]'} ${ stage > 2 && "group-hover:bg-[#002366]"}`}>
              {
                stage > 2 ? <IoCheckmarkOutline className='text-white text-sm md:text-base' /> : 2
              }
            </p>
            <p className={`${stage === 2 ? 'text-[#002366]': stage > 2 ? 'text-[#008000]' : 'text-[#727272]'} text-xs md:text-base font-semibold ${stage > 2 && "group-hover:text-[#002366]"}`}>
              Job position
            </p>
          </div>
          <div className='flex-1 h-[1px] md:h-[1.5px] bg-[#727272]'></div>
          <div onClick={()=>{
            setStage(3)
            setCvFileName(null)
            }} className='group flex flex-row gap-2 items-center transition-all duration-300 ease-linear cursor-pointer'>
            <p className={`leading-none text-white text-xs md:text-sm h-[16px] md:h-[20px] w-[16px] md:w-[20px] rounded-full flex justify-center items-center ${stage === 3 ? "bg-[#002366]" : stage > 3 ? 'bg-[#008000]' :'bg-[#727272]'} ${ stage > 3 && "group-hover:bg-[#002366]"}"`}>
              {
                stage > 3 ? <IoCheckmarkOutline className='text-white text-sm md:text-base' /> : 2
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
                  className='h-full w-full py-3 md:py-4 pl-20 md:pl-24 lg:pl-28 text-base md:text-xl' 
                  type='text' 
                  placeholder='City, area' 
                  value={location}
                  onChange={handleChange}
                  />
                <IoLocationOutline className='absolute text-xl right-2 md:right-4 md:right-6 lg:right-8 top-[50%] -translate-y-[50%]' />
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
                className='h-full w-full py-3 md:py-4 pl-14 md:pl-18 lg:pl-20 text-base md:text-xl' 
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
                      jobs.map((job: any, index: number) => {
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
            <Formik
              initialValues={{
                location: "",
                roles: "",
                name: "",
                phone: "",
                cv: null
              }}
              validationSchema={validationSchema}
              onSubmit={(values, {setSubmitting})=>{
                console.log("values: ", values)
                setSubmitting(false)
                setStage(4)
                window.scrollTo({
                  top: 0,
                  behavior: "smooth"
                })
              }
            }
            >
              {
                ({setFieldValue})=>(
                  <Form>
                    <div className='mt-4 md:mt-6 lg:mt-8 relative'>
                      <p className='absolute left-2 md:left-4 md:left-6 lg:left-8 top-[50%] -translate-y-[50%] text-sm md:text-base font-semibold'>Location:</p>
                      <Field
                        name="location" 
                        className='h-full w-full py-3 md:py-4 pl-18 md:pl-24 lg:pl-28 text-base md:text-xl border-[#727272] rounded-none' 
                        type='text' 
                        placeholder='City, area' 
                      />
                      <ErrorMessage name="location" component="div" className="text-red-600 text-sm mt-1" />
                    </div>
                    <div className='mt-2 md:mt-4 lg:mt-6 relative'>
                      <p className='absolute left-2 md:left-4 md:left-6 lg:left-8 top-[50%] -translate-y-[50%] text-sm md:text-base font-semibold'>Roles:</p>
                      <Field 
                        name='roles'
                        className='h-full w-full py-4 pl-16 md:pl-20 lg:pl-28 text-base md:text-xl border-[#727272] rounded-none' 
                        type='text' 
                        placeholder='roles' 
                      />
                      <ErrorMessage name="roles" component="div" className="text-red-600 text-sm mt-1" />
                    </div>
                    <div className='mt-2 md:mt-4 lg:mt-6 relative'>
                      <p className='absolute left-2 md:left-4 md:left-6 lg:left-8 top-[50%] -translate-y-[50%] text-sm md:text-base font-semibold'>Name:</p>
                      <Field
                        name="name"
                        className='h-full w-full py-4 pl-16 md:pl-20 lg:pl-28 text-base md:text-xl border-[#727272] rounded-none' 
                        type='text' 
                        placeholder='Smith Yinka' 
                      />
                      <ErrorMessage name="name" component="div" className="text-red-600 text-sm mt-1" />
                    </div>
                    <div className='mt-2 md:mt-4 lg:mt-6 relative'>
                      <p className='absolute left-2 md:left-4 md:left-6 lg:left-8 top-[50%] -translate-y-[50%] text-sm md:text-base font-semibold'>Phone:</p>
                      <Field 
                        name="phone"
                        className='h-full w-full py-4 pl-16 md:pl-20 lg:pl-28 text-base md:text-xl border-[#727272] rounded-none' 
                        type='text' 
                        placeholder='09055555555' 
                      />
                      <ErrorMessage name="phone" component="div" className="text-red-600 text-sm mt-1" />
                    </div>
                    <p className='text-xl font-semibold my-2 md:my-4 lg:my-6'>Upload CV</p>
                    <div 
                      className={`flex justify-center items-center w-full h-[200px] md:h-[300px] lg:h-[400px] border ${
                        dragOver ? 'border-blue-600 border-2 bg-blue-50' : 'border-[#727272]'
                      }`}
                      onDragOver={(e: DragEvent<HTMLDivElement>)=>{
                        e.preventDefault()
                        setDragOver(true)
                      }}
                      onDragLeave={()=>setDragOver(false)}
                      onDrop={(e: DragEvent<HTMLDivElement>)=>{
                        e.preventDefault()
                        setDragOver(false)
                        const file = e.dataTransfer.files[0]
                        if(file){
                          setFieldValue('cv',file)
                          setCvFileName(file.name)
                        }
                      }}
                      >
                      <input
                        id="cv-upload"
                        name="cv"
                        type="file"
                        className='hidden' 
                        onChange={(e: ChangeEvent<HTMLInputElement>)=>{
                          const file = e.currentTarget.files?.[0]
                          if(file){
                            setFieldValue("cv", file) 
                            setCvFileName(file.name)
                          }
                        }}
                        />
                        <div>
                      <label htmlFor='cv-upload' className='flex flex-col justify-center items-center'>
                        <GrDocumentUpload className='text-4xl md:text-6xl lg:text-8xl text-[#002366]' />
                        <p className='mt-2 md:mt-4 lg:mt-6 flex gap-3 items-center'>
                          <span className='text-base md:text-xl underline font-semibold cursor-pointer hover:no-underline'>Click to upload</span>
                          <span className='text-base md:text-xl text-[#727272]'>or drag and drop</span>
                        </p>
                      </label>
                        {
                          cvFileName && (
                            <p className="relative p-2 pr-12 border-2 border-blue-700 rounded-md mt-4 text-base md:text-lg text-blue-700 font-medium">
                              <span>{cvFileName}</span>
                              <IoCloseSharp  
                                onClick={()=>{
                                  setFieldValue('cv',"")
                                  setCvFileName(null)
                                }}
                              className='cursor-pointer absolute right-2 top-[50%] -translate-y-[50%] text-xl text-red-500' />
                            </p>
                          )
                        }
                      </div> 
                    </div>
                    <ErrorMessage name="cv" component="div" className="text-red-600 text-sm mt-1" />
                    <button type="submit" className="mt-6 bg-blue-700 text-white px-8 py-3 rounded cursor-pointer hover:opacity-80 trnasition-all duration-300 ease-linear">
                      Submit
                    </button>
                  </Form>
              )}
            </Formik>
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
