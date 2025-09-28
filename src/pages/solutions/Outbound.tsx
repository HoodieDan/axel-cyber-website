import MaleCorporateWoker from "@/assets/corporate-male-working.png";
import goldfrapp from "@/assets/goldfrapp.png";
import hulu from "@/assets/hulu.png";
import ibm from "@/assets/ibm.png";
import information from "@/assets/information.png";
import OfficeTrimmed from "@/assets/office-trimmed.png";
import OutboundStepOneImg from "@/assets/outbound-step-one.png";
import OutboundStepThreeImg from "@/assets/outbound-step-three.png";
import OutboundStepTwoImg from "@/assets/outbound-step-two.png";
import pencil from "@/assets/pencil.png";
import VideoImgDesktop from "@/assets/video-img-desktop.png";
import VideoImgMobile from "@/assets/video-img-mobile.png";
import volume from "@/assets/volume.png";
import CTASection from "@/components/CTASection";
import ArrowUpRight from "@/components/icons/ArrowUpRight";
import IBMSecure from "@/components/icons/IBMSecure";
import LightBatch from "@/components/icons/LightBatch";
import Lightning from "@/components/icons/Lightning";
import MessageUp from "@/components/icons/MessageUp";
import Scale from "@/components/icons/Scale";
import Shield from "@/components/icons/Shield";
import ShieldGradient from "@/components/icons/ShieldGradient";
import SystemSum from "@/components/icons/SystemSum";
import Target from "@/components/icons/Target";
import TeamMeeting from "@/components/icons/TeamMeeting";
import Vortex from "@/components/icons/Vortex";
import ImpactSteps from "@/components/ImpactSteps";
import SectionTag from "@/components/SectionTag";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";
import { Link } from "react-router";

const problemsWeSolve = [
    {
        Icon: Shield,
        heading: "The Data Disaster",
        description: `Your SDRs spend half their day researching contacts that turn out to be wrong, outdated, or completely irrelevant. Every bad contact is money down the drain.`,
    },
    {
        Icon: LightBatch,
        heading: "The Generic Email Epidemic",
        description: `"Hi [First Name], I hope this email finds you well..." gets deleted instantly. Without real personalization, you're just expensive spam.`,
    },
    {
        Icon: Vortex,
        heading: "The Follow-Up Black Hole",
        description: `Your best prospects get interested, then disappear because nobody remembered to follow up at the right time. These aren't rejections, they're missed opportunities.`,
    },
    {
        Icon: IBMSecure,
        heading: "The Cost Explosion",
        description:
            "When your outreach is manual and inefficient, you need more SDRs to hit targets. More SDRs means higher costs, but not necessarily better results.",
    },
    {
        Icon: Lightning,
        heading: "The Stack Nightmare",
        description:
            "Your CRM doesn't talk to your outreach tool, which doesn't sync with your calendar. Important prospects fall through the cracks between systems.",
    },
];

const smartTeamsBenefits = [
    {
        Icon: TeamMeeting,
        heading: "Every Contact is Worth\n Reaching",
        description:
            "Stop wasting time on bad data. Our enrichment process ensures your SDRs only touch qualified, reachable prospects who match your ideal customer profile.",
    },
    {
        Icon: MessageUp,
        heading: "Messages That Get\n Opened",
        description:
            "Dynamic personalization that goes way beyond first names. Every email feels like it was written specifically for that person, because it was.",
    },
    {
        Icon: Target,
        heading: "Nothing Falls Through\n Cracks",
        description:
            "Automated follow-ups that trigger based on engagement, timing, and buyer behavior. Your hottest prospects never get forgotten again.",
    },
    {
        Icon: Scale,
        heading: "Scale Without Hiring",
        description:
            " Book more meetings with your current team instead of constantly hiring more SDRs. Growth comes from efficiency, not headcount.",
    },
    {
        Icon: SystemSum,
        heading: "One System That Works",
        description:
            "Everything connects seamlessly. When a prospect engages, your whole team knows. When they're ready to buy, someone's there to help.",
    },
];

