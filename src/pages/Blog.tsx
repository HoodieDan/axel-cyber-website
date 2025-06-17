import Cta from '../components/Cta'
import avatar from "../assets/Avatar.png"
import BlogsComp from '@/components/BlogsComp';
import { useContextValue } from '@/context';
import axios from 'axios';
import { ChangeEvent, lazy, Suspense, useEffect, useState } from 'react';

const HiArrowNarrowRight = lazy(() => import("lucide-react").then(module => ({ default: module.MoveRight })))
const IoIosSearch = lazy(() => import("lucide-react").then(module => ({ default: module.Search })))

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
                    className='w-full py-2 pr-2 md:py-3 md:pr-3 text-xl leading-none pl-10 rounded-md border border-[#0046cc]' 
                    type='text'
                    value={keyword}
                    onChange={handleSearch}
                    placeholder='search'
                />
                <Suspense fallback={<span className="w-5 h-5 inline-block animate-pulse bg-gray-300 rounded-full" />}>
                    <IoIosSearch className='absolute h-6 w-6 left-3 top-[50%] -translate-y-[50%]' />
                </Suspense>
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
        <Cta 
            title="Secure your company's future by Partnering with Axel Cyber" 
            action='Book a call'
        >
            <Suspense fallback={<span className="w-3 h-3 inline-block animate-pulse bg-gray-300 rounded-full" />}>
                <HiArrowNarrowRight className='inline size-4' />
            </Suspense>
        </Cta>
    </main>
  )
}
