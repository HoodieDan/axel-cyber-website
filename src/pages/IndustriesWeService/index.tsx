import BookACall from "@/components/BookACall";
import IWSAboutUs from "./IWSAboutUs";
import IWSCustomersSay from "./IWSCustomersSay";
import IWSHero from "./IWSHero";
import IWSPrivateDeployments from "./IWSPrivateDeployments";
import IWSWhatWeDo from "./IWSWhatWeDo";

const IndustriesWeService = () => {
    return (
        <>
            <IWSHero />
            <IWSAboutUs />
            <IWSWhatWeDo />
            <IWSPrivateDeployments />
            <IWSCustomersSay />
            <BookACall text="Ready to put AI to work?" />
        </>
    );
};

export default IndustriesWeService;
