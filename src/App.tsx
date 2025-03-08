import { Routes,Route } from 'react-router';
import './styles/index.scss';
import './App.css'
import Home from './pages/Home';
import Aboutus from './pages/Aboutus';
import Services from "./pages/Services"
import Blog from './pages/Blog';

function App() {


  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Aboutus />} />
        <Route path="/service" element={<Services />} />
        <Route path="/blogs" element={<Blog />} />
      </Routes> 
    </>
  )
}

export default App
