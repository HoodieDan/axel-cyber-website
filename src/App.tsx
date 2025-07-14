import { lazy, Suspense } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router";
import  Home from "./pages/Home";
import "./App.css";
import AppLayout from "./components/layouts/AppLayout";
import "./styles/index.scss";


const  Blog = lazy(() => import("./pages/Blog"));
const  Aboutus  = lazy(() => import("./pages/Aboutus"));
const IndustriesWeService = lazy(()=> import("./pages/IndustriesWeService"));
const Services = lazy(()=>import("./pages/Services"));
const  Contact = lazy(()=>import("./pages/Contact"));
const BlogPage = lazy(()=> import("./pages/BlogPage"))
const Solutions = lazy(()=>import("./pages/Solutions"))
const CaseStudy = lazy(()=>import("./pages/CaseStudy"))
const Jobs = lazy(()=>import("./pages/Jobs"));


function App() {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<AppLayout />}>
                        <Route index 
                            element={<Home />} 
                        />
                        <Route 
                            path="/about" 
                            element={
                            <Suspense fallback={<div></div>}>
                                <Aboutus />
                            </Suspense>
                            } 
                        />
                        <Route path="/services" 
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
                            path="*" 
                            element={
                                <Suspense fallback={<div></div>}>
                                    <Home />
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
                        <Route 
                            path="/ai-works" 
                            element={
                            <Suspense fallback={<div></div>}>
                                <Solutions />
                            </Suspense>
                            } 
                        />
                        <Route 
                            path="/case-study" 
                            element={
                                <Suspense fallback={<div></div>}>
                                    <CaseStudy />
                                </Suspense>
                            } 
                        />
                        <Route 
                            path="/career" 
                            element={
                                <Suspense fallback={<div></div>}>
                                    <Jobs />
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
