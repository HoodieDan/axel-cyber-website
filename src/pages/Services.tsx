import AiBenefitBgMobile from "@/assets/ai-benefit-bg-mobile.png";
import AiBenefitBg from "@/assets/ai-benefit-bg.png";
import ArrowUpRight from "@/components/icons/ArrowUpRight";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import ai1 from "../assets/ai1.png";
import bi1 from "../assets/bi1.webp";
import bi2 from "../assets/bi2.webp";
import bi3 from "../assets/bi3.webp";
import bi4 from "../assets/bi4.webp";
import companylogo from "../assets/companylogo.webp";
import customer from "../assets/cuastomer-exp.png";
import CustomLLMImg from "../assets/custom-llm.png";
import deployment from "../assets/deployment.webp";
import goldfrapp from "../assets/goldfrapp.png";
import hulu from "../assets/hulu.png";
import ibm from "../assets/ibm.png";
import information from "../assets/information.png";
import laptop from "../assets/laptop-02.png";
import optimization from "../assets/optimization.png";
import pencil from "../assets/pencil.png";
import profilepic from "../assets/profilepic.webp";
import rocket from "../assets/rocket.png";
import volume from "../assets/volume.png";
import WebAppImg from "../assets/web-app.png";
import AiServices from "../components/AiServices";
import Cta from "../components/Cta";

interface AiBenefitProps {
    title: string;
    icon: string;
    desc: string;
}

interface TestimonialProps {
    name: string;
    position: string;
    content: string;
    profilePic: string;
    companyLogo: string;
}

const solution = [
    {
        title: "Boost Operational Efficiency",
        heading: "Optimize Risk Management Processes",
        image: ai1,
        icon: rocket,
        list: [
            "Automate routine tasks",
            "Summarize financial reports",
            "Instantly surface actionable insights from unstructured data",
        ],
    },
    {
        title: "Enrich Customer Experiences",
        heading: "Enrich Customer Experiences",
        image: customer,
        icon: rocket,
        list: ["Deliver fast, accurate and personalized responses to inquiries in multiple languages"],
    },
    {
        title: "Optimize Risk Management Processes",
        heading: "Optimize a variety of processes",
        image: optimization,
        icon: rocket,
        list: ["Streamline complice workflows", "Prevent fraud by analyzing vast datasets for anomalies"],
    },
    {
        title: "Custom LLM's",
        heading: "Deploy smart AI agents that take optimized action",
        image: CustomLLMImg,
        icon: rocket,
        list: ["Streamline complice workflows", "Prevent fraud by analyzing vast datasets for anomalies"],
    },
    {
        title: "Web App",
        heading: "Build powerful custom AI systems",
        image: WebAppImg,
        icon: rocket,
        list: ["Streamline complice workflows", "Prevent fraud by analyzing vast datasets for anomalies"],
    },
];

function AiBenefit({ title, icon, desc }: AiBenefitProps) {
    return (
        <div className="relative isolate flex items-center md:px-10 px-16 md:h-125 h-86 rounded-3xl">
            <img src={AiBenefitBg} alt="" className="md:block hidden absolute inset-0 size-full -z-10" />
            <img src={AiBenefitBgMobile} alt="" className="md:hidden block absolute inset-0 size-full -z-10" />

            <div className="h-3/5 flex flex-col gap-10.5 items-center">
                <figure className="size-10">
                    <img src={icon} alt="icon" loading="lazy" className="size-full" />
                </figure>
                <div className="flex flex-col gap-4">
                    <p className="md:text-3xl text-lg leading-[130%] text-center text-white font-medium">{title}</p>
                    <p className="text-base text-center text-[#d5d5d5]">{desc}</p>
                </div>
            </div>
        </div>
    );
}

