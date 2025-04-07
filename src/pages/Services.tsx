import Cta from '../components/Cta'
import { BsArrowUpRight } from "react-icons/bs";
import stars from "../assets/stars.png"
import rocket from "../assets/rocket.png"
import ai1 from "../assets/ai1.png"
import { RiArrowRightSLine } from "react-icons/ri";
import laptop from "../assets/laptop-02.png"
import bi1 from "../assets/bi1.png"
import bi2 from "../assets/bi2.png"
import bi3 from "../assets/bi3.png"
import bi4 from "../assets/bi4.png"
import deployment from "../assets/deployment.png"
import companylogo from "../assets/companylogo.png"
import profilepic from "../assets/profilepic.png"
import { Swiper, SwiperSlide, } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
// import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


interface AiServicesProps {
    title: string;
    image: string;
    list: string[]
}
interface AiBenefitProps{
    title: string;
    icon: string;
    desc: string;
}

interface TestimonialProps{
    name: string;
    position: string;
    content: string;
    profilePic: string;
    companyLogo: string;  
}

function AiServices({ title, image, list }: AiServicesProps) {
    return (
        <div className='p-4 md:p-6 lg:p-8 shadow-md border border-[#e3e7ea] rounded-2xl bg-white flex flex-col md:flex-row'>
            <div className='flex-[1.5]'>
                <div className='mb-2 md:mb-4 lg:mb-6 h-[48px] w-[48px] flex justify-center items-center bg-[#f4f6f8] rounded-full'>
                    <img src={rocket} alt="rocket" />
                </div>
                <p className='text-3xl font-semibold mb-2 md:mb-4 lg:mb-6'>{title}</p>
                <ul className='mg-6 md-mb-8 lg:mb-14 list-disc flex flex-col gap-6'>
                    {list.map((item, index) => (
                        <li className='text-[#4c5c57]' key={index}>{item}</li>
                    ))}
                </ul>
                <button className='p-3 text-white rounded-xl text-base flex flex-row items-center gap-1 bg-[linear-gradient(45deg,#032D7F,#0241BA)]'>
                    Reach Out 
                    <RiArrowRightSLine />
                </button>
            </div>
            <div className='rounded-2xl flex-1 flex justify-center items-center bg-[#e3e7ea]'>
                <img className='w-[90%] h-[90%]' src={image} alt="image" />
            </div>
        </div>
    )
}

function AiBenefit({title,icon,desc}:AiBenefitProps){
    return (
        <div className='relative rounded-2xl flex-1'>
            {/* <div className='flex h-[50px] w-full'>
                <div className='flex-1 h-[50px] bg-[linear-gradient(45deg,#032D7F,#0241BA)] rounded-t-2xl'>
                </div>
                <div className=' h-[50px] w-[50px] bg-white rounded-2xl'>
                </div>
            </div> */}
            <div className='h-auto px-12 pt-4 pb-8 flex flex-col items-center gap-4 bg-[linear-gradient(45deg,#032D7F,#0241BA)] rounded-2xl rounded-2xl'>
                <img src={icon} alt="icon" />
                <p className='text-xl text-center text-white fontsemibold'>{title}</p>
                <p className='text-xs text-center text-[#d5d5d5]'>{desc}</p>
            </div>
        </div>
    )
}


function Testimonial({name,position,content,profilePic,companyLogo}:TestimonialProps){
    return (
        <div className='bg-[linear-gradient(45deg,#053899,#0f0255)] w-full shrink-0 p-2 md:p-4 rounded-2xl flex'>
            <div className='flex-1 flex flex-col justify-between'>
                <img className='self-start' src={companyLogo} alt="company logo" />
                <div className='flex flex-col sm:flex-row gap-2 md:gap-4 lg:gap-6 items-start sm:items-center'>
                    <img src={profilePic} alt="profile pic" />
                    <div className='text-white'>
                        <p className='text-base sm:text-xl font-semibold'>{name}</p>
                        <p className='text-xs sm:text-sm text-[#a1a1a1]'>{position}</p>
                    </div>
                </div>
            </div>
            <div className='flex-1'>
                <p className='rounded-2xl text-xs sm:text-base lg:text-xl px-2 lg:px-4 py-3 lg:py-4 xl:py-6 bg-[#262728] text-white'>{content}</p>
            </div>
        </div>
    )
}

