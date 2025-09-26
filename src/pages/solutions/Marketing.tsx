import MaleCorporateWoker from "@/assets/corporate-male-working.png";
import goldfrapp from "@/assets/goldfrapp.png";
import hulu from "@/assets/hulu.png";
import ibm from "@/assets/ibm.png";
import ImpactStepOneImg from "@/assets/impact-step-one.png";
import ImpactStepThreeImg from "@/assets/impact-step-three.png";
import ImpactStepTwoImg from "@/assets/impact-step-two.png";
import information from "@/assets/information.png";
import OfficeTrimmed from "@/assets/office-trimmed.png";
import pencil from "@/assets/pencil.png";
import VideoImgDesktop from "@/assets/video-img-desktop.png";
import VideoImgMobile from "@/assets/video-img-mobile.png";
import volume from "@/assets/volume.png";
import CTASection from "@/components/CTASection";
import AiLearning from "@/components/icons/AiLearning";
import ArrowUpRight from "@/components/icons/ArrowUpRight";
import Blog from "@/components/icons/Blog";
import IBMSecure from "@/components/icons/IBMSecure";
import LightBatch from "@/components/icons/LightBatch";
import Lightning from "@/components/icons/Lightning";
import Report from "@/components/icons/Report";
import Research from "@/components/icons/Research";
import Scale from "@/components/icons/Scale";
import Shield from "@/components/icons/Shield";
import ShieldGradient from "@/components/icons/ShieldGradient";
import TeamMeeting from "@/components/icons/TeamMeeting";
import Vortex from "@/components/icons/Vortex";
import SectionTag from "@/components/SectionTag";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";

const problemsWeSolve = [
    {
        Icon: Shield,
        heading: "The Content Graveyard",
        description: `Detect anomalies with deep learning models trained in historical claims data.`,
    },
    {
        Icon: LightBatch,
        heading: "The Testing Guessing Game",
        description:
            "You launch ad campaigns hoping they'll work, but without proper testing frameworks, you're basically gambling with your budget. We give you structured, risk-managed testing that actually teaches you something.",
    },
    {
        Icon: Vortex,
        heading: "The Research Black Hole",
        description:
            "Your team spends days digging through PDFs, competitor analysis, and market research, trying to find the insights that matter. Our AI finds the patterns and hands you actionable intelligence.",
    },
    {
        Icon: IBMSecure,
        heading: "The Reporting Prison",
        description:
            " Every Monday starts with hours of pulling data, creating charts, and writing reports that nobody reads. We generate insights automatically and present them in formats that actually drive decisions.",
    },
    {
        Icon: Lightning,
        heading: "The Bottleneck Problem",
        description:
            " One person becomes the gateway for all content approval, creating delays that kill momentum. We build workflows that keep quality high while keeping things moving.",
    },
];

const smartTeamsBenefits = [
    {
        Icon: Blog,
        heading: "Content That Actually Ships",
        description:
            "Stop writing the same blog post outline five different ways. Our AI creates multiple versions instantly, so you can pick the winner and publish.",
    },
    {
        Icon: AiLearning,
        heading: "Ads That Learn Fast",
        description:
            "Launch smart test campaigns with built-in stop-loss rules. No more waking up to burned budgets or campaigns that ran too long",
    },
    {
        Icon: Research,
        heading: "Research That Reveals Gold",
        description:
            "Upload your competitor analysis, customer interviews, and market reports. Get back structured insights that inform real strategy decisions.",
    },
    {
        Icon: Report,
        heading: "Reports That Actually Matter",
        description:
            "Your stakeholders get beautiful, branded dashboards that update in real time. You get your Monday mornings back.",
    },
    {
        Icon: Scale,
        heading: "Quality at Scale",
        description:
            "Maintain your brand voice and approval process while producing 10x more content. Every piece stays on-brand and on-strategy.",
    },
    {
        Icon: TeamMeeting,
        heading: "Team Superpowers",
        description:
            "New team members become productive in days, not months. Your best strategies become repeatable playbooks that anyone can execute.",
    },
];

const impactSteps = [
    {
        image: ImpactStepOneImg,
        heading: "Feed the System",
        description:
            "Upload your brand guidelines, competitor research, customer interviews, and winning content. Our AI learns what makes your marketing work.",
    },
    {
        image: ImpactStepTwoImg,
        heading: "Create with Confidence",
        description:
            "Generate multiple content variations, ad concepts, and campaign structures in minutes. Built-in brand controls ensure everything stays on-message.",
    },
    {
        image: ImpactStepThreeImg,
        heading: "Measure What Matters",
        description:
            " Get real-time performance data presented in formats your team and leadership actually want to see. Spot winning patterns and kill losing campaigns automatically.",
    },
];

