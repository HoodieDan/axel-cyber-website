import Cta from '../components/Cta'
import { BsArrowUpRight } from "react-icons/bs";
import stars from "../assets/stars.png"
import rocket from "../assets/rocket.png"
import ai1 from "../assets/ai1.png"
// import { RiArrowRightSLine } from "react-icons/ri";
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
import customer from "../assets/cuastomer-exp.png"
import optimization from "../assets/optimization.png"
// import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useState } from 'react';
import serviceHeroImg from "../assets/service-hero-img.png"
import serviceHeroImg1 from "../assets/service-hero-img1.png"
import goldfrapp from "../assets/goldfrapp.png"
import pencil from "../assets/pencil.png"
import volume from "../assets/volume.png"
import information from "../assets/information.png"
import ibm from "../assets/ibm.png"
import hulu from "../assets/hulu.png"
import AiServices from '../components/AiServices';
import { useNavigate } from 'react-router-dom';


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

const solution = [
    {
        title: "Boost Operational Efficiency",
        image: ai1,
        icon: rocket,
        list: [
            "Automate routine tasks",
            "Summarize financial reports",
            "Instantly surface actionable insights from unstructured data"
        ]
    },
    {
        title: "Enrich Customer Experiences",
        image: customer,
        icon: rocket,
        list: [
            "Deliver fast, accurate and personalized responses to inquiries in multiple languages"
        ]
    },
    {
        title: "Optimize Riosk Management Processes",
        image: optimization,
        icon: rocket,    
        list: [
            "Streamline complice workflows",
            "Prevent fraud by analyzing vast datasets for anomalies"
        ]
    },
    {
        title: "Custom LLM's",
        image: optimization,
        icon: rocket,    
        list: [
            "Streamline complice workflows",
            "Prevent fraud by analyzing vast datasets for anomalies"
        ]
    },
    {
        title: "Web App",
        image: optimization,
        icon: rocket,    
        list: [
            "Streamline complice workflows",
            "Prevent fraud by analyzing vast datasets for anomalies"
        ]
    }
]


