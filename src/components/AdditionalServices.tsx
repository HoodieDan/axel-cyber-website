import { RiArrowRightUpLine } from "react-icons/ri";
interface Props{
    service: string,
    desc: string
}

export default function AdditionalServices({ service, desc }: Props) {
  return (
    <div className='flex flex-row justify-between gap-2 items-center py-5 border-b-2 border-[#4c5c75]'>
        <p className='text-base md:text-xl lg:text-2xl font-semibold'>{service}</p>
        <p className='text-xs md:text-base text-[#2f2f2f]'>{desc}</p>
        <RiArrowRightUpLine className='shrink-0 text-xl md:text-3xl' />
    </div>
  )
}
