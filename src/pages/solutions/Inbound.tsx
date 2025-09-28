import MaleCorporateWoker from "@/assets/corporate-male-working.png";
import goldfrapp from "@/assets/goldfrapp.png";
import hulu from "@/assets/hulu.png";
import ibm from "@/assets/ibm.png";
import information from "@/assets/information.png";
import PaymentStepOneImg from "@/assets/payment-step-one.png";
import PaymentStepThreeImg from "@/assets/payment-step-three.png";
import PaymentStepTwoImg from "@/assets/payment-step-two.png";
import pencil from "@/assets/pencil.png";
import VideoImgDesktop from "@/assets/video-img-desktop.png";
import VideoImgMobile from "@/assets/video-img-mobile.png";
import volume from "@/assets/volume.png";
import CTASection from "@/components/CTASection";
import Appointment from "@/components/icons/Appointment";
import ArrowUpRight from "@/components/icons/ArrowUpRight";
import DataCheck from "@/components/icons/DataCheck";
import IBMSecure from "@/components/icons/IBMSecure";
import LightBatch from "@/components/icons/LightBatch";
import Lightning from "@/components/icons/Lightning";
import Shield from "@/components/icons/Shield";
import Target from "@/components/icons/Target";
import Vortex from "@/components/icons/Vortex";
import WavyWheel from "@/components/icons/WavyWheel";
import SectionTag from "@/components/SectionTag";
import { buttonVariants } from "@/components/ui/button";
import WhyUsSteps from "@/components/WhyUsSteps";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";
import { Link } from "react-router";

const leadsProblems = [
    {
        Icon: Shield,
        heading: "The Speed Trap",
        description: `By the time you call that hot lead back, they've already talked to three of your competitors. The fastest responder doesn't just win, they win everything.`,
    },
    {
        Icon: LightBatch,
        heading: "The No-Show Nightmare",
        description:
            "You spend money on ads, time on sales calls, and then stare at empty appointment slots. Every no-show is double the loss because you paid to get them and paid to wait for them.",
    },
    {
        Icon: Vortex,
        heading: "The Follow-Up Failure",
        description:
            "Your team means to call that interested lead back, but then the phone rings, an emergency comes up, and suddenly it's been three days. That lead is long gone.",
    },
    {
        Icon: IBMSecure,
        heading: "The Scaling Impossibility",
        description:
            "You want to run more ads and generate more leads, but your team is already drowning trying to handle the current volume. More leads just means more chaos.",
    },
    {
        Icon: Lightning,
        heading: "The Silent Revenue Bleed",
        description: `You see the leads coming in, but somehow they don't turn into customers. The leak is happening somewhere between "interested" and "showed up," and it's costing you thousands every month.`,
    },
];

const smartBusinessesBenefits = [
    {
        Icon: Lightning,
        heading: "Lightning-Fast Response",
        description:
            "Your leads get contacted within seconds of expressing interest. Not minutes, not hours. Seconds. While your competitors are still thinking about calling back.",
    },
    {
        Icon: Appointment,
        heading: "Appointments That Actually Happen",
        description:
            "Smart confirmation sequences, helpful reminders, and easy rescheduling options mean your calendar stays full of people who actually show up.",
    },
    {
        Icon: DataCheck,
        heading: "Nothing Falls Through Cracks",
        description: `Every lead gets followed up with the right message at the right time until they either convert or clearly say no. No more wondering "what happened to that interested prospect?"`,
    },
    {
        Icon: Target,
        heading: "Your Team Stays Focused",
        description:
            "Instead of playing phone tag and chasing leads, your team spends time with people who are ready to buy. Better conversations, higher close rates, happier salespeople.",
    },
    {
        Icon: WavyWheel,
        heading: "Scale Without Stress",
        description:
            "Run more ads, generate more leads, and know that every single one will get the attention they deserve. Growth becomes predictable instead of chaotic..",
    },
];

const contractSteps = [
    {
        image: PaymentStepOneImg,
        heading: "Instant Contact",
        description:
            "The moment someone fills out your form or calls your number, our system reaches out immediately through their preferred channel. Text, call, email, whatever works best for that lead.",
    },
    {
        image: PaymentStepTwoImg,
        heading: "Smart Scheduling",
        description:
            "We don't just book the appointment, we make sure it happens. Confirmation messages, reminder texts, helpful directions, and easy rescheduling if something comes up.",
    },
    {
        image: PaymentStepThreeImg,
        heading: "Never Give Up",
        description:
            "If someone doesn't respond right away, we follow up intelligently until they either book an appointment or tell us to stop. No lead dies from lack of follow-up ever again.",
    },
];

