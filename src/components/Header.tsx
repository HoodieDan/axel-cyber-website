"use client"
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import Logo from "../assets/axel-logo.svg";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { useLocation } from "react-router-dom";

export default function Header() {
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
      <div>
        <p className='px-[5%] bg-[#566edc] text-center py-1 text-white text-sm md:text-base'>
            Introducing Lexxa AI Chatbot extension: Fast and Efficient Virtual AI  <Link className="underline hover:no-underline transition-all duration-500 ease-linear" to='/about'>Learn more</Link>
        </p>
        <div className='relative px-[5%] mt-4 flex justify-between items-center'>
            <Link to='/'>
              <img src={Logo} className='block w-[150px] h-[45px] md:w-[185px] md:h-[54px]' alt="" />        
            </Link>
            <ul className='list-none text-sm sm:flex hidden flex-row space-x-6 lg:space-x-8 xl:space-x-10 text-[#4c5c75]'>
                <li className={`text-sm text-[#4c5c75] hover:font-semibold transition duration-500 ease-linear ${location.pathname === '/services'? 'font-semibold' : 'font-normal'} md:text-base`}><Link to="/services">Services</Link></li>
                <li className={`text-sm text-[#4c5c75] hover:font-semibold transition duration-500 ease-linear ${location.pathname === '/casestudy'? 'font-semibold' : 'font-normal'} md:text-base`}><Link to="/casestudy">Case study</Link></li>
                <li className={`text-sm text-[#4c5c75] hover:font-semibold transition duration-500 ease-linear ${location.pathname === '/solutions'? 'font-semibold' : 'font-normal'} md:text-base`}><Link to="/solutions">Solutions</Link></li>
                <li className='relative text-[#4c5c75] group text-sm md:text-base'>
                    <a className="hover:font-semibold transition duration-500 ease-linear" href="#">Company</a>
                    <ul className='hidden group-hover:flex shadow-md list-none z-80 absolute top-[110%] left-0 bg-white text-black py-6 flex-col space-y-3 rounded-lg text-lg'>
                        <li className='pl-4 pr-24 whitespace-nowrap font-semibold hover:text-base hover:font-normal transition-all duration-300 ease-linear'><Link to="/about">About Us</Link></li>
                        <li className='pl-4 pr-24 font-semibold hover:text-base hover:font-normal transition-all duration-300 ease-linear'><a href="#">Career</a></li>
                        <li className='pl-4 pr-24 font-semibold hover:text-base hover:font-normal transition-all duration-300 ease-linear'><Link to="#">Blogs</Link></li>
                    </ul>
                </li>
            </ul>
            <button className='md:w-[90px] md:h-[25px] lg:h-[40px] 2xl:h-[64px] lg:w-[125px] 2xl:w-[250px] rounded-md text-white bg-[linear-gradient(45deg,#0146cc,#012d82)] hover:bg-none active:bg-none hover:bg-white active:bg-white hover:border-2 active:border-2 hover:border-[#0146cc] active:border-[#0146cc] hover:text-[#0146cc] active-text-[#0146cc] text-sm md:text-base sm:block hidden transition-all duration-500 ease-linear cursor-pointer'>
                Book a meeting
            </button>
            <div className='text-2xl sm:hidden block cursor-pointer' onClick={() => setMenuOpen(!menuOpen)}>
                <FaBars className={`${menuOpen ? "hidden" : "block"}`}/>
                <IoMdClose className={`${!menuOpen ? "hidden" : "block"}`}/>
            </div>
            {
              menuOpen 
              &&
            <div className="absolute top-[100%] left-0 w-full z-10">
                <div className="sm:hidden block bg-white shadow-md rounded-lg px-[5%]">
                    <ul className='list-none text-[#4c5c75]'>
                        <li className="py-1 text-base border-b border-b-[#0081f1]"><Link onClick={handleCloseMenu} to="/services">Services</Link></li>
                        <li className="py-1 text-base border-b border-b-[#0081f1]"><Link onClick={handleCloseMenu} to="/casestudy">Case study</Link></li>
                        <li className="py-1 text-base border-b border-b-[#0081f1]"><Link onClick={handleCloseMenu} to="/solutions">Solutions</Link></li>
                        <li onClick={() => setSubMenuOpen(!subMenu)} className='py-1 group text-base border-b border-b-[#0081f1]'>
                            <a href="#">Company</a>
                            <ul className={`${subMenu ? "block" : "hidden"} group-active:flex group-hover:flex list-none bg-white text-black pt-2 flex-col rounded-lg text-lg`}>
                              <li className='pl-4 py-1 whitespace-nowrap border-b border-b-[#0081f1]'><Link onClick={handleCloseMenu} to="/about">About Us</Link></li>
                              <li className='pl-4 py-1 border-b border-b-[#0081f1]'><a onClick={handleCloseMenu} href="#">Career</a></li>
                              <li className='pl-4 py-1 border-b border-b-[#0081f1]'><Link onClick={handleCloseMenu} to="#">Blogs</Link></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
    }
        </div>

      </div>
    </header>
  )
}
