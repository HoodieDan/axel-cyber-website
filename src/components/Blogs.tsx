import { BsArrowUpRight } from 'react-icons/bs'

interface Props{
    image: string,
    title: string,
    description: string,
    date: string,
    link?: string,
    author: string,
    topic: string,
    timeStamp: string
}

export default function Blogs({ image, title, description, date, author, topic, timeStamp }: Props) {
  return (
    <div className='flex-1 rounded-lg hover:shadow-lg active:shadow-lg transition-all duration-300 ease-linear'>
      <div className='w-full'>
        <img style={{aspectRatio: "2/1"}} className='block w-full' src={image} alt={title} />
      </div>
      <div className='px-2 pb-2'>
      <p className='py-2 text-base text-[#797979]'>{author} - {timeStamp}</p>
      <div className='flex justify-between gap-4'>
        <p className='text-xl font-semibold pb-2'>{title}</p>
        <BsArrowUpRight className='text-2xl' />
      </div>
      <p className='text-[#4c5c75] mb-6'>{description}</p>
      <div className='flex flex-row gap-4 items-center'>
        <p className='p-2 rounded-md text-white bg-[linear-gradient(456deg,#014594,#0181f1)]'>{topic}</p>
        <p className='text-[#4c5c75]'>{date}</p>
      </div>
      </div>
    </div>
  )
}
