import { Route, BrowserRouter as Router, Routes } from "react-router";
import "./App.css";
import AppLayout from "./components/layouts/AppLayout";
import Aboutus from "./pages/Aboutus";
import Home from "./pages/Home";
import IndustriesWeService from "./pages/IndustriesWeService";
import Services from "./pages/Services";
import "./styles/index.scss";
// import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
// import BlogPage from "./pages/BlogPage";
import Solutions from "./pages/Solutions";
import CaseStudy from "./pages/CaseStudy";

function App() {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<AppLayout />}>
                        <Route index element={<Home />} />
                        <Route path="/about" element={<Aboutus />} />
                        <Route path="/services" element={<Services />} />
                        <Route path="/industries-we-service" element={<IndustriesWeService />} />
                        {/* <Route path="/blog" element={<Blog />} /> */}
                        <Route path="/contact" element={<Contact />} />
                        <Route path="*" element={<Home />} />
                        {/* <Route path="/blogpage" element={<BlogPage />} /> */}
                        <Route path="/solutions" element={<Solutions />} />
                        <Route path="/casestudy" element={<CaseStudy />} />
                    </Route>
                </Routes>
            </Router>
        </>
    );
}

export default App;
