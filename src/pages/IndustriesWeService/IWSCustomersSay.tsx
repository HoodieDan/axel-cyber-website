import CardAvatar from "@/assets/card-avatar.png";
import CustomersSay from "@/assets/customers-say-card-bg.png";
import Quotes from "@/assets/quotes.png";

import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const IWSCustomersSay = () => {
    return (
        <section className="padding-x md:py-[8%] py-section">
            <Carousel
                opts={{
                    align: "start",
                }}
                className="w-full flex flex-col md:gap-y-12 gap-y-10"
            >
                <div className="flex md:flex-row flex-col md:gap-y-0 gap-y-6 md:items-center md:justify-between">
                    <h3 className="font-medium">
                        Here&apos;s what our
                        <br className="md:inline hidden" /> customers say
                    </h3>
                    <div className="md:space-x-12 space-x-6 md:[&_svg:not([class*='size-'])]:size-6 [&_svg:not([class*='size-'])]:stroke-[1.5] [&_svg:not([class*='size-'])]:text-dark-blue-1">
                        <CarouselPrevious className="static md:size-17.5 size-10 -translate-y-0" />
                        <CarouselNext className="static md:size-17.5 size-10 -translate-y-0" />
                    </div>
                </div>
                <CarouselContent>
                    {Array.from({ length: 5 }).map((_, index) => (
                        <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 md:pl-6">
                            <Card className="border-none shadow-none">
                                <CardContent className="px-0">
                                    <div className="flex relative isolate">
                                        <img src={CustomersSay} alt="" className="absolute inset-0 object-fill size-full" />
                                        <div className="flex flex-col aspect-square justify-evenly px-6 z-10">
                                            <img src={Quotes} alt="Quotes" className="object-fill size-19.5" />
                                            <p className="text-white text-lg">
                                                “At TD, we've seen the transformative potential of AI to deliver more
                                                personalized and intuitive experiences for our customers, colleagues and
                                                communities.”
                                            </p>
                                            <div className="flex items-center gap-x-4">
                                                <img
                                                    src={CardAvatar}
                                                    alt="Card avatar"
                                                    className="object-fill size-12.5"
                                                />
                                                <div className="space-y-1 text-white">
                                                    <h6>Olayinka Lexxa</h6>
                                                    <p className="font-light">VP, AI Technology Lead at TD Bank</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
        </section>
    );
};

export default IWSCustomersSay;
