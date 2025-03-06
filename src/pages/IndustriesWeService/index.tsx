import IWSAboutUs from "./IWSAboutUs";
import IWSCustomersSay from "./IWSCustomersSay";
import IWSHero from "./IWSHero";
import IWSPrivateDeployments from "./IWSPrivateDeployments";
import IWSRequestDemo from "./IWSRequestDemo";
import IWSWhatWeDo from "./IWSWhatWeDo";

const IndustriesWeService = () => {
    return (
        <section>
            <IWSHero />
            <IWSAboutUs />
            <IWSWhatWeDo />
            <IWSPrivateDeployments />
            <IWSCustomersSay />
            <IWSRequestDemo />
        </section>
    );
};

export default IndustriesWeService;
