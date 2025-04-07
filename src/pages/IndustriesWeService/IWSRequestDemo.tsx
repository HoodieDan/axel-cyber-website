import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

const IWSRequestDemo = () => {
    return (
        <section className="padding-x md:pt-[8%] md:pb-[8%] pb-[10vh]">
            <div className="md:py-[8%] py-[10vh] grid place-content-center gap-y-8 rounded-2xl request-demo-bg">
                <h3 className="font-semibold text-white">Ready to put AI to work?</h3>
                <Button className="bg-white hover:bg-white text-black hover:text-black w-fit h-10 mx-auto">
                    <span className="font-semibold">Request a Demo</span>
                    <ArrowUpRight className="size-4" />
                </Button>
            </div>
        </section>
    );
};

export default IWSRequestDemo;
