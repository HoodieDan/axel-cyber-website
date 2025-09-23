import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import oceanView from "../assets/ocean-view.webp";
import project1 from "../assets/project1.webp";
import project3 from "../assets/project3.webp";
import ArrowNarrowUpRight from "./icons/ArrowNarrowUpRight";

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
                <img src={project1} alt="project1" loading="lazy" width={400} height={390} />
                <div className="absolute  top-0 left-0 w-full h-full bg-[#040404]/50 opacity-0 group-hover:opacity-50 rounded-lg transition-all duration-300 ease-linear"></div>
                <div className="absolute hidden top-[50%] left-[50%] -translate-[50%] group-hover:flex z-10 flex-col justify-center items-center gap-2 text-white">
                    <div className="flex justify-center items-center rounded-full bg-white/25">
                        <ArrowNarrowUpRight className="size-17.5" />
                    </div>

                    <p className="text-xl md:text-xl font-bold">Voec Tech</p>
                </div>
            </SwiperSlide>
            <SwiperSlide className="shrink-0 relative group cursor-pointer">
                <img src={oceanView} alt="project2" loading="lazy" width={400} height={390} />
                <div className="absolute  top-0 left-0 w-full h-full bg-[#040404]/50 opacity-0 group-hover:opacity-50 rounded-lg transition-all duration-300 ease-linear"></div>
                <div className="absolute hidden top-[50%] left-[50%] -translate-[50%] group-hover:flex z-10 flex-col justify-center items-center gap-2 text-white">
                    <div className="flex justify-center items-center rounded-full bg-white/25">
                        <ArrowNarrowUpRight className="size-17.5" />
                    </div>

                    <p className="text-xl md:text-xl font-bold">Ocean Brand</p>
                </div>
            </SwiperSlide>
            <SwiperSlide className="shrink-0 relative group cursor-pointer">
                <img src={project3} alt="project3" loading="lazy" width={400} height={390} />
                <div className="absolute  top-0 left-0 w-full h-full bg-[#040404]/50 opacity-0 group-hover:opacity-50 rounded-lg transition-all duration-300 ease-linear"></div>
                <div className="absolute hidden top-[50%] left-[50%] -translate-[50%] group-hover:flex z-10 flex-col justify-center items-center gap-2 text-white">
                    <div className="flex justify-center items-center rounded-full bg-white/25">
                        <ArrowNarrowUpRight className="size-17.5" />
                    </div>

                    <p className="text-xl md:text-xl font-bold">EngageX</p>
                </div>
            </SwiperSlide>
            <SwiperSlide className="shrink-0 relative group cursor-pointer">
                <img src={project1} alt="project1" loading="lazy" width={400} height={390} />
                <div className="absolute  top-0 left-0 w-full h-full bg-[#040404]/50 opacity-0 group-hover:opacity-50 rounded-lg transition-all duration-300 ease-linear"></div>
                <div className="absolute hidden top-[50%] left-[50%] -translate-[50%] group-hover:flex z-10 flex-col justify-center items-center gap-2 text-white">
                    <div className="flex justify-center items-center rounded-full bg-white/25">
                        <ArrowNarrowUpRight className="size-17.5" />
                    </div>

                    <p className="text-xl md:text-xl font-bold">Voec Tech</p>
                </div>
            </SwiperSlide>
        </Swiper>
    );
}
