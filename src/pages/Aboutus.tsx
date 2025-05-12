import Clientele from '../components/Clientele'
import { BsArrowUpRight } from "react-icons/bs";
import { RiArrowRightSLine } from "react-icons/ri";
import Cta from '../components/Cta';
import heroImg from "../assets/about-hero.png"
import stars from "../assets/stars.png"
import abt1 from "../assets/abt-exl.png"
import abt2 from "../assets/abt-exl1.png"
import user from "../assets/users.png"
import abt3 from "../assets/Exclude.png"
import teamImg from "../assets/teammember.png"
import heroImg2 from "../assets/aboutus-image.png"
import { useNavigate } from 'react-router-dom';


export default function Aboutus() {
    const navigate = useNavigate()

    const handleNavigation = (path: string) => {
        navigate(path)
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }
    interface TeamMemberProps{
        name: string;
        role: string;
        img: string;
    }
    
    function TeamMember({name, role, img}: TeamMemberProps) {
        return (
            <div>
                <img className='block mb-2 w-full' src={img} alt={name} />
                <p className='mb-2 text-xl font-semibold'>{name}</p>
                <p className='text-[#0081f1] text-base font-normal'>{role}</p>
            </div>
        )
    }
    

  return (
    <main>
        <section  className='w-[90%] max-w-screen-xl mx-auto my-8'>
            <div className='block sm:hidden bg-white mb-4'>
                <p className='text-2xl text-center font-semibold text-black mb-1 xl:mb-2 w-auto xl:w-[70%]'>
                    We Bring The Future of AI To You With Our Expertise 
                </p>
                <p className='text-base text-center font-normal text-black]'>
                    Lexxa empowers every enterprose to build amazing products and capture true business value with AI language
                </p>
            </div>
        </section>
        <section className='w-[90%] max-w-screen-xl mx-auto relative my-8 sm:my-10 md:my-12 lg:my-16'>
          <div className='hidden sm:block absolute top-0 left-0 bg-white w-[40%] rounded-br-2xl pr-2 xl:pr-4 pt-0 lg:pt-6'>
            <p className='sm:text-xs md:text-2xl font-semibold text-black leading-none mb-2 md:mb-8 lg:mb-2 w-auto xl:w-[70%] sm md:mb-4 lg:mb-0'>
                We Bring The Future of AI To You With Our Expertise 
            </p>
            <p className='text-xs md:text-xl font-normal text-black]'>
                Lexxa empowers every enterprose to build amazing products and capture true business value with AI language
            </p>
          </div>
          <div className='flex w-[85%] sm:w-auto gap-[5%] sm:gap-2 md:gap-4 xl:gap-6 absolute top-[5%] sm:top-[7%] right-[2.5%] sm:right-[2%]'>
             <div className='flex-[3] glassmorphism h-[25vw] sm:h-[75px] lg:h-[100px] xl:h-[125px] w-[50%] sm:w-[200px] md:w-[250px] lg:w-[325px] xl:w-[400px] rounded-2xl'></div>
             <div className='flex-1 h-[25vw] sm:h-[75px] lg:h-[100px] xl:h-[125px] w-[20%] sm:w-[75px] md:w-[85px] lg:w-[125px] xl:w-[150px] bg-white rounded-2xl'></div>
           </div>
          <div className='absolute p-4 rounded-2xl bottom-[5%] sm:bottom-[7%] left-[2.5%] sm:left-[2%] bg-white w-[85%] sm:w-[88%] md:w-[47%] lg:w-[47.7%] xl:w-[60%]'>
            <p className='text-xl xl:text-2xl mb-2 xl:mb-4 font-semibold'>OUR TEAM</p>
            <p className='text-base xl:text-base font-normal text-[#4c5c75]'>
                Axel Cyber is a Dedicated team of Experts from across the globe comitted to building Solutions that drive Business Efficiency and Growth with AI
            </p>
          </div>
          <div className='bg-white hidden md:flex flex-row gap-2 xl:gap-4 2xl:gap-6 absolute bottom-0 right-0'>
            <div className='text-white p-1 md:p-3 h-[90px] md:h-[75px] lg:h-[100px] 2xl:h-[200px] w-[92.5px] lg:w-[150px] 2xl:w-[290px] bg-[linear-gradient(45deg,#0146cc,#012a7a)] rounded-2xl'>
                <p className='text-sm md:text-2xl xl:text-3xl font-semibold mb-0 md:mb-1'>200K+</p>
                <p className='text-xs font-normal'>People have been using our product daily on a monthly basis</p>
            </div>
            <div className='text-white p-1 md:p-3 h-[90px] md:h-[65px] md:h-[75px] lg:h-[100px] 2xl:h-[200px] w-[92.5px] lg:w-[150px] 2xl:w-[290px] bg-[linear-gradient(45deg,#0146cc,#012a7a)] rounded-2xl'>
                <p className='text-sm md:text-2xl xl:text-3xl font-semibold mb-0 md:mb-1'>$700K</p>
                <p className='text-xs font-normal'>Monthly revenue made from Lexxa AI Agency at average</p>
            </div>
          </div>
          <img className="hidden sm:block w-full about-hero-img"  src={heroImg} alt="hero image"  />
          <img className="block sm:hidden w-full" src={heroImg2} />    
        </section>
        <div className='w-[90%] max-w-screen-xl mx-auto bg-white flex md:hidden flex-row gap-4'>
            <div className='flex-1 text-white p-4 h-[120px] w-[185px] bg-[linear-gradient(45deg,#0146cc,#012a7a)] rounded-2xl'>
                <p className='text-3xl font-semibold mb-1'>200K+</p>
                <p className='text-xs font-normal'>People have been using our product daily on a monthly basis</p>
            </div>
            <div className='flex-1 text-white p-4 h-[120px] w-[185px] bg-[linear-gradient(45deg,#0146cc,#012a7a)] rounded-2xl'>
                <p className='text-3xl font-semibold mb-1'>$700K</p>
                <p className='text-xs font-normal'>Monthly revenue made from Lexxa AI Agency at average</p>
            </div>
        </div>
        <section className='w-[90%] max-w-screen-xl mx-auto py-6 sm:py-8 md:py-10 lg:py-12'>
             <div className='flex justify-center mb-8 lg:mb-10'>
                 <div className='flex rounded-lg flex-row py-2 px-4 gap-2 items-center border-2 border-[#e1e5e7]'>
                     <img src={stars} alt="stars" />
                     <p>OUR TEAM</p>
                 </div>
             </div>
             <p className='w-auto md:w-[550px] text-center text-3xl mx-auto lg:text-4xl xl:text-5xl font-bold mb-10 lg:mb-12'>
                 Meet the team behind Lexxa
             </p>
             <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
                <TeamMember
                    name='Olivia Rhye'
                    role='Founder & CEO'
                    img={teamImg}
                />
                <TeamMember
                    name='Olivia Rhye'
                    role='Founder & CEO'
                    img={teamImg}
                />
                <TeamMember
                    name='Olivia Rhye'
                    role='Founder & CEO'
                    img={teamImg}
                />
                <TeamMember
                    name='Olivia Rhye'
                    role='Founder & CEO'
                    img={teamImg}
                />
                <TeamMember
                    name='Olivia Rhye'
                    role='Founder & CEO'
                    img={teamImg}
                />
                <TeamMember
                    name='Olivia Rhye'
                    role='Founder & CEO'
                    img={teamImg}
                />
                <TeamMember
                    name='Olivia Rhye'
                    role='Founder & CEO'
                    img={teamImg}
                />
                <TeamMember
                    name='Olivia Rhye'
                    role='Founder & CEO'
                    img={teamImg}
                />
            </div>
        </section>
        <div className='bg-[#f9f9f9]'>   
        <section className='w-[90%] max-w-screen-xl mx-auto py-6 sm:py-8 md:py-10 lg:py-12'>
            <div className='flex justify-center mb-8 lg:mb-10'>
                <div className='flex rounded-lg flex-row py-2 px-4 gap-2 items-center border-2 border-[#e1e5e7]'>
                    <img className='shrink-0' src={stars} alt="stars" />
                    <p className='text-sm sm:text-base 2xl:text-xl'>ABOUT US</p>
                </div>
            </div>
            <p className='w-auto md:w-[550px] 2xl:w-auto text-center text-3xl mx-auto lg:text-4xl xl:text-5xl font-bold mb-10 lg:mb-12'>
                We're driven by cutting-edge research
            </p>
            <div className='relative flex flex-col md:flex-row gap-6'>
                <div className='flex-1 flex justify-center item-center lg:hidden'>
                    <img className='w-full h-full object-cover' src={abt3} alt='abt3' />
                </div>
                <div className='hidden lg:block flex-[1.5] h-[475px] 2xl:h-[775px]'>
                    <img className='w-full h-full block' src={abt1} alt={"abt 1"} />
                </div>
                <div className='hidden lg:block flex-1 h-[250px] 2xl:h-[415px]'>
                    <img className='w-full h-full block' src={abt2} alt={"abt 2"} />
                </div>
                <div className='hidden lg:block absolute bottom-0 right-0 bg-white w-[50%] xl:w-[45%]'>
                    <p className='text-2xl xl:text-3xl font-semibold mb-3 xl:mb-2'>We're driven by cutting-edge research</p>
                    <p className='text-base xl:text-xl font-normal text-[#4c5c75] mb-4'>
                        At Lexxa, we live at the forefront of ML/AI research to brong the latest advencments in language AI to our platform, and make your company grow with this
                    </p>
                    <div className='flex flex-row gap-6'>
                        <button
                            onClick={() => handleNavigation('/solutions')}  
                            className='h-[50px] 2xl:h-[75px] w-[160px] 2xl:w-[285px] text-white rounded-xl text-base flex flex-row items-center justify-center gap-1  bg-[linear-gradient(45deg,#0146cc,#012d82)] active:by-none hover:bg-none active:bg-white hover:bg-white hover:text-[#0146cc] active:text-[#0146cc] hover:border-2 active:border-2 hover:border-[#0146cc] active:border-[#0146cc] transition-all duration-300 ease-linear cursor-pointer'>
                            Check Our Work
                            <RiArrowRightSLine />
                        </button>
                        <button 
                            onClick={() => handleNavigation('/contact')}
                            className='h-[50px] 2xl:h-[87px] w-[180px] 2xl:w-[330px] text-black text-base border border-[#0081f1] rounded-xl flex flex-row items-center justify-center gap-1 bg-[#edf1fa] active:bg-[#0081f1] hover:bg-[#0081f1] active:border-0 hover:border-0 active:text-white hover:text-white transition-all duration-300 ease-linear cursor-pointer'>
                            Discuss Your Project
                            <BsArrowUpRight />
                        </button>
                    </div>
                </div>
            </div>
            <div className='lg:hidden mt-12'>
                    <p className='text-2xl md:text-3xl font-semibold mb-2'>We're driven by cutting-edge research</p>
                    <p className='text-base md:text-xl font-normal text-[#4c5c75] mb-4'>
                        At Lexxa, we live at the forefront of ML/AI research to brong the latest advencments in language AI to our platform, and make your company grow with this
                    </p>
                    <div className='flex flex-col sm:flex-row gap-4 md:gap-6'>
                        <button  className='flex justify-center items-center flex-1 p-2 md:p-3 text-white rounded-xl text-sm md:text-base flex flex-row items-center gap-1  bg-[linear-gradient(45deg,#0146cc,#012d82)]'>
                            Check Our Work
                            <RiArrowRightSLine />
                        </button>
                        <button className='flex justify-center items-center flex-1 text-sm md:text-base p-2 md:p-3 text-black text-base border border-[#0081f1] rounded-xl flex flex-row items-center gap-1 bg-[#edf1fa]'>
                            Discuss Your Project
                            <BsArrowUpRight />
                        </button>
                    </div>
                </div>
        </section>
        </div>
        <section className='w-[90%] max-w-screen-xl mx-auto py-6 sm:py-8 md:py-10 lg:py-12'>
            <div className='flex justify-start mb-4 sm:mb-6 md:mb-8 lg:mb-10'>
                <div className='flex rounded-lg flex-row py-1 md:py-2 px-2 md:px-4 gap-2 items-center border-2 border-[#e1e5e7]'>
                    <img className='shrink-0' src={user} alt="user" />
                    <p className='text-sm sm:text-base 2xl:text-xl'>OUR STORY</p>
                </div>
            </div>
            <div className='flex flex-col md:flex-row gap-6 md:gap-8 lg:gap-16 xl:gap-20 items-center'>
                <div className='flex-1'>
                    <p className='text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:w-[70%] 2xl:w-[80%] text-black font-semibold mb-2 md:mb-4 lg:mb-6'>
                        Cultivating AI & Machine Learning solutions to power the evolution for your company culture
                    </p>
                    <p className='text-base md:text-xl font-normal text-[#4c5c75]'>
                        We are AI solution Designers and ML/AI engineers, thinkers, and champions who are passionate about exploring the potential of language AI to make our world a better
                        place. With diverse experience and perspectives, we work trogether to bring advancements in language AI to developers everywhere.
                    </p>
                </div>
                <div className='self-stretch flex-1 flex flex-col gap-4 md:gap-8'>
                    <div className='w-full relative pb-4 border-b border-black flex justify-center items-center'>
                        <p className='text-[#14388f] text-2xl md:text-3xl lg:text-4xl absolute left-0 top-[50%] -translate-y-[50%]'>5+</p>
                        <p className='text-base md:text-xl font-normal'>Countries worked in</p>
                    </div>
                    <div className='relative pb-4 border-b border-black flex justify-center items-center'>
                        <p className='text-[#14388f] text-2xl md:text-3xl lg:text-4xl absolute left-0 top-[50%] -translate-y-[50%]'>12</p>
                        <p className='text-base md:text-xl font-normal'>Years of experience</p>
                    </div>
                    <div className='relative pb-4 border-b border-black flex justify-center items-center'>
                        <p className='text-[#14388f] text-2xl md:text-3xl lg:text-4xl absolute left-0 top-[50%] -translate-y-[50%]'>30</p>
                        <p className='text-base md:text-xl font-normal'>Experienced team members</p>
                    </div>
                    <div className='relative pb-4 border-b border-black flex justify-center items-center'>
                        <p className='text-[#14388f] text-2xl md:text-3xl lg:text-4xl absolute left-0 top-[50%] -translate-y-[50%]'>180+</p>
                        <p className='text-base md:text-xl font-normal'>Clients worked for</p>
                    </div>
                    <div className='relative pb-4 border-b border-black flex justify-center items-center'>
                        <p className='text-[#14388f] text-2xl md:text-3xl lg:text-4xl absolute left-0 top-[50%] -translate-y-[50%]'>5.1k+</p>
                        <p className='text-base md:text-xl font-normal'>Screens completed</p>
                    </div>
                    <div className='relative pb-4 border-b border-black flex justify-center items-center'>
                        <p className='text-[#14388f] text-2xl md:text-3xl lg:text-4xl absolute left-0 top-[50%] -translate-y-[50%]'>$31k+</p>
                        <p className='text-base md:text-xl font-normal'>Screens completed</p>
                    </div>
                </div>
            </div>  
        </section>
        <div className='w-[90%] max-w-screen-xl mx-auto'>
        <Clientele />
        <Cta 
            title="Secure your compay's future by Partnering with Axel Cyber" 
            action='Request a Demo'
        >
            <BsArrowUpRight className='inline' />
        </Cta>
        </div>
    </main>
  )
}
