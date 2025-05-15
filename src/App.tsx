import { Route, BrowserRouter as Router, Routes } from "react-router";
import "./App.css";
import AppLayout from "./components/layouts/AppLayout";
import Aboutus from "./pages/Aboutus";
import Home from "./pages/Home";
import IndustriesWeService from "./pages/IndustriesWeService";
import Project from "./pages/Project";
import Services from "./pages/Services";
import Works from "./pages/Works";
import "./styles/index.scss";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import BlogPage from "./pages/BlogPage";
import Solutions from "./pages/Solutions";
import CaseStudy from "./pages/CaseStudy";
import Jobs from "./pages/Jobs";

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
                        <Route path="/blog" element={<Blog />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="*" element={<Home />} />
                        <Route path="/blog/:id" element={<BlogPage />} />
                        <Route path="/solutions" element={<Solutions />} />
                        <Route path="/casestudy" element={<CaseStudy />} />
                        <Route path="/career" element={<Jobs />} />
                        <Route path="/works">
                            <Route index element={<Works />} />
                            <Route path=":project" element={<Project />} />
                        </Route>
                    </Route>
                </Routes>
            </Router>
        </>
    );
}

export default App;