const freeResource = [
    "Confirmation message templates that work",
    "Reminder sequences that reduce no-shows by 70%",
    "Day-of nudges that get people in the door",
    "Easy rescheduling flows for last-minute changes",
];

const Inbound = () => {
    return (
        <main>
            <section className="px-[5%] lg:py-24 py-12 flex flex-col gap-10">
                <div className="flex md:flex-row flex-col items-start gap-8">
                    <h3 className="flex-1 capitalize font-tt-hoves font-medium md:text-5xl text-4xl md:leading-15 text-[#002366]">
                        Stop Watching Your Ad
                        <br /> money walk away
                    </h3>
                    <div className="flex-1 flex flex-col gap-7.5">
                        <p className="text-xl md:leading-7.5">
                            You're paying good money to generate leads, but then they disappear while you're trying to
                            call them back. Axel Cyber makes sure every lead gets contacted instantly and every
                            appointment actually happens, so your marketing budget turns into real revenue
                        </p>
                        <div className="flex md:flex-row flex-col gap-4">
                            <Link
                                to=""
                                className={cn(
                                    buttonVariants({ variant: "default" }),
                                    "bg-linear-(--gradient-primary) hover:bg-linear-(--gradient-primary-hover) h-13.5 px-5",
                                )}
                            >
                                See How We Stop Lead Leakage
                            </Link>
                            <Link to="" className={cn(buttonVariants({ variant: "outline" }), "h-13.5 px-5")}>
                                Get Your No-Show Prevention Kit
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="md:h-127 rounded-3xl overflow-hidden">
                    <img src={VideoImgDesktop} alt="" className="md:block hidden size-full object-cover" />
                    <img src={VideoImgMobile} alt="" className="md:hidden block size-full object-cover" />
                </div>
            </section>

            <section className="bg-[#F9F9F9] px-[5%] lg:py-24 py-12 flex flex-col md:gap-26.25 gap-10">
                <div className="flex flex-col gap-6">
                    <SectionTag tag="BENEFITS" />
                    <h2 className="font-tt-hoves font-medium md:text-5xl text-2xl md:leading-[120%] text-[#000F1F] text-center">
                        Trusted by businesses where every
                        <br /> lead counts and every minute matters
                    </h2>
                </div>

                <div className="flex flex-wrap items-center justify-center gap-10">
                    <img src={goldfrapp} alt="Goldfrapp company logo" loading="lazy" />
                    <img src={pencil} alt="Pencil company logo" loading="lazy" />
                    <img src={volume} alt="Volume company logo" loading="lazy" />
                    <img src={information} alt="Information company logo" loading="lazy" />
                    <img src={ibm} alt="IBM company logo" loading="lazy" />
                    <img src={hulu} alt="Hulu company logo" loading="lazy" />
                </div>
            </section>

            <section className="px-[5%] lg:py-24 py-12 flex flex-col md:gap-19 gap-9.5">
                <div className="flex flex-col gap-6">
                    <SectionTag tag="PROBLEMS" />
                    <h2 className="font-tt-hoves font-medium md:text-5xl text-2xl md:leading-[120%] text-[#000F1F] text-center">
                        Why Your Best Leads Disappear
                        <br /> (And How Much It's Costing You)
                    </h2>
                </div>

                <div className="flex flex-col gap-5">
                    <div className="flex md:flex-row flex-col gap-5">
                        {leadsProblems.slice(0, 3).map(({ description, heading, Icon }, index) => (
                            <div
                                key={index}
                                className="md:h-65 flex flex-col gap-5 text-white p-7.5 rounded-xl bg-linear-to-b from-[#002366] to-[#0046CC] md:w-1/3"
                            >
                                <Icon className="size-10" />
                                <div className="space-y-4">
                                    <h6 className="text-xl font-medium">{heading}</h6>
                                    <p className="leading-5">{description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="flex md:flex-row flex-col gap-5">
                        {leadsProblems.slice(3, 5).map(({ description, heading, Icon }, index) => (
                            <div
                                key={index}
                                className="md:h-65 flex flex-col gap-5 text-white p-7.5 rounded-xl not-last:bg-linear-to-b not-last:from-[#002366] not-last:to-[#0046CC] last:bg-linear-[-40deg,#0F0255_0%,#080323_100%] md:first:w-1/3 md:last:w-2/3"
                            >
                                <Icon className="size-10" />
                                <div className="space-y-4">
                                    <h6 className="text-xl font-medium">{heading}</h6>
                                    <p className="text-base leading-5">{description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="bg-[#F9F9F9] px-[5%] lg:py-24 py-12 flex flex-col md:gap-12 gap-10">
                <div className="flex flex-col gap-6">
                    <SectionTag tag="BENEFITS" />
                    <h2 className="font-tt-hoves font-medium md:text-5xl text-2xl md:leading-[120%] text-[#000F1F] text-center">
                        How Smart Businesses Turn Every
                        <br /> Lead Into Revenue
                    </h2>
                </div>

                <div className="flex flex-col md:gap-8 gap-5">
                    <div className="flex md:flex-row flex-col md:gap-8 gap-5">
                        {smartBusinessesBenefits.slice(0, 3).map(({ description, heading, Icon }, index) => (
                            <div
                                key={index}
                                className="flex flex-col items-center gap-5 text-white md:px-5 px-12 md:py-12 py-20 rounded-xl bg-linear-to-b from-[#002366] to-[#0046CC] md:w-1/3"
                            >
                                <Icon className="md:size-15 size-10" />
                                <div className="space-y-4 text-center">
                                    <h6 className="md:text-4xl text-2xl md:leading-[120%] font-medium">{heading}</h6>
                                    <p className="text-xl leading-7.5">{description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="flex md:flex-row flex-col md:justify-center md:gap-8 gap-5">
                        {smartBusinessesBenefits.slice(3, 5).map(({ description, heading, Icon }, index) => (
                            <div
                                key={index}
                                className="flex flex-col items-center gap-5 text-white md:px-5 px-12 md:py-12 py-20 rounded-xl bg-linear-to-b from-[#002366] to-[#0046CC] md:w-1/3"
                            >
                                <Icon className="md:size-15 size-10" />
                                <div className="space-y-4 text-center">
                                    <h6 className="md:text-4xl text-2xl md:leading-[120%] font-medium">{heading}</h6>
                                    <p className="text-xl leading-7.5">{description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="px-[5%] lg:py-24 py-12 flex flex-col md:gap-14 gap-10">
                <div className="flex flex-col gap-6">
                    <SectionTag tag="WHY US?" />
                    <h2 className="font-tt-hoves font-medium md:text-5xl text-2xl md:leading-[120%] text-[#000F1F] text-center">
                        From 'Submit' Button to Signed
                        <br /> Contract in Three Steps
                    </h2>
                </div>

                <WhyUsSteps steps={contractSteps} />
            </section>

            <CTASection
                heading={
                    <span>
                        Watch Every Lead Turn Into
                        <br /> Revenue
                    </span>
                }
                description={
                    <span>
                        Ready to see what happens when every lead gets contacted instantly and every
                        <br className="md:inline hidden" /> appointment actually happens? Book a demo and we'll show you
                        exactly how
                        <br className="md:inline hidden" /> much money you're leaving on the table right now.
                    </span>
                }
            >
                <Link
                    to=""
                    className={cn(
                        buttonVariants(),
                        "bg-white hover:bg-white/90 text-black md:w-fit w-full h-14 has-[>svg]:px-5",
                    )}
                >
                    Show Me My Missing Revenue <ArrowUpRight className="size-4" />
                </Link>
            </CTASection>

            <section className="px-[5%] lg:py-24 py-12">
                <div className="flex md:flex-row flex-col-reverse items-center md:gap-18.5 gap-10">
                    <div className="flex flex-col gap-9">
                        <div className="flex flex-col gap-6">
                            <div className="flex flex-col">
                                <SectionTag tag="Free Resource Section" className="mx-0 [&_p]:text-xs" />
                                <h3 className="font-tt-hoves font-bold text-[#002366] text-[2.5rem] leading-[120%] mt-4 mb-5">
                                    Free Download: The No-Show Prevention System
                                </h3>
                                <p className="md:leading-[120%] text-[#575757]">
                                    Stop staring at empty appointment slots. This complete system includes proven
                                    message templates, timing strategies, and automation workflows that ensure your
                                    customers actually show up when they're supposed to.
                                </p>
                            </div>
                            <span className="font-tt-hoves">WHAT YOU GET</span>
                            <ul className="grid md:grid-cols-2 gap-6 *:font-medium *:leading-[120%]">
                                {freeResource.map((resource, index) => (
                                    <li key={index} className="flex md:items-start items-center gap-2">
                                        <div className="shrink-0 size-6 grid place-content-center rounded-full bg-[#0236A5]">
                                            <Check className="size-4 text-white" />
                                        </div>
                                        <span>{resource}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <Link
                            to=""
                            className={cn(
                                buttonVariants(),
                                "bg-linear-(--gradient-primary) hover:bg-linear-(--gradient-primary-hover) md:h-19 h-13 md:px-7.5 px-4 text-2xl w-fit rounded-2xl",
                            )}
                        >
                            Download Your Free System
                        </Link>
                    </div>

                    <div className="shrink-0">
                        <img src={MaleCorporateWoker} alt="" className="size-full object-cover" />
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Inbound;
