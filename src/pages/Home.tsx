import { HiArrowNarrowRight } from "react-icons/hi";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import accurate from "../assets/accurate.png";
import energy from "../assets/energy.png";
import engineering from "../assets/engineering.png";
import finanacial from "../assets/financial_services.png";
import healthcare from "../assets/health_center.png";
import laptop from "../assets/laptop-02.png";
import lightbulb from "../assets/lightbulb.png";
import project1 from "../assets/project1.png";
// import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";
import publicSector from "../assets/public_sector.png";
import scale from "../assets/scalable.png";
import seamless from "../assets/seamless.png";
import secure from "../assets/secure.png";
import service1 from "../assets/service11.png";
import service2 from "../assets/service2.png";
import service3 from "../assets/service22.png";
import stars from "../assets/stars.png";
import user from "../assets/users.png";
import AdditionalServices from "../components/AdditionalServices";
import Blogs from "../components/Blogs";
import Clientele from "../components/Clientele";
import Cta from "../components/Cta";
import Hero from "../components/Hero";
import Service from "../components/Service";
import Solution from "../components/Solution";
import axios from "axios"
import { useEffect, useState } from "react";
import { useContextValue } from "@/context";
import oceanView from "../assets/ocean-view.png"
import { BsArrowUpRightCircleFill } from "react-icons/bs";

