import { lazy, Suspense } from 'react';
import { useNavigate } from 'react-router-dom';


interface AiServicesProps {
    title: string;
    image: string;
    icon:string;
    list: string[]
}

const ChevronRight = lazy(() => 
    import("lucide-react").then(module => ({ default: module.ChevronRight }))
)

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
        <div className='p-4 sm:p-6 lg:p-8 shadow-md border border-[#e3e7ea] rounded-2xl bg-white flex flex-col gap-6 sm:flex-row'>
            <div className='sm:flex-[1.5]'>
                <div className='mb-2 sm:mb-4 lg:mb-6 h-[32px] sm:h-[48px] w-[32px] sm:w-[48px] flex justify-center items-center bg-[#f4f6f8] rounded-full'>
                    <img className='w-[80%] sm:w-[60%]' src={icon} alt="rocket" />
                </div>
                <p className='text-xl sm:text-2xl lg:text-3xl font-semibold mb-2 sm:mb-4 lg:mb-6'>{title}</p>
                <ul className='hidden sm:block mb-6 sm:mb-8 lg:mb-14 list-disc flex flex-col gap-6'>
                    {list.map((item, index) => (
                        <li className='text-[#4c5c57] text-sm sm:text-base' key={index}>{item}</li>
                    ))}
                </ul>
                <button 
                    onClick={handleNavigate}
                    className='hidden w-[100px] lg:w-[120px] 2xl:w-[208px] h-[32px] lg:h-[40px] 2xl:h-[86px] text-white rounded-xl text-sm sm:text-base sm:flex flex-row items-center justify-center gap-1 bg-[linear-gradient(45deg,#032D7F,#0241BA)] active:bg-none hover:bg-none active:bg-white hover:bg-white active:border-2 hover:border-2 active:border-[#032D7F] hover:border-[#032D7F] hover:text-[#032D7F] active:text-[#032D7F] transition-all duration-300 ease-linear cursor-pointer leading-none'>
                    <span>Reach Out</span> 
                    <Suspense fallback={<span className="w-5 h-5 inline-block animate-pulse bg-gray-300 rounded-full" />}>
                        <ChevronRight />
                    </Suspense>
                </button>
            </div>
            <div className='rounded-2xl w-full sm:w-[250px] lg:w-[350px] xl:w-[450px] min-h-[300px] sm:h-[250px] lg:h-[350px] xl:h-[450px] sm:flex-1 flex justify-center items-center bg-[#e3e7ea]'>
                <img 
                    className='block w-[90%] h-[90%]' 
                    src={image} 
                    alt="image" 
                    loading='lazy'
                    width={300}
                    height={315}
                    />
            </div>
            <div className='mt-8 sm:hidden'>
            <ul className='block sm:hidden mb-6 sm:mb-8 lg:mb-14 list-disc flex flex-col gap-6'>
                {list.map((item, index) => (
                    <li className='text-[#4c5c57] text-sm sm:text-base' key={index}>{item}</li>
                ))}
            </ul>
            <button 
                onClick={handleNavigate}
                className='block sm:hidden w-[100px] lg:w-[120px] 2xl:w-[208px] h-[32px] lg:h-[40px] 2xl:h-[86px] text-white rounded-xl text-sm sm:text-base flex flex-row items-center justify-center gap-1 bg-[linear-gradient(45deg,#032D7F,#0241BA)] active:bg-none hover:bg-none active:bg-white hover:bg-white active:border-2 hover:border-2 active:border-[#032D7F] hover:border-[#032D7F] hover:text-[#032D7F] active:text-[#032D7F] transition-all duration-300 ease-linear cursor-pointer leading-none'>
                Reach Out 
                <ChevronRight />
            </button>
            </div>
        </div>
    )
}
