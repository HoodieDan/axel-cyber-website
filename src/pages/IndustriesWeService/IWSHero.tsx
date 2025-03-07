import ExcludeDesktop from "@/assets/exclude-desktop.png";
import ExcludeMobile from "@/assets/exclude-mobile.png";
import HeroAvatars from "@/assets/hero-avatars.png";
import Building from "@/assets/ultimate-itinerary.png";
import VideoImg from "@/assets/video-img.png";
import MarqueeOverlay from "@/components/MarqueeOverlay";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import { partnersImages } from "./data";

const IWSHero = () => {
    return (
        <section className="padding-x md:py-[5.5%] py-[5vh]">
            <div className="grid md:grid-cols-2 md:gap-y-20 gap-y-8">
                <div className="font-medium flex flex-col gap-y-1">
                    <h2 className="text-5xl">We&apos;re building the</h2>
                    <div className="flex items-center gap-x-3">
                        <h2 className="text-5xl">future of Your</h2>
                        <img
                            src={Building}
                            alt="Building"
                            className="object-fill bg-[url(/src/assets/bg-rectangle.png)] bg-bottom bg-no-repeat"
                        />
                    </div>
                    <h2 className="text-5xl">Company With AI</h2>
                </div>
                <div className="flex flex-col justify-between md:gap-y-0 gap-y-4 md:ml-auto">
                    <p className="big font-medium">
                        Lexxa empowers every enterprise to build amazing products
                        <br /> and capture true business value with AI language
                    </p>
                    <Button className="w-fit bg-radial-[at_22%_62%] from-black to-gray-gradient rounded-2xl h-10">
                        <span>Reach Out</span>
                        <ArrowUpRight className="size-4" />
                    </Button>
                </div>
                <div className="md:col-span-2 bg[url(/src/assets/exclude.png)] rounded-xl">
                    <div className="relative flex items-center md:justify-end justify-center">
                        <div className="z-10 pt-6 px-6 md:pb-6 pb-24">
                            <img src={VideoImg} alt="Video image" className="object-fill" />
                        </div>
                        <img
                            src={ExcludeDesktop}
                            alt="Exclude"
                            className="md:block hidden object-fill size-full absolute"
                        />
                        <img
                            src={ExcludeMobile}
                            alt="Exclude mobile"
                            className="md:hidden block object-fill size-full absolute"
                        />
                        <div className="flex items-center md:gap-x-4 gap-x-1 absolute bottom-0 left-0 md:py-3 py-2 translate-x-[8.8vw]">
                            <img src={HeroAvatars} alt="Hero avatars" />
                            <span className="font-medium md:text-base text-sm">Trusted by 100+ Clients</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-center justify-center gap-y-3 md:w-1/2 w-9/10 mx-auto overflow-hidden mt-20">
                <p className="font-semibold">Trusted by Industry Leaders:</p>
                <div className="relative">
                    <div className="flex items-center gap-x-4 whitespace-nowrap animate-marquee-left">
                        {partnersImages.map(({ src, title }, i) => (
                            <img
                                key={title + i}
                                src={src}
                                alt={title}
                                className="object-fill md:w-auto w-12.5 md:h-auto h-7.5"
                            />
                        ))}
                    </div>
                    <MarqueeOverlay />
                </div>
            </div>
        </section>
    );
};

export default IWSHero;