const impactSteps = [
    {
        image: OutboundStepOneImg,
        heading: "We Find the Good Ones",
        description: `Upload your target list and we'll enrich it with accurate contact info, company intelligence, and buying signals. No more chasing ghosts or reaching out to people who left the company six months ago.`,
    },
    {
        image: OutboundStepTwoImg,
        heading: "We Make It Personal",
        description:
            "Every message gets customized based on the prospect's role, company situation, recent news, and where they are in their buying journey. It's like having your best SDR write every email.",
    },
    {
        image: OutboundStepThreeImg,
        heading: "We Never Let Go",
        description:
            "Automated follow-up sequences that adapt based on engagement. Prospects who open get one cadence, those who click get another, and hot leads get immediate alerts to your team.",
    },
];

const outboundStruggle = [
    {
        heading: "We've Built Outbound Machines Before ",
        description:
            "Our team has scaled outbound for dozens of B2B companies. We know what works, what doesn't, and how to adapt strategies to your specific market",
    },
    {
        heading: "It's Your System, Amplified",
        description:
            "We don't replace your tools or force you into our process. We make your existing stack work better and help you spot the gaps that are costing you deals.",
    },
    {
        heading: "Partnership, Not Vendor Relationship",
        description:
            "We work alongside your team to optimize performance, share what we're learning, and continuously improve your results. Your success is our success.",
    },
    {
        heading: "ROI That Shows Up Fast",
        description:
            "Most clients see higher reply rates within the first week and more booked meetings within the first month. The payback period is measured in weeks, not quarters.",
    },
];

const freeResource = [
    "8 high-intent trigger events",
    "Message templates for each trigger",
    "Optimal timing strategies",
    "Follow-up sequences that convert",
];

