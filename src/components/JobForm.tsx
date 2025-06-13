
import { ChangeEvent, DragEvent, lazy, Suspense } from 'react'
import {Formik, Form, Field, ErrorMessage} from "formik"
import * as yup from "yup"

interface jobFormType{
    setStage: (stage: number) => void
    setDragOver: (dragOver: boolean) => void
    dragOver: boolean
    setCvFileName: (fileName: string | null) => void,
    cvFileName: string | null
}


const GrDocumentUpload = lazy(() => import("lucide-react").then(module => ({ default: module.FileUp })))
const IoCloseSharp = lazy(() => import("lucide-react").then(module => ({ default: module.X })))



export default function JobForm({setStage, setDragOver, dragOver, setCvFileName,cvFileName}: jobFormType) {
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

  return (
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
                            <Suspense fallback={<span className="w-7 h-7 inline-block animate-pulse bg-gray-300 rounded-full" />}>
                              <GrDocumentUpload className='w-14 sm:w-16 md:w-20 lg:w-24 w-14 sm:h-16 md:h-20 lg:h-24 text-[#002366]' />  
                            </Suspense>
                            <p className='mt-2 md:mt-4 lg:mt-6 flex gap-3 items-center'>
                              <span className='text-base md:text-xl underline font-semibold cursor-pointer hover:no-underline'>Click to upload</span>
                              <span className='text-base md:text-xl text-[#727272]'>or drag and drop</span>
                            </p>
                          </label>
                            {
                              cvFileName && (
                                <p className="relative p-2 pr-12 border-2 border-blue-700 rounded-md mt-4 text-base md:text-lg text-blue-700 font-medium">
                                  <span>{cvFileName}</span>
                                  <Suspense fallback={<span className="w-5 h-5 inline-block animate-pulse bg-gray-300 rounded-full" />}>
                                    <IoCloseSharp  
                                      onClick={()=>{
                                      setFieldValue('cv',"")
                                      setCvFileName(null)
                                      }}
                                      className='cursor-pointer absolute right-2 top-[50%] -translate-y-[50%] text-xl text-red-500' 
                                    />
                                  </Suspense>
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
  )
}
