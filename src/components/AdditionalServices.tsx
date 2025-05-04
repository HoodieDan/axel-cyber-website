import { RiArrowRightUpLine } from "react-icons/ri";
interface Props{
    service: string,
    desc: string
}

export default function AdditionalServices({ service, desc }: Props) {
  return (
    <div className='flex flex-row justify-between gap-2 items-center py-5 border-b border-[#4c5c75]'>
        <p className='flex-1 text-base md:text-xl lg:text-2xl font-semibold'>{service}</p>
        <p className='flex-[2] md:flex-1 text-xs md:text-base text-[#2f2f2f]'>{desc}</p>
        <div className="flex-1 flex justify-end items-center">
          <RiArrowRightUpLine className='shrink-0 text-3xl md:text-5xl' />
        </div>
    </div>
  )
}