const Outbound = () => {
    return (
        <main>
            <section className="px-[5%] lg:py-24 py-12 flex flex-col gap-10">
                <div className="flex md:flex-row flex-col items-start gap-8">
                    <h3 className="flex-1 capitalize font-tt-hoves font-medium md:text-5xl text-4xl md:leading-15 text-[#002366]">
                        Stop Burning Cash on
                        <br /> Cold Outreachsss
                    </h3>
                    <div className="flex-1 flex flex-col gap-7.5">
                        <p className="text-xl md:leading-7.5">
                            Your SDRs are spending hours crafting emails that get ignored, chasing dead leads, and
                            forgetting to follow up on warm prospects. Axel Cyber automates the grunt work so your team
                            can focus on having real conversations with people who actually want to buy
                        </p>
                        <div className="flex md:flex-row flex-col gap-4">
                            <Link
                                to=""
                                className={cn(
                                    buttonVariants({ variant: "default" }),
                                    "bg-linear-(--gradient-primary) hover:bg-linear-(--gradient-primary-hover) h-13.5 px-5",
                                )}
                            >
                                See How We Triple Reply Rates
                            </Link>
                            <Link to="" className={cn(buttonVariants({ variant: "outline" }), "h-13.5 px-5")}>
                                Get Your Free Outreach Playbook
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
                    tag="Trusted by Onboarding teams who've escaped the content hamster wheel"
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
                        Why Most Outbound Fails &<br /> Costs You Fortune
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
                        How Top Sales Teams Scale
                        <br /> Without Burning Cash
                    </h2>
                </div>

                <div className="flex flex-col md:gap-8 gap-5">
                    <div className="flex md:flex-row flex-col md:gap-8 gap-5">
                        {smartTeamsBenefits.slice(0, 3).map(({ description, heading, Icon }, index) => (
                            <div
                                key={index}
                                className="flex flex-col items-center justify-center gap-5 text-white md:px-5 px-12 md:py-12 py-20 rounded-xl bg-linear-to-b from-[#002366] to-[#0046CC] md:h-100 md:w-1/3"
                            >
                                <Icon className="shrink-0 md:size-15 size-10" />
                                <div className="space-y-4 text-center">
                                    <h6 className="text-2xl md:leading-[120%] font-bold uppercase whitespace-pre-line">
                                        {heading}
                                    </h6>
                                    <p className="text-xl leading-7.5">{description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="flex md:flex-row flex-col md:justify-center md:gap-8 gap-5">
                        {smartTeamsBenefits.slice(3, 5).map(({ description, heading, Icon }, index) => (
                            <div
                                key={index}
                                className="flex flex-col items-center justify-center gap-5 text-white md:px-5 px-12 md:py-12 py-20 rounded-xl not-last:bg-linear-to-b from-[#002366] to-[#0046CC] last:bg-[#080F44] md:h-100 md:w-1/3"
                            >
                                <Icon className="shrink-0 md:size-15 size-10" />
                                <div className="space-y-4 text-center">
                                    <h6 className="text-2xl md:leading-[120%] font-bold uppercase whitespace-pre-line">
                                        {heading}
                                    </h6>
                                    <p className="text-xl leading-7.5">{description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="px-[5%] lg:py-24 py-12 flex flex-col md:gap-20 gap-10">
                <div className="flex flex-col gap-6">
                    <SectionTag tag="How It Actually Works" />
                    <h2 className="font-tt-hoves font-medium md:text-5xl text-2xl md:leading-[120%] text-[#000F1F] text-center">
                        From Idea to Impact in
                        <br /> Three Steps
                    </h2>
                </div>

                <ImpactSteps steps={impactSteps} />
            </section>

            <section className="px-[5%] lg:py-16 py-12 flex flex-col md:gap-16 gap-10">
                <div className="flex flex-col gap-6">
                    <SectionTag tag="Why Sales Leaders Trust Axel Cyber" />
                    <h2 className="font-tt-hoves font-medium md:text-5xl text-2xl md:leading-[120%] text-[#000F1F] text-center">
                        We Don't Just Generate Leads. We Fix Your
                        <br className="md:inline hidden" /> Entire Acquisition Engine.
                    </h2>
                </div>

                <div className="flex md:flex-row flex-col gap-4">
                    <div className="md:order-1 order-2 md:w-2/7 flex flex-col md:justify-between md:gap-0 gap-4">
                        {outboundStruggle.slice(0, 2).map(({ description, heading }, index) => (
                            <div key={index} className="space-y-4 p-2.5 rounded-md border border-[#E1E5E7]">
                                <h6 className="text-xl text-[#002366] font-semibold uppercase">{heading}</h6>
                                <p className="font-tt-hoves text-[#212121]">{description}</p>
                            </div>
                        ))}
                    </div>
                    <figure className="md:w-3/7 md:order-2 order-1">
                        <img src={OfficeTrimmed} alt="" className="size-full object-cover" />
                    </figure>
                    <div className="order-last md:w-2/7 flex flex-col md:justify-between md:gap-0 gap-4">
                        {outboundStruggle.slice(2, 4).map(({ description, heading }, index) => (
                            <div key={index} className="space-y-4 p-2.5 rounded-md border border-[#E1E5E7]">
                                <h6 className="text-xl text-[#002366] font-semibold uppercase">{heading}</h6>
                                <p className="font-tt-hoves text-[#212121]">{description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <CTASection
                heading={
                    <span>
                        Watch Your Calendar Get
                        <br /> Booked
                    </span>
                }
                description={
                    <span>
                        Ready to see what outbound looks like when every prospect is qualified,
                        <br className="md:inline hidden" /> every message is personalized, and every follow-up happens
                        <br className="md:inline hidden" /> automatically? Book a live demo and we'll show you exactly
                        how much
                        <br className="md:inline hidden" /> your reply rates could improve.
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
                    Show Me The Results <ArrowUpRight className="size-4" />
                </Link>
            </CTASection>

            <section className="px-[5%] lg:py-24 py-12">
                <div className="flex md:flex-row flex-col-reverse items-center md:gap-18.5 gap-10">
                    <div className="flex flex-col gap-9">
                        <div className="flex flex-col gap-6">
                            <div className="flex flex-col">
                                <SectionTag tag="Free Resource Section" className="mx-0 [&_p]:text-xs" />
                                <h3 className="font-tt-hoves font-bold text-[#002366] text-[2.5rem] leading-[120%] mt-4 mb-5">
                                    Free Download: The High-Intent Trigger Playbook
                                </h3>
                                <p className="md:leading-[120%] text-[#575757]">
                                    Stop guessing when to reach out. This playbook reveals the 8 buying signals that
                                    indicate a prospect is ready to have a conversation, plus the exact message
                                    templates and timing that get responses.
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
                            Get Your Free Playbook
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

export default Outbound;
