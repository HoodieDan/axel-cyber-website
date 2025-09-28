import BlogsComp from "@/components/BlogsComp";
import { useContextValue } from "@/context";
import axios from "axios";
import { lazy, Suspense, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import avatar2 from "../assets/Avatar.png";

const FaArrowLeftLong = lazy(() => import("lucide-react").then((module) => ({ default: module.ArrowLeft })));
const RiArrowRightUpLine = lazy(() => import("lucide-react").then((module) => ({ default: module.MoveUpRight })));

interface Blog {
    _id: string;
    author: string;
    content: {
        paragraphText: string;
        paragraphTitle: string;
        type: string;
        imageFile: string;
    }[];
    coverImage: string;
    createdAt: string;
    status: string;
    tags: string;
    title: string;
    updatedAt: string;
    date: string;
    description: string;
}

export default function BlogPage() {
    const { setActiveIndex, activeIndex, articles, currentIndex } = useContextValue();
    const [loading, setLoading] = useState<boolean>(false);
    let number = 0;
    const colorArray = [
        {
            bg: "#f9f5ff",
            color: "#6941c6",
        },
        {
            bg: "#eef4ff",
            color: "#3538cd",
        },
        {
            bg: "#fdf2fa",
            color: "#c11574",
        },
    ];
    const endpoint = "https://axel-cyber.vercel.app/api/article";
    const { id } = useParams();
    const navigate = useNavigate();
    const [blog, setBlog] = useState<Blog>({
        _id: "",
        author: "",
        content: [],
        coverImage: "",
        createdAt: "",
        status: "",
        tags: "",
        title: "",
        updatedAt: "",
        date: "",
        description: "",
    });
    const getBlog = async () => {
        try {
            setLoading(true);
            const response = await axios.get(`${endpoint}/${id}`);
            if (response.status === 200) {
                setLoading(false);
                setBlog(response.data.article);
            } else {
                setLoading(false);
                setBlog({
                    _id: "",
                    author: "",
                    content: [],
                    coverImage: "",
                    createdAt: "",
                    status: "",
                    tags: "",
                    title: "",
                    updatedAt: "",
                    date: "",
                    description: "",
                });
            }
        } catch (error) {
            setLoading(false);
            console.error("Error fetching blog data:", error);
        }
    };

    const calculateReadingTime = (text: string, wordPerMinute: number = 200): string => {
        if (!text) return "0 min read";
        const words = text.trim().split(/\s+/).length;
        const readingTime = Math.ceil(words / wordPerMinute);

        return `${readingTime} min read`;
    };

    useEffect(() => {
        if (id) {
            const index = articles[currentIndex].findIndex((item) => item._id === id);
            if (index !== -1) {
                setActiveIndex(index);
            }
            getBlog();
        }
    }, [id]);

    return (
        <main className="px-[5%] mx-auto">
            {!loading ? (
                <>
                    <div onClick={() => navigate(-1)} className="cursor-pointer mt-6 md:mt-8 lg:mt-10 flex gap-3">
                        <Suspense
                            fallback={<span className="w-3 h-3 inline-block animate-pulse bg-gray-300 rounded-full" />}
                        >
                            <FaArrowLeftLong className="h-6 w-6" />
                        </Suspense>
                        <span className="underline hover:no-underline activea;no-underline">Bact to blogs</span>
                    </div>
                    <section className="mt-6 md:mt-8 lg:mt-10 xl:mt-12">
                        <p className="text-center text-[#0081f1] font-semibold mb-2 md:mb-4 lg:mb-6 leading-none">
                            {`Published ${blog.date}`}
                        </p>
                        <p className="text-xl md:text-2xl lg:text-4xl text-center font-semibold font-semibold mb-6 md:mb-8 lg:mb-10 leading-none">
                            {blog.title}
                        </p>
                        <p className="text-base mb-6 md:mb-8 lg:mb-10 text-center leading-none">{blog.description}</p>
                        <div className="flex flex-row gap-2 justify-center items-center mb-6 md:mb-8 lg:mb-10">
                            {blog.tags.split(", ").map((item, index) => {
                                const number = index % colorArray.length;
                                return (
                                    <p
                                        key={index}
                                        className={`px-4 py-2 rounded-full font-semibold text-base md:text-xl`}
                                        style={{
                                            backgroundColor: colorArray[number].bg,
                                            color: colorArray[number].color,
                                        }}
                                    >
                                        {item}
                                    </p>
                                );
                            })}
                        </div>
                        <img
                            className="w-full block mb-6 md:mb-8 lg:mb-10"
                            src={
                                blog.coverImage
                                    ? blog.coverImage
                                    : blog.content[1]
                                    ? blog.content[1].imageFile
                                    : undefined
                            }
                            // src={blogImg}
                            style={{ aspectRatio: "2/0.85" }}
                            alt="blog"
                        />
                    </section>
                    <section className="flex flex-col md:flex-row gap-4 md:gap-6 lg:gap-10">
                        <div className="shrink-0 w-auto md:w-[150px] lg:w-[175px]">
                            <p className="font-semibold text-xl text-black mb-3">CONTENTS</p>
                            {blog.content.map((item, index) => {
                                return (
                                    <p
                                        key={index}
                                        className="text-base mb-2 text-[#475467] hover:text-[#0081f1] transition-all duration-300 ease-linear"
                                    >
                                        {item.paragraphTitle}
                                    </p>
                                );
                            })}
                            {/* <p className="text-base mb-2 text-[#475467] hover:text-[#0081f1] transition-all duration-300 ease-linear">What is the furture of Lexxa?</p>
                <p className="text-base mb-2 text-[#475467] hover:text-[#0081f1] transition-all duration-300 ease-linear">How does Lexxa work?</p>
                <p className="text-base mb-2 text-[#475467] hover:text-[#0081f1] transition-all duration-300 ease-linear">Why use Lexxa work?</p>
                <p className="text-base mb-2 text-[#475467] hover:text-[#0081f1] transition-all duration-300 ease-linear">Why use Lexxa for your company?</p>
                <p className="text-base mb-2 text-[#475467] hover:text-[#0081f1] transition-all duration-300 ease-linear">Best feature offered by Lexxa</p>
                <p className="text-base mb-2 text-[#475467] hover:text-[#0081f1] transition-all duration-300 ease-linear">conclusion: Choose Lexxa</p>
                <p className="text-base mb-2 text-[#475467] hover:text-[#0081f1] transition-all duration-300 ease-linear">FAQs</p> */}
                        </div>
                        <div className="flex-1">
                            {/* <p className="text-base md:text-base text-[#475467] pb-4 border-b border-b-[#475467] mb-6 md:mb-8 lg:mb-10">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore, quis deserunt praesentium autem excepturi quod! Eaque consequuntur incidunt vero excepturi magni assumenda accusantium debitis doloribus natus in, distinctio deserunt. Aspernatur.
                </p> */}
                            <div
                                className={`min-h-[320px] ${
                                    blog.content.length == 0 ? "justify-center items-center flex" : ""
                                }`}
                            >
                                {blog.content.length > 0 ? (
                                    blog.content.map((item, index) => {
                                        return (
                                            <div key={index} className="mb-6 md:mb-8 lg:mb-10">
                                                <p className="text-xl md:text-2xl lg:text-2xl mb-2 md:mb-4 lg:mb-6 font-semibold">
                                                    {item.paragraphTitle}
                                                </p>
                                                <p className="text-[#475467] text-sm md:text-base mb-2 md:mb-4 lg:mb-6">
                                                    {item.paragraphText}
                                                </p>
                                                {item.imageFile && (
                                                    <img
                                                        style={{ aspectRatio: "2/1.5" }}
                                                        src={item.imageFile}
                                                        alt="img"
                                                        className="w-full mb-4"
                                                    />
                                                )}
                                            </div>
                                        );
                                    })
                                ) : (
                                    <p className="text-xl md:text-2xl lg:text-3xl text-[#475467]">
                                        No content to display
                                    </p>
                                )}
                            </div>
                            {/* <div className="mb-6 md:mb-8 lg:mb-10">
                    <p className="text-xl md:text-2xl lg:text-2xl mb-2 md:mb-4 lg:mb-6 font-semibold">Introduction</p>
                    <p className="text-[#475467] text-sm md:text-base mb-2 md:mb-4 lg:mb-6">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius impedit accusantium quis, quia ipsa aut cum cumque hic culpa eveniet. Ad vitae molestiae molestias aspernatur dicta doloremque, quam aliquid hic doloribus totam explicabo unde perferendis aperiam ex ipsam impedit quo numquam veritatis accusantium laudantium optio fuga beatae. Nesciunt consequuntur suscipit iste saepe delectus quod reprehenderit quos neque et provident, nihil deleniti odit! Cum illum accusamus maiores ad possimus commodi iste error iusto sunt incidunt dolores laboriosam ut eligendi, laudantium nobis modi alias quia, inventore laborum velit. Explicabo corrupti similique id sint consequatur dignissimos fuga odio blanditiis, asperiores dolore mollitia quos atque culpa enim adipisci, officia debitis eos placeat harum excepturi totam pariatur. Sint inventore necessitatibus earum at, tempore consequatur architecto minima facere ea nostrum a animi maiores fuga cumque accusamus hic consequuntur qui obcaecati reprehenderit quam nisi expedita consectetur pariatur? Officiis aliquam earum obcaecati perferendis molestias iusto placeat, corrupti eos.</p>
                    <p className="text-[#475467] text-sm md:text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. In perspiciatis facilis, odio quod cumque ducimus at molestias deleniti voluptatem praesentium quia iusto reiciendis animi accusamus laudantium repellat unde vel omnis explicabo rem ab doloremque a quisquam. Nostrum deserunt impedit animi nulla voluptatum enim nesciunt sunt deleniti blanditiis eum optio quis nisi cupiditate magnam temporibus consequuntur sapiente, eos consectetur velit esse expedita accusantium quos sint! Eius, porro ab doloribus vitae similique dolores ea necessitatibus maiores voluptatum vero molestiae. Sapiente, voluptas commodi, delectus hic, nam dolor velit rerum odit debitis blanditiis molestiae in esse error quasi facere molestias iure. Saepe mollitia distinctio beatae. Doloribus quisquam expedita odio possimus voluptas hic eligendi amet deleniti beatae repudiandae, fuga maxime libero excepturi id laudantium repellendus velit cupiditate exercitationem ab earum aut, soluta ipsa natus quis. Nulla, libero! Sint maiores impedit hic maxime odit delectus voluptates voluptatem iste provident! Expedita doloremque pariatur saepe recusandae repellat ipsam!</p>
                </div> */}
                            {/* <div className="mb-6 md:mb-8 lg:mb-10">
                    <img style={{aspectRatio: "2/1.5"}} src={blogImg2} alt="img" className="w-full mb-4" />
                    <p className="text-[#475467]">Image courtesy of Laura Davidson via <a href="#">Unsplash</a></p>
                </div>
                <div className="mb-6 md:mb-8 lg:mb-10 border-l-2 border-l-[#6941c6] px-6 py-4">
                    <p className="text-black font-semibold text-xl md:text-2xl mb-4 md:mb-6">
                        “In a world older and more complete than ours they move finished and complete, gifted with extensions of the senses we have lost or never attained, living by voices we shall never hear.”
                    </p>
                    <p className="text-[#475467] text-sm md:text-base"> --Olivia Rhye, Product Designer</p>
                </div> */}
                            {/* <div>
                    <p className="text-xl md:text-2xl lg:text-2xl mb-2 md:mb-4 lg:mb-6 font-semibold">Software and tools</p>
                    <p className="text-[#475467] text-sm md:text-base mb-4 md:mb-6 lg:mb-8">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex accusamus assumenda hic unde id, eligendi reiciendis ipsam molestiae laudantium aliquam ad esse distinctio nihil obcaecati necessitatibus sint natus fugit alias quidem impedit consectetur ducimus? Quae at facilis deleniti molestias placeat beatae laboriosam quibusdam tenetur, cupiditate quod nemo voluptate porro dolores quidem voluptatibus minus earum adipisci. Suscipit, numquam possimus excepturi incidunt, rem facere laudantium, est natus velit voluptatibus similique aperiam in accusantium? Corrupti sapiente nihil quae necessitatibus praesentium, amet optio cumque impedit temporibus explicabo aspernatur aliquid unde, illo, cupiditate quis dignissimos perspiciatis alias sed eligendi. Quidem mollitia nobis sit perspiciatis illum suscipit fugit inventore harum nostrum animi, dolorem et! Ut qui debitis, dolorum corporis voluptatibus dolorem vitae quo nulla vero quod ratione molestias, suscipit atque officiis, architecto quae autem excepturi impedit tempora delectus id laudantium dolore doloribus modi. Laborum ab maiores placeat rerum possimus enim, minima sit corrupti nulla quod voluptates.</p>
                </div> */}
                            {/* <div className="pl-4 md:pl-6 lg:pl-8 pb-8 md:pb-10 lg:pb-14 border-b border-b-[#d0d5dd]">
                    <p className="text-xl md:text-2xl lg:text-2xl mb-2 md:mb-4 lg:mb-6 font-semibold">Conclusion</p>
                    <div className="flex flex-col gap-4 md:gap-4 lg:gap-6">
                        <p className="text-[#475467] text-sm md:text-base">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt ea provident reiciendis repudiandae incidunt temporibus maxime recusandae veritatis voluptas architecto facilis minima illum excepturi sunt atque rem laudantium labore, sequi ad! Aut ex aperiam vitae, libero at provident veniam velit laudantium quaerat odit esse omnis! Molestiae rem labore rerum dolore magnam quos minus maxime provident sunt, quibusdam optio obcaecati ipsum aperiam nostrum id necessitatibus quae, omnis reiciendis, beatae voluptatum repellat tempora unde minima officiis. Eaque incidunt mollitia, accusamus libero vero voluptatem commodi doloribus quae necessitatibus a consequuntur velit, officia quibusdam optio ab praesentium atque. Dicta provident assumenda libero iure recusandae.</p>
                        <p className="text-[#475467] text-sm md:text-base">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt ea provident reiciendis repudiandae incidunt temporibus maxime recusandae veritatis voluptas architecto facilis minima illum excepturi sunt atque rem laudantium labore, sequi ad! Aut ex aperiam vitae, libero at provident veniam velit laudantium quaerat odit esse omnis! Molestiae rem labore rerum dolore magnam quos minus maxime provident sunt, quibusdam optio obcaecati ipsum aperiam nostrum id necessitatibus quae, omnis reiciendis, beatae voluptatum repellat tempora unde minima officiis. Eaque incidunt mollitia, accusamus libero vero voluptatem commodi doloribus quae necessitatibus a consequuntur velit, officia quibusdam optio ab praesentium atque. Dicta provident assumenda libero iure recusandae.</p>
                        <p className="text-[#475467] text-sm md:text-base">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt ea provident reiciendis repudiandae incidunt temporibus maxime recusandae veritatis voluptas architecto facilis minima illum excepturi sunt atque rem laudantium labore, sequi ad! Aut ex aperiam vitae, libero at provident veniam velit laudantium quaerat odit esse omnis! Molestiae rem labore rerum dolore magnam quos minus maxime provident sunt, quibusdam optio obcaecati ipsum aperiam nostrum id necessitatibus quae, omnis reiciendis, beatae voluptatum repellat tempora unde minima officiis. Eaque incidunt mollitia, accusamus libero vero voluptatem commodi doloribus quae necessitatibus a consequuntur velit, officia quibusdam optio ab praesentium atque. Dicta provident assumenda libero iure recusandae.</p>
                        <p className="text-[#475467] text-sm md:text-base">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt ea provident reiciendis repudiandae incidunt temporibus maxime recusandae veritatis voluptas architecto facilis minima illum excepturi sunt atque rem laudantium labore, sequi ad! Aut ex aperiam vitae, libero at provident veniam velit laudantium quaerat odit esse omnis! Molestiae rem labore rerum dolore magnam quos minus maxime provident sunt, quibusdam optio obcaecati ipsum aperiam nostrum id necessitatibus quae, omnis reiciendis, beatae voluptatum repellat tempora unde minima officiis. Eaque incidunt mollitia, accusamus libero vero voluptatem commodi doloribus quae necessitatibus a consequuntur velit, officia quibusdam optio ab praesentium atque. Dicta provident assumenda libero iure recusandae.</p>
                    </div>
                </div> */}
                            {/* <div className="mt-4 md:mt-6 lg:mt-8 flex flex-col md:flex-row justify-between items-center">
                    <div className="flex flex-row gap-3 md:gap-5 lg:gap-7 items-center">
                        <img src={avatar} alt="img" />
                        <div>
                            <p className="text-base md:text-xl font-semibold text-black">Olivia Rhye</p>
                            <p className="text-[#475467] text-sm md:text-base">Product Designer, Untitled</p>
                        </div>
                    </div>
                    <div className="flex flex-row gap-4 items-center">
                        <div className="px-3 py-2 rounded-md border border-[#d0d5dd] flex flex-row justify-center items-center gap-2">
                            <LuCopy className="text-xl" />
                            <p className="text-base font-semibold">Copy link</p>
                        </div>
                        <div className="p-2 rounded-md border border-[#d0d5dd] flex flex-row justify-center items-center">
                            <FaXTwitter  className="text-xl text-[#98a2b3]" />
                        </div>
                        <div className="p-2 rounded-md border border-[#d0d5dd] flex flex-row justify-center items-center">
                            <FaFacebook className="text-xl text-[#98a2b3]" />
                        </div>
                        <div className="p-2 rounded-md border border-[#d0d5dd] flex flex-row justify-center items-center">
                            <FaLinkedin className="text-xl text-[#98a2b3]" />
                        </div>

                    </div>
                </div> */}
                        </div>
                        <div className="md:w-[175px] lg:w-[200px] bg-[#0081f1] self-start rounded-md py-3 md:py-4 lg:py-5 px-2 md:px-3 lg:px-4">
                            <div>
                                <img
                                    style={{ aspectRatio: "2/1.5" }}
                                    className="rounded-sm md:rounded-md lg:rounded-lg block w-full shadow-inner text-[#0081f1] mb-4 md:mb-6"
                                    src={
                                        blog.coverImage
                                            ? blog.coverImage
                                            : blog.content[1]
                                            ? blog.content[1].imageFile
                                            : undefined
                                    }
                                    alt="img"
                                />
                                <p className="text-2xl text-white text-center w-[125px] mx-auto mb-2">
                                    Get started with Lexxa
                                </p>
                                <button className="block mx-auto px-6 py-2 text-white text-base flex flex-row gap-2 bg-black items-center rounded-md">
                                    <p>Book a call</p>
                                    <Suspense
                                        fallback={
                                            <span className="w-5 h-5 inline-block animate-pulse bg-gray-300 rounded-full" />
                                        }
                                    >
                                        <RiArrowRightUpLine className="w-5 h-5" />
                                    </Suspense>
                                </button>
                            </div>
                        </div>
                    </section>
                    <section className="pt-6 md:pt-8 lg:pt-10 xl:pt-12 bg-[#f9f9f9]">
                        <p className="text-xl md:text-2xl lg:text-3xl text-black mb-2 md:mb-4 lg:mb-6 font-semibold">
                            Keep Reading
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-8">
                            {articles[currentIndex].map((item, index) => {
                                if (index <= activeIndex || number == 2) return null;
                                number++;
                                return (
                                    <BlogsComp
                                        key={index}
                                        id={item._id}
                                        coverPic={item.coverImage}
                                        title={item.title}
                                        profilePic={avatar2}
                                        name={item.author}
                                        date={item.date}
                                        time={
                                            item.content[0] !== undefined
                                                ? calculateReadingTime(item.content[0].paragraphText)
                                                : calculateReadingTime("")
                                        }
                                        topics={item.tags.split(", ")}
                                        index={index}
                                    />
                                );
                            })}
                        </div>
                    </section>
                </>
            ) : (
                <>
                    <div className="w-full h-[200px] md:h-[300px] lg:h-[400px] flex justify-center items-center">
                        <p className="text-xl md:text-2xl font-semibold text-[#475467]">Loading...</p>
                    </div>
                </>
            )}
        </main>
    );
}
