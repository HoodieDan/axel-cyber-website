import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

interface IBookACallProps extends React.HTMLAttributes<HTMLElement> {
    text: string;
    buttonText?: string;
}

const BookACall = ({ buttonText = "Book a Call", text }: IBookACallProps) => {
    return (
        <section className="padding-x md:pt-[8%] md:pb-[8%] pb-[10vh]">
            <div className="md:py-[10%] py-[10vh] grid place-content-center gap-y-8 rounded-2xl request-demo-bg">
                <h3 className="font-semibold text-white text-center whitespace-pre-line">{text}</h3>
                <Button className="bg-white hover:bg-white text-black hover:text-black w-fit h-10 mx-auto">
                    <span className="font-semibold">{buttonText}</span>
                    <ArrowUpRight className="size-4" />
                </Button>
            </div>
        </section>
    );
};

export default BookACall;
