import Cta from '../components/Cta'
import { HiArrowNarrowRight } from "react-icons/hi";
import { IoIosSearch } from "react-icons/io"
// import coverPic from "../assets/coverpic.png"
import avatar from "../assets/Avatar.png"
import BlogsComp from '@/components/BlogsComp';
// import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useContextValue } from '@/context';
import axios from 'axios';
import { ChangeEvent, useEffect, useState } from 'react';


export default function Blog() {
    const endpoint = "https://veoc-tech-cms.vercel.app/api/article"
    const {articles, setArticles} = useContextValue()
    const [loading,setLoading] = useState<boolean>(false)
    const [keyword,setKeyWord] = useState<string>("")

    const handleSearch = (e: ChangeEvent<(HTMLInputElement)>) => {
        const value = e.target.value
        setKeyWord(value)
        const filteredArticles = articles.filter((article:any)=>{
            return article.title.toLowerCase().includes(value.toLowerCase())
        })
        setArticles(filteredArticles)
    }

    const SkeletonLoader = () => {
        return (
            <div className='rounded-lg h-auto rounded-lg'>
                <div className='rounded-tl-lg rounded-tr-lg w-full h-[185px] mb-6 bg-[#e0e0e0] animate-pulse'>
                </div>
                <div className='mt-2'>
                    <p className='text-xl font-semibold py-2 h-4 bg-[#e0e0e0] animate-pulse mb-2 w-full'></p>
                    <p className='bg-[#e0e0e0] h-4 animate-pulse'></p>
                    <p className='bg-[#e0e0e0] h-2 animate-pulse'></p>
                </div>
            </div>
        )
    }

    const fetchArticles = async () => {
        try{
            setLoading(true)
            const response = await axios.get(endpoint)
            setLoading(false)
            if(response.status === 200){
                setArticles(response.data.articles)
                sessionStorage.setItem("articles", JSON.stringify(response.data.articles))
            }else{
                setArticles([])
            }
        }catch(err){
            setLoading(false)
            console.log(err)
            setArticles([])
        }
    }

    const calculateReadingTime = (text: string, wordPerMinute: number = 200): string =>{
        if(!text) return "0 min read"
        const words = text.trim().split(/\s+/).length
        const readingTime = Math.ceil(words / wordPerMinute)

        return `${readingTime} min read`
    }

    useEffect(()=>{
        fetchArticles()
    },[])

  return (
    <main className='w-[90%] max-w-screen-xl mx-auto'>
        <div className='py-4 my-6 lg:my-8 xl:my-10 flex flex-col md:flex-row  justify-between gap-2 md:items-center'>
            <p className='text-2xl md:text-3xl lg:text-4xl font-semibold'>Latest Articles Blog</p>
            <div className='relative w-full md:w-[300px]'>
                <input 
                    className='w-full py-2 pr-2 md:py-3 md:pr-3 text-xl leading-none pl-6 md:pl-10 rounded-md border border-[#0046cc]' 
                    type='text'
                    value={keyword}
                    onChange={handleSearch}
                    placeholder='search'
                />
                <IoIosSearch className='absolute text-2xl left-3 top-[50%] -translate-y-[50%]' />
            </div>
        </div>
        <div className='overflow-scroll lg:overflow-hidden md:w-full mb-4 md:mb-6 lg:mb-10 flex rounded-tl-full rounded-bl-full md:rounded-full flex-row px-2 md:px-2 py-1 md:py-2 justify-between items-center bg-[#e3e7ea] '>
            <p className='cursor-pointer shrink-0 md:flex-1 text-center rounded-full hover:bg-[linear-gradient(45deg,#032D7F,#0241BA)] p-2 md:p-3 text-xs hover:text-white text-[#4c5c75]'>Financial Services Sector</p>
            <p className='cursor-pointer shrink-0 md:flex-1 text-center rounded-full hover:bg-[linear-gradient(45deg,#032D7F,#0241BA)] p-2 md:p-3 text-xs hover:text-white text-[#4c5c75]'>Healthcare and Med Sciences Sector </p>
            <p className='cursor-pointer shrink-0 md:flex-1 text-center rounded-full hover:bg-[linear-gradient(45deg,#032D7F,#0241BA)] p-2 md:p-3 text-xs hover:text-white text-[#4c5c75]'>Manufacturing Sector</p>
            <p className='cursor-pointer shrink-0 md:flex-1 text-center rounded-full hover:bg-[linear-gradient(45deg,#032D7F,#0241BA)] p-2 md:p-3 text-xs hover:text-white text-[#4c5c75]'>Energy and Utilities Sector</p>
            <p className='cursor-pointer shrink-0 md:flex-1 text-center rounded-full hover:bg-[linear-gradient(45deg,#032D7F,#0241BA)] p-2 md:p-3 text-xs hover:text-white text-[#4c5c75]'>Public Sector</p>
        </div>
            {
                loading ? (
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8'>
                        <SkeletonLoader />
                        <SkeletonLoader />
                        <SkeletonLoader />
                    </div>
                ) : articles.length > 0 ? (
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8'>
                    {
                    articles.map((article:any, index:number) => {
                        return (
                            <BlogsComp 
                                key={index}
                                coverPic={article.coverImage}
                                title={article.title}
                                profilePic={avatar}
                                name={article.author}
                                date={article.date}
                                time={article.content[0]!== undefined ? calculateReadingTime(article.content[0].paragraphText) : calculateReadingTime("")}
                                topics={article.tags.split(", ")}
                                index={index}
                                id={article._id}
                            />
                        )
                    })
                    }
                    </div>
                ) : (
                    <div className='w-full h-[200px] md:h-[300px] lg:h-[400px] flex justify-center items-center'>
                        <p className='text-xl md:text-2xl font-semibold text-[#475467]'>No articles found</p>
                    </div>
                )
            }
        {/* <div className='flex flex-row justify-between items-center py-6 md:py-8 lg:py-10'>
            <div className='flex flex-row gap-2 items-center'>
                <FaArrowLeft className='text-[#475467]' />
                <p className='text-base sm:text-xl text-[#475467]'>Previous</p>
            </div>
            <div className='hidden sm:flex flex-row gap-2 items-center items-center'>
                <p className='h-[32px] w-[32px] flex justify-center items-center bg-[#e3edff] text-black rounded-md'>1</p>
                <p className='h-[32px] w-[32px] flex justify-center items-center rounded-md text-[#475467]'>2</p>
                <p className='h-[32px] w-[32px] flex justify-center items-center rounded-md text-[#475467]'>3</p>
                <p className='h-[32px] w-[32px] flex justify-center items-center rounded-md text-[#475467]'>...</p>
                <p className='h-[32px] w-[32px] flex justify-center items-center rounded-md text-[#475467]'>8</p>
                <p className='h-[32px] w-[32px] flex justify-center items-center rounded-md text-[#475467]'>9</p>
                <p className='h-[32px] w-[32px] flex justify-center items-center rounded-md text-[#475467]'>10</p>
            </div>
            <div className='flex flex-row gap-2 items-center'>
                <p className='text-base sm:text-xl text-[#475467]'>Next</p>
                <FaArrowRight className='text-[#475467]' />
            </div>
        </div> */}
        <Cta 
            title="Secure your company's future by Partnering with Axel Cyber" 
            action='Book a call'
        >
            <HiArrowNarrowRight className='inline' />
        </Cta>
    </main>
  )
}
