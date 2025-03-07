import EmpowerPromptsDesktop from "@/assets/empower-prompts-desktop.png";
import GalleryPhone from "@/assets/gallery-phone.png";
import GalleryPhones from "@/assets/gallery-phones.png";
import { ArrowRight } from "lucide-react";

const PGallery = () => {
    return (
        <section className="padding-x md:py-[5.5%] py-[5vh] grid md:grid-cols-2 gap-6 bg-gray-1">
            <div className="flex relative">
                <div className="absolute left-0 right-0 md:py-4 py-2">
                    <h2 className="font-semibold md:text-5xl text-3xl">Prompt Plumber AI</h2>
                </div>
                <img src={GalleryPhones} alt="" className="object-fill size-full" />
            </div>
            <div className="flex flex-col gap-y-6">
                <div className="space-y-4 bg-white rounded-2xl p-6">
                    <div className="flex items-center gap-x-2 font-semibold">
                        <span>UI design</span>
                        <ArrowRight className="size-4" />
                        <span>Product strategy</span>
                        <ArrowRight className="size-4" />
                        <span>Prototyping</span>
                    </div>
                    <p className="font-medium">
                        A prompt engineering platform that allows for Beginners and Intermediate level prompt Engineers
                        and AI enthusiast to create very effective prompts that get them their expected outcomes using
                        Popular Large Language Model.
                    </p>
                </div>
                <img src={GalleryPhone} alt="" className="object-fill size-full" />
            </div>
            <div className="md:col-span-2">
                <img src={EmpowerPromptsDesktop} alt="" className="object-fill size-full" />
            </div>
            <div className="md:row-span-2 bg-linear-to-r from-[#002366] to-[#0046CC] md:h-200 h-150 rounded-2xl"></div>
            <div className="md:row-span-2 flex flex-col gap-y-6">
                <div className="md:h-1/2 h-100 bg-linear-to-r from-[#002366] to-[#0046CC] rounded-2xl"></div>
                <div className="md:h-1/2 h-100 bg-linear-to-r from-[#002366] to-[#0046CC] rounded-2xl"></div>
            </div>
        </section>
    );
};

export default PGallery;
