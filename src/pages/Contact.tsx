import heroImg from "../assets/contactHeroImg.webp"
import map from "../assets/map.webp"
import axelCyer from "../assets/axel-cyber-transparent-logo.webp"
import { ChangeEvent, FormEvent, lazy, Suspense, useState } from "react";

const FaXTwitter = lazy(() => import("lucide-react").then(module => ({ default: module.Twitter })))
const FaYoutube = lazy(() => import("lucide-react").then(module => ({ default: module.Youtube })))
const FaLinkedin = lazy(() => import("lucide-react").then(module => ({ default: module.Linkedin })))

export default function Contact() {
    const [formObj, setFormObj] = useState({
        fullName: "",
        email: "",
        subject: "",
        message: ""
    })
    const { fullName, email, subject, message } = formObj;

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;   
        setFormObj(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const subject = encodeURIComponent(`${formObj.subject} from ${formObj.fullName}`);
        const body = encodeURIComponent(formObj.message)
        const email = 'info@axelcyber.com';

        const mailtoLink = `mailto:${email}?subject=${subject}&body=${body}`;

        window.location.href = mailtoLink;
    }

  return (
    <main className="w-[90%] max-w-screen-xl mx-auto">
        <section className='relative my-8 sm:my-10 md:my-12 lg:my-16'>
            <img 
                src={axelCyer} 
                className='absolute top-[50%] w-[70%] max-width-[800px] left-[50%] -translate-x-[50%] -translate-y-[50%]' 
                alt="axel cyber logo"
                loading="lazy"
                width={896}
                height={260} 
            />
            <img 
                style={{aspectRatio: "2/0.70"}} 
                src={heroImg} 
                className='w-full' 
                alt="hero image for contact page"
                loading="eager"
                fetchPriority="high"
                width={1280}
                height={450} 
            />
            <p className='absolute -bottom-1  right-[17.5%]  md:right-[21%] lg:right-[20%] text-sm sm:text-xl md:text-2xl lg:text-3xl text-[#566edc] font-semibold'>Contact us</p>
        </section>
        <section className='my-8 sm:my-10 md:my-12 lg:my-16 flex flex-col md:flex-row  gap-6 sm:gap-8 md:gap-12 lg:gap-16'>
            <div className='flex-1'>
                <div className='flex rounded-lg flex-row py-2 px-4 gap-2 items-center border border-[#e1e5e7] inline-block'>
                    <p className='text-xs'>Get in Touch</p>
                </div>
                <p className='text-4xl font-semibold pr-0 w-auto lg:w-[400px] my-4 md:my-6 lg:my-8'>We are always ready to help you answer your questions</p>
                <p className='text-base text-[#646464] mb-6 md:mb-8 lg:mb-12'>At Lexxa, we live at the forefront of ML/AI research to bring the latest advancements in language AI to our platform.</p>
                <div className='grid grid-cols-1 md:grid-cols-2 justify-between gap-8 lg:gap-10'>
                    <div>
                        <p className='text-xl md:text-2xl font-semibold mb-2 md:mb-4'>Call center</p>
                        <p className='text-xs md:text-base mb-2 md:mb-4 no-underline'>+44 800 900 1122</p>
                        <p className='text-xs md:text-base no-underline'>+234 894 566 1234</p>
                    </div>
                    <div className='md:justify-self-end'>
                        <p className='text-xl md:text-2xl font-semibold mb-2 md:mb-4 md:pr-4'>Our Location</p>
                        <p className='text-xs md:text-base mb-2 md:mb-4 no-underline'>Plot 800, Lagos</p>
                        <p className='text-xs md:text-base no-underline'>1st Avenue Street.</p>
                    </div>
                    <div>
                        <p className='text-xl md:text-2xl font-semibold mb-2 md:mb-4'>Email</p>
                        <p className='text-xs md:text-base no-underline'>axel.cyber@gmail.com</p>
                    </div>
                    <div className='md:justify-self-end'>
                        <p className='text-xl md:text-2xl font-semibold mb-2 md:mb-4'>Social Network</p>
                    <div className='flex flex-row  gap-2 md:justify-between'>
                            <Suspense fallback={<span className="w-5 h-5 inline-block animate-pulse bg-gray-300 rounded-full" />}>
                                <FaXTwitter className='text-2xl' />
                            </Suspense>
                            <Suspense fallback={<span className="w-5 h-5 inline-block animate-pulse bg-gray-300 rounded-full" />}>
                                <FaYoutube className='text-2xl' />
                            </Suspense>
                            <Suspense fallback={<span className="w-5 h-5 inline-block animate-pulse bg-gray-300 rounded-full" />}>
                                <FaLinkedin className='text-2xl' />
                            </Suspense>
                        </div>
                    </div>
                </div>
            </div>
            <div className='rounded-xl flex-1 bg-[#f1f2f4] py-4 sm:py-6 md:py-8 lg:py-10 px-4 md:px-6 lg:px-8'>
                <p className='text-3xl font-semibold mb-4 md:mb-6'>Get in Touch</p>
                <p className='text-[#646464] mb-4 md:mb-6'>Define your goals and indentify areas where AI can add value to your business</p>
                <form onSubmit={handleSubmit}>
                    <label className='block text-black text-xl' htmlFor="">Full name</label>
                    <input 
                        className='block text-black mb-4 pb-1 border-t-0 border-l-0 border-r-0 border-b-2 border-[#c0c0c0]' 
                        type="text"
                        name="fullName"
                        value={fullName}
                        onChange={handleChange}
                    />
                    <label className='block text-black text-xl' htmlFor="">Email</label>
                    <input 
                        className='block text-black mb-4 pb-1 border-t-0 border-l-0 border-r-0 border-b-2 border-[#c0c0c0]' 
                        type="email" 
                        name="email"
                        value={email}
                        onChange={handleChange}
                        />
                    <label className='block text-black text-xl' htmlFor="">Subject</label>
                    <input 
                        className='block text-black mb-4 pb-1 border-t-0 border-l-0 border-r-0 border-b-2 border-[#c0c0c0]' 
                        type="text" 
                        name="subject"
                        value={subject}
                        onChange={handleChange}
                    />
                    <label className='block text-black text-xl' htmlFor="">Message</label>
                    <textarea 
                        className='block text-black mb-8 pb-1 border-t-0 border-l-0 border-r-0 border-b-2 border-[#c0c0c0]'
                        name="message"
                        value={message}
                        onChange={handleChange} 
                        id="" 
                        cols={30} 
                        rows={10}

                    >
                    </textarea>
                    <button
                        type="submit"
                        className='bg-[linear-gradient(135deg,#002366,#0046cc)] py-3 px-8 acitive:opacity-85 hover:opacity-85 rounded-md text-white cursor-pointer trnasition-all duration-300 ease-linear'
                    >
                        Send a message
                    </button>
                </form>
            </div>
        </section>
        <section className='my-8 sm:my-10 md:my-12 lg:my-16'>
            <img 
                className='block w-full' 
                src={map} 
                alt="google map"
                loading="lazy"
                width={1280}
                height={525} 
            />
        </section>
    </main>
  )
}
