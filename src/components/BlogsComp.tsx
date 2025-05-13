import { BsArrowUpRightCircleFill } from "react-icons/bs";

interface blogsCompProps{
    coverPic: string,
    title: string,
    profilePic: string,
    name: string,
    date: string,
    time: string,
    topics: string[]
}

export default function BlogsComp({coverPic, title, profilePic, name, date, time, topics}: blogsCompProps) {
  return (
    <div>
      <div className='mb-2'>
        <img src={coverPic} />
      </div>
      <div className='relative'>
        <BsArrowUpRightCircleFill className='text-[#032d74] absolute right-0 top-0 text-3xl' />
        <p className='text-2xl mb-2 font-semibold'>{title}</p>
        <div className='flex items-center mb-2 gap-4'>
            <img src={profilePic} />
            <p>{name}</p>
        </div>
        <p className='flex gap-2 mb-2'><span>{date}</span><span>-</span><span>{time}</span></p>
        <div className='flex gap-4'>
            {
                topics.map((topic, index) => {
                    return (
                        <p className={`text-base py-1 px-2 rounded-full font-semibold ${index == 2 ? "bg-[#fff6ed]" : "bg-[#eef4ff]"}`} key={index}>{topic}</p>
                    )
                })
            }
        </div>
      </div>
    </div>
  )
}
