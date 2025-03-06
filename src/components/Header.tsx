import { FaBars } from "react-icons/fa";
import Logo from "../assets/axel-logo.svg";

export default function Header() {
    return (
        <section>
            <p className="px-[5%] bg-[#566edc] text-center py-1 text-white">
                Introducing Lexxa AI Chatbot extension: Fast and efficient Virtual AI Learn more
            </p>
            <nav className="px-[5%] mt-4 flex justify-between items-center">
                <img src={Logo} className="block" alt="" />
                <ul className="list-none teext-sm md:flex hidden flex-row space-x-4 lg:space-x-8 xl:space-x-10 text-[#4c5c75]">
                    <li>
                        <a href="#">Services</a>
                    </li>
                    <li>
                        <a href="#">Case study</a>
                    </li>
                    <li>
                        <a href="#">Solutions</a>
                    </li>
                    <li className="relative group">
                        <a href="#">Company</a>
                        <ul className="hidden group-hover:flex shadow-md list-none absolute top-[110%] left-0 bg-white text-black py-6 flex-col space-y-3 rounded-lg text-lg">
                            <li className="pl-4 pr-24 whitespace-nowrap font-semibold hover:text-base hover:font-normal">
                                <a href="#">About Us</a>
                            </li>
                            <li className="pl-4 pr-24 font-semibold hover:text-base hover:font-normal">
                                <a href="#">Career</a>
                            </li>
                            <li className="pl-4 pr-24 font-semibold hover:text-base hover:font-normal">
                                <a href="#">Blogs</a>
                            </li>
                        </ul>
                    </li>
                </ul>
                <button className="p-3 lg:p-4 rounded-md text-white bg-[linear-gradient(45deg,#0146cc,#012d82)] md:block hidden">
                    Book a meeting
                </button>
                <div className="text-2xl block md:hidden">
                    <FaBars />
                </div>
            </nav>
        </section>
    );
}
