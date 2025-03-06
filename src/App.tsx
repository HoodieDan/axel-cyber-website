import { Route, BrowserRouter as Router, Routes } from "react-router";
import "./App.css";
import AppLayout from "./components/layouts/AppLayout";
import Home from "./pages/Home";
import IndustriesWeService from "./pages/IndustriesWeService";
import "./styles/index.scss";

function App() {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<AppLayout />}>
                        <Route index element={<Home />} />
                        {/* <Route path="/about" element={<About />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/contact" element={<Contact />} /> */}
                        <Route path="/industries-we-service" element={<IndustriesWeService />} />
                    </Route>
                </Routes>
            </Router>
        </>
    );
}

export default App;
