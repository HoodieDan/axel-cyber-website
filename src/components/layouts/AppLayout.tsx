import { Outlet } from "react-router";
import Footer from "../Footer";
import Header from "../Header";

const AppLayout = () => {
    return (
        <section className="flex flex-col font-">
            <Header />
            <div className="min-h-screen">
                <Outlet />
            </div>
            <Footer />
        </section>
    );
};

export default AppLayout;
