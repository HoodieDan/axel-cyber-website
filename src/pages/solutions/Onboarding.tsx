import MaleCorporateWoker from "@/assets/corporate-male-working.png";
import goldfrapp from "@/assets/goldfrapp.png";
import hulu from "@/assets/hulu.png";
import ibm from "@/assets/ibm.png";
import information from "@/assets/information.png";
import Office from "@/assets/office.png";
import OnboardingStepOneImg from "@/assets/onboarding-step-one.png";
import OnboardingStepThreeImg from "@/assets/onboarding-step-three.png";
import OnboardingStepTwoImg from "@/assets/onboarding-step-two.png";
import pencil from "@/assets/pencil.png";
import VideoImgDesktop from "@/assets/video-img-desktop.png";
import VideoImgMobile from "@/assets/video-img-mobile.png";
import volume from "@/assets/volume.png";
import CTASection from "@/components/CTASection";
import ArrowGrowth from "@/components/icons/ArrowGrowth";
import ArrowUpRight from "@/components/icons/ArrowUpRight";
import IBMSecure from "@/components/icons/IBMSecure";
import LightBatch from "@/components/icons/LightBatch";
import Lightning from "@/components/icons/Lightning";
import Research from "@/components/icons/Research";
import Shield from "@/components/icons/Shield";
import ShieldGradient from "@/components/icons/ShieldGradient";
import TargetDot from "@/components/icons/TargetDot";
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
        heading: 'The "Now What?" Moment',
        description: `Your sales team celebrates the win, but your success team scrambles to figure out next steps. We create instant clarity with automated task creation.`,
    },
    {
        Icon: LightBatch,
        heading: "Clients Who Slip Through Cracks",
        description:
            " Without proper handoffs, new clients wait too long for onboarding. We make sure every client feels valued from day one.",
    },
    {
        Icon: Vortex,
        heading: "The Renewal Surprise",
        description: `Wait, they're churning?" never has to happen again. Our system tracks every milestone and flags at-risk accounts before it's too late.`,
    },
    {
        Icon: IBMSecure,
        heading: "Inconsistent Experiences",
        description:
            "Some clients get white-glove treatment, others get forgotten. We ensure every client receives your best onboarding process.",
    },
    {
        Icon: Lightning,
        heading: "CRM Graveyards",
        description:
            "Your expensive CRM holds data but doesn't drive action. We turn it into your team's command center.",
    },
];

const smartTeamsBenefits = [
    {
        Icon: TeamMeeting,
        heading: "Your Team Breathes\n Easier",
        description:
            "No more wondering if tasks were assigned or deadlines were missed. Everything happens automatically, and everyone knows their role.",
    },
    {
        Icon: Lightning,
        heading: "Clients Start\n Faster",
        description:
            "Instead of waiting weeks for onboarding, clients see value in their first week. Happy clients become your best advocates.",
    },
    {
        Icon: Research,
        heading: "Revenue Grows\n Predictably",
        description:
            "When onboarding is smooth, renewals are easier and expansion opportunities are clearer. Protect the revenue you've already earned.",
    },
    {
        Icon: ArrowGrowth,
        heading: "You Scale Without\n Chaos",
        description:
            "Add new team members or handle growth spurts without worrying about dropped balls. Your system scales with you.",
    },
    {
        Icon: TargetDot,
        heading: "Everything Fits Your\n Business",
        description:
            "We don't force you into templates. Every automation is built around how your team actually works.",
    },
];

const impactSteps = [
    {
        image: OnboardingStepOneImg,
        heading: "The Win Triggers Everything",
        description: `The moment your deal status changes to "closed won," our system springs into action. No manual steps, no forgotten handoffs.`,
    },
    {
        image: OnboardingStepTwoImg,
        heading: "Everyone Knows Their Part",
        description:
            "Your success team gets a complete handoff document, task assignments appear in their workflow, and kickoff checklists post automatically in your team channel.",
    },
    {
        image: OnboardingStepThreeImg,
        heading: "Nothing Falls Behind",
        description:
            " Automated check-ins ensure forms get completed, meetings get scheduled, and renewal conversations start at exactly the right time.",
    },
];

const onboardingStruggle = [
    {
        heading: "We Speak SaaS",
        description:
            "We've lived through the chaos of scaling customer success. Our solutions come from real experience, not theory.",
    },
    {
        heading: "Your Business, Your Rules",
        description:
            "Every company is different. We build automations that match your pipeline, your CRM, and your team's workflow.",
    },
    {
        heading: "Enterprise Without the Headaches",
        description:
            "Secure, scalable, and compliant. Get enterprise-level reliability without enterprise-level complexity.",
    },
    {
        heading: "ROI You Can Measure",
        description:
            "Lower churn, faster expansion, and hours saved every week. Most clients see measurable results within their first month.",
    },
];

const freeResource = [
    "Complete handoff document template",
    "CRM field mapping guide",
    "Task automation checklist",
    "Kickoff process framework",
];

const Onboarding = () => {
    return (
        <main>
            <section className="px-[5%] lg:py-24 py-12 flex flex-col gap-10">
                <div className="flex md:flex-row flex-col items-start gap-8">
                    <h3 className="flex-1 capitalize font-tt-hoves font-medium md:text-5xl text-4xl md:leading-15 text-[#002366]">
                        Stop Drowning in
                        <br /> Onboarding Busywork
                    </h3>
                    <div className="flex-1 flex flex-col gap-7.5">
                        <p className="text-xl md:leading-7.5">
                            Your deals close, but then what happens? Axel Cyber makes sure every new client gets the
                            perfect onboarding experience while your team focuses on growing revenue instead of chasing
                            tasks.
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
                        The Expensive Gaps We
                        <br /> Close
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
                        What Happens When
                        <br /> Onboarding Actually Works
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
                    <SectionTag tag="Why Axel Cyber Wins" />
                    <h2 className="font-tt-hoves font-medium md:text-5xl text-2xl md:leading-[120%] text-[#000F1F] text-center">
                        Built by People Who Understand Revenue
                        <br className="md:inline hidden" /> Operations
                    </h2>
                </div>

                <div className="flex md:flex-row flex-col md:gap-15 gap-8">
                    <div className="md:order-1 order-2 flex flex-col md:justify-between md:gap-0 gap-4 md:pr-15">
                        {onboardingStruggle.map(({ description, heading }, index) => (
                            <div key={index} className="space-y-4 p-2.5 rounded-md border border-[#E1E5E7]">
                                <h6 className="md:text-2xl text-xl text-[#002366] font-semibold uppercase">
                                    {heading}
                                </h6>
                                <p className="font-tt-hoves text-[#212121] md:text-xl">{description}</p>
                            </div>
                        ))}
                    </div>
                    <figure className="shrink-0 md:order-2 order-1">
                        <img src={Office} alt="" className="size-full object-cover" />
                    </figure>
                </div>
            </section>

            <CTASection
                heading={
                    <span>
                        Watch Your Onboarding
                        <br /> Run Itself
                    </span>
                }
                description={
                    <span>
                        Ready to see how smooth your handoffs could be? Book a personalized
                        <br className="md:inline hidden" /> demo and we'll show you exactly how Axel Cyber would work
                        with your
                        <br className="md:inline hidden" /> CRM and processes.
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
                                    Free Download: The Perfect Sales to Success Handoff
                                </h3>
                                <p className="md:leading-[120%] text-[#575757]">
                                    Get our proven template that automatically creates tasks, assigns team members, and
                                    launches onboarding checklists the second your deals close.
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
                            Download Your Free Template
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

export default Onboarding;
