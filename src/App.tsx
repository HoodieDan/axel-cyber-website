import { lazy, Suspense } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router";
import "./App.css";
import AppLayout from "./components/layouts/AppLayout";
import Home from "./pages/Home";
import ProposalGeneration from "./pages/solutions/ProposalGeneration";
import "./styles/index.scss";
import Marketing from "./pages/solutions/Marketing";
import Onboarding from "./pages/solutions/Onboarding";

const Blog = lazy(() => import("./pages/Blog"));
const Aboutus = lazy(() => import("./pages/Aboutus"));
const IndustriesWeService = lazy(() => import("./pages/IndustriesWeService"));
const Services = lazy(() => import("./pages/Services"));
const Contact = lazy(() => import("./pages/Contact"));
const BlogPage = lazy(() => import("./pages/BlogPage"));
const CaseStudy = lazy(() => import("./pages/case-study"));
const Project = lazy(() => import("./pages/case-study/Project"));
const Jobs = lazy(() => import("./pages/Jobs"));

function App() {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<AppLayout />}>
                        <Route index element={<Home />} />
                        <Route
                            path="/about"
                            element={
                                <Suspense fallback={<div></div>}>
                                    <Aboutus />
                                </Suspense>
                            }
                        />
                        <Route
                            path="/services"
                            element={
                                <Suspense fallback={<div></div>}>
                                    <Services />
                                </Suspense>
                            }
                        />
                        <Route
                            path="/industries-we-service"
                            element={
                                <Suspense fallback={<div></div>}>
                                    <IndustriesWeService />
                                </Suspense>
                            }
                        />
                        <Route path="solutions">
                            <Route path="proposal-generation" element={<ProposalGeneration />} />
                            <Route path="marketing" element={<Marketing />} />
                            <Route path="onboarding" element={<Onboarding />} />
                        </Route>
                        <Route
                            path="/blog"
                            element={
                                <Suspense fallback={<div></div>}>
                                    <Blog />
                                </Suspense>
                            }
                        />
                        <Route
                            path="/contact"
                            element={
                                <Suspense fallback={<div></div>}>
                                    <Contact />
                                </Suspense>
                            }
                        />
                        <Route
                            path="/blog/:id"
                            element={
                                <Suspense fallback={<div></div>}>
                                    <BlogPage />
                                </Suspense>
                            }
                        />
                        <Route path="/case-study">
                            <Route
                                index
                                element={
                                    <Suspense fallback={<div></div>}>
                                        <CaseStudy />
                                    </Suspense>
                                }
                            />
                            <Route
                                path=":caseSlug"
                                element={
                                    <Suspense fallback={<div></div>}>
                                        <Project />
                                    </Suspense>
                                }
                            />
                        </Route>
                        <Route
                            path="/career"
                            element={
                                <Suspense fallback={<div></div>}>
                                    <Jobs />
                                </Suspense>
                            }
                        />
                        <Route
                            path="*"
                            element={
                                <Suspense fallback={<div></div>}>
                                    <Home />
                                </Suspense>
                            }
                        />
                    </Route>
                </Routes>
            </Router>
        </>
    );
}

export default App;
