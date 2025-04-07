import PrivateDeploymentMobile from "@/assets/private-deployment-mobile.png";
import PrivateDeployment from "@/assets/private-deployment.png";

const IWSPrivateDeployments = () => {
    return (
        <section className="padding-x md:py-[8%] py-[10vh] bg-gray-1 grid md:grid-cols-2 md:gap-y-[8%] gap-y-4">
            <div className="md:col-span-2">
                <img
                    src={PrivateDeployment}
                    alt="Private deployment"
                    className="md:block hidden object-fill size-full"
                />
                <img
                    src={PrivateDeploymentMobile}
                    alt="Private deployment"
                    className="md:hidden block object-fill size-full"
                />
            </div>
            <div>
                <h4 className="font-medium">
                    Private Deployments for Ultimate
                    <br /> Security and Data Sovereignty
                </h4>
            </div>
            <div>
                <p className="text-dark-blue">
                    Deploy Cohere privately for maximum control, security, and compliance. Virtual Private Cloud (VPC)
                    by ensuring strict governance and compliance, also on- premises to keep all data within your
                    systems, with no external exposure.
                </p>
            </div>
        </section>
    );
};

export default IWSPrivateDeployments;
