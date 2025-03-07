import ManCoding from "@/assets/man-coding.png";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { whatWeDo } from "./data";

const IWSWhatWeDo = () => {
    return (
        <section className="padding-x md:py-[8%] py-section grid md:grid-cols-2 md:gap-[6%] gap-8 items-center">
            <img src={ManCoding} alt="Man coding" className="object-fill size-full" />
            <div>
                <Accordion type="single" collapsible className="w-full">
                    {whatWeDo.map(({ header, description }, i) => (
                        <AccordionItem
                            key={header + i}
                            value={"item-" + i}
                            className="border-b-0 border-t p-4 hover:bg-gray-1"
                        >
                            <AccordionTrigger className="py-0 [&_svg]:hidden cursor-pointer hover:no-underline transition">
                                <h5 className="text-gray-4">{header}</h5>
                            </AccordionTrigger>
                            <AccordionContent className="text-base pb-0">
                                <p>{description}</p>
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </section>
    );
};

export default IWSWhatWeDo;
