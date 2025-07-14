interface Props{
    title: string
    description: string;
    imgUrl: string
}

export default function Solution({title, description,imgUrl}: Props) {
  return (
    <div className='bg-[#0a0332] flex-1 rounded-xl pt-8 pb-16 2xl:pb-10 px-14 2xl:px-10 md:h-[200px] lg:h-[250px] xl:h-[300px] 2xl:h-[415px]'>
        <div className="flex justify-center">
          <img 
            src={imgUrl} 
            loading="lazy" 
            className="w-[36px]"
            alt={title} 
            width={52}
            height={52}
          />
        </div>
        <p className='text-center text-white text-xl font-semibold my-4'>{title}</p>
        <p className='text-base text-center text-[#d5d5d5]'>{description}</p>
    </div>
  )
}