function AiBenefit({title,icon,desc}:AiBenefitProps){
    return (
        <div className='relative rounded-2xl flex-1'>
            <div className="absolute top-0 right-0 w-10 h-10 bg-white rounded-bl-[12px]"></div>
            <div className='h-full px-8 md:px-10 lg:px-12 pt-10 md:pt-12 lg:pt-14 xl:pt-16 pb-8 sm:pb-12 lg:pb-16 flex flex-col items-center gap-4 bg-[linear-gradient(45deg,#032D7F,#0241BA)] rounded-2xl rounded-2xl'>
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
    const [index,setIndex] = useState(0)
    const navigate = useNavigate()
  return (
    <main className='w-[90%] max-w-screen-xl mx-auto'>
        <section className="service-section relative mt-6 mb-48 sm:mt-8 sm:mb-40 md:mt-10 md:mb-32 lg:mt-12 lg:mb-24 bg-white">
            <img  src={serviceHeroImg} alt="hero image" className='hidden sm:block w-full min-h-[500px] bg-[#e3e7ea] rounded-3xl' />
            <img  src={serviceHeroImg1} alt="hero image" className='block sm:hidden w-full h-full bg-[#e3e7ea] rounded-xl min-h-[380px]' />
            <div className='absolute left-[50%] -translate-x-[50%] top-[50%] -translate-y-[50%] w-[85%] sm:w-auto'>
            <p className='mx-auto text-white text-xl md:text-2xl lg:text-3xl font-semibold w-full md:w-[200px] lg:w-[425px] 2xl:w-auto text-center mb-4 lg:mb-8'>Unlocking new efficiencies across Major International sectors</p>
            <p className='text-center text-white text-sm md:text-xl mb-6 md:mb-10'>At Axel Cyber we have a focus on delivering Maximum Impact using with a focus on Aiding Humans and Organizations with our expertise in Artificial Intelligence Consulting and Integration</p>
            <button 
                onClick={() => {
                    navigate("/contact")
                    window.scrollTo({top: 0, behavior: "smooth"})
                }}
                className="mx-auto block w-[200px] h-[50px] text-black text-base md:text-xl font-semibold rounded-full bg-white hover:bg-transparent active:bg-transparent hover:border-2 active:border-2 hover:border-white active:border-white hover:text-white active:text-white transition-all duration-300 ease-linear cursor-pointer">
                Request a Demo
                {" "}
                <BsArrowUpRight className='inline' />   
            </button>
            </div>
            <div className="w-[85%] md:w-[70%] absolute top-[100%] -translate-y-[5%] md:-translate-y-[50%] left-[50%] -translate-x-[50%] bg-white py-5 rounded-md shadow-lg">
                <p className='text-center font-semibold text-xl text-black mb-4 justify-items-center '>Trusted by Industry Leaders:</p>
                <div className="grid grid-cols-2 sm:grid-cols-6 px-8">
                    <img src={ibm} alt="ibm" />
                    <img src={hulu} alt="hulu" />
                    <img src={goldfrapp} alt="goldfrapp" />
                    <img src={pencil} alt="pencil" />
                    <img src={volume} alt="volume" />
                    <img src={information} alt="information" />
                </div>
            </div>
        </section>
        <section className='bg-[#f9f9f9] py-6 sm:py-8 md:py-10 lg:py-12'>
            <div className='flex justify-center mb-4 sm:mb-6 md:mb-8 lg:mb-10'>
                <div className='flex rounded-lg flex-row py-1 sm:py-2 px-2 sm:px-4 gap-2 items-center justify-center border-2 border-[#e1e5e7]'>
                    <img className='shrink-0 text-base 2xl:text-xl' src={stars} alt="stars" />
                    <p className='text-sm sm:text-base 2xl:text-xl' >CAPBILITIES</p>
                </div>
            </div>
            <p className='w-auto md:w-[600px] 2xl:w-auto text-center text-2xl md:text-3xl mx-auto lg:text-4xl xl:text-5xl font-bold mb-6 sm:mb-8 md:mb-10 lg:mb-12'>
                Our AI-powered Assistant solutions for your business
            </p>
            <div className='mb-4 md:mb-6 lg:mb-10 flex rounded-md lg:rounded-xl flex-row px-2 py-2 gap-4 md:gap-0 md:justify-between items-center bg-[#e3e7ea] w-full md:w-auto overflow-x-auto md:overflow-x-hidden'>
                <p onClick={()=>setIndex(0)} className={`shrink-0 ${index == 0 ? "bg-[linear-gradient(45deg,#032D7F,#0241BA)] text-white" : "bg-transparent"} md:flex-1 text-center rounded-md active:bg-[linear-gradient(45deg,#032D7F,#0241BA)] hover:bg-[linear-gradient(45deg,#032D7F,#0241BA)] py-2 px-2 text-xs md:text-sm hover:text-white text-[#4c5c75] cursor-pointer`}>Boost Operational Efficiency</p>
                <p onClick={()=>setIndex(1)} className={`shrink-0 ${index == 1 ? "bg-[linear-gradient(45deg,#032D7F,#0241BA)] text-white" : "bg-transparent"} md:flex-1 text-center rounded-md active:bg-[linear-gradient(45deg,#032D7F,#0241BA)] hover:bg-[linear-gradient(45deg,#032D7F,#0241BA)] py-2 px-2 text-xs md:text-sm hover:text-white text-[#4c5c75] cursor-pointer`}>Enrich Customer Experiences</p>
                <p onClick={()=>setIndex(2)} className={`shrink-0 ${index == 2 ? "bg-[linear-gradient(45deg,#032D7F,#0241BA)] text-white" : "bg-transparent"} md:flex-1 text-center rounded-md active:bg-[linear-gradient(45deg,#032D7F,#0241BA)] hover:bg-[linear-gradient(45deg,#032D7F,#0241BA)] py-2 px-2 text-xs md:text-sm hover:text-white text-[#4c5c75] cursor-pointer`}>Optimize Risk Management Processes</p>
                <p onClick={()=>setIndex(3)} className={`shrink-0 ${index == 3 ? "bg-[linear-gradient(45deg,#032D7F,#0241BA)] text-white" : "bg-transparent"} md:flex-1 text-center rounded-md active:bg-[linear-gradient(45deg,#032D7F,#0241BA)] hover:bg-[linear-gradient(45deg,#032D7F,#0241BA)] py-2 px-2 text-xs md:text-sm hover:text-white text-[#4c5c75] cursor-pointer`}>Custom LLM's</p>
                <p onClick={()=>setIndex(4)} className={`shrink-0 ${index == 4 ? "bg-[linear-gradient(45deg,#032D7F,#0241BA)] text-white" : "bg-transparent"} md:flex-1 text-center rounded-md active:bg-[linear-gradient(45deg,#032D7F,#0241BA)] hover:bg-[linear-gradient(45deg,#032D7F,#0241BA)] py-2 px-2 text-xs md:text-sm hover:text-white text-[#4c5c75] cursor-pointer`}>Web App</p>
            </div>
            <AiServices
                title={solution[index].title}
                image={solution[index].image}
                icon={solution[index].icon}
                list={solution[index].list}
            />
        </section>
        <section className='py-6 sm:py-8 md:py-10 lg:py-12'>
            <div className='flex justify-center mb-8 lg:mb-10'>
                <div className='flex rounded-lg flex-row py-1 sm:py-2 px-2 sm:px-4 gap-2 items-center border-2 border-[#e1e5e7]'>
                    <img className='shrink-0' src={laptop} alt="stars" />
                    <p className='text-sm sm:text-base 2xl:text-xl'>BENEFITS</p>
                </div>
            </div>
            <p className='w-auto md:w-[500px] 2xl:w-auto text-center text-2xl md:text-3xl mx-auto lg:text-4xl xl:text-5xl font-bold mb-10 lg:mb-12'>
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
        <section className='bg-[#f9f9f9] py-6 sm:py-8 md:py-10 lg:py-12'>
            <div className='flex justify-center mb-6 sm:mb-8 md:mb-10 lg:mb-14'>
                <div className='flex rounded-lg flex-row py-1 sm:py-2 px-2 sm:px-4 gap-2 items-center border-2 border-[#e1e5e7]'>
                    <img className='shrink-0' src={stars} alt="stars" />
                    <p className='text-sm sm:text-base 2xl:text-xl'>DEPLOYMENT OPTIONS</p>
                </div>
            </div>
            <div className='mb-4 md:mb-6 lg:mb-10'>
                <img className='w-full' src={deployment} alt="deployment" />
            </div>
            <div className='flex flex-col md:flex-row gap-6 md:gap-8 lg:gap-12'>
                <p className='flex-1 text-xl md:text-2xl lg:text-3xl font-semibold'>
                    Private Deploymwents for Ultimate Security and Data Sovereignty 
                </p>
                <p className='text-sm lg:text-base text-[#4c5c57] flex-[1.5]'>
                    Deploy Cohere privately for maximum control, security, and compliance. Virtual Private Cloud (VPC) by ensuring strict governance and compliance, also on- premises to keep all data within your systems, with no external exposure.
                </p>
            </div>
        </section>
        <section className='bg-[#f9f9f9] py-6 sm:py-8 md:py-10 lg:py-12'>
            <div className='flex justify-center mb-6 sm:mb-8 md:mb-10 lg:mb-14'>
                <div className='flex rounded-lg flex-row py-1 sm:py-2 px-2 sm:px-4 gap-2 items-center border-2 border-[#e1e5e7]'>
                    <img className='shrink-0' src={stars} alt="stars" />
                    <p className='text-sm sm:text-base 2xl:text-xl'>CUSTOMER STORIES</p>
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
