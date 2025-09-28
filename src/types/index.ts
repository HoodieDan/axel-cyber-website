export interface IProcess {
    name: string;
    description: string;
    Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

export interface IProject {
    image: string;
    name: string;
    slug: string;
    tags: string[];
    description: string;
    showcase: string[];
    process: IProcess[];
    outcomes: string;
    timeline: string;
    layout: "desktop" | "tablet" | "mobile";
}

export type ISteps = {
    image: string;
    heading: string;
    description: string;
};
