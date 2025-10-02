import AuroraAiImg from "@/assets/aurora-ai.png";
import AuroraShowcase1 from "@/assets/aurora-showcase-1.jpg";
import AuroraShowcase2 from "@/assets/aurora-showcase-2.png";
import AuroraShowcase3 from "@/assets/aurora-showcase-3.png";
import AuroraTimeline from "@/assets/aurora-timeline.png";
import ClaimixShowcase1 from "@/assets/claimix-showcase-1.jpg";
import ClaimixShowcase2 from "@/assets/claimix-showcase-2.jpg";
import ClaimixShowcase3 from "@/assets/claimix-showcase-3.jpg";
import ClaimixTimeline from "@/assets/claimix-timeline.png";
import claimixImg from "@/assets/claimix.png";
import EngageXShowcase1 from "@/assets/engage-x-showcase-1.jpg";
import EngageXShowcase2 from "@/assets/engage-x-showcase-2.png";
import EngageXShowcase3 from "@/assets/engage-x-showcase-3.png";
import EngageXTimeline from "@/assets/engage-x-timeline.png";
import EngageXImg from "@/assets/engage-x.png";
import PromptPlumberShowcase1 from "@/assets/prompt-plumber-showcase-1.jpg";
import PromptPlumberShowcase2 from "@/assets/prompt-plumber-showcase-2.png";
import PromptPlumberShowcase3 from "@/assets/prompt-plumber-showcase-3.png";
import PromptPlumberTimeline from "@/assets/prompt-plumber-timeline.png";
import PromptPlumberImg from "@/assets/prompt-plumber.png";
import QuebitChatbotShowcase1 from "@/assets/quebit-chatbot-showcase-1.png";
import QuebitChatbotShowcase2 from "@/assets/quebit-chatbot-showcase-2.png";
import QuebitChatbotImg from "@/assets/quebit-chatbot.png";
import QuebitTimeline from "@/assets/quebit-timeline.png";
import RafarWaterImg from "@/assets/rafa-water.png";
import RafarWaterShowcase1 from "@/assets/rafar-water-showcase-1.png";
import RafarWaterShowcase2 from "@/assets/rafar-water-showcase-2.png";
import RafarWaterTimeline from "@/assets/rafar-water-timeline.png";
import ScaleonShowcase1 from "@/assets/scaleon-showcase-1.jpg";
import ScaleonShowcase2 from "@/assets/scaleon-showcase-2.png";
import ScaleonShowcase3 from "@/assets/scaleon-showcase-3.png";
import ScaleonTimeline from "@/assets/scaleon-timeline.png";
import ScaleonImg from "@/assets/scaleon.png";
import StudentAssistantChatbotImg from "@/assets/student-assistant-chatbot.png";
import UniChatbotShowcase1 from "@/assets/uni-chatbot-showcase-1.jpg";
import UniChatbotTimeline from "@/assets/uni-chatbot-timeline.png";
import BoxCheck from "@/components/icons/BoxCheck";
import FlowConnection from "@/components/icons/FlowConnection";
import GearDot from "@/components/icons/GearDot";
import OutlineReportProblem from "@/components/icons/OutlineReportProblem";
import { IProject } from "@/types";

export const companyNav = [
    { label: "About Us", to: "/about" },
    { label: "Career", to: "/career" },
    { label: "Blogs", to: "/blog" },
    { label: "Resources", to: "/resources" },
];

export const solutionsNav = [
    { label: "Outbound Automations", to: "/solutions/outbound" },
    { label: "Inbound Automations", to: "/solutions/inbound" },
    { label: "Marketing Automations", to: "/solutions/marketing" },
    { label: "Proposal Generation Automations", to: "/solutions/proposal-generation" },
    { label: "Onboarding & CSM Automations", to: "/solutions/onboarding" },
];

