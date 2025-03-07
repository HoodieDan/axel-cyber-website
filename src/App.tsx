import { Route, BrowserRouter as Router, Routes } from "react-router";
import "./App.css";
import AppLayout from "./components/layouts/AppLayout";
import Aboutus from "./pages/Aboutus";
import Home from "./pages/Home";
import IndustriesWeService from "./pages/IndustriesWeService";
import Services from "./pages/Services";
import "./styles/index.scss";

function App() {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<AppLayout />}>
                        <Route index element={<Home />} />
                        <Route path="/about" element={<Aboutus />} />
                        <Route path="/service" element={<Services />} />
                        <Route path="/industries-we-service" element={<IndustriesWeService />} />
                    </Route>
                </Routes>
            </Router>
        </>
    );
}

export default App;
