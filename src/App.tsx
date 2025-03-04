import { Routes,Route } from 'react-router';
import './styles/index.scss';
import './App.css'
import Home from './pages/Home';

function App() {


  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} /> */}
      </Routes> 
    </>
  )
}

export default App
