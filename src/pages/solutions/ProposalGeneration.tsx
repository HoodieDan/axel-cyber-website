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
import AddBusiness from "@/components/icons/AddBusiness";
import ArrowUpRight from "@/components/icons/ArrowUpRight";
import CheckAll from "@/components/icons/CheckAll";
import IBMSecure from "@/components/icons/IBMSecure";
import LightBatch from "@/components/icons/LightBatch";
import Lightning from "@/components/icons/Lightning";
import Money from "@/components/icons/Money";
import Rocket from "@/components/icons/Rocket";
import Shield from "@/components/icons/Shield";
import Target from "@/components/icons/Target";
import Vortex from "@/components/icons/Vortex";
import SectionTag from "@/components/SectionTag";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";

const perfectSalesProblems = [
    {
        Icon: Shield,
        heading: "The Proposal Black Hole",
        description: `Your prospect is excited and ready to buy, but then you say "I'll send you a proposal tomorrow." By tomorrow, they're talking to your competitors and your deal is suddenly "under review."`,
    },
    {
        Icon: LightBatch,
        heading: "The Scope Creep Disaster",
        description:
            "Every salesperson writes proposals differently, leading to confused expectations, endless revisions, and projects that start underwater before they even begin.",
    },
    {
        Icon: Vortex,
        heading: "The Tool Juggling Act",
        description:
            "Create proposal in Word, send via email, wait for DocuSign, then chase payment through a separate system. Every step is another chance for things to go wrong.",
    },
    {
        Icon: Lightning,
        heading: "The Cash Flow Nightmare",
        description:
            "Even when deals get signed, payment comes weeks later. You're funding the project with your own cash flow while waiting for clients to pay.",
    },
    {
        Icon: IBMSecure,
        heading: "The Operations Scramble",
        description:
            "Someone signed something, but now what? Your ops team has to manually update the CRM, set up onboarding, and figure out what was actually sold.",
    },
];

const proposalProblems = [
    {
        Icon: LightBatch,
        heading: "We Know the Pain",
        description:
            "Our team has lived through the frustration of perfect sales calls that died in proposal purgatory. We built the solution we desperately needed.",
    },
    {
        Icon: Vortex,
        heading: "Industry-Specific Intelligence",
        description:
            "Agency teams get retainer templates with clear scope boundaries. MSPs get technical SOWs with proper pricing models. Recruiters get rate cards with built-in deposit collection.",
    },
    {
        Icon: Lightning,
        heading: "Results You Feel Immediately",
        description:
            "Most teams see faster deal closure within their first week and improved cash flow within their first month. The difference is immediate and measurable.",
    },
    {
        Icon: IBMSecure,
        heading: "Your Process, Perfected",
        description:
            "We don't change how you sell, we just make it faster and more reliable. Every template reflects your best proposals and protects your margins.",
    },
];

const smartTeamsBenefits = [
    {
        Icon: Rocket,
        heading: "Strike While the Iron is Hot",
        description:
            "Generate professional proposals during your sales call, not days later. Your prospect's excitement stays high because there's no waiting period for them to second-guess the decision.",
    },
    {
        Icon: Target,
        heading: "Perfect Proposals Every Time",
        description:
            "Your best pricing, cleanest scope, and strongest terms built into templates. No more underpricing because someone forgot to include a crucial line item.",
    },
    {
        Icon: Money,
        heading: "Money in the Bank Immediately",
        description:
            "Collect deposits or full payment the moment contracts are signed. No more waiting weeks for checks or chasing down invoices.",
    },
    {
        Icon: CheckAll,
        heading: "Everything Flows Seamlessly",
        description:
            "Signature triggers payment processing, CRM updates, onboarding emails, and team notifications automatically. Nothing falls through the cracks.",
    },
    {
        Icon: AddBusiness,
        heading: "Built for Your Business",
        description:
            "Whether you're selling agency retainers, IT services, or staffing contracts, every template matches your industry and your best practices.",
    },
];

const paymentSteps = [
    {
        image: PaymentStepOneImg,
        heading: "Create While You Talk",
        description:
            "Pull up our proposal builder during your sales call. Client data auto-populates, pricing comes from your templates, and you're building the contract while discussing the details.",
    },
    {
        image: PaymentStepTwoImg,
        heading: "Sign and Pay on the Spot",
        description:
            "Send the proposal link immediately. Client reviews, signs electronically, and pays their deposit through embedded Stripe or PayPal. All while the call momentum is still strong.",
    },
    {
        image: PaymentStepThreeImg,
        heading: "Everything Happens Automatically",
        description:
            "Payment confirmation updates your CRM, triggers onboarding sequences, notifies your delivery team, and starts the project timeline. You focus on the next sales call.",
    },
];