function Testimonial({ name, position, content, profilePic, companyLogo }: TestimonialProps) {
    return (
        <div className="bg-[linear-gradient(45deg,#053899,#0f0255)] w-full shrink-0 md:p-6 rounded-xl md:rounded-2xl flex">
            <div className="flex-1 hidden md:flex flex-col justify-between gap-4 md:gap-6">
                <img
                    className="self-start"
                    src={companyLogo}
                    alt="company logo"
                    loading="lazy"
                    width={70}
                    height={24}
                />
                <div className="flex flex-col md:flex-row gap-2.5 items-start md:items-center">
                    <img
                        src={profilePic}
                        alt="profile pic"
                        className="w-[32px] lg:w-[48px] h-[32px] lg:h-[48px] rounded-ful"
                        loading="lazy"
                        width={48}
                        height={48}
                    />
                    <div className="text-white">
                        <p className="text-base md:text-lg font-medium">{name}</p>
                        <p className="text-xs md:text-sm text-[#a1a1a1] font-medium">{position}</p>
                    </div>
                </div>
            </div>
            <div className="flex-1">
                <p className="h-auto md:h-full text-sm md:text-lg rounded-tl-xl rounded-tr-xl md:rounded-2xl lg:text-xl px-2 lg:px-4 py-3 lg:py-4 xl:py-6 bg-[#262728] text-white">
                    {content}
                </p>
                <div className="rounded-bl-xl rounded-br-xl px-2 py-4 flex md:hidden flex-row gap-2 md:gap-4 lg:gap-6 items-start md:items-center bg-[#262728]">
                    <img
                        src={profilePic}
                        alt="profile pic"
                        className="w-[32px] lg:w-[48px] h-[32px] lg:h-[48px] rounded-ful"
                        loading="lazy"
                        width={48}
                        height={48}
                    />
                    <div className="text-white">
                        <p className="text-base md:text-xl font-semibold">{name}</p>
                        <p className="text-xs md:text-sm text-[#a1a1a1]">{position}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default function Services() {
    const [index, setIndex] = useState(0);
    const navigate = useNavigate();
    return (
        <main>
            <section className="px-[5%] service-section mb-20 mt-10 sm:mb-40 md:mt-10 md:mb-32 lg:mt-12 lg:mb-24 flex flex-col md:-space-y-12.5 -space-y-7">
                <div className="bg-[linear-gradient(0deg,rgba(0,0,0,0.3),rgba(0,0,0,0.3)),url(/src/assets/service-hero-img.png)] bg-cover bg-center bg-no-repeat w-full md:h-136 h-87.5 px-6 flex flex-col items-center justify-center md:gap-10 gap-6 rounded-4xl">
                    <div className="md:space-y-6 space-y-3">
                        <p className="mx-auto text-white text-3xl md:text-5xl md:leading-15 font-tt-hoves font-semibold text-center">
                            Unlocking New Efficiencies Across
                            <br className="md:inline hidden" /> The Financial Sector
                        </p>
                        <p className="text-center text-white text-sm md:text-xl md:leading-7.5">
                            At Axel cyber we have a focus on delivering Maximum Impact using with a
                            <br className="md:inline hidden" /> focus on Aiding Humans and Organizations with our
                            expertise in Artificial
                            <br className="md:inline hidden" /> Intelligence Consulting and Integration.
                        </p>
                    </div>
                    <Button
                        className="text-black bg-white hover:bg-white/90 md:h-12.5 h-11 w-fit has-[>svg]:px-5 rounded-3xl transition-all duration-300 ease-linear cursor-pointer"
                        onClick={() => {
                            navigate("/contact");
                            window.scrollTo({ top: 0, behavior: "smooth" });
                        }}
                    >
                        <span>Request a Demo</span>
                        <ArrowUpRight />
                    </Button>
                </div>

                <div className="flex flex-col justify-center gap-5 md:w-7/10 w-19/20 md:h-35 mx-auto md:p-14 p-5 rounded-2xl shadow-md bg-[#F4F7FE]">
                    <p className="text-center font-medium text-base text-black">Trusted by Industry Leaders:</p>
                    <div className="grid grid-cols-2 md:grid-cols-6 gap-10 md:items-center justify-items-center">
                        <img src={goldfrapp} alt="Goldfrapp company logo" loading="lazy" />
                        <img src={pencil} alt="Pencil company logo" loading="lazy" />
                        <img src={volume} alt="Volume company logo" loading="lazy" />
                        <img src={information} alt="Information company logo" loading="lazy" />
                        <img src={ibm} alt="IBM company logo" loading="lazy" />
                        <img src={hulu} alt="Hulu company logo" loading="lazy" />
                    </div>
                </div>
            </section>

            <section className="bg-[#f9f9f9]">
                <div className="px-[5%] mx-auto pt-6 pb-8 sm:py-8 md:py-20">
                    <div className="flex justify-center mb-4 sm:mb-6 md:mb-8 lg:mb-10">
                        <div className="flex rounded-lg flex-row p-2 gap-2 items-center justify-center border-2 border-[#e1e5e7]">
                            <img
                                className="shrink-0 text-base 2xl:text-xl"
                                src={"/stars.png"}
                                alt="stars"
                                loading="lazy"
                                width={16}
                                height={16}
                            />
                            <p className="text-sm leading-none">CAPABILITIES</p>
                        </div>
                    </div>
                    <p className="text-center text-3xl lg:text-5xl leading-[120%] mx-auto font-medium font-tt-hoves mb-6 sm:mb-8 md:mb-10 lg:mb-12">
                        Our AI-powered Assistant
                        <br /> solutions for your business
                    </p>
                    <div className="mb-4 md:mb-6 lg:mb-10 flex rounded-xl p-2 gap-4 md:gap-0 items-center bg-[#e3e7ea] w-full overflow-x-auto hide-scrollbar">
                        {solution.map((item, idx) => (
                            <p
                                key={idx}
                                onClick={() => setIndex(idx)}
                                className={cn(
                                    "flex-1 whitespace-nowrap text-center px-7 py-4 rounded-lg text-xs md:text-base text-[#4C5C75] hover:text-[#032D7F] cursor-pointer transition duration-300 ease-linear",
                                    index === idx &&
                                        "bg-[linear-gradient(45deg,#032D7F,#0241BA)] text-white hover:text-white",
                                )}
                            >
                                {item.title}
                            </p>
                        ))}
                    </div>
                    <AiServices
                        title={solution[index].heading}
                        image={solution[index].image}
                        icon={solution[index].icon}
                        list={solution[index].list}
                    />
                </div>
            </section>

            <section className="px-[5%] mx-auto pt-6 pb-8 sm:py-8 md:py-20">
                <div className="flex justify-center mb-8 lg:mb-10">
                    <div className="flex rounded-lg flex-row py-1 sm:py-2 px-2 sm:px-4 gap-2 items-center border-2 border-[#e1e5e7]">
                        <img className="shrink-0" src={laptop} alt="laptop" loading="lazy" width={16} height={16} />
                        <p className="text-sm">BENEFITS</p>
                    </div>
                </div>
                <p className="text-center text-3xl md:text-5xl leading-[120%] font-medium font-tt-hoves mb-10 md:mb-14">
                    Enterprise-grade AI
                    <br /> Benefits
                </p>
                <div className="grid md:grid-cols-4 gap-5">
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
                        desc={
                            "Deploy smart chatbots connected to your internal data to deliver fast, relevant responses to customer queries."
                        }
                    />
                </div>
            </section>

            <section className="bg-[#f9f9f9] mb-8 lg:mb-10 xl:mb-12">
                <div className="px-[5%] mx-auto pt-6 pb-8 sm:py-8 md:py-20">
                    <div className="flex justify-center mb-6 sm:mb-8 md:mb-10 lg:mb-14">
                        <div className="flex rounded-lg flex-row p-2 sm:px-4 gap-2 items-center border-2 border-[#e1e5e7]">
                            <img
                                className="shrink-0"
                                src={"/stars.png"}
                                alt="stars"
                                loading="lazy"
                                width={16}
                                height={16}
                            />
                            <p className="text-sm">DEPLOYMENT OPTIONS</p>
                        </div>
                    </div>
                    <div className="mb-4 md:mb-6 lg:mb-10 flex w-full h-94 rounded-3xl overflow-hidden">
                        <img className="size-full object-cover" src={deployment} alt="deployment" loading="lazy" />
                    </div>
                    <div className="flex flex-col md:flex-row gap-6 md:gap-8 lg:gap-12">
                        <p className="md:flex-9/20 text-2xl lg:text-[2.125rem] leading-[120%] font-medium font-tt-hoves">
                            Private Deploymwents for Ultimate Security and Data Sovereignty
                        </p>
                        <p className="text-lg text-[#4c5c57] md:flex-11/20">
                            Deploy Cohere privately for maximum control, security, and compliance. Virtual Private Cloud
                            (VPC) by ensuring strict governance and compliance, also on- premises to keep all data
                            within your systems, with no external exposure.
                        </p>
                    </div>
                </div>
            </section>

            <section className="px-[5%] mx-auto">
                <div className="bg-[#f9f9f9] pt-6 pb-8 sm:py-8 md:py-20 rounded-3xl overflow-hidden">
                    <div className="flex justify-center mb-12 lg:mb-16">
                        <div className="flex rounded-lg flex-row p-2 gap-2 items-center border-2 border-[#e1e5e7]">
                            <img
                                className="shrink-0"
                                src={"/stars.png"}
                                alt="stars"
                                loading="lazy"
                                width={24}
                                height={24}
                            />
                            <p className="text-sm">CUSTOMER STORIES</p>
                        </div>
                    </div>
                    <Swiper
                        modules={[Navigation, Pagination]}
                        slidesPerView={1}
                        spaceBetween={50}
                        navigation
                        pagination={{ clickable: true }}
                        className="service-swipper flex flex-row gap-3 md:gap-6"
                    >
                        <SwiperSlide>
                            <Testimonial
                                name={"Prima Abiola"}
                                position={"Founder & CEO Hotels.ng"}
                                content={
                                    "“With Cohere's latest highly secure enterprise LLMs, we aim to provide businesses with powerful and adaptable AI solutions that address specific needs and accelerate the adoption of generative AI globally.”"
                                }
                                companyLogo={companylogo}
                                profilePic={profilepic}
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Testimonial
                                name={"Prima Abiola"}
                                position={"Founder & CEO Hotels.ng"}
                                content={
                                    "“With Cohere's latest highly secure enterprise LLMs, we aim to provide businesses with powerful and adaptable AI solutions that address specific needs and accelerate the adoption of generative AI globally.”"
                                }
                                companyLogo={companylogo}
                                profilePic={profilepic}
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Testimonial
                                name={"Prima Abiola"}
                                position={"Founder & CEO Hotels.ng"}
                                content={
                                    "“With Cohere's latest highly secure enterprise LLMs, we aim to provide businesses with powerful and adaptable AI solutions that address specific needs and accelerate the adoption of generative AI globally.”"
                                }
                                companyLogo={companylogo}
                                profilePic={profilepic}
                            />
                        </SwiperSlide>
                    </Swiper>
                </div>
            </section>

            <section className="px-[5%] mx-auto">
                <Cta
                    title={
                        <>
                            Secure your company's future by
                            <br /> Partnering with Axel Cyber
                        </>
                    }
                    action="Request a Demo"
                >
                    <ArrowUpRight className="inline size-4" />
                </Cta>
            </section>
        </main>
    );
}
