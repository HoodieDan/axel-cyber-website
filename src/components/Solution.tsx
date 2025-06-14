interface Props{
    title: string
    description: string;
    imgUrl: string
}

export default function Solution({title, description,imgUrl}: Props) {
  return (
    <div className='bg-[#0a0332] flex-1 rounded-xl pt-6 pb-16 2xl:pb-10 px-4'>
        <div className="flex justify-center">
          <img 
            src={imgUrl} 
            loading="lazy" 
            alt={title} 
            width={52}
            height={52}
          />
        </div>
        <p className='text-center text-white text-xl font-semibold my-4'>{title}</p>
        <p className='text-sm text-center text-[#d5d5d5]'>{description}</p>
    </div>
  )
}
