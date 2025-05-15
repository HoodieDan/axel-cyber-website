import heroImg from "../assets/contactHeroImg.png"
import { FaXTwitter, FaYoutube,FaLinkedin } from "react-icons/fa6";
import map from "../assets/map.png"
import axelCyer from "../assets/axel-cyber-transparent-logo.png"

export default function Contact() {
  return (
    <main className="w-[90%] max-w-screen-xl mx-auto">
        <section className='relative my-8 sm:my-10 md:my-12 lg:my-16'>
            <img src={axelCyer} className='absolute top-[50%] w-[70%] max-width-[800px] left-[50%] -translate-x-[50%] -translate-y-[50%]' alt="" />
            <img style={{aspectRatio: "2/0.70"}} src={heroImg} className='w-full' alt="" />
            <p className='absolute -bottom-1 sm:bottom-2 right-[20%] sm:right-[25%] text-sm sm:text-xl text-[#566edc] font-semibold'>Contact us</p>
        </section>
        <section className='my-8 sm:my-10 md:my-12 lg:my-16 flex flex-col md:flex-row  gap-6 sm:gap-8 md:gap-12 lg:gap-16'>
            <div className='flex-1'>
                <div className='flex rounded-lg flex-row py-2 px-4 gap-2 items-center border border-[#e1e5e7] inline-block'>
                    <p className='text-xs'>Get in Touch</p>
                </div>
                <p className='text-4xl font-semibold pr-0 w-auto lg:w-[400px] my-4 md:my-6 lg:my-8'>We are always readsy to help you answer your questions</p>
                <p className='text-base text-[#646464] mb-6 md:mb-8 lg:mb-12'>At Lexxa, we live at the forefront of ML/AI research to bring the latest advancements in language AI to our platform.</p>
                <div className='grid grid-cols-1 md:grid-cols-2 justify-between gap-8 lg:gap-10'>
                    <div>
                        <p className='text-xl md:text-2xl font-semibold mb-2 md:mb-4'>Call center</p>
                        <p className='text-xs md:text-base'>+44 800 900 1122</p>
                        <p className='text-xs md:text-base'>+234 894 566 1234</p>
                    </div>
                    <div className='md:justify-self-end'>
                        <p className='text-xl md:text-2xl font-semibold mb-2 md:mb-4 md:pr-4'>Our Location</p>
                        <p className='text-xs md:text-base'>Plot 800, Lagos</p>
                        <p className='text-xs md:text-base'>1st Avenue Street.</p>
                    </div>
                    <div>
                        <p className='text-xl md:text-2xl font-semibold mb-2 md:mb-4'>Email</p>
                        <p className='text-xs md:text-base'>axel.cyber@gmail.com</p>
                    </div>
                    <div className='md:justify-self-end'>
                        <p className='text-xl md:text-2xl font-semibold mb-2 md:mb-4'>Social Network</p>
                    <div className='flex flex-row justify-between'>
                            <FaXTwitter className='text-2xl' />
                            <FaYoutube  className='text-2xl'/>
                            <FaLinkedin className='text-2xl'/>
                        </div>
                    </div>
                </div>
            </div>
            <div className='rounded-xl flex-1 bg-[#f1f2f4] py-4 sm:py-6 md:py-8 lg:py-10 px-4 md:px-6 lg:px-8'>
                <p className='text-3xl font-semibold mb-4 md:mb-6'>Get in Touch</p>
                <p className='text-[#646464] mb-4 md:mb-6'>Define your goals and indentify areas where AI can add value to your business</p>
                <form action="">
                    <label className='block text-black text-xl' htmlFor="">Full name</label>
                    <input className='block mb-4 pb-1 border-t-0 border-l-0 border-r-0 border-b-2 border-[#c0c0c0]' type="text" />
                    <label className='block text-black text-xl' htmlFor="">Email</label>
                    <input className='block mb-4 pb-1 border-t-0 border-l-0 border-r-0 border-b-2 border-[#c0c0c0]' type="email" />
                    <label className='block text-black text-xl' htmlFor="">Subject</label>
                    <input className='block mb-4 pb-1 border-t-0 border-l-0 border-r-0 border-b-2 border-[#c0c0c0]' type="text" />
                    <label className='block text-black text-xl' htmlFor="">Message</label>
                    <textarea className='block mb-8 pb-1 border-t-0 border-l-0 border-r-0 border-b-2 border-[#c0c0c0]' name="" id="" cols={30} rows={10}></textarea>
                    <button className='bg-[linear-gradient(135deg,#002366,#0046cc)] hover:bg-none active:bg-none hover:border-2 active:border-2 hover:border-[#002366] active:border-[#002366] w-[140px] h-[40px] rounded-md text-white hover:text-[#002366] active:text-[#002366] cursor-pointer trnasition-all duration-300 ease-linear'>Send a message</button>
                </form>
            </div>
        </section>
        <section className='my-8 sm:my-10 md:my-12 lg:my-16'>
            <img className='block w-full' src={map} alt="google map" />
        </section>
    </main>
  )
}