const freeResource = [
    "6 proven approval acceleration templates",
    "Objection handling scripts for finance teams",
    "Stakeholder mapping worksheet",
    "Follow-up timing strategies",
];

const ProposalGeneration = () => {
    return (
        <main>
            <section className="px-[5%] lg:py-24 py-12 flex flex-col gap-10">
                <div className="flex md:flex-row flex-col items-start gap-8">
                    <h3 className="flex-1 capitalize font-tt-hoves font-medium md:text-5xl text-4xl md:leading-15 text-[#002366]">
                        Stop Losing Deals to
                        <br /> Proposal Delays
                    </h3>
                    <div className="flex-1 flex flex-col gap-7.5">
                        <p className="text-xl md:leading-7.5">
                            You just had the perfect sales call, but now you need to spend two days creating a proposal
                            while your prospect gets cold and your competitors swoop in. Axel Cyber lets you create,
                            send, sign, and get paid on the spot, so momentum never dies.
                        </p>
                        <div className="flex md:flex-row flex-col gap-4">
                            <Link
                                to=""
                                className={cn(
                                    buttonVariants({ variant: "default" }),
                                    "bg-linear-(--gradient-primary) hover:bg-linear-(--gradient-primary-hover) h-13.5 px-5",
                                )}
                            >
                                Watch a Deal Close Live
                            </Link>
                            <Link to="" className={cn(buttonVariants({ variant: "outline" }), "h-13.5 px-5")}>
                                Get Your Approval Shortcut Guide
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
                        Trusted by teams who close deals
                        <br /> while the iron is still hot
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
                        Where Perfect Sales
                        <br /> Calls Go to Die
                    </h2>
                </div>

                <div className="flex flex-col gap-5">
                    <div className="flex md:flex-row flex-col gap-5">
                        {perfectSalesProblems.slice(0, 3).map(({ description, heading, Icon }, index) => (
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
                        {perfectSalesProblems.slice(3, 5).map(({ description, heading, Icon }, index) => (
                            <div
                                key={index}
                                className="md:h-65 flex flex-col gap-5 text-white p-7.5 rounded-xl not-last:bg-linear-to-b not-last:from-[#002366] not-last:to-[#0046CC] last:bg-linear-[-40deg,#0F0255_0%,#080323_100%] md:first:w-2/3 md:last:w-1/3"
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
                        How Smart Teams Turn
                        <br /> Every Call Into Cash
                    </h2>
                </div>

                <div className="flex flex-col md:gap-8 gap-5">
                    <div className="flex md:flex-row flex-col md:gap-8 gap-5">
                        {smartTeamsBenefits.slice(0, 3).map(({ description, heading, Icon }, index) => (
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
                        {smartTeamsBenefits.slice(3, 5).map(({ description, heading, Icon }, index) => (
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

            <section className="px-[5%] lg:py-24 py-12 flex flex-col md:gap-12 gap-10">
                <div className="flex flex-col gap-6">
                    <SectionTag tag="WHY US?" />
                    <h2 className="font-tt-hoves font-medium md:text-5xl text-2xl md:leading-[120%] text-[#000F1F] text-center">
                        From 'Yes' to Payment Received
                        <br /> in Three Clicks
                    </h2>
                </div>

                <div className="isolate flex flex-col items-center">
                    {paymentSteps.map(({ description, heading, image }, index) => (
                        <div key={index} className="group flex items-start gap-8 w-9/10">
                            <div className="w-1/2 flex items-start justify-end">
                                <figure
                                    className={cn("w-82.5 h-36.5", {
                                        hidden: index === 1,
                                    })}
                                >
                                    <img src={image} alt="" className="size-full object-cover" />
                                </figure>
                                <div
                                    className={cn("hidden space-y-5", {
                                        "block text-right": index === 1,
                                    })}
                                >
                                    <h6 className="text-2xl text-[#000F1F] font-medium">{heading}</h6>
                                    <p className="text-xl text-black/60 md:leading-7.5">{description}</p>
                                </div>
                            </div>

                            <div className="relative w-1/2 flex items-start gap-8 pb-8 group-last:before:hidden md:before:block before:hidden before:absolute before:left-[calc(var(--index-width)/2)] before:w-[1px] before:h-full before:bg-[#948E8E] before:-z-10 md:[--index-width:calc(var(--spacing)*19)] [--index-width:calc(var(--spacing)*10)]">
                                <div className="shrink-0 size-(--index-width) grid place-content-center rounded-full bg-linear-to-b from-[#002366] to-[#0046CC]">
                                    <span className="text-white text-2xl font-medium">{index + 1}</span>
                                </div>
                                <div
                                    className={cn("space-y-5", {
                                        hidden: index === 1,
                                    })}
                                >
                                    <h6 className="text-2xl text-[#000F1F] font-medium">{heading}</h6>
                                    <p className="text-xl text-black/60 md:leading-7.5">{description}</p>
                                </div>
                                <figure
                                    className={cn("hidden w-82.5 h-36.5", {
                                        block: index === 1,
                                    })}
                                >
                                    <img src={image} alt="" className="size-full object-cover" />
                                </figure>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section className="bg-[#F9F9F9] px-[5%] lg:py-24 py-12 flex flex-col md:gap-16 gap-9.5">
                <div className="flex flex-col gap-6">
                    <SectionTag tag="PROBLEMS" />
                    <h2 className="font-tt-hoves font-medium md:text-5xl text-2xl md:leading-[120%] text-[#000F1F] text-center">
                        Built by People Who've Lost
                        <br /> Deals to Proposal Delays
                    </h2>
                </div>

                <div className="flex flex-col gap-5">
                    <div className="flex md:flex-row flex-col gap-5">
                        {proposalProblems.slice(0, 2).map(({ description, heading, Icon }, index) => (
                            <div
                                key={index}
                                className="md:h-65 flex flex-col gap-5 text-white p-7.5 rounded-xl bg-linear-to-b from-[#002366] to-[#0046CC] first:md:w-2/5 last:md:w-3/5"
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
                        {proposalProblems.slice(2, 4).map(({ description, heading, Icon }, index) => (
                            <div
                                key={index}
                                className="md:h-65 flex flex-col gap-5 text-white p-7.5 rounded-xl not-last:bg-linear-to-b not-last:from-[#002366] not-last:to-[#0046CC] last:bg-linear-[-40deg,#0F0255_0%,#080323_100%] md:first:w-3/5 md:last:w-2/5"
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

            <CTASection
                heading={
                    <span>
                        Watch a Complete Deal
                        <br /> Happen in Under 5 Minutes
                    </span>
                }
                description={
                    <span>
                        Ready to see what it looks like when sales momentum never dies? Book
                        <br className="md:inline hidden" /> a live demo and we'll show you exactly how fast your deals
                        could be
                        <br className="md:inline hidden" /> closing and how much sooner you could be getting paid.
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
                    Show Me a Live Deal Closing <ArrowUpRight className="size-4" />
                </Link>
            </CTASection>

            <section className="px-[5%] lg:py-24 py-12 flex flex-col gap-5">
                <div className="flex md:flex-row flex-col-reverse items-center md:gap-18.5 gap-10">
                    <div className="flex flex-col gap-9">
                        <div className="flex flex-col gap-6">
                            <div className="flex flex-col">
                                <SectionTag tag="Free Resource Section" className="mx-0 [&_p]:text-xs" />
                                <h3 className="font-tt-hoves font-bold text-[#002366] text-[2.5rem] leading-[120%] mt-4 mb-5">
                                    Free Download: The Approval Acceleration Guide
                                </h3>
                                <p className="md:leading-[120%] text-[#575757]">
                                    Stop watching deals die in approval committees. This guide includes the exact email
                                    templates, Slack messages, and follow-up sequences that keep multi-stakeholder
                                    approvals moving fast.
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
                            Download Your Free Guide
                        </Link>
                    </div>

                    <div className="shrink-0">
                        <img src={MaleCorporateWoker} alt="" className="size-full object-cover" />
                    </div>
                </div>

                <p className="md:inline hidden text-xl md:leading-7.5 italic text-center">
                    Approvals don't have to be deal killers. These templates have helped teams cut approval time from
                    weeks to days, protecting deals when they're hottest.
                </p>
            </section>
        </main>
    );
};

export default ProposalGeneration;
