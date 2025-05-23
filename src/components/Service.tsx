interface Props{
    topic: string,
    title: string,
    desc: string,
    image: string
}

export default function Service({ topic, title, desc, image }: Props) {
  return (
    <div className='flex-1 bg-white rounded-lg shadow-lg active:shadow-none hover:shadow-none transition-all duration-300 ease-linear p-6 border-2 border-[#e1e5e7] shadow-md'>
      <p className='inline p-2 border border-[#e1e5e7] rounded-md shadow-md'>{topic}</p>
      <p className='mb-8 mt-10  text-2xl font-semibold'>{title}</p>
      <p className='text-[4c5c75] mb-8'>{desc}</p>
      {/* <div className='w-full h-[200px] flex justify-center items-center rounded-lg bg-[#f5f5f5]'> */}
        <img className='block w-full h-[200px]' src={image}  alt={title} />
      {/* </div> */}
    </div>
  )
}