export const ourProjects: IProject[] = [
    {
        image: claimixImg,
        name: "CLAIMIX",
        slug: "claimix",
        tags: ["AI Automation", "AI Software"],
        description:
            "For an insurance provider, we built Claimix — an AI-driven claims automation platform that ingests emails, PDFs, and documents and produces structured claims data, validations, and audit-ready verdicts",
        showcase: [ClaimixShowcase1, ClaimixShowcase2, ClaimixShowcase3],
        process: [
            {
                name: "Problem",
                description:
                    "Claims officers were stuck manually reviewing emails, PDFs, and siloed databases in a slow, error-prone process with no AI support—leading to delayed resolutions, higher compliance risks, increased costs, frustrated customers, and missed fraud signals.",
                Icon: OutlineReportProblem,
            },
            {
                name: "Solution",
                description:
                    "An AI-powered claims automation platform that ingests emails and PDFs, extracts structured data with OCR + LLM, validates against policy databases, and surfaces compliant, explainable results through a real-time dashboard and API.",
                Icon: GearDot,
            },
            {
                name: "Delivery",
                description:
                    "Claimix Web App with real-time dashboard (WebSockets). REST API for claims, policies, users, and reporting. Role-based access control (RBAC): Admin, Claims Officer, Manager. Observability: tracing, latency tracking, and cost monitoring.",
                Icon: FlowConnection,
            },
            {
                name: "Quality",
                description:
                    "Guardrails to prevent hallucinations or invalid outputs. Retrieval filters tied directly to internal policy databases. Human-in-the-loop review before final claim resolution. Drift monitoring on OCR and policy classification models.",
                Icon: BoxCheck,
            },
        ],
        outcomes:
            "Claimix cut review time by 60% (2 days → under 12 hours), improved extraction accuracy by 20 F1 points, and reduced time-to-insight from 48 hours to under 1 hour, delivering a 3x efficiency gain in claims processing.",
        timeline: ClaimixTimeline,
        layout: "desktop",
    },
    {
        image: EngageXImg,
        name: "ENGAGE X",
        slug: "engage-x",
        tags: ["AI Software"],
        description:
            "For a Fortune 500 client, we built a communication intelligence platform that ingests speech/video logs, transcripts, and notes and produces scored feedback summaries, progress tracking, and recommendations",
        showcase: [EngageXShowcase1, EngageXShowcase2, EngageXShowcase3],
        process: [
            {
                name: "Problem",
                description:
                    "Manual training reviews are slow, inconsistent, and error-prone. Enterprise L&D teams spend hours assessing communication quality across scattered video recordings, notes, and feedback forms, creating bottlenecks and subjective evaluations.",
                Icon: OutlineReportProblem,
            },
            {
                name: "Solution",
                description:
                    "EngageX uses an AI-powered architecture that ingests audio/video, normalizes transcripts and emotion signals, and embeds them into a feedback datastore. An LLM orchestrates scoring and summarization, with results delivered through a web UI and REST API.",
                Icon: GearDot,
            },
            {
                name: "Delivery",
                description:
                    "EngageX Web App with real-time feedback dashboard. REST API for enterprise system integration. Role-based access control (RBAC): Admin, Coach, User. Observability: latency tracking, cost monitoring, and traceable scoring decisions.",
                Icon: FlowConnection,
            },
            {
                name: "Quality",
                description:
                    "Guardrails to prevent inappropriate or biased feedback. Retrieval filters aligned to enterprise-specific training goals. Human-in-the-loop approvals for final executive reports. Drift monitoring to recalibrate vocal and emotional detection models.",
                Icon: BoxCheck,
            },
        ],
        outcomes:
            "EngageX cut review time by 65% (from three hours to under one), improved vocal and emotional scoring accuracy by 18 F1 points, and reduced time-to-insight from 48 hours to less than 4 — delivering a 4× boost in enterprise L&D efficiency",
        timeline: EngageXTimeline,
        layout: "desktop",
    },
    {
        image: ScaleonImg,
        name: "SCALEON",
        slug: "scaleon",
        tags: ["AI Automation", "AI Software"],
        description:
            "For a leading B2B agency, we built Scaleon, an AI-driven lead enrichment and personalization platform that ingests CRM/CSV leads and produces verified contact data, segmented lists, and AI-personalized outreach sequences",
        showcase: [ScaleonShowcase1, ScaleonShowcase2, ScaleonShowcase3],
        process: [
            {
                name: "Problem",
                description:
                    "Sales and agency teams rely on outdated lead gen tools that scrape raw contacts instead of making existing lead data actionable. This creates slow, manual personalization, inconsistent messaging, and fragmented data across CRM, LinkedIn, and email logs",
                Icon: OutlineReportProblem,
            },
            {
                name: "Solution",
                description:
                    "Scaleon automates enrichment and personalization with a pipeline that ingests CRM/CSV leads, cleans and normalizes data, enriches with APIs, indexes into a personalization engine, and orchestrates AI for copy and segmentation.",
                Icon: GearDot,
            },
            {
                name: "Delivery",
                description:
                    "Scaleon Web App with multi-client dashboards. REST API for seamless CRM and sales tool integration. RBAC: Admin, Client Manager, Sales Rep roles. Observability: enrichment accuracy dashboards, campaign analytics, latency, and cost tracking.",
                Icon: FlowConnection,
            },
            {
                name: "Quality",
                description:
                    "Retrieval over verified lead data and live buying signals. Human-in-the-loop for agency/admin campaign approvals. Drift monitoring on enrichment and personalization outputs.",
                Icon: BoxCheck,
            },
        ],
        outcomes:
            "Scaleon reduced lead research time by 70% (10 min → <2 min), cut sequence creation by 80% (1 hr → 10 min with AI drafts), and improved reply rates by 25% compared to static templates. Agencies achieved a 5× ROI, scaling multi-client campaigns with verified, transparent, and explainable enrichment.",
        timeline: ScaleonTimeline,
        layout: "desktop",
    },
    {
        image: PromptPlumberImg,
        name: "PROMPT PLUMBER",
        slug: "prompt-plumber",
        tags: ["AI Software"],
        description:
            "For Prompt Plumber, we built a prompt engineering SaaS platform that ingests natural-language task descriptions and produces optimized AI prompts with refinement and analytics tools",
        showcase: [PromptPlumberShowcase1, PromptPlumberShowcase2, PromptPlumberShowcase3],
        process: [
            {
                name: "Problem",
                description:
                    "Non-technical teams waste time on trial-and-error prompt writing across siloed resources, producing inconsistent quality and slow adoption of AI. Enterprises need ≥90% prompt relevance/clarity with explainability to scale usage confidently.",
                Icon: OutlineReportProblem,
            },
            {
                name: "Solution",
                description:
                    "Prompt Plumber streamlines prompt engineering by ingesting task descriptions, mapping them to proven methodologies, and using fine-tuned LLM orchestration with retrieval over templates and past refinements to generate clear, optimized, and explainable prompts in real time.",
                Icon: GearDot,
            },
            {
                name: "Delivery",
                description:
                    "Prompt Plumber Web App with credit-based SaaS platform. REST API for enterprise workflow integration. Role-based access control (RBAC): Admins, General Users, Community Contributors. Observability: latency tracking, credit usage monitoring, cost management",
                Icon: FlowConnection,
            },
            {
                name: "Quality",
                description:
                    "Guardrails to block unsafe, biased, or low-quality prompts. Community moderation for shared prompt libraries. Human-in-the-loop approvals for enterprise use cases. Drift monitoring to track and recalibrate prompt effectiveness over time.",
                Icon: BoxCheck,
            },
        ],
        outcomes:
            "Prompt Plumber cut prompt creation time by 70% (30 minutes → under 10), improved effectiveness by 20 F1 points, and turned days of trial-and-error into real-time feedback, delivering a 5× productivity boost for product and content teams.",
        timeline: PromptPlumberTimeline,
        layout: "desktop",
    },
    {
        image: AuroraAiImg,
        name: "AURORA AI",
        slug: "aurora-ai",
        tags: ["AI Software"],
        description:
            "For a startup client, we built Aurora, an AI-driven market research platform that ingests Census, Statista, and Crunchbase data plus user-uploaded datasets and produces segmentation clusters, TAM forecasts, and persona infographics",
        showcase: [AuroraShowcase1, AuroraShowcase2, AuroraShowcase3],
        process: [
            {
                name: "Problem",
                description:
                    "Market research is traditionally manual, expensive, and reliant on specialists. Non-researchers face siloed tools, biased survey data, and slow segmentation cycles, which delay go-to-market strategies, misalign product design, and waste marketing spend.",
                Icon: OutlineReportProblem,
            },
            {
                name: "Solution",
                description:
                    "Aurora automates research with a data pipeline that ingests 1st- and 3rd-party datasets (Census, Statista, Nielsen, Google Trends, Crunchbase, CSV uploads), cleans and normalizes them, and embeds/indexes into a research datastore.",
                Icon: GearDot,
            },
            {
                name: "Delivery",
                description:
                    "Aurora Web App with interactive dashboards and persona infographics. RBAC: User roles (entrepreneurs, strategists) and Admin roles (super-users, data managers). Observability: usage stats, latency tracking, and per-segment cost monitoring",
                Icon: FlowConnection,
            },
            {
                name: "Quality",
                description:
                    "Retrieval filters with traceable attribution for every data source. Human-in-the-loop refinement of personas and clusters. Drift monitoring for evolving datasets and demographic changes.",
                Icon: BoxCheck,
            },
        ],
        outcomes:
            "Aurora reduced segmentation creation time by 70%), boosted accuracy by +20 points in persona fidelity vs manual baselines, and cut time-to-insight from 2–3 weeks to <2 hours. Entrepreneurs and strategists achieved 5× faster go-to-market execution with significantly lower research costs.",
        timeline: AuroraTimeline,
        layout: "desktop",
    },
    {
        image: StudentAssistantChatbotImg,
        name: "STUDENT ASSISTANT CHATBOT",
        slug: "student-assistant-chatbot",
        tags: ["AI Chatbot"],
        description:
            "We deployed a web chatbot for a university that answers academic, financial, and facilities-related student questions. It covers thousands of queries instantly, deflects tickets away from staff, and provides verified, explainable answers",
        showcase: [UniChatbotShowcase1],
        process: [
            {
                name: "Problem",
                description:
                    "Students were waiting over 24 hours for responses to routine academic, financial, and housing inquiries. Administrative staff were overwhelmed by repetitive questions, leaving less time to address urgent student concerns.",
                Icon: OutlineReportProblem,
            },
            {
                name: "Solution",
                description:
                    "A web-based AI chatbot integrated with university databases and knowledge bases that delivers instant, verified answers to academic, financial, housing, and facilities questions, reducing admin workload and improving student experience.Web-based chatbot interface available to all students. Integrations with university databases and knowledge bases. Role-based oversight: admin access for knowledge updates and governance. Observability: transcript logging, content verification, and fallback reporting.",
                Icon: GearDot,
            },
            {
                name: "Delivery",
                description:
                    "Web-based chatbot interface available to all students. Integrations with university databases and knowledge bases. Role-based oversight: admin access for knowledge updates and governance. Observability: transcript logging, content verification, and fallback reportin ",
                Icon: FlowConnection,
            },
            {
                name: "Quality",
                description:
                    "Guardrails to prevent misinformation. Verified content pipeline to ensure accuracy. Audit logs for governance and transparency. Fallback workflows to handle edge-case queries.",
                Icon: BoxCheck,
            },
        ],
        outcomes:
            "Response times dropped from 24+ hours to instant replies. The chatbot now handles thousands of student inquiries 24/7, freeing up administrative staff to focus on high-priority cases and saving hundreds of staff hours.",
        timeline: UniChatbotTimeline,
        layout: "tablet",
    },
    {
        image: QuebitChatbotImg,
        name: "QUEBIT CHATBOT",
        slug: "quebit-chatbot",
        tags: ["AI Chatbot"],
        description:
            "We deployed a website chatbot for Quebits that explains services interactively, qualifies leads, and routes visitors into calendar bookings. It improved conversion from site visits to booked calls while reducing manual sales follow-up.",
        showcase: [QuebitChatbotShowcase1, QuebitChatbotShowcase2],
        process: [
            {
                name: "Problem",
                description:
                    "Website visitors often bounced without engaging, requiring manual follow-up from the sales team. This led to lost sales opportunities and low website conversion.",
                Icon: OutlineReportProblem,
            },
            {
                name: "Solution",
                description:
                    "A lead-qualification chatbot embedded on Quebits’ website that answers FAQs, explains services, and routes visitors directly into calendar bookings through structured intent routing and seamless integrations.",
                Icon: GearDot,
            },
            {
                name: "Delivery",
                description:
                    "Website chatbot widget available 24/7 for all site visitors. Integration with Quebits’ booking system and company knowledge base. Analytics for tracking visitor engagement and conversion performance. Governance features: intent tagging, fallback handling, and brand-consistent response management.",
                Icon: FlowConnection,
            },
            {
                name: "Quality",
                description:
                    "Guardrails to maintain brand tone and prevent off-topic responses. Verified FAQ responses to ensure accuracy. Intent tagging for transparent reporting and continuous optimization. Fallback workflows to avoid dead-ends in conversations.",
                Icon: BoxCheck,
            },
        ],
        outcomes:
            "Response times dropped from 24+ hours to instant replies. The chatbot now handles thousands of student inquiries 24/7, freeing up administrative staff to focus on high-priority cases and saving hundreds of staff hours.",
        timeline: QuebitTimeline,
        layout: "mobile",
    },
    {
        image: RafarWaterImg,
        name: "RAFAR WATER",
        slug: "rafar-water",
        tags: ["AI Automation", "AI Chatbot"],
        description:
            "We deployed a WhatsApp chatbot for Rafa Water that automates customer orders, displays products, and syncs with backend fulfillment. It now serves hundreds of recurring customers, saving sales staff tens of hours weekly and enabling the company to scale without new hires.",
        showcase: [RafarWaterShowcase1, RafarWaterShowcase2],
        process: [
            {
                name: "Problem",
                description:
                    "Manual order-taking overloaded sales staff and made fulfillment slow and error-prone. This led to high labor costs, limited growth capacity, and a poor customer experience. The solution needed to handle high transaction volumes reliably while maintaining trust and streamlining fulfillment.",
                Icon: OutlineReportProblem,
            },
            {
                name: "Solution",
                description:
                    "A WhatsApp chatbot that automates product browsing, order capture, confirmation, and backend fulfillment with payment integration, reducing manual workload while ensuring fast and reliable customer service.",
                Icon: GearDot,
            },
            {
                name: "Delivery",
                description:
                    "24/7 WhatsApp chatbot for recurring customers. Seamless integrations with backend order processing and payments. In-chat product catalog for quick selection and ordering. Admin oversight through logs and human fallback workflow ",
                Icon: FlowConnection,
            },
            {
                name: "Quality",
                description:
                    "Guardrails to ensure accurate order capture and secure payment handling. Logged transactions for transparency and auditability. Human fallback for exceptions in payment or fulfillment. Reliable workflows designed to maintain customer trust at scale.",
                Icon: BoxCheck,
            },
        ],
        outcomes:
            "The chatbot saved 40+ staff hours weekly, improved order turnaround time, and enabled scaling without hiring extra staff. The project delivered an estimated value of $10,000.",
        timeline: RafarWaterTimeline,
        layout: "mobile",
    },
];
