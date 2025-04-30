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


export default function Aboutus() {
  return (
    <main>
        <section className='relative px-[5%] my-8 sm:my-10 md:my-12 lg:my-16'>
            <div className='block md:hidden bg-white mb-4'>
            <p className='text-2xl text-center font-semibold text-black mb-1 xl:mb-2 w-auto xl:w-[70%]'>
                We Bring The Future of AI To You With Our Expertise 
            </p>
            <p className='text-base text-center font-normal text-black]'>
                Lexxa empowers every enterprose to build amazing products and capture true business value with AI language
            </p>
          </div>
          <div className='hidden md:block absolute top-0 left-[5%] bg-white w-[40%] rounded-br-2xl pr-2 xl:pr-4 pt-6'>
            <p className='text-xl xl:text-2xl font-semibold text-black leading-none mb-1 xl:mb-2 w-auto xl:w-[70%] md:mb-4 lg:mb-0'>
                We Bring The Future of AI To You With Our Expertise 
            </p>
            <p className='text-base xl:text-xl font-normal text-black]'>
                Lexxa empowers every enterprose to build amazing products and capture true business value with AI language
            </p>
          </div>
          <div className='hidden md:block absolute p-4 rounded-2xl bottom-[7%] left-[7%] bg-white w-[86%] md:w-[47%] lg:w-[47.7%] xl:w-[60%]'>
            <p className='text-xl xl:text-2xl mb-2 xl:mb-4 font-semibold'>OUR TEAM</p>
            <p className='text-base xl:text-base font-normal text-[#4c5c75]'>
                Axel Cyber is a Dedicated team of Experts from across the globe comitted to building Solutions that drive Business Efficiency and Growth with AI
            </p>
          </div>
          <div className='bg-white hidden xl:flex flex-row gap-2 xl:gap-4 absolute bottom-0 right-[5%]'>
            <div className='text-white p-3 h-[100px] w-[150px] bg-[linear-gradient(45deg,#023a34,#017667)] rounded-2xl'>
                <p className='text-2xl xl:text-3xl font-semibold mb-1'>200K+</p>
                <p className='text-xs font-normal'>People have been using our product daily on a monthly basis</p>
            </div>
            <div className='text-white p-3 h-[100px] w-[150px] bg-[linear-gradient(45deg,#0146cc,#012a7a)] rounded-2xl'>
                <p className='text-2xl xl:text-3xl font-semibold mb-1'>$700K</p>
                <p className='text-xs font-normal'>Monthly revenue made from Lexxa AI Agency at average</p>
            </div>
          </div>
          <img className="hidden md:block w-full" style={{aspectRatio: "3/1.05"}} src={heroImg} alt="hero image"  />
         </section>
         <div className='block md:hidden p-2 md:p-4 rounded-2xl bg-white text-center'>
            <p className='text-xl xl:text-2xl mb-2 xl:mb-4 font-semibold'>OUR TEAM</p>
            <p className='text-base xl:text-base font-normal text-[#4c5c75] mb-8'>
                Axel Cyber is a Dedicated team of Experts from across the globe comitted to building Solutions that drive Business Efficiency and Growth with AI
            </p>
          </div>
        <div className='px-[5%] bg-white flex lg:hidden flex-row gap-4'>
            <div className='text-white p-4 h-[120px] w-[185px] bg-[linear-gradient(45deg,#023a34,#017667)] rounded-2xl'>
                <p className='text-3xl font-semibold mb-1'>200K+</p>
                <p className='text-xs font-normal'>People have been using our product daily on a monthly basis</p>
            </div>
            <div className='text-white p-4 h-[120px] w-[185px] bg-[linear-gradient(45deg,#0146cc,#012a7a)] rounded-2xl'>
                <p className='text-3xl font-semibold mb-1'>$700K</p>
                <p className='text-xs font-normal'>Monthly revenue made from Lexxa AI Agency at average</p>
            </div>
          </div>
        <section className='px-[5%] bg-[#f9f9f9] py-6 sm:py-8 md:py-10 lg:py-12'>
            <div className='flex justify-center mb-8 lg:mb-10'>
                <div className='flex rounded-lg flex-row py-2 px-4 gap-2 items-center border-2 border-[#e1e5e7]'>
                    <img src={stars} alt="stars" />
                    <p>ABOUT US</p>
                </div>
            </div>
            <p className='w-auto md:w-[550px] text-center text-3xl mx-auto lg:text-4xl xl:text-5xl font-bold mb-10 lg:mb-12'>
                We're driven by cutting-edge research
            </p>
            <div className='relative flex flex-col md:flex-row gap-6'>
                <div className='flex-1 flex justify-center item-center lg:hidden'>
                    <img className='w-full md:w-[75%] h-full object-cover' src={abt3} alt='abt3' />
                </div>
                <div className='hidden lg:block flex-[1.5] h-[475px]'>
                    <img className='w-full h-full block' src={abt1} alt={"abt 1"} />
                </div>
                <div className='hidden lg:block flex-1 h-[250px]'>
                    <img className='w-full h-full block' src={abt2} alt={"abt 2"} />
                </div>
                <div className='hidden lg:block absolute bottom-0 right-0 bg-white w-[50%] xl:w-[45%]'>
                    <p className='text-2xl xl:text-3xl font-semibold mb-3 xl:mb-2'>We're driven by cutting-edge research</p>
                    <p className='text-base xl:text-xl font-normal text-[#4c5c75] mb-4'>
                        At Lexxa, we live at the forefront of ML/AI research to brong the latest advencments in language AI to our platform, and make your company grow with this
                    </p>
                    <div className='flex flex-row gap-6'>
                        <button  className='p-3 text-white rounded-xl text-base flex flex-row items-center gap-1  bg-[linear-gradient(45deg,#0146cc,#012d82)]'>
                            Check Our Work
                            <RiArrowRightSLine />
                        </button>
                        <button className='p-3 text-black text-base border border-[#0081f1] rounded-xl flex flex-row items-center gap-1 bg-[#edf1fa]'>
                            Discuss Your Project
                            <BsArrowUpRight />
                        </button>
                    </div>
                </div>
            </div>
            <div className='lg:hidden mt-4'>
                    <p className='text-2xl md:text-3xl font-semibold mb-2'>We're driven by cutting-edge research</p>
                    <p className='text-base md:text-xl font-normal text-[#4c5c75] mb-4'>
                        At Lexxa, we live at the forefront of ML/AI research to brong the latest advencments in language AI to our platform, and make your company grow with this
                    </p>
                    <div className='flex flex-row gap-4 md:gap-6'>
                        <button  className='p-2 md:p-3 text-white rounded-xl text-sm md:text-base flex flex-row items-center gap-1  bg-[linear-gradient(45deg,#0146cc,#012d82)]'>
                            Check Our Work
                            <RiArrowRightSLine />
                        </button>
                        <button className='text-sm md:text-base p-2 md:p-3 text-black text-base border border-[#0081f1] rounded-xl flex flex-row items-center gap-1 bg-[#edf1fa]'>
                            Discuss Your Project
                            <BsArrowUpRight />
                        </button>
                    </div>
                </div>
        </section>
        <section className='px-[5%] py-6 sm:py-8 md:py-10 lg:py-12'>
            <div className='flex justify-start mb-4 sm:mb-6 md:mb-8 lg:mb-10'>
                <div className='flex rounded-lg flex-row py-1 md:py-2 px-2 md:px-4 gap-2 items-center border-2 border-[#e1e5e7]'>
                    <img src={user} alt="user" />
                    <p>OUR STORY</p>
                </div>
            </div>
            <div className='flex flex-col md:flex-row gap-6 md:gap-8 lg:gap-16 xl:gap-20 items-center'>
                <div className='flex-1'>
                    <p className='text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:w-[70%] text-black font-semibold mb-2 md:mb-4 lg:mb-6'>
                        Cultivating rooms for AI/ML for founders to make there businesses bloom beyond expectation.
                    </p>
                    <p className='text-base md:text-xl font-normal text-[#4c5c75]'>
                        We are ML/AI engineers, thinkers, and champions who are passionate about exploring the potential of language AI to make our world a better
                        place. With diverse experience and perspectives, we work trogether to bring advancements in language AI to developers everywhere.
                    </p>
                </div>
                <div className='self-stretch flex-1 flex flex-col gap-4 md:gap-8'>
                    <div className='w-full relative pb-2 border-b border-black flex justify-center items-center'>
                        <p className='text-[#14388f] text-2xl md:text-3xl lg:text-4xl absolute left-0 top-[50%] -translate-y-[50%]'>5+</p>
                        <p className='text-base md:text-xl font-normal'>Countries worked in</p>
                    </div>
                    <div className='relative pb-2 border-b border-black flex justify-center items-center'>
                        <p className='text-[#14388f] text-2xl md:text-3xl lg:text-4xl absolute left-0 top-[50%] -translate-y-[50%]'>12</p>
                        <p className='text-base md:text-xl font-normal'>Years of experience</p>
                    </div>
                    <div className='relative pb-2 border-b border-black flex justify-center items-center'>
                        <p className='text-[#14388f] text-2xl md:text-3xl lg:text-4xl absolute left-0 top-[50%] -translate-y-[50%]'>30</p>
                        <p className='text-base md:text-xl font-normal'>Experienced team members</p>
                    </div>
                    <div className='relative pb-2 border-b border-black flex justify-center items-center'>
                        <p className='text-[#14388f] text-2xl md:text-3xl lg:text-4xl absolute left-0 top-[50%] -translate-y-[50%]'>180+</p>
                        <p className='text-base md:text-xl font-normal'>Clients worked for</p>
                    </div>
                    <div className='relative pb-2 border-b border-black flex justify-center items-center'>
                        <p className='text-[#14388f] text-2xl md:text-3xl lg:text-4xl absolute left-0 top-[50%] -translate-y-[50%]'>5.1k+</p>
                        <p className='text-base md:text-xl font-normal'>Screens completed</p>
                    </div>
                    <div className='relative pb-2 border-b border-black flex justify-center items-center'>
                        <p className='text-[#14388f] text-2xl md:text-3xl lg:text-4xl absolute left-0 top-[50%] -translate-y-[50%]'>$31k+</p>
                        <p className='text-base md:text-xl font-normal'>Screens completed</p>
                    </div>
                </div>
            </div>  
        </section>
        <Clientele />
        <Cta 
            title="Ready to put AI to work?" 
            action='Request a Demo'
        >
            <BsArrowUpRight className='inline' />
        </Cta>
    </main>
  )
}
