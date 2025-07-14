import {motion} from "motion/react"

interface Props{
  delay: number
  topic: string,
  title: string,
  desc: string,
  image: string
}

export default function Service({ topic, title, desc, image,delay }: Props) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{delay: delay, ease: "easeInOut" }}
      viewport={{ once: true }}
      className='flex-1 bg-white rounded-lg transition-all duration-300 ease-linear p-6 border border-[#e1e5e7]'>
      <p className='inline p-2 border border-[#e1e5e7] rounded-md shadow-md'>{topic}</p>
      <p className='mb-8 mt-10  text-2xl font-semibold'>{title}</p>
      <p className='text-[4c5c75] mb-8'>{desc}</p>
      <img 
        className='block w-full h-[200px]' 
        src={image}  
        alt={title} 
        loading="lazy"
        width={300}
        height={200}
        />
    </motion.div>
  )
}
