import WorksExcludeMobile from "@/assets/works-exclude-mobile.png";
import WorksExclude from "@/assets/works-exclude.png";

const WHero = () => {
    return (
        <section className="padding-x md:py-[5.5%] py-[5vh] grid gap-y-12 [&_br]:md:block [&_br]:hidden">
            <h2 className="font-medium md:text-left text-center">
                We are commited to creating the future
                <br /> of Artificial Intelligence
            </h2>
            <div className="relative flex flex-col gap-y-6">
                <img src={WorksExclude} alt="Works exclude" className="md:block hidden object-fill" />
                <img src={WorksExcludeMobile} alt="Works exclude mobile" className="md:hidden block object-fill" />
                <div className="md:absolute bottom-0 left-0 md:translate-x-[25vw] md:translate-y-[3vh]">
                    <p className="text-xl font-medium">
                        Witness some of the great works we&apos;ve
                        <br /> done for our amazing clients around the
                        <br /> world, with a great design story
                    </p>
                </div>
            </div>
        </section>
    );
};

export default WHero;
