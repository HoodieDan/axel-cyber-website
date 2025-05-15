import { useContextValue } from "@/context";
import { BsArrowUpRightCircleFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

interface blogsCompProps{
    coverPic: string,
    title: string,
    profilePic: string,
    name: string,
    date: string,
    time: string,
    topics: string[],
    index: number,
    id: string
}

export default function BlogsComp({coverPic, title, profilePic, name, date, time,id ,topics,index}: blogsCompProps) {
  const {setActiveIndex} = useContextValue()
  const navigate = useNavigate()
  const handleNavigate = () => {
    setActiveIndex(index)
    navigate(`/blog/${id}`)
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }
  const colorArray =  [
    {
        bg:"#f9f5ff",
        color: "#6941c6"
    }, 
    {
        bg: "#eef4ff",
        color: "#3538cd"
    },
    {
        bg: "#fdf2fa",
        color: "#c11574"
    }
]
  return (
    <div className="rounded-lg hover:shadow-lg active:shadow-lg transition-all duration-300 ease-linear">
      <div className='mb-2'>
        <img style={{aspectRatio: "2/1.15"}} className="w-full rounded-sm md:rounded-md lg:rounded-lg" src={coverPic} />
      </div>
      <div className='relative'>
        <BsArrowUpRightCircleFill onClick={handleNavigate} className='cursor-pointer text-[#032d74] absolute right-0 top-0 text-3xl' />
        <p className='text-2xl mb-2 font-semibold'>{title}</p>
        <div className='flex items-center mb-2 gap-4'>
            <img src={profilePic} />
            <p>{name}</p>
        </div>
        <p className='flex gap-2 mb-2'><span>{date}</span><span>-</span><span>{time}</span></p>
        <div className='flex gap-4 pb-2 md:pb-3'>
            {
                topics.map((topic, index) => {
                  const number = index % colorArray.length
                    return (
                        <p className={`text-base md:text-xl py-1 px-4 rounded-full font-semibold`} style={{backgroundColor: colorArray[number].bg, color: colorArray[number].color}} key={index}>{topic}</p>
                    )
                })
            }
        </div>
      </div>
    </div>
  )
}
