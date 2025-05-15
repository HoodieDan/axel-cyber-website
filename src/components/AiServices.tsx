import { RiArrowRightSLine } from 'react-icons/ri'
import { useNavigate } from 'react-router-dom';


interface AiServicesProps {
    title: string;
    image: string;
    icon:string;
    list: string[]
}

export default function AiServices({ title, image, list,icon }: AiServicesProps) {
    const navigate = useNavigate()
    const handleNavigate = () => {
        navigate("/contact")
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }
    return (
        <div className='p-4 md:p-6 lg:p-8 shadow-md border border-[#e3e7ea] rounded-2xl bg-white flex flex-col gap-6 sm:flex-row'>
            <div className='md:flex-[1.5]'>
                <div className='mb-2 md:mb-4 lg:mb-6 h-[32px] md:h-[48px] w-[32px] md:w-[48px] flex justify-center items-center bg-[#f4f6f8] rounded-full'>
                    <img className='w-[80%] md:w-[60%]' src={icon} alt="rocket" />
                </div>
                <p className='text-xl md:text-2xl lg:text-3xl font-semibold mb-2 md:mb-4 lg:mb-6'>{title}</p>
                <ul className='hidden md:block mb-6 md:mb-8 lg:mb-14 list-disc flex flex-col gap-6'>
                    {list.map((item, index) => (
                        <li className='text-[#4c5c57] text-sm md:text-base' key={index}>{item}</li>
                    ))}
                </ul>
                <button 
                    onClick={handleNavigate}
                    className='hidden w-[100px] lg:w-[120px] 2xl:w-[208px] h-[32px] lg:h-[40px] 2xl:h-[86px] text-white rounded-xl text-sm md:text-base md:flex flex-row items-center justify-center gap-1 bg-[linear-gradient(45deg,#032D7F,#0241BA)] active:bg-none hover:bg-none active:bg-white hover:bg-white active:border-2 hover:border-2 active:border-[#032D7F] hover:border-[#032D7F] hover:text-[#032D7F] active:text-[#032D7F] transition-all duration-300 ease-linear cursor-pointer leading-none'>
                    <span>Reach Out</span> 
                    <RiArrowRightSLine />
                </button>
            </div>
            <div className='rounded-2xl shrink-0 w-full md:w-[250px] lg:w-[350px] xl:w-[450px] min-h-[300px] md:h-[250px] lg:h-[350px] xl:h-[450px] md:flex-1 flex justify-center items-center bg-[#e3e7ea]'>
                <img className='block w-[90%] h-[90%]' src={image} alt="image" />
            </div>
            <div className='mt-8 md:hidden'>
            <ul className='block md:hidden mb-6 md:mb-8 lg:mb-14 list-disc flex flex-col gap-6'>
                {list.map((item, index) => (
                    <li className='text-[#4c5c57] text-sm md:text-base' key={index}>{item}</li>
                ))}
            </ul>
            <button 
                onClick={handleNavigate}
                className='block md:hidden w-[100px] lg:w-[120px] 2xl:w-[208px] h-[32px] lg:h-[40px] 2xl:h-[86px] text-white rounded-xl text-sm md:text-base flex flex-row items-center justify-center gap-1 bg-[linear-gradient(45deg,#032D7F,#0241BA)] active:bg-none hover:bg-none active:bg-white hover:bg-white active:border-2 hover:border-2 active:border-[#032D7F] hover:border-[#032D7F] hover:text-[#032D7F] active:text-[#032D7F] transition-all duration-300 ease-linear cursor-pointer leading-none'>
                Reach Out 
                <RiArrowRightSLine />
            </button>
            </div>
        </div>
    )
}
