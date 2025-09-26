interface ICTASectionProps extends React.ComponentProps<"section"> {
    heading: React.ReactNode;
    description?: React.ReactNode;
}

const CTASection = ({ children, description, heading }: ICTASectionProps) => {
    return (
        <section className="px-[5%] lg:py-24 py-12">
            <div className="md:bg-[url(@/assets/vector-44-top.png),url(@/assets/vector-43-bottom.png),linear-gradient(-48deg,#0046CC,#090328)] bg-[url(@/assets/vector-44-top-mobile.png),url(@/assets/vector-43-bottom-mobile.png),linear-gradient(-23deg,#0046CC,#090328)] bg-no-repeat bgbottom bg-position-[top_right,bottom_left] text-white text-center flex flex-col items-center gap-7.5 md:px-30 px-10 py-30 rounded-[1.125rem]">
                <h2 className="font-tt-hoves font-medium md:text-5xl text-2xl md:leading-[120%]">{heading}</h2>
                {description && <p className="md:text-xl text-sm md:leading-[135%]">{description}</p>}
                {children}
            </div>
        </section>
    );
};

export default CTASection;