export default function Services() {
  return (
    <main>
        <section className='px-[5%] bg-[#f9f9f9] py-6 sm:py-8 md:py-10 lg:py-12'>
            <div className='flex justify-center mb-8 lg:mb-10'>
                <div className='flex rounded-lg flex-row py-2 px-4 gap-2 items-center border-2 border-[#e1e5e7]'>
                    <img src={stars} alt="stars" />
                    <p>CAPBILITIES</p>
                </div>
            </div>
            <p className='w-auto md:w-[600px] text-center text-3xl mx-auto lg:text-4xl xl:text-5xl font-bold mb-10 lg:mb-12'>
                Our AI-powered Assistant solutions for your business
            </p>
            <div className='mb-4 md:mb-6 lg:mb-10 flex rounded-xl flex-col md:flex-row px-2 py-2 justify-between items-center bg-[#e3e7ea]'>
                <p className='flex-1 text-center rounded-md hover:bg-[linear-gradient(45deg,#032D7F,#0241BA)] p-4 text-sm hover:text-white text-[#4c5c75]'>Boost Operational Efficiency</p>
                <p className='flex-1 text-center rounded-md hover:bg-[linear-gradient(45deg,#032D7F,#0241BA)] p-4 text-sm hover:text-white text-[#4c5c75]'>Enrich Customer Experiences</p>
                <p className='flex-1 text-center rounded-md hover:bg-[linear-gradient(45deg,#032D7F,#0241BA)] p-4 text-sm hover:text-white text-[#4c5c75]'>Optimize Risk Management Processes</p>
                <p className='flex-1 text-center rounded-md hover:bg-[linear-gradient(45deg,#032D7F,#0241BA)] p-4 text-sm hover:text-white text-[#4c5c75]'>Custom LLM's</p>
                <p className='flex-1 text-center rounded-md hover:bg-[linear-gradient(45deg,#032D7F,#0241BA)] p-4 text-sm hover:text-white text-[#4c5c75]'>Web App</p>
            </div>
            <AiServices 
                title={"Boost Operational Efficiency"}
                image={ai1}
                list={[
                    "Automate routine tasks",
                    "Summarize financial reports",
                    "Instantly surface actionable insights from unstructured data"
                ]}
            />
        </section>
        <section className='px-[5%] py-6 sm:py-8 md:py-10 lg:py-12'>
            <div className='flex justify-center mb-8 lg:mb-10'>
                <div className='flex rounded-lg flex-row py-2 px-4 gap-2 items-center border-2 border-[#e1e5e7]'>
                    <img src={laptop} alt="stars" />
                    <p>BENEFITS</p>
                </div>
            </div>
            <p className='w-auto md:w-[500px] text-center text-3xl mx-auto lg:text-4xl xl:text-5xl font-bold mb-10 lg:mb-12'>
                Enterprise-grade AI Benefits
            </p>
            <div className='flex flex-col md:flex-row gap-6'>
                <AiBenefit 
                    icon={bi1}
                    title={"Improve Knowledge Management"}
                    desc={"From proof of concept to full production with compressed, enterprise-focused models."}
                />
                <AiBenefit 
                    icon={bi2}
                    title={"Reduce Busywork"}
                    desc={"Free your team to focus on high-value work with automations for administrative tasks."}
                />
                <AiBenefit 
                    icon={bi3}
                    title={"Accelerate Product Innovations"}
                    desc={"Analyze customer behavior data and market trends to help shape new financial products."}
                />
                <AiBenefit 
                    icon={bi4}
                    title={"Automate common support tickets"}
                    desc={"Deploy smart chatbots connected to your internal data to deliver fast, relevant responses to customer queries."}
                />
            </div>
        </section>
        <section className='px-[5%] bg-[#f9f9f9] py-6 sm:py-8 md:py-10 lg:py-12'>
            <div className='flex justify-center mb-10 lg:mb-14'>
                <div className='flex rounded-lg flex-row py-2 px-4 gap-2 items-center border-2 border-[#e1e5e7]'>
                    <img src={stars} alt="stars" />
                    <p>DEPLOYMENT OPTIONS</p>
                </div>
            </div>
            <div className='mb-4 md:mb-6 lg:mb-10'>
                <img className='w-full' src={deployment} alt="deployment" />
            </div>
            <div className='flex flex-col md:flex-row gap-6 md:gap-8 lg:gap-12'>
                <p className='flex-1 text-2xl lg:text-3xl font-semibold'>
                    Private Deploymwents for Ultimate Security and Data Sovereignty 
                </p>
                <p className='text-sm lg:text-base text-[#4c5c57] flex-[1.5]'>
                    Deploy Cohere privately for maximum control, security, and compliance. Virtual Private Cloud (VPC) by ensuring strict governance and compliance, also on- premises to keep all data within your systems, with no external exposure.
                </p>
            </div>
        </section>
        <section className='px-[5%] bg-[#f9f9f9] py-6 sm:py-8 md:py-10 lg:py-12'>
            <div className='flex justify-center mb-10 lg:mb-14'>
                <div className='flex rounded-lg flex-row py-2 px-4 gap-2 items-center border-2 border-[#e1e5e7]'>
                    <img src={stars} alt="stars" />
                    <p>CUSTOMER STORIES</p>
                </div>
            </div>
            <Swiper 
                modules={[Navigation, Pagination]}
                slidesPerView={1}
                spaceBetween={50}
                navigation
                pagination={{ clickable: true }}
                className='service-swipper flex flex-row gap-6'
            >
                <SwiperSlide>
                <Testimonial 
                    name={"Prima Abiola"}
                    position={"Founder & CEO Hotels.ng"}
                    content={"“With Cohere's latest highly secure enterprise LLMs, we aim to provide businesses with powerful and adaptable AI solutions that address specific needs and accelerate the adoption of generative AI globally.”"}
                    companyLogo={companylogo}
                    profilePic={profilepic}
                />
                </SwiperSlide>
                <SwiperSlide>
                <Testimonial 
                    name={"Prima Abiola"}
                    position={"Founder & CEO Hotels.ng"}
                    content={"“With Cohere's latest highly secure enterprise LLMs, we aim to provide businesses with powerful and adaptable AI solutions that address specific needs and accelerate the adoption of generative AI globally.”"}
                    companyLogo={companylogo}
                    profilePic={profilepic}
                />
                </SwiperSlide>
                <SwiperSlide>
                <Testimonial 
                    name={"Prima Abiola"}
                    position={"Founder & CEO Hotels.ng"}
                    content={"“With Cohere's latest highly secure enterprise LLMs, we aim to provide businesses with powerful and adaptable AI solutions that address specific needs and accelerate the adoption of generative AI globally.”"}
                    companyLogo={companylogo}
                    profilePic={profilepic}
                />
                </SwiperSlide>
            </Swiper>
        </section>
        <Cta
            title="Ready to put AI to work?" 
            action='Request a Demo'
        >
            <BsArrowUpRight className='inline' />
        </Cta>
    </main>
  )
}