const marketersStruggle = [
    {
        heading: "We've Been There",
        description:
            "Our team has lived through the late nights, the endless revisions, and the campaigns that bombed because there wasn't time to test properly. We built the solution we wish we'd had.Your Brand, Amplified",
    },
    {
        heading: "Your Brand, Amplified",
        description:
            " This isn't generic AI output. Every piece of content understands your voice, your audience, and your conversion goals. It's like having your best copywriter work 24/7.",
    },
    {
        heading: "Enterprise Ready, Startup Fast",
        description:
            "All the security and compliance you need (SOC2, GDPR, HIPAA) with the speed and flexibility that keeps you competitive.",
    },
    {
        heading: "ROI You Can Track",
        description:
            "Most teams save 20+ hours per week within their first month. Those hours go straight to strategy, optimization, and growth initiatives that actually matter.",
    },
];

const freeResource = [
    "Risk-tiered testing matrix",
    "Budget allocation guide",
    "Automatic optimization rules",
    "Performance tracking templates",
];

const Marketing = () => {
    return (
        <main>
            <section className="px-[5%] lg:py-24 py-12 flex flex-col gap-10">
                <div className="flex md:flex-row flex-col items-start gap-8">
                    <h3 className="flex-1 capitalize font-tt-hoves font-medium md:text-5xl text-4xl md:leading-15 text-[#002366]">
                        Stop Drowning in
                        <br /> Marketing Busywork
                    </h3>
                    <div className="flex-1 flex flex-col gap-7.5">
                        <p className="text-xl md:leading-7.5">
                            Your team is brilliant at strategy, but you're spending 80% of your time on drafts,
                            revisions, and reporting. Axel Cyber's AI handles the grunt work so you can focus on what
                            actually moves the needle: growing revenue
                        </p>
                        <div className="flex md:flex-row flex-col gap-4">
                            <Link
                                to=""
                                className={cn(
                                    buttonVariants({ variant: "default" }),
                                    "bg-linear-(--gradient-primary) hover:bg-linear-(--gradient-primary-hover) h-13.5 px-5",
                                )}
                            >
                                See It Work Live
                            </Link>
                            <Link to="" className={cn(buttonVariants({ variant: "outline" }), "h-13.5 px-5")}>
                                Get Your Free Ad Testing Guide
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="md:h-127 rounded-3xl overflow-hidden">
                    <img src={VideoImgDesktop} alt="" className="md:block hidden size-full object-cover" />
                    <img src={VideoImgMobile} alt="" className="md:hidden block size-full object-cover" />
                </div>
            </section>

            <section className="flex flex-col gap-4 px-[5%]">
                <SectionTag
                    Icon={ShieldGradient}
                    tag="Trusted by marketing teams who've escaped the content hamster wheel"
                />

                <div className="flex flex-wrap items-center justify-between gap-10">
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
                    <SectionTag tag="PROBLEMS WE SOLVE" />
                    <h2 className="font-tt-hoves font-medium md:text-5xl text-2xl md:leading-[120%] text-[#000F1F] text-center">
                        The Time-Wasting Traps We
                        <br /> Eliminate
                    </h2>
                </div>

                <div className="flex flex-col gap-5">
                    <div className="flex md:flex-row flex-col gap-5">
                        {problemsWeSolve.slice(0, 3).map(({ description, heading, Icon }, index) => (
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
                        {problemsWeSolve.slice(3, 5).map(({ description, heading, Icon }, index) => (
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

            <section className="px-[5%] lg:py-24 py-12 flex flex-col md:gap-16 gap-10">
                <div className="flex flex-col gap-6">
                    <SectionTag tag="BENEFITS" />
                    <h2 className="font-tt-hoves font-medium md:text-5xl text-2xl md:leading-[120%] text-[#000F1F] text-center">
                        How Smart Teams Turn
                        <br /> Every Call Into Cash
                    </h2>
                </div>

                <div className="grid md:grid-cols-3 md:gap-x-17.5 md:gap-y-16.5 gap-5">
                    {smartTeamsBenefits.map(({ description, heading, Icon }, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center gap-5 text-white md:px-5 px-12 md:py-12 py-20 rounded-xl bg-linear-to-b from-[#002366] to-[#0046CC] nth-[5]:bg-linear-[-40deg,#0F0255_0%,#080323_100%]"
                        >
                            <Icon className="shrink-0 md:size-15 size-10" />
                            <div className="space-y-4 text-center">
                                <h6 className="text-2xl md:leading-[120%] font-bold uppercase">{heading}</h6>
                                <p className="text-xl leading-7.5">{description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section className="px-[5%] lg:py-24 py-12 flex flex-col md:gap-16 gap-10">
                <div className="flex flex-col gap-6">
                    <SectionTag tag="WHY US?" />
                    <h2 className="font-tt-hoves font-medium md:text-5xl text-2xl md:leading-[120%] text-[#000F1F] text-center">
                        From 'Yes' to Payment Received
                        <br /> in Three Clicks
                    </h2>
                </div>

                <div className="isolate flex flex-col md:items-center md:gap-0 gap-10">
                    {impactSteps.map(({ description, heading, image }, index) => (
                        <div
                            key={index}
                            className="group flex md:flex-row flex-col md:h-100 items-start md:gap-20 gap-4 md:w-9/10"
                        >
                            <figure className="shrink-0 md:h-full h-36.5 md:w-auto w-full">
                                <img src={image} alt="" className="w-full md:h-23/25 h-full object-cover" />
                            </figure>
                            <div className="relative md:h-full flex items-start md:gap-8 gap-2 group-last:before:hidden md:before:block before:hidden before:absolute before:left-[calc(var(--index-width)/2)] before:w-[1px] before:h-full before:bg-[#948E8E] before:-z-10 md:[--index-width:calc(var(--spacing)*14)] [--index-width:calc(var(--spacing)*10)]">
                                <div className="shrink-0 size-(--index-width) grid place-content-center rounded-full bg-linear-to-b from-[#002366] to-[#0046CC]">
                                    <span className="text-white md:text-2xl text-xs font-medium">{index + 1}</span>
                                </div>
                                <div className="flex flex-col md:gap-5 gap-3">
                                    <h6 className="md:text-4xl text-xl text-[#000F1F] font-medium">{heading}</h6>
                                    <p className="md:text-2xl text-sm text-black/60 md:leading-7.5">{description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section className="px-[5%] lg:py-16 py-12 flex flex-col md:gap-16 gap-10">
                <div className="flex flex-col gap-6">
                    <SectionTag tag="Why Sales Leaders Trust Axel Cyber" />
                    <h2 className="font-tt-hoves font-medium md:text-5xl text-2xl md:leading-[120%] text-[#000F1F] text-center">
                        Built by Marketers Who Understand the
                        <br className="md:inline hidden" /> Struggle
                    </h2>
                </div>

                <div className="flex md:flex-row flex-col gap-4">
                    <div className="md:order-1 order-2 md:w-2/7 flex flex-col md:justify-between md:gap-0 gap-4">
                        {marketersStruggle.slice(0, 2).map(({ description, heading }, index) => (
                            <div key={index} className="space-y-4 p-2.5 rounded-md border border-[#E1E5E7]">
                                <h6 className="text-xl text-[#002366] font-semibold">{heading}</h6>
                                <p className="font-tt-hoves text-[#212121]">{description}</p>
                            </div>
                        ))}
                    </div>
                    <figure className="md:w-3/7 md:order-2 order-1">
                        <img src={OfficeTrimmed} alt="" className="size-full object-cover" />
                    </figure>
                    <div className="order-last md:w-2/7 flex flex-col md:justify-between md:gap-0 gap-4">
                        {marketersStruggle.slice(2, 4).map(({ description, heading }, index) => (
                            <div key={index} className="space-y-4 p-2.5 rounded-md border border-[#E1E5E7]">
                                <h6 className="text-xl text-[#002366] font-semibold">{heading}</h6>
                                <p className="font-tt-hoves text-[#212121]">{description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <CTASection
                heading={
                    <span>
                        See How Fast Your Team
                        <br /> Could Be Moving
                    </span>
                }
                description={
                    <span>
                        Ready to see what marketing looks like when AI handles the busywork?
                        <br className="md:inline hidden" /> Book a live demo and we'll show you exactly how Axel Cyber
                        would
                        <br className="md:inline hidden" /> accelerate your specific workflows.
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
                    Book Your Free Demo <ArrowUpRight className="size-4" />
                </Link>
            </CTASection>

            <section className="px-[5%] lg:py-24 py-12">
                <div className="flex md:flex-row flex-col-reverse items-center md:gap-18.5 gap-10">
                    <div className="flex flex-col gap-9">
                        <div className="flex flex-col gap-6">
                            <div className="flex flex-col">
                                <SectionTag tag="Free Resource Section" className="mx-0 [&_p]:text-xs" />
                                <h3 className="font-tt-hoves font-bold text-[#002366] text-[2.5rem] leading-[120%] mt-4 mb-5">
                                    Free Download: The Smart Ad Testing Framework
                                </h3>
                                <p className="md:leading-[120%] text-[#575757]">
                                    Stop wasting ad spend on tests that don't teach you anything. This framework shows
                                    you how to structure campaigns by risk level, set automatic stop-loss rules, and
                                    extract actionable insights from every dollar spent.
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
                            Download Your Free Framework
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

export default Marketing;