export default function Home() {
    // const stringifiedArticles = sessionStorage.getItem("articles")
    const endpoint = "https://veoc-tech-cms.vercel.app/api/article"
    const {articles, setArticles} = useContextValue()
    const [loading, setLoading] = useState<boolean>(false)

    const getArticles = async () => {
        setLoading(true)
        try {
            const response = await axios.get(endpoint)
            setLoading(false)
            setArticles(response.data.articles)
            sessionStorage.setItem("articles", JSON.stringify(response.data.articles))
        } catch (error) {
            setLoading(false)
            console.error("Error fetching articles:", error);
        }
    }

    const calculateReadingTime = (text: string, wordPerMinute: number = 200): string =>{
        if(!text) return "0 min read"
        const words = text.trim().split(/\s+/).length
        const readingTime = Math.ceil(words / wordPerMinute)

        return `${readingTime} min read`

    }

    const SkeletonLoader = () => {
        return (
            <div className='flex-1 rounded-lg h-auto rounded-lg'>
                <div className='rounded-tl-lg rounded-tr-lg w-full h-[208px] bg-[#e0e0e0] animate-pulse'>
                </div>
                <div className='mt-2'>
                    <p className='text-xl font-semibold py-2 h-4 bg-[#e0e0e0] animate-pulse mb-2 w-full'></p>
                    <p className='bg-[#e0e0e0] h-4 animate-pulse'></p>
                    <p className='bg-[#e0e0e0] h-2 animate-pulse'></p>
                </div>
            </div>
        )
    }

    useEffect(()=>{
        getArticles()

    },[])
    return (
        <main>
            <Hero />
            <div className="bg-[#f9f9f9]">
            <section className="w-[90%] max-w-screen-xl mx-auto py-6 sm:py-8 md:py-10 lg:py-12">
                <div className="flex justify-center mb-4 sm:mb-6 md:mb-8 lg:mb-10">
                    <div className="flex rounded-lg flex-row py-1 sm:py-2 px-2 sm:px-4 gap-2 items-center border-2 border-[#e1e5e7]">
                        <img src={stars} alt="stars" />
                        <p className="text-sm sm:text-base 2xl:text-xl">
                            OUR APPROACH TO BUILDING SOLUTIONS
                        </p>
                    </div>
                </div>
                <p className="w-auto md:w-[550px] 2xl:w-auto text-center text-2xl md:text-3xl mx-auto lg:text-4xl xl:text-5xl font-bold mb-6 sm:mb-8 md:mb-10 lg:mb-12">
                    Partner with us and build a better company
                </p>
                <div className="md:px-[3%] lg:px-[5%] pb-8 md:pb-10 lg:pb-12 relative rounded-xl bg-[linear-gradient(45deg,#014594,#0181f1)] text-white h-auto md:h-[250px] lg:h-[300px] 2xl:h-[550px]">
                    <div className="h-[35px] lg:h-[50px] md:w-[175px] lg:w-[250px] absolute -top-[2px] -left-[2px] trapezium hidden md:block"></div>
                    <div className="flex flex-col md:flex-row gap-x-20 lg:gap-x-16 xl:gap-x-20 px-2 sm:px-3 md:px-0 py-6 sm:py-8 md:py-12 lg:py-12 mb-4">
                        <p className="text-xl whitespace-nowrap lg:text-2xl font-semibold md:self-end text-center md:text-start flex-1 md:flex-initial mt-4">
                            We offer leading <br /> solutions such as:
                        </p>
                        <div>
                            <p className="text-center mb-6 lg:mb-8 text-base md:text-xl">
                                Building high-impact applications grounded in your proprietary data
                            </p>
                            <button className="w-full md:w-auto bg-white rounded-md px-4 lg:px-6 py-2 lg:py-3 text-black hover:opacity-80 active:opacity-85 transition-all duration-300 ease-linear cursor-pointer">
                                Gets Started
                            </button>
                        </div>
                    </div>
                    <div className="px-2 sm:px-3 md:px-0 md:absolute md:left-[3%] lg:left-[5%] md:top-[65%] w-full md:w-[94%] lg:w-[90%] flex flex-col md:flex-row justify-between gap-4 lg:gap-6">
                        <Solution
                            title="Scalable"
                            description="From proof of concept to full production with compressed, entreprise-focused models"
                        >
                            <div className="flex justify-center">
                                <img src={scale} alt="scalable" />
                            </div>
                        </Solution>
                        <Solution
                            title="Accurate"
                            description="Fine-tune with retrieval-augmented generation (RAG) for verifiable outputs"
                        >
                            <div className="flex justify-center">
                                <img src={accurate} alt="accurate" />
                            </div>
                        </Solution>
                        <Solution
                            title="Secure"
                            description="Enterprise-grade security access controls, and private deployment options"
                        >
                            <div className="flex justify-center">
                                <img src={secure} alt="secure" />
                            </div>
                        </Solution>
                        <Solution
                            title="Maximized Value"
                            description="By combining AI tools and integrating them with your current systems"
                        >
                            <div className="flex justify-center">
                                <img src={seamless} alt="seamless" />
                            </div>
                        </Solution>
                    </div>
                </div>
            </section>
            </div>
            <section className="w-[90%] max-w-screen-xl mx-auto mt-4 md:mt-36 lg:mt-28 py-6 sm:py-8 md:py-10 lg:py-12">
                <div className="flex justify-center mb-4 sm:mb-6 md:mb-8 lg:mb-10">
                    <div className="flex rounded-lg flex-row py-1 sm:py-2 px-2 sm:px-4 gap-2 items-center border-2 border-[#e1e5e7]">
                        <img src={laptop} alt="laptop" />
                        <p className="text-sm sm:text-base 2xl:text-xl">
                            SOME INDUSTRIES WE SERVICE 
                        </p>
                    </div>
                </div>
                <p className="w-auto md:w-[470px] 2xl:w-auto mx-auto text-center text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold mb-6 sm:mb-8 md:mb-10 lg:mb-12">
                    We Use our AI solutions for all industries
                </p>
                <div className="flex w-full flex-col lg:flex-row justify-between gap-4 md:gap-6 mb-4 md:mb-6">
                    <div className="filter active:grayscale hover:grayscale transition-all duration-300 ease-linear flex-1 h-auto">
                        <img className="block h-full w-full" src={publicSector} alt="public sector" />
                    </div>
                    <div className="filter active:grayscale hover:grayscale transition-all duration-300 ease-linear flex-1 h-auto">
                        <img className="block w-full" src={energy} alt="energy" />
                    </div>
                </div>
                <div className="flex flex-col lg:flex-row justify-between gap-6 mb-2 md:mb-6">
                    <div className="filter active:grayscale hover:grayscale transition-all duration-300 ease-linear flex-1 h-auto">
                        <img className="block w-full" src={healthcare} alt="healthcare" />
                    </div>
                    <div className="filter active:grayscale hover:grayscale transition-all duration-300 ease-linear flex-1 h-auto">
                        <img className="block w-full" src={finanacial} alt="financial services" />
                    </div>
                    <div className="filter active:grayscale hover:grayscale transition-all duration-300 ease-linear flex-1 h-auto">
                        <img className="block w-full" src={engineering} alt="engineering" />
                    </div>
                </div>
            </section>
            <div className="w-[90%] max-w-screen-xl mx-auto">
            <Clientele />
            </div>
            <div className="bg-[#f9f9f9]">
            <section className="w-[90%] max-w-screen-xl mx-auto py-6 sm:py-8 md:py-10 lg:py-12">
                <div className="flex justify-center mb-4 sm:mb-6 md:mb-8 lg:mb-10">
                    <div className="flex rounded-lg flex-row py-1 sm:py-2 px-2 sm:px-4 gap-2 items-center border-2 border-[#e1e5e7]">
                        <img className="shrink-0 text-base 2xl:text-2xl" src={stars} alt="stars" />
                        <p className="text-sm md:text-base 2xl:text-xl">What we offer</p>
                    </div>
                </div>
                <p className="w-auto md:w-[450px] 2xl:w-auto mx-auto text-center text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold mb-6 sm:mb-8 md:mb-10 lg:mb-12">
                    Tailored Services for your company
                </p>
                <p className="text-base sm:text-xl 2xl:w-auto text-[#4c5c75] w-auto md:w-[400px] mx-auto text-center mb-4 sm:mb-6 md:mb-8">
                    We support you in adapting AI technologies, ensuring a smooth transition in your business
                </p>
                <div className="flex flex-col md:flex-row gap-12">
    
                    <Service
                        topic="AI CHATBOT"
                        title="Chatbot Development"
                        desc="We create, and maintain personalized AI Chatbot for your company for custom solutions of multiple purpose"
                        image={service1}
                    />
                    <Service
                        topic="AUTOMATION"
                        title="AI Automation"
                        desc="We create workflow and Automations, that, are focused on efficiency and improving results while reducing time spent"
                        image={service2}
                    />
                    <Service
                        topic="AGENTICS"
                        title="AI Agents"
                        desc="We create Agentic AI systems can make decisions and take actions without constant human supervision"
                        image={service3}
                    />
                </div>
            </section>
            </div>
            <section className="w-[90%] max-w-screen-xl mx-auto py-6 sm:py-8 md:py-10 lg:py-12">
                <div className="flex justify-center mb-4 sm:mb-6 md:mb-8 lg:mb-10">
                    <div className="flex rounded-lg flex-row py-2 px-4 gap-2 items-center border-2 border-[#e1e5e7]">
                        <img className="text-base 2xl:text-xl shrink-0" src={stars} alt="stars" />
                        <p className="leading-none text-sm sm:text-base 2xl:text-xl">ADDITIONAL SERVICES</p>
                    </div>
                </div>
                <p className="w-auto md:w-[475px] 2xl:w-auto mx-auto text-center text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold mb-6 sm:mb-8 md:mb-10 lg:mb-12">
                    Additional Service we offer for your need
                </p>
                <p className="text-xl text-[#4c5c75] w-auto md:w-[425px] 2xl:w-auto mx-auto text-center mb-4 md:mb-6 lg:mb-8">
                    We also offer leading solutions in this services. Always get the bonus solutions needed for your
                    company
                </p>
                <div>
                    <AdditionalServices
                        service="Natural Languge Processing (NLP)"
                        desc="We deliver instant, intelligent customer support and engagement 24/7. Our AI chatbots understand context, handle complex queries, and scale effortlessly across platforms."
                    />
                    <AdditionalServices
                        service="Recommendation Systems"
                        desc="We streamline repetitive tasks and optimize operations with AI-driven workflows, freeing up your team for higher-value work."
                    />
                    <AdditionalServices
                        service="AI Strategy Consulting"
                        desc="Our Agentic AI Systems can make decisions and take actions eithout constant human supervision. Deploy smart AI agents that act, learn, and adapt like human assistants."
                    />
                    <AdditionalServices
                        service="AI Feature Implement"
                        desc="Integrate AI Features and Engineer sophisticated Artificial Intelligence and AUtomated processes into your company's existing software"
                    />
                </div>
            </section>
            <section className="w-[90%] max-w-screen-xl mx-auto py-6 sm:py-8 md:py-10 lg:py-12">
                <div className="flex justify-start mb-4 sm:mb-6 md:mb-8 lg:mb-10">
                    <div className="flex rounded-lg flex-row py-1 sm:py-2 px-2 sm:px-4 gap-2 items-center border-2 border-[#e1e5e7]">
                        <img className="shrink-0 text-base 2xl:text-xl" src={user} alt="user" />
                        <p className="leading-none text-sm sm:text-base 2xl:text-xl">BLOGS</p>
                    </div>
                </div>
                <p className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-3">Latest Blogs & Resources</p>
                <p className="text-base md:text-xl text-[#4c5c75] mb-6 w-[350px] 2xl:w-[650px]">
                    Stay Informed on Developments in AI and our insights on problem solving with AI
                </p>
                <div className={`flex flex-col md:flex-row ${articles.length == 0 && !loading ? "justify-center items-center border border-[#4c5c75] rounded-md" : "justify-between items-center"} gap-6 min-h-[380px]`}>
                    {
                        loading ?
                            <>
                                <SkeletonLoader />
                                <SkeletonLoader />
                                <SkeletonLoader />
                            </>
                        : articles.length > 0 ?
                        articles.slice(0,3).map(({author,title,coverImage,description,date,tags,content, _id},idx)=>{
                            return (
                                <Blogs
                                    key={idx}
                                    index={idx}
                                    image={coverImage}
                                    title={title}
                                    description={description ? description : "no description"}
                                    date={date}
                                    author={author}
                                    topic={tags}
                                    timeStamp={content[0]!== undefined ? calculateReadingTime(content[0].paragraphText) : calculateReadingTime("")}
                                    id={_id}
                                />           
                            )
                        })
                        : <p className="text-xl md:text-2xl lg:text-3xl text-[#4c5c75]">No blogs</p>
                    }
                </div>
            </section>
            <section className="w-[90%] max-w-screen-xl mx-auto py-6 sm:py-8 md:py-10 lg:py-12">
                <div className="flex justify-center mb-6 md:mb-8 lg:mb-10">
                    <div className="flex rounded-lg flex-row py-1 sm:py-2 px-2 sm:px-4 gap-2 items-center border-2 border-[#e1e5e7]">
                        <img className="shrink-0 text-base 2xl:text-xl" src={lightbulb} alt="stars" />
                        <p className="text-sm sm:text-base 2xl:text-xl">CASE STUDY</p>
                    </div>
                </div>
                <p className="w-auto md:w-[475px] 2xl:w-auto mx-auto text-center text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-semibold mb-6 sm:mb-8 md:mb-10 lg:mb-12">
                    Check out a few of our AI Solutions
                </p>
                <Swiper
                    modules={[Navigation, Pagination]}
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                        },
                        640: {
                            slidesPerView: 2,
                        },
                        1024: {
                            slidesPerView: 3,
                        },
                    }}
                    navigation
                    pagination={{ clickable: true }}
                    className="home-swiper flex flex-row overflow-x-hidden"
                >
                    <SwiperSlide className="shrink-0 relative group cursor-pointer">
                        <img src={project1} alt="project1" />
                        <div className="absolute  top-0 left-0 w-full h-full bg-[linear-gradient(45deg,#014594,#0181f1)] opacity-0 group-hover:opacity-50 rounded-lg transition-all duration-300 ease-linear"></div>
                        <div className="absolute hidden top-[50%] left-[50%] -translate-[50%] group-hover:flex z-10 flex-col justify-center items-center gap-2 text-white">
                            <BsArrowUpRightCircleFill className="text-2xl md:text-3xl lg:text-4xl" />
                            <p className="text-xl md:text-2xl">project name</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="shrink-0 relative group cursor-pointer">
                        <img src={oceanView} alt="project2" />
                        <div className="absolute  top-0 left-0 w-full h-full bg-[linear-gradient(45deg,#014594,#0181f1)] opacity-0 group-hover:opacity-50 rounded-lg transition-all duration-300 ease-linear"></div>
                        <div className="absolute hidden top-[50%] left-[50%] -translate-[50%] group-hover:flex z-10 flex-col justify-center items-center gap-2 text-white">
                            <BsArrowUpRightCircleFill className="text-2xl md:text-3xl lg:text-4xl" />
                            <p className="text-xl md:text-2xl">project name</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="shrink-0 relative group cursor-pointer">
                        <img src={project3} alt="project3" />
                        <div className="absolute  top-0 left-0 w-full h-full bg-[linear-gradient(45deg,#014594,#0181f1)] opacity-0 group-hover:opacity-50 rounded-lg transition-all duration-300 ease-linear"></div>
                        <div className="absolute hidden top-[50%] left-[50%] -translate-[50%] group-hover:flex z-10 flex-col justify-center items-center gap-2 text-white">
                            <BsArrowUpRightCircleFill className="text-2xl md:text-3xl lg:text-4xl" />
                            <p className="text-xl md:text-2xl">project name</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="shrink-0 relative group cursor-pointer">
                        <img src={project1} alt="project1" />
                        <div className="absolute  top-0 left-0 w-full h-full bg-[linear-gradient(45deg,#014594,#0181f1)] opacity-0 group-hover:opacity-50 rounded-lg transition-all duration-300 ease-linear"></div>
                        <div className="absolute hidden top-[50%] left-[50%] -translate-[50%] group-hover:flex z-10 flex-col justify-center items-center gap-2 text-white">
                            <BsArrowUpRightCircleFill className="text-2xl md:text-3xl lg:text-4xl" />
                            <p className="text-xl md:text-2xl">project name</p>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </section>
            <div className="w-[90%] max-w-screen-xl mx-auto">
            <Cta title="Secure your company's furture by Partering with Axel Cyber" action="Book a call">
                <HiArrowNarrowRight className="inline" />
            </Cta>
            </div>
        </main>
    );
}
