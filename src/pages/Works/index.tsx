import BookACall from "@/components/BookACall";
import WCapabilities from "./WCapabilities";
import WHero from "./WHero";
import WProjects from "./WProjects";

const Works = () => {
    return (
        <>
            <WHero />
            <WCapabilities />
            <WProjects />
            <BookACall text="Ready to put AI to work?" />
        </>
    );
};

export default Works;
