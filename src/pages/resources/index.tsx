import TriggeredOutreachBlueprintImg from "@/assets/triggered-outreach-blueprint.png";
import ControlledFieldWrapper from "@/components/controlled-fields/field-wrapper";
import { Button, buttonVariants } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Form } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { PhoneInput } from "@/components/ui/phone-input";
import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { isValidPhoneNumber } from "react-phone-number-input";
import { z } from "zod";

const ResourcesSchema = z.object({
    name: z
        .string()
        .min(1, "Please enter your name.")
        .regex(/^[a-z]+$/, "Name should contain only letters."),
    email: z.email("Please enter a valid email address."),
    phone: z.string().refine(isValidPhoneNumber, "Please enter a valid phone number."),
});

const Resources = () => {
    const form = useForm<z.infer<typeof ResourcesSchema>>({
        resolver: zodResolver(ResourcesSchema),
        defaultValues: {
            name: "",
            email: "",
            phone: "",
        },
    });

    return (
        <main>
            <header className="bg-white px-[5%] lg:pt-24 pt-12 pb-12 flex flex-col itemscenter gap-12">
                <h3 className="capitalize font-tt-hoves font-semibold md:text-[2.5rem] text-4xl md:leading-[120%] text-[#052377] text-center">
                    How we generated 5.3 ROAS on Bing
                    <br className="md:inline hidden" /> ads in a hyper-competitive niche
                </h3>

                <div className="flex flex-col items-center gap-12">
                    <div className="flex md:flex-row flex-col items-center justify-center md:gap-40 gap-6 md:px-20">
                        <p className="text-[1.75rem] leading-[150%] md:text-left text-center">
                            Discover the step-by-step system we
                            <br className="md:inline hidden" /> used to help brands unlock this
                            <br className="md:inline hidden" /> “underground” channel and drive clicks
                            <br className="md:inline hidden" /> at 40 - 80% less than other platforms.
                        </p>
                        <figure className="shrink-0 md:size-82.5 size-full">
                            <img src={TriggeredOutreachBlueprintImg} alt="" className="size-full object-cover" />
                        </figure>
                    </div>

                    <Dialog>
                        <DialogTrigger
                            className={cn(
                                buttonVariants({ variant: "default" }),
                                "bg-linear-(--gradient-primary) hover:bg-linear-(--gradient-primary-hover) h-10 px-6",
                            )}
                        >
                            GET THE RESOURCE
                        </DialogTrigger>
                        <DialogContent className="gap-10">
                            <DialogHeader className="items-center space-y-2">
                                <DialogTitle className="font-tt-hoves font-semibold text-2xl leading-[120%] text-[#052377] text-center">
                                    Download The 25 Point, $10K A Month Checklist
                                </DialogTitle>
                                <DialogDescription className="text-base text-[#052377]">
                                    Add another $10K a month to your revenue
                                </DialogDescription>
                            </DialogHeader>

                            <Form {...form}>
                                <form
                                    onSubmit={form.handleSubmit((data) => console.log(data))}
                                    className="grid gap-2.5"
                                >
                                    <ControlledFieldWrapper
                                        control={form.control}
                                        name="name"
                                        render={({ field }) => (
                                            <Input
                                                {...field}
                                                placeholder="Name"
                                                className="h-11 shadow-none border-none bg-[#F9F9F9] rounded-[10px] focus-visible:ring-[#052377] text-[#212121] placeholder:text-[#212121]/90 placeholder:font-instrument font-instrument"
                                            />
                                        )}
                                    />
                                    <ControlledFieldWrapper
                                        control={form.control}
                                        name="email"
                                        render={({ field }) => (
                                            <Input
                                                {...field}
                                                placeholder="Email Address"
                                                className="h-11 shadow-none border-none bg-[#F9F9F9] rounded-[10px] focus-visible:ring-[#052377] text-[#212121] placeholder:text-[#212121]/90 placeholder:font-instrument font-instrument"
                                            />
                                        )}
                                    />
                                    <ControlledFieldWrapper
                                        control={form.control}
                                        name="phone"
                                        render={({ field }) => (
                                            <PhoneInput
                                                {...field}
                                                // placeholder="Email Address"
                                                className="h-11 [&>input]:shadow-none [&>input]:border-transparent [&>input]:bg-[#F9F9F9] [&>input]:rounded-e-[10px] [&>input]:focus-visible:ring-0 [&>input]:focus-visible:border-[#052377] [&>input]:text-[#212121] [&>input]:placeholder:text-[#212121]/90 [&>input]:placeholder:font-instrument [&>input]:font-instrument"
                                            />
                                        )}
                                    />

                                    <Button className="bg-linear-(--gradient-primary) hover:bg-linear-(--gradient-primary-hover) mt-10 mx-auto">
                                        CLICK HERE TO GET YOUR RESOURCE
                                    </Button>
                                </form>
                            </Form>
                        </DialogContent>
                    </Dialog>
                </div>
            </header>
        </main>
    );
};

export default Resources;
