import SectionBadge from "@/components/SectionBadge";
import { aboutUs } from "./data";

const IWSAboutUs = () => {
    return (
        <section className="flex flex-col md:gap-y-20 gap-y-10 padding-x md:py-[5.5%] py-[10vh] bg-gray-1">
            <div className="md:space-y-10 space-y-5">
                <SectionBadge text="About us" />
                <h2 className="font-medium text-center">
                    We&apos;re driven by cutting
                    <br className="md:block hidden" />
                    -edge research
                </h2>
            </div>
            <div className="grid md:grid-cols-3 md:gap-[6%] gap-8">
                {aboutUs.map(({ icon, header, description }, i) => (
                    <div key={header + i} className="flex flex-col gap-y-4">
                        <img src={icon} alt={header} className="object-fill size-10" />
                        <h4 className="font-medium">{header}</h4>
                        <p className="text-dark-blue">{description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default IWSAboutUs;
