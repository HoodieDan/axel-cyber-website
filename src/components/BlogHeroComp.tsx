
export default function BlogHeroComp() {
  return (
    <div className='aspect-[9/12] md:aspect-[16/6] relative h-auto mb-8 lg:mb-16'>
        <img 
            src='/blog-hero-desktop-image.svg' 
            className='w-full h-full  block object-cover' 
        />

        <div className='text-white absolute top-[50%] left-[5%] -translate-y-[50%]'>
            <ul className='flex flex-row gap-4 lg:gap-6 items-center text-2xl font-normal mb-8 lg:mb-6'>
                <li>Home</li>
                <li>Latest Articles</li>
            </ul>
            <p className='text-4xl font-semibold mb-24 lg:mb-6 w-[60%] md:w-[80%]'>Our design discoveries: Exploring the art and science of marketing</p>
            <div className='flex flex-row gap-2 sm:gap-4 lg:gap-8'>
                <input 
                    type='text'
                    placeholder='Enter Email'
                    className='w-[72%] max-w-[450px] border-none outline-none bg-white py-3 pl-5 pr-2 rounded-md text-black'
                />
                <button className='py-2 px-3 sm:px-6 lg:px-10 rounded-md text-white bg-black'>Subscribe</button>
            </div>
        </div>
    </div>
  )
}
