import { lazy, Suspense } from "react";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import project1 from "../assets/project1.webp";
import project3 from "../assets/project3.webp";
import oceanView from "../assets/ocean-view.webp"

const BsArrowUpRightCircleFill = lazy(() =>
  import("lucide-react").then(mod => ({ default: mod.ArrowUpRight }))
);



export default function HomeLazySwiper() {
  return (
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
            <img 
                src={project1} 
                alt="project1" 
                loading="lazy"
                width={400}
                height={390}
            />
            <div className="absolute  top-0 left-0 w-full h-full bg-[linear-gradient(45deg,#014594,#0181f1)] opacity-0 group-hover:opacity-50 rounded-lg transition-all duration-300 ease-linear"></div>
            <div className="absolute hidden top-[50%] left-[50%] -translate-[50%] group-hover:flex z-10 flex-col justify-center items-center gap-2 text-white">
                <Suspense fallback={<span className="w-3 h-3 inline-block animate-pulse bg-gray-300 rounded-full" />}>
                    <div className="w-[32px] h-[32px] md:w-[40px] md:h-[40px] lg:w-[48px] lg:h-[48px] flex justify-center items-center rounded-full bg-[#7a8c99]">
                        <BsArrowUpRightCircleFill className="text-2xl md:text-3xl lg:text-4xl" />
                    </div>
                </Suspense>
                <p className="text-xl md:text-2xl">project name</p>
             </div>
        </SwiperSlide>
        <SwiperSlide className="shrink-0 relative group cursor-pointer">
            <img 
                src={oceanView} 
                alt="project2" 
                loading="lazy"
                width={400}
                height={390} 
            />
            <div className="absolute  top-0 left-0 w-full h-full bg-[linear-gradient(45deg,#014594,#0181f1)] opacity-0 group-hover:opacity-50 rounded-lg transition-all duration-300 ease-linear"></div>
                <div className="absolute hidden top-[50%] left-[50%] -translate-[50%] group-hover:flex z-10 flex-col justify-center items-center gap-2 text-white">
                    <Suspense fallback={<span className="w-5 h-5 inline-block animate-pulse bg-gray-300 rounded-full" />}>
                        <div className="w-[32px] h-[32px] md:w-[40px] md:h-[40px] lg:w-[48px] lg:h-[48px] flex justify-center items-center rounded-full bg-[#7a8c99]">
                            <BsArrowUpRightCircleFill className="text-2xl md:text-3xl lg:text-4xl" />
                        </div>
                    </Suspense>
                    <p className="text-xl md:text-2xl">project name</p>
                </div>
        </SwiperSlide>
        <SwiperSlide className="shrink-0 relative group cursor-pointer">
            <img 
                src={project3} 
                alt="project3" 
                loading="lazy"
                width={400}
                height={390} 
            />
            <div className="absolute  top-0 left-0 w-full h-full bg-[linear-gradient(45deg,#014594,#0181f1)] opacity-0 group-hover:opacity-50 rounded-lg transition-all duration-300 ease-linear"></div>
            <div className="absolute hidden top-[50%] left-[50%] -translate-[50%] group-hover:flex z-10 flex-col justify-center items-center gap-2 text-white">
                    <Suspense fallback={<span className="w-5 h-5 inline-block animate-pulse bg-gray-300 rounded-full" />}>
                        <div className="w-[32px] h-[32px] md:w-[40px] md:h-[40px] lg:w-[48px] lg:h-[48px] flex justify-center items-center rounded-full bg-[#7a8c99]">
                            <BsArrowUpRightCircleFill className="text-2xl md:text-3xl lg:text-4xl" />
                        </div>
                    </Suspense>
                    <p className="text-xl md:text-2xl">project name</p>
            </div>
        </SwiperSlide>
        <SwiperSlide className="shrink-0 relative group cursor-pointer">
            <img 
                src={project1}
                alt="project1" 
                loading="lazy"
                width={400}
                height={390} 
            />
            <div className="absolute  top-0 left-0 w-full h-full bg-[linear-gradient(45deg,#014594,#0181f1)] opacity-0 group-hover:opacity-50 rounded-lg transition-all duration-300 ease-linear"></div>
            <div className="absolute hidden top-[50%] left-[50%] -translate-[50%] group-hover:flex z-10 flex-col justify-center items-center gap-2 text-white">
                <Suspense fallback={<span className="w-5 h-5 inline-block animate-pulse bg-gray-300 rounded-full" />}>
                    <div className="w-[32px] h-[32px] md:w-[40px] md:h-[40px] lg:w-[48px] lg:h-[48px] flex justify-center items-center rounded-full bg-[#7a8c99]">
                        <BsArrowUpRightCircleFill className="text-2xl md:text-3xl lg:text-4xl" />
                    </div>
                </Suspense>
                <p className="text-xl md:text-2xl">project name</p>
            </div>
        </SwiperSlide>
    </Swiper>
  )
}
