import Cta from '../components/Cta'
import avatar from "../assets/Avatar.png"
import BlogsComp from '@/components/BlogsComp';
import { useContextValue } from '@/context';
import axios from 'axios';
import { lazy, Suspense, useEffect, useState } from 'react';
import BlogHeroComp from '@/components/BlogHeroComp';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const HiArrowNarrowRight = lazy(() => import("lucide-react").then(module => ({ default: module.MoveRight })))


export default function Blog() {
    const endpoint = "https://axel-cyber.vercel.app/api/article"
    const {articles, setArticles,currentIndex, setCurrentIndex} = useContextValue()
    const [loading,setLoading] = useState<boolean>(true)
    

    const colorArray =  [
        {
            bg:"#f9f5ff",
            color: "#6941c6"
        }, 
        {
            bg: "#eef4ff",
            color: "#3538cd"
        },
        {
            bg: "#fdf2fa",
            color: "#c11574"
        }
    ]


    // const handleSearch = (e: ChangeEvent<(HTMLInputElement)>) => {
    //     const value = e.target.value
    //     setKeyWord(value)
    //     const filteredArticles = articles.filter((article:any)=>{
    //         return article.title.toLowerCase().includes(value.toLowerCase())
    //     })
    //     setArticles(filteredArticles)
    // }

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
            const response = await axios.get(endpoint)
            if(response.status === 200){
                const articles = response.data.articles
                const numOfPages = Math.ceil(articles.length / 6)
                const paginatedArticles = []
                for(let i = 0; i < numOfPages; i++){
                    paginatedArticles.push(articles.slice(i * 6, (i + 1) * 6))
                }
                setArticles([...paginatedArticles])
                setLoading(false)
                sessionStorage.setItem("articles", JSON.stringify([...paginatedArticles]))

            }else{
                setArticles([])
                setLoading(false)
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
    <>
    <BlogHeroComp />
    <section className='px-[5%] 2xl:px-0 mx-auto'>
        <p className='text-base text-black text-xl'>What we do</p>
        <p className='text-3xl font-semibold mb-3'>Popular Articles</p>
        <div className="flex flex-col md:flex-row gap-6 md:gap-8 mb-8 lg:mb-16">
            {
                loading
                ? <SkeletonLoader />
                : articles.length > 0
                ? (
                    <div className='flex-1'>
                        <img 
                            src={articles[0][0].coverImage}
                            alt="popular article"
                            width={400}
                            height={300}
                            className='w-full object-cover aspect-[2/2.25] sm:aspect-[3/2.30] rounded-3xl block'
                        />
                        <p className='py-2 text-2xl font-semibold'>{articles[0][0].title}</p>
                        {
                            articles[0][0].tags.split(", ").map((tag,index )=>{
                                const number = index % colorArray.length
                                return (
                                    <p key={index} className='inline px-2 py-1 rounded-full text-base font-semibold' style={{backgroundColor: colorArray[number].bg, color: colorArray[number].color}}>{tag}</p>
                                )
                            })
                        }
                    </div>
                )
                : <></>
            }
            <div className='flex-[1.25] flex flex-col gap-4 lg:gap-6'>
                {
                    !loading && articles[0].slice(1, 4).map((article, index) => {
                        return (
                            <div key={index} className='flex flex-col sm:flex-row gap-6'>
                                <div className='flex-1'>
                                    <img 
                                        src={article.coverImage}
                                        alt="articleimage"
                                        className='aspect-[3/1] sm:aspect-[1/1] rounded-lg sm:rounded-none w-full h-full object-cover'
                                        width={150}
                                        height={150}
                                    />
                                </div>
                                <div className='flex-[1.65]'>
                                    <p className='text-3xl mb-3 font-semibold'>{article.title}</p>
                                    <p className='text-xl text-[#727272] mb-4'>{article.content[0].paragraphText.substring(0,200)}...</p>
                                    {
                                        article.tags.split(", ").map((tag, index) => {
                                            const number = index % colorArray.length
                                            return (
                                                <p key={index} className='inline px-2 py-1 rounded-full text-base font-semibold' style={{backgroundColor: colorArray[number].bg, color: colorArray[number].color}}>{tag}</p>
                                            )
                                        })
                                    }

                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    </section>
    <main className='px-[5%] 2xl:px-0 mx-auto'>
        <p className='text-3xl font-semibold mb-4 lg:mb-6'>Latest Articles Blog</p>
        <div className='overflow-scroll lg:overflow-hidden md:w-full mb-4 md:mb-6 lg:mb-10 flex rounded-tl-full rounded-bl-full md:rounded-full flex-row px-2 md:px-1.5 py-1 md:py-1.5 justify-between items-center bg-[#e3e7ea] '>
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
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 pb-8 lg:pb-14 border-b-2 border-b-[#e4e7ec]'>
                    {
                    articles[currentIndex].slice(0,6).map((article:any, index:number) => {
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
        <div className='flex flex-row justify-between items-center pt-4 pb-12'>
            <div
                onClick={() => {
                    if(currentIndex > 0) {
                        setCurrentIndex(currentIndex - 1)
                    }
                }} 
                className={`flex flex-row gap-1 sm:gap-2 items-center cursor-pointer ${currentIndex > 0 ? "text-[#032d7f]" : "text-[#667085]"}`}
                >
                <ArrowLeft className='size-5 sm:size-7' />
                <span className='text-base sm:text-xl font-semibold'>Previous</span>
            </div>
            <div className='hidden sm:flex flex-row gap-2 items-center'>
                {
                    articles.map((_,index)=>{
                        return (
                            <span 
                                key={index}
                                onClick={() => setCurrentIndex(index)} 
                                className='flex justify-center items-center py-2 px-4 rounded-md text-[#667085] text-base font-semibold cursor-pointer hover:bg-[#e3edff] hover:text-[#002366]'>
                                {index + 1}
                            </span>
                        )
                    })
                }
            </div>
            <div className='flex sm:hidden flex-row gap-2 items-cetner'>
                {
                    articles.map((_,index)=>{
                        return (
                            <span 
                                key={index} 
                                onClick={() => setCurrentIndex(index)}
                                className='flex justify-center items-center py-2 px-4 rounded-md text-[#667085] text-base font-semibold cursor-pointer hover:bg-[#e3edff] hover:text-[#002366]'>
                                {index + 1}
                            </span>
                        )
                    })
                }
            </div>
            <div
                onClick={() => {
                    if(currentIndex < articles.length - 1) {
                        setCurrentIndex(currentIndex + 1)
                    }
                }}
                className={`flex flex-row gap-1 sm:gap-2 items-center cursor-pointer ${currentIndex === articles.length - 1 ? "text-[#667085]" : "text-[#032d7f]"}`}>
                <span className='text-base sm:text-xl font-semibold'>Next</span>
                <ArrowRight className='size-5 sm:size-7' />
            </div>
        </div>
        <Cta 
            title="Secure your company's future by Partnering with Axel Cyber" 
            action='Book a call'
        >
            <Suspense fallback={<span className="w-3 h-3 inline-block animate-pulse bg-gray-300 rounded-full" />}>
                <HiArrowNarrowRight className='inline size-4' />
            </Suspense>
        </Cta>
    </main>
    </>
  )
}
