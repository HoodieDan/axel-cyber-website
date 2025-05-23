import { useContextValue } from '@/context'
import { BsArrowUpRight } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'

interface Props{
    image: string,
    title: string,
    description: string,
    date: string,
    link?: string,
    author: string,
    topic: string,
    timeStamp: string,
    id: string,
    index:number
}

export default function Blogs({ image, title, description, date, author, topic, timeStamp,id,index }: Props) {
  const {setActiveIndex} = useContextValue()
  const topicArray = topic.split(", ")
  const navigate = useNavigate()
  const handleNavigate = () => {
    setActiveIndex(index)
    navigate(`/blog/${id}`)
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <div className='flex-1 rounded-lg hover:shadow-lg active:shadow-lg transition-all duration-300 ease-linear'>
      <div className='w-full'>
        <img style={{aspectRatio: "2/1"}} className='block w-full' src={image} alt={title} />
      </div>
      <div className='px-2 pb-2'>
      <p className='py-2 text-base text-[#797979]'>{author} - {timeStamp}</p>
      <div className='flex justify-between gap-4'>
        <p className='text-xl font-semibold pb-2'>{title}</p>
        <BsArrowUpRight onClick={handleNavigate} className='text-2xl cursor-pointer' />
      </div>
      <p className='text-[#4c5c75] mb-6'>{description}</p>
      <div className='flex flex-row gap-4 items-center'>
        {
          topicArray.map((item, index) => (
            <p key={index} className='px-4 py-1 rounded-md text-white bg-[linear-gradient(456deg,#014594,#0181f1)]'>{item}</p>
          ))
        }
        
        <p className='text-[#4c5c75]'>{date}</p>
      </div>
      </div>
    </div>
  )
}
