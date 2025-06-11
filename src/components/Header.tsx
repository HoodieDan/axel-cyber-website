import { Menu, X } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "/axel-logo.webp";
import { useState } from "react"; 
import { useLocation } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate()
  const [menuOpen, setMenuOpen] = useState(false);
  const [subMenu,setSubMenuOpen] = useState(false);
  const location = useLocation();
  // console.log(location.pathname);


  const handleCloseMenu = () => {
    setMenuOpen(false);
    if(subMenu){
      setSubMenuOpen(false);
    }
  }

  return (
    <header>
      <nav>
        <p className='px-[5%] bg-[#566edc] text-center py-1 text-white text-sm md:text-base'>
            Introducing Lexxa AI Chatbot extension: Fast and Efficient Virtual AI  <Link className="underline hover:no-underline " to='/about'>Learn more</Link>
        </p>
        <div className='w-[90%] max-w-screen-xl mx-auto relative mt-4 flex justify-between items-center'>
            <Link to='/'>
              <img 
                src={Logo} 
                className='block w-[150px] h-[45px] md:w-[185px] md:h-[54px]'
                alt="axel cyber logo" 
                width={150}
                height={45}
                loading="eager"
                fetchPriority="high" 
              />        
            </Link>
            <ul className='list-none text-sm sm:flex hidden flex-row space-x-4 md:space-x-6 lg:space-x-8 xl:space-x-10 text-[#4c5c75]'>
                <li className={`text-sm text-[#4c5c75] hover:scale-105 transition-transform duration-300 ease-in-out ${location.pathname === '/services'? 'scale-105' : 'scale-100'} md:text-base`}><Link to="/services">Services</Link></li>
                <li className={`text-sm text-[#4c5c75] hover:scale-105 transition-transform duration-300 ease-in-out ${location.pathname === '/casestudy'? 'scale-105' : 'scale-100'} md:text-base`}><Link to="/casestudy">Case study</Link></li>
                <li className={`text-sm text-[#4c5c75] hover:scale-105 transition-transform duration-300 ease-in-out ${location.pathname === '/solutions'? 'scale-105' : 'scale-100'} md:text-base`}><Link to="/solutions">Solutions</Link></li>
                <li className='relative text-[#4c5c75] group text-sm md:text-base'>
                    <span className="group-hover:scale-105 transition-transform duration-300 ease-in-out">Company</span>
                    <ul className='hidden group-hover:flex shadow-md list-none z-80 absolute top-[110%] left-0 bg-white text-black py-6 flex-col space-y-3 rounded-lg text-lg'>
                        <li className={`pl-4 pr-24 whitespace-nowrap font-semibold hover:opacity-65 ${location.pathname === "/about" && 'opacity-65'}  transition-opactiy duration-300 ease-in-out`}><Link to="/about">About Us</Link></li>
                        <li className={`pl-4 pr-24 font-semibold hover:opacity-65 ${location.pathname === "/career" && 'opacity-65'} transition-opacity duration-300 ease-in-out`}><Link to="/career">Career</Link></li>
                        <li className={`pl-4 pr-24 font-semibold hover:opacity-65 ${location.pathname === "/blog" && 'opacity-65'}  transition-opacity duration-300 ease-in-out`}><Link to="/blog">Blogs</Link></li>
                    </ul>
                </li>
            </ul>
            <button 
              onClick={() => navigate('/contact')}
              className='outline-none w-[110px] md:w-[90px] sm:h-[25px] lg:h-[40px] 2xl:h-[64px] lg:w-[125px] 2xl:w-[250px] rounded-md text-white bg-[linear-gradient(45deg,#0146cc,#012d82)] hover:bg-[linear-gradient(45deg,#025aff,#0146cc)] text-sm  md:text-base sm:block hidden transition-all duration-500 ease-linear cursor-pointer'>
                Book a meeting
            </button>
            <div className='text-2xl sm:hidden block cursor-pointer' onClick={() => setMenuOpen(!menuOpen)}>
                <Menu className={`${menuOpen ? "hidden" : "block"}`}/>
                <X className={`${!menuOpen ? "hidden" : "block"}`}/>
            </div>
            {
              menuOpen 
              &&
            <div className="absolute top-[100%] left-0 w-full z-10">
                <div className="sm:hidden block bg-white shadow-md rounded-lg px-[5%]">
                    <ul className='list-none text-[#4c5c75]'>
                        <li className="py-2 text-base border-b border-b-[#0081f1]"><Link onClick={handleCloseMenu} to="/services">Services</Link></li>
                        <li className="py-2 text-base border-b border-b-[#0081f1]"><Link onClick={handleCloseMenu} to="/casestudy">Case study</Link></li>
                        <li className="py-2 text-base border-b border-b-[#0081f1]"><Link onClick={handleCloseMenu} to="/solutions">Solutions</Link></li>
                        <li onClick={() => setSubMenuOpen(!subMenu)} className='group text-base'>
                            <a href="#" className={`py-2 block ${subMenu && "border-b border-b-[#0081f1]" }`}>Company</a>
                            <ul className={`${subMenu ? "block" : "hidden"} group-active:flex group-hover:flex list-none bg-white text-black pt-2 flex-col rounded-lg text-lg`}>
                              <li className='pl-4 py-1 whitespace-nowrap border-b border-b-[#0081f1]'><Link onClick={handleCloseMenu} to="/about">About Us</Link></li>
                              <li className='pl-4 py-1 border-b border-b-[#0081f1]'><Link onClick={handleCloseMenu} to="/career">Career</Link></li>
                              <li className='pl-4 py-1'><Link onClick={handleCloseMenu} to="/blog">Blogs</Link></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
    }
        </div>

      </nav>
    </header>
  )
}
