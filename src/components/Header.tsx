import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { buttonVariants } from "./ui/button";

const itemVariants = {
    hidden: { opacity: 0, y: -50 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Header() {
    const navigate = useNavigate();
    const [menuOpen, setMenuOpen] = useState(false);
    const [subMenu, setSubMenuOpen] = useState(false);
    const location = useLocation();
    // console.log(location.pathname);

    const handleCloseMenu = () => {
        setMenuOpen(false);
        if (subMenu) {
            setSubMenuOpen(false);
        }
    };

    return (
        <header>
            <nav>
                <div className="px-[5%] mx-auto relative my-2 flex justify-between items-center">
                    <motion.a
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        href="/"
                    >
                        <img
                            src="/axel-logo.svg"
                            className="block w-[150px] h-[45px] md:w-[185px] md:h-[54px]"
                            alt="axel cyber logo"
                            width={150}
                            height={45}
                            loading="eager"
                            fetchPriority="high"
                        />
                    </motion.a>
                    <motion.ul
                        initial="hidden"
                        animate="show"
                        variants={{
                            hidden: {},
                            show: {
                                transition: {
                                    staggerChildren: 0.2,
                                    delayChildren: 0.2,
                                },
                            },
                        }}
                        className="list-none text-sm sm:flex hidden flex-row space-x-4 md:space-x-6 lg:space-x-8 xl:space-x-10 text-[#4c5c75]"
                    >
                        <motion.li
                            variants={itemVariants}
                            className={`text-sm text-[#4c5c75] hover:scale-105 transition-transform duration-300 ease-in-out ${
                                location.pathname === "/services" ? "scale-105" : "scale-100"
                            } md:text-base`}
                        >
                            <Link to="/services">Services</Link>
                        </motion.li>
                        <motion.li
                            variants={itemVariants}
                            className={`text-sm text-[#4c5c75] hover:scale-105 transition-transform duration-300 ease-in-out ${
                                location.pathname === "/ai-works" ? "scale-105" : "scale-100"
                            } md:text-base`}
                        >
                            <Link to="/case-study">Case study</Link>
                        </motion.li>
                        <motion.li
                            variants={itemVariants}
                            className={`text-sm text-[#4c5c75] hover:scale-105 transition-transform duration-300 ease-in-out ${
                                location.pathname === "/solutions" ? "scale-105" : "scale-100"
                            } md:text-base`}
                        >
                            <Link to="/solutions">Solutions</Link>
                        </motion.li>
                        <motion.li
                            variants={itemVariants}
                            className="relative text-[#4c5c75] group text-sm md:text-base"
                        >
                            <span className="group-hover:scale-105 transition-transform duration-300 ease-in-out">
                                Company
                            </span>
                            <ul className="hidden group-hover:flex shadow-md list-none z-80 absolute top-[110%] left-0 bg-white text-black py-6 flex-col space-y-3 rounded-lg text-lg">
                                <li
                                    className={`pl-4 pr-24 whitespace-nowrap font-semibold hover:opacity-65 ${
                                        location.pathname === "/about" && "opacity-65"
                                    }  transition-opactiy duration-300 ease-in-out`}
                                >
                                    <Link to="/about">About Us</Link>
                                </li>
                                <li
                                    className={`pl-4 pr-24 font-semibold hover:opacity-65 ${
                                        location.pathname === "/career" && "opacity-65"
                                    } transition-opacity duration-300 ease-in-out`}
                                >
                                    <Link to="/career">Career</Link>
                                </li>
                                <li
                                    className={`pl-4 pr-24 font-semibold hover:opacity-65 ${
                                        location.pathname === "/blog" && "opacity-65"
                                    }  transition-opacity duration-300 ease-in-out`}
                                >
                                    <Link to="/blog">Blogs</Link>
                                </li>
                            </ul>
                        </motion.li>
                    </motion.ul>

                    <NavLink
                        to="/contact"
                        className={cn(
                            buttonVariants({ variant: "default" }),
                            "bg-[linear-gradient(45deg,#0146cc,#012d82)] hover:bg-[linear-gradient(45deg,#025aff,#0146cc)] sm:block hidden transition-all duration-500 ease-linear",
                        )}
                    >
                        <span>Book a meeting</span>
                    </NavLink>

                    <motion.div
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
                        className="text-2xl sm:hidden block cursor-pointer"
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        <Menu className={`${menuOpen ? "hidden" : "block"}`} />
                        <X className={`${!menuOpen ? "hidden" : "block"}`} />
                    </motion.div>
                    {menuOpen && (
                        <div className="shadow-xl absolute top-[100%] left-0 w-full z-10">
                            <div className="sm:hidden block bg-white shadow-md rounded-lg px-[5%]">
                                <ul className="list-none text-[#4c5c75]">
                                    <li className="py-2 text-base border-b border-b-[#0081f1]">
                                        <Link onClick={handleCloseMenu} to="/services">
                                            Services
                                        </Link>
                                    </li>
                                    <li className="py-2 text-base border-b border-b-[#0081f1]">
                                        <Link onClick={handleCloseMenu} to="/ai-works">
                                            Case study
                                        </Link>
                                    </li>
                                    <li className="py-2 text-base border-b border-b-[#0081f1]">
                                        <Link onClick={handleCloseMenu} to="/solutions">
                                            Solutions
                                        </Link>
                                    </li>
                                    <li onClick={() => setSubMenuOpen(!subMenu)} className="group text-base">
                                        <a href="#" className={`py-2 block border-b border-b-[#0081f1]`}>
                                            Company
                                        </a>
                                        <ul
                                            className={`${
                                                subMenu ? "block" : "hidden"
                                            } group-active:flex group-hover:flex list-none bg-white text-black flex-col rounded-lg text-lg`}
                                        >
                                            <li className="pl-4 py-1 whitespace-nowrap border-b border-b-[#0081f1]">
                                                <Link onClick={handleCloseMenu} to="/about">
                                                    About Us
                                                </Link>
                                            </li>
                                            <li className="pl-4 py-1 border-b border-b-[#0081f1]">
                                                <Link onClick={handleCloseMenu} to="/career">
                                                    Career
                                                </Link>
                                            </li>
                                            <li className="pl-4 py-1">
                                                <Link onClick={handleCloseMenu} to="/blog">
                                                    Blogs
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                                <button
                                    onClick={() => navigate("/contact")}
                                    className="w-full rounded-md py-2 mt-10 mb-4 outline-none text-white whitespace-nowrap bg-[linear-gradient(45deg,#0146cc,#012d82)] hover:bg-[linear-gradient(45deg,#025aff,#0146cc)] text-sm  md:text-base transition-all duration-500 ease-linear cursor-pointer"
                                >
                                    <span>Book a meeting</span>
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </nav>
        </header>
    );
}
