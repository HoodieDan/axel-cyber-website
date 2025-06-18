import {motion} from "motion/react"
import Hero from "../components/Hero";
import axios from "axios"
import { useEffect, useState } from "react";
import { useContextValue } from "@/context";
import { lazy, Suspense} from "react"; 
import Solution from "../components/Solution"

const HiArrowNarrowRight = lazy(()=>
    import("lucide-react").then(mod => ({default: mod.MoveRight}))
)
const HomeLazySwiper = lazy(() => import("../components/HomeLazySwiper"));
const IndustiesWeService = lazy(() => import("../components/IndustiesWeService"));
const AdditionalServices = lazy(() => import("../components/AdditionalServices"));
const Service = lazy(() => import("../components/Service"));
const Cta = lazy(() => import("../components/Cta"));
const Blogs = lazy(() => import("../components/Blogs"));
const Clientele = lazy(() => import("../components/Clientele"));


const calculateReadingTime = (text: string, wordPerMinute: number = 200): string =>{
    if(!text) return "0 min read"
        const words = text.trim().split(/\s+/).length
        const readingTime = Math.ceil(words / wordPerMinute)
        return `${readingTime} min read`
    }

export default function Home() {
    const endpoint = "https://veoc-tech-cms.vercel.app/api/article"
    const {articles, setArticles} = useContextValue()
    const [loading, setLoading] = useState<boolean>(true)

    const getArticles = async () => {
        try {
            const response = await axios.get(endpoint)
            setArticles(response.data.articles)
            setLoading(false)
            sessionStorage.setItem("articles", JSON.stringify(response.data.articles))
        } catch (error) {
            setLoading(false)
            console.error("Error fetching articles:", error);
        }
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
            <section className="max-w-screen-xl mx-auto pt-6 pb-10 sm:py-8 md:py-10 lg:py-12">
                <div className="flex justify-center mb-4 sm:mb-6 md:mb-8 lg:mb-10">
                    <div className="flex rounded-lg flex-row py-1 sm:py-2 px-2 sm:px-4 gap-2 items-center border-2 border-[#e1e5e7]">
                        <img 
                            src='/stars.png' 
                            alt="stars"
                            loading="lazy"
                            width={16}
                            height={16}
                            />
                        <p className="text-sm sm:text-base 2xl:text-xl">
                            OUR APPROACH TO BUILDING SOLUTIONS
                        </p>
                    </div>
                </div>
                <motion.p 
                    className="px-[5%] md:px-0 w-auto md:w-[550px] 2xl:w-auto text-center text-3xl mx-auto lg:text-4xl xl:text-5xl font-bold mb-6 sm:mb-8 md:mb-10 lg:mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{delay:0.25, ease: "easeInOut" }}
                    viewport={{ once: true }}
                    >
                    Partner with us and build a better company
                </motion.p>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{delay:0.25, ease: "easeInOut" }}
                    viewport={{ once: true }} 
                    className="px-[5%] pb-8 md:pb-10 lg:pb-12 relative bg-[linear-gradient(45deg,#014594,#0181f1)] text-white h-auto md:h-[250px] lg:h-[300px] 2xl:h-[550px]"
                >
                    <div className="h-[35px] lg:h-[50px] md:w-[175px] lg:w-[250px] absolute -top-[2px] -left-[2px] trapezium hidden md:block"></div>
                    <div className="flex flex-col md:flex-row gap-x-20 lg:gap-x-16 xl:gap-x-20 pt-12 pb-8 sm:py-10 md:py-14 lg:py-12 mb-4">
                        <p className="whitespace-nowrap text-2xl font-semibold md:self-end text-center md:text-start flex-1 md:flex-initial mt-4 mb-3">
                            We offer leading <br /> solutions such as:
                        </p>
                        <div>
                            <p className="text-center 2xl:text-start mb-6 lg:mb-8 text-base md:text-xl">
                                Building high-impact applications grounded in your proprietary data
                            </p>
                            <button className="w-full md:w-auto bg-white rounded-md px-4 lg:px-6 py-4 text-black hover:opacity-80 active:opacity-85 transition-all duration-300 ease-linear cursor-pointer">
                                Gets Started
                            </button>
                        </div>
                    </div>
                    <div className="px-2 sm:px-3 md:px-0 md:absolute md:left-[3%] lg:left-[5%] md:top-[65%] w-full md:w-[94%] lg:w-[90%] flex flex-col md:flex-row justify-between gap-4 lg:gap-6">
                        <Solution
                            title="Scalable"
                            description="From proof of concept to full production with compressed, entreprise-focused models"
                            imgUrl="/scalable.webp"
                        />
                        <Solution
                            title="Accurate"
                            description="Fine-tune with retrieval-augmented generation (RAG) for verifiable outputs"
                            imgUrl="/accurate.webp"
                        >
                        </Solution>
                        <Solution
                            title="Secure"
                            description="Enterprise-grade security access controls, and private deployment options"
                            imgUrl="/secure.webp"
                        />
                        <Solution
                            title="Maximized Value"
                            description="By combining AI tools and integrating them with your current systems"
                            imgUrl="/seamless.webp"
                        />
                    </div>
                </motion.div>
            </section>
            </div>
            <Suspense fallback={<div className="w-full min-h-[300px] md:min-h-[400px] lg:min-h-[600px] flex justify-center items-center"><span className="inline-block animate-pulse">loading...</span></div>}>
                <IndustiesWeService />
            </Suspense>
            <div className="w-[90%] max-w-screen-xl mx-auto">
                <Clientele />
            </div>
            <div className="bg-[#f9f9f9]">
            <section className="w-[90%] max-w-screen-xl mx-auto pt-10 pb-6 sm:py-8 md:py-10 lg:py-12">
                <div className="flex justify-center mb-4 sm:mb-6 md:mb-8 lg:mb-10">
                    <div className="flex rounded-lg flex-row py-1 sm:py-2 px-2 sm:px-4 gap-2 items-center border-2 border-[#e1e5e7]">
                        <img 
                            className="shrink-0 text-base 2xl:text-2xl" 
                            src={'/stars.png'} 
                            alt="stars" 
                            loading="lazy"
                            width={16}
                            height={16}
                        />
                        <p className="text-sm md:text-base 2xl:text-xl">What we offer</p>
                    </div>
                </div>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{delay:0.25, ease: "easeInOut" }}
                    viewport={{ once: true }} 
                    className="w-auto md:w-[450px] 2xl:w-auto mx-auto text-center text-3xl lg:text-4xl xl:text-5xl font-semibold mb-6 sm:mb-8 md:mb-10 lg:mb-12"
                >
                    Tailored Services for your company
                </motion.p>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{delay:0.25, ease: "easeInOut" }}
                    viewport={{ once: true }}
                    className="text-base sm:text-xl 2xl:w-auto text-[#4c5c75] w-auto md:w-[400px] mx-auto text-center mb-4 sm:mb-6 md:mb-8">
                    We support you in adapting AI technologies, ensuring a smooth transition in your business
                </motion.p>
                <div
                    className="flex flex-col md:flex-row gap-12">
                    <Suspense fallback={<div className="w-full min-h-[300px] md:min-h-[400px] flex justify-center items-center"><span className="inline-block animate-pulse">loading...</span></div>}>
                        <Service
                            delay={0.25}
                            topic="AI CHATBOT"
                            title="Chatbot Development"
                            desc="We create, and maintain personalized AI Chatbot for your company for custom solutions of multiple purpose"
                            image="/service11.webp"
                        />
                        <Service
                            delay={0.35}
                            topic="AUTOMATION"
                            title="AI Automation"
                            desc="We create workflow and Automations, that, are focused on efficiency and improving results while reducing time spent"
                            image="/service2.webp"
                        />
                        <Service
                            delay={0.45}
                            topic="AGENTICS"
                            title="AI Agents"
                            desc="We create Agentic AI systems can make decisions and take actions without constant human supervision"
                            image="/service3.webp"
                        />
                    </Suspense>
                </div>
            </section>
            </div>
            <section className="w-[90%] max-w-screen-xl mx-auto py-6 sm:py-8 md:py-10 lg:py-12">
                <div className="flex justify-center mb-4 sm:mb-6 md:mb-8 lg:mb-10">
                    <div className="flex rounded-lg flex-row py-2 px-4 gap-2 items-center border-2 border-[#e1e5e7]">
                        <img 
                            className="text-base 2xl:text-xl shrink-0" 
                            src={"/stars.png"} 
                            alt="stars"
                            loading="lazy"
                            width={16}
                            height={16} 
                        />
                        <p className="leading-none text-sm sm:text-base 2xl:text-xl">ADDITIONAL SERVICES</p>
                    </div>
                </div>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{delay:0.25, ease: "easeInOut" }}
                    viewport={{ once: true }} 
                    className="w-auto md:w-[475px] 2xl:w-auto mx-auto text-center text-3xl lg:text-4xl xl:text-5xl vfont-semibold mb-6 sm:mb-8 md:mb-10 lg:mb-12">
                    Additional Service we offer for your need
                </motion.p>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{delay:0.25, ease: "easeInOut" }}
                    viewport={{ once: true }} 
                    className="text-xl text-[#4c5c75] w-auto md:w-[450px] 2xl:w-auto mx-auto text-center mb-4 md:mb-6 lg:mb-8">
                    We also offer leading solutions in this services. Always get the bonus solutions needed for your
                    company
                </motion.p>
                <div>
                    <Suspense fallback={<div className="w-full min-h-[300px] md:min-h-[400px] lg:min-h-[600px] flex justify-center items-center"><span className="inline-block animate-pulse">loading...</span></div>}>
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
                    </Suspense>
                </div>
            </section>
            <section className="w-[90%] max-w-screen-xl mx-auto py-6 sm:py-8 md:py-10 lg:py-12">
                <div className="flex justify-center md:justify-start mb-4 sm:mb-6 md:mb-8 lg:mb-10">
                    <div className="flex rounded-lg flex-row py-1 sm:py-2 px-2 sm:px-4 gap-2 items-center border-2 border-[#e1e5e7]">
                        <img 
                            className="shrink-0 text-base 2xl:text-xl" 
                            src={"/users.png"} 
                            alt="user" 
                            loading="lazy"
                            width={16}
                            height={16}    
                        />
                        <p className="leading-none text-sm sm:text-base 2xl:text-xl">BLOGS</p>
                    </div>
                </div>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{delay:0.25, ease: "easeInOut" }}
                    viewport={{ once: true }} 
                    className="text-3xl lg:text-4xl font-semibold mb-3 text-center md:text-start"
                >
                    Latest Blogs & Resources
                </motion.p>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{delay:0.25, ease: "easeInOut" }}
                    viewport={{ once: true }} 
                    className="text-base md:text-xl text-[#4c5c75] mb-6 w-[350px] 2xl:w-[650px] text-center md:text-center">
                    Stay Informed on Developments in AI and our insights on problem solving with AI
                </motion.p>
                <div className={`flex flex-col md:flex-row ${articles.length == 0 && !loading ? "justify-center items-center border border-[#4c5c75] rounded-md" : "justify-between items-center"} gap-6 min-h-[380px]`}>
                    {
                        loading ?
                            <>
                                <SkeletonLoader />
                                <SkeletonLoader />
                                <SkeletonLoader />
                            </>
                        : articles.length > 0 ?
                        <Suspense fallback={<div className="w-full min-h-[300px] md:min-h-[400px] flex justify-center items-center"><span className="inline-block animate-pulse">loading...</span></div>}>
                        {
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
                        }
                        </Suspense>
                        : <p className="text-xl md:text-2xl lg:text-3xl text-[#4c5c75]">No blogs</p>
                    }
                </div>
            </section>
            <section className="w-[90%] max-w-screen-xl mx-auto py-6 sm:py-8 md:py-10 lg:py-12">
                <div className="flex justify-center mb-6 md:mb-8 lg:mb-10">
                    <div className="flex rounded-lg flex-row py-1 sm:py-2 px-2 sm:px-4 gap-2 items-center border-2 border-[#e1e5e7]">
                        <img 
                            className="shrink-0 text-base 2xl:text-xl" 
                            src={"/lightbulb.png"} 
                            alt="stars" 
                            width={16}
                            height={16}
                            loading="lazy"    
                        />
                        <p className="text-sm sm:text-base 2xl:text-xl">CASE STUDY</p>
                    </div>
                </div>
                <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{delay:0.25, ease: "easeInOut" }}
                    viewport={{ once: true }}
                    className="w-auto md:w-[475px] 2xl:w-auto mx-auto text-center text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-semibold mb-6 sm:mb-8 md:mb-10 lg:mb-12">
                    Check out a few of our AI Solutions
                </motion.p>
                <Suspense fallback={<div className="w-full h-[400px] flex justify-center items-center"><span className="inline-block animate-pulse" />loading....</div>}>
                    <HomeLazySwiper />
                </Suspense>
            </section>
            <div className="w-[90%] max-w-screen-xl mx-auto">
                <Suspense fallback={<div className="w-full min-h-[300px] flex justify-center items-center"><span className="inline-block animate-pulse">loading...</span></div>}>
                    <Cta title="Secure your company's furture by Partering with Axel Cyber" action="Book a call">
                        <Suspense fallback={<span className="w-5 h-5 inline-block animate-pulse bg-gray-300 rounded-full" />}>
                            <HiArrowNarrowRight  className="inline size-4" />
                        </Suspense>
                    </Cta>
                </Suspense>
            </div>
        </main>
    );
}
