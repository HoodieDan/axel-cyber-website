import React from "react";
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
import image1 from "../assets/image1.png";
import image2 from "../assets/image2.png";
import image3 from "../assets/image3.png";
import laptop from "../assets/laptop-02.png";
import lightbulb from "../assets/lightbulb.png";
import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
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

export default function Home() {
    return (
        <main>
            <Hero />
            <section className="px-[5%] bg-[#f9f9f9] py-6 sm:py-8 md:py-10 lg:py-12">
                <div className="flex justify-center mb-8 lg:mb-10">
                    <div className="flex rounded-lg flex-row py-2 px-4 gap-2 items-center border-2 border-[#e1e5e7]">
                        <img src={stars} alt="stars" />
                        <p>OUR APPROACH TO BUILDING SOLUTIONS</p>
                    </div>
                </div>
                <p className="w-auto md:w-[550px] text-center text-3xl mx-auto lg:text-4xl xl:text-5xl font-bold mb-10 lg:mb-12">
                    Partner with us and build a better company
                </p>
                <div className="px-[5%] md:px-[3%] lg:px-[5%] pb-4 relative rounded-xl bg-[linear-gradient(45deg,#014594,#0181f1)] text-white h-auto md:h-[300px]">
                    <div className="absolute -top-[2px] -left-[2px] trapezium hidden md:block"></div>
                    <div className="flex flex-row md:gap-x-8 lg:gap-x-16 xl:gap-x-20 py-4 md:py-12 mb-4">
                        <p className="text-xl whitespace-nowrap lg:text-2xl font-semibold md:self-end text-center md:text-start flex-1 md:flex-initial">
                            We offer leading <br /> solutions such as:
                        </p>
                        <div className="hidden md:block">
                            <p className="mb-6 lg:mb-8 text-2xl">
                                Building high-impact applications grounded in your proprietary data
                            </p>
                            <button className="bg-white rounded-lg py-2 px-6 text-black">Gets Started</button>
                        </div>
                    </div>
                    <div className="md:absolute md:left-[3%] lg:left-[5%] md:top-[65%] w-full md:w-[94%] lg:w-[90%] flex flex-col md:flex-row justify-between gap-4 lg:gap-6">
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
                            title="Seamless Integration"
                            description="By combining AI tools and integrating them with your current systems"
                        >
                            <div className="flex justify-center">
                                <img src={seamless} alt="seamless" />
                            </div>
                        </Solution>
                    </div>
                </div>
            </section>
            <section className="px-[5%] mt-6 md:mt-36 lg:mt-28 py-6 sm:py-8 md:py-10 lg:py-12">
                <div className="flex justify-center mb-8 lg:mb-10">
                    <div className="flex rounded-lg flex-row py-2 px-4 gap-2 items-center border-2 border-[#e1e5e7]">
                        <img src={laptop} alt="laptop" />
                        <p>SOME INDUSTRIES WE SERVICE</p>
                    </div>
                </div>
                <p className="w-auto md:w-[500px] mx-auto text-center text-3xl lg:text-4xl xl:text-5xl font-semibold mb-10 lg:mb-12">
                    We Use our AI solutions for all industries
                </p>
                <div className="flex w-full flex-col lg:flex-row justify-between gap-6 mb-6">
                    <div className="flex-1 h-auto">
                        <img className="block w-full" src={publicSector} alt="public sector" />
                    </div>
                    <div className="flex-1 h-auto">
                        <img className="block w-full" src={energy} alt="energy" />
                    </div>
                </div>
                <div className="flex flex-col lg:flex-row justify-between gap-6 mb-6">
                    <div className="flex-1 h-auto">
                        <img className="block w-full" src={healthcare} alt="healthcare" />
                    </div>
                    <div className="flex-1 h-auto">
                        <img className="block w-full" src={finanacial} alt="financial services" />
                    </div>
                    <div className="flex-1 h-auto">
                        <img className="block w-full" src={engineering} alt="engineering" />
                    </div>
                </div>
            </section>
            <Clientele />
            <section className="px-[5%] bg-[#f9f9f9] py-6 sm:py-8 md:py-10 lg:py-12">
                <div className="flex justify-center mb-8 lg:mb-10">
                    <div className="flex rounded-lg flex-row py-2 px-4 gap-2 items-center border-2 border-[#e1e5e7]">
                        <img src={stars} alt="stars" />
                        <p>What we offer</p>
                    </div>
                </div>
                <p className="w-auto md:w-[450px] mx-auto text-center text-3xl lg:text-4xl xl:text-5xl font-semibold mb-10 lg:mb-12">
                    Tailored Services for your company
                </p>
                <p className="text-xl text-[#4c5c75] w-auto md:w-[400px] mx-auto text-center mb-8">
                    We support you in adapting AI technologies, ensuring a smooth transition in your business
                </p>
                <div className="flex flex-col md:flex-row gap-12">
                    <Service
                        topic="AI CHATBOT"
                        title="Chatbot Development"
                        desc="We create, and maintain personalized AI Chatbot for your company for custom solutions and lead generations"
                        image={service1}
                    />
                    <Service
                        topic="AUTOMATION"
                        title="AI Automation"
                        desc="We create workflow and social media automations, we also do weel with CRM management"
                        image={service2}
                    />
                    <Service
                        topic="VOICE AI"
                        title="SEO"
                        desc="We offer great search engine optimization by helping search understand your content"
                        image={service3}
                    />
                </div>
            </section>
            <section className="px-[5%] py-6 sm:py-8 md:py-10 lg:py-12">
                <div className="flex justify-center mb-8 lg:mb-10">
                    <div className="flex rounded-lg flex-row py-2 px-4 gap-2 items-center border-2 border-[#e1e5e7]">
                        <img src={stars} alt="stars" />
                        <p>ADDITIONAL SERVICES</p>
                    </div>
                </div>
                <p className="w-auto md:w-[475px] mx-auto text-center text-3xl lg:text-4xl xl:text-5xl font-semibold mb-10 lg:mb-12">
                    Additional Service we offer for your need
                </p>
                <p className="text-xl text-[#4c5c75] w-auto md:w-[480px] mx-auto text-center mb-8">
                    We also offer leading solutions in this services. Always get the bonus solutions needed for your
                    company
                </p>
                <div>
                    <AdditionalServices
                        service="Mobile & Website Design"
                        desc="We build functional website and apps (desktop & mobile), maintaining brand consistency and enjoyable experience"
                    />
                    <AdditionalServices
                        service="Web Development"
                        desc="After designing we obviously need to bring the designs to life, our experienced team brings designs to life with precision"
                    />
                    <AdditionalServices
                        service="Brand Guidelines"
                        desc="We build brand guidelines and identity for your company to maintain consistency among all design systems"
                    />
                    <AdditionalServices
                        service="Product Design"
                        desc="We build brand guidelines and identity for your company to maintain consistency among all design systems"
                    />
                </div>
            </section>
            <section className="px-[5%] py-6 sm:py-8 md:py-10 lg:py-12">
                <div className="flex justify-start mb-8 lg:mb-10">
                    <div className="flex rounded-lg flex-row py-2 px-4 gap-2 items-center border-2 border-[#e1e5e7]">
                        <img src={user} alt="user" />
                        <p>BLOGS</p>
                    </div>
                </div>
                <p className="text-4xl font-semibold mb-3">Latest Blogs & Resources</p>
                <p className="text-xl text-[#4c5c75] mb-6 w-[350px]">
                    Stay Informed on Developments in AI and our insights on problem solving with AI
                </p>
                <div className="flex flex-col md:flex-row justify-between gap-6">
                    <Blogs
                        image={image1}
                        title="How to Navigate Your Company To The Right Direction Using AI"
                        description="Studying abroad can be an exciting journey, but it comes with its fair share of challenges --one of..."
                        date="Thu Dec 19, 2024"
                        author="Esther Ebere"
                        topic="Automation"
                        timeStamp="5 min read"
                    />
                    <Blogs
                        image={image2}
                        title="How to Navigate Your COmpany To The Right Direction Using AI"
                        description="Studying abroad can be an exciting journey, but it comes with its fair share of challenges --one of..."
                        date="Thu Dec 19, 2024"
                        author="Esther Ebere"
                        topic="Chatbot developmeent"
                        timeStamp="7 min read"
                    />
                    <Blogs
                        image={image3}
                        title="How to Navigate Your COmpany To The Right Direction Using AI"
                        description="Studying abroad can be an exciting journey, but it comes with its fair share of challenges --one of..."
                        date="Thu Dec 19, 2024"
                        author="Esther Ebere"
                        topic="Automation"
                        timeStamp="5 min read"
                    />
                </div>
            </section>
            <section className="px-[5%] py-6 sm:py-8 md:py-10 lg:py-12">
                <div className="flex justify-center mb-8 lg:mb-10">
                    <div className="flex rounded-lg flex-row py-2 px-4 gap-2 items-center border-2 border-[#e1e5e7]">
                        <img src={lightbulb} alt="stars" />
                        <p>CASE STUDY</p>
                    </div>
                </div>
                <p className="w-auto md:w-[475px] mx-auto text-center text-3xl lg:text-4xl xl:text-5xl font-semibold mb-10 lg:mb-12">
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
                    <SwiperSlide className="shrink-0">
                        <img src={project1} alt="project1" />
                    </SwiperSlide>
                    <SwiperSlide className="shrink-0">
                        <img src={project2} alt="project2" />
                    </SwiperSlide>
                    <SwiperSlide className="shrink-0">
                        <img src={project3} alt="project3" />
                    </SwiperSlide>
                    <SwiperSlide className="shrink-0">
                        <img src={project1} alt="project1" />
                    </SwiperSlide>
                </Swiper>
            </section>
            <Cta title="Secure your company's furture by Partering with Axel Cyber" action="Book a call">
                <HiArrowNarrowRight className="inline" />
            </Cta>
        </main>
    );
}
