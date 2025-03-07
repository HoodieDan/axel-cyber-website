import SectionBadge from "@/components/SectionBadge";

const WCapabilities = () => {
    return (
        <section className="flex flex-col md:gap-y-20 gap-y-10 padding-x md:py-[5.5%] py-[10vh] bg-gray-1">
            <div className="md:space-y-8 space-y-5">
                <SectionBadge text="Capabilities" />
                <h2 className="font-medium text-center">
                    See how we can solve your
                    <br className="md:block hidden" /> problems with Lexxa
                </h2>
            </div>
        </section>
    );
};

export default WCapabilities;
