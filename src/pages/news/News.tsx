import  { useEffect, useState } from "react";
import { ArrowLeftOutlined, ArrowRightOutlined, InstagramOutlined, TwitterOutlined, YoutubeOutlined, PlayCircleOutlined } from "@ant-design/icons";
import axios from "axios";
import { Link } from "react-router-dom";
import { Carousel, Skeleton,  Image } from "antd";
import { BASE_URL } from "../../constants/BaseUrl";

interface Blog {
    image: any;
    id: number;
    created_at: any;
    title: string;
    description?: string;
    platform: string;
    author: string;
    url:string
}

const platformIcons: any = {
    instagram: <InstagramOutlined />,
    twitter: <TwitterOutlined />,
    youtube: <YoutubeOutlined />,
    ticktok: <PlayCircleOutlined />,  // Since Ant Design doesn't have a TikTok icon, using PlayCircleOutlined as a placeholder
};

const NewsBlog = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [postData, setPostData] = useState<Blog[]>([]);
    const [socialMediaPosts, setSocialMediaPosts] = useState<Blog[]>([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [filteredPosts, setFilteredPosts] = useState<Blog[]>([]);
    const [latestPosts, setLatestPosts] = useState<Blog[]>([]);

    const loadPosts = async () => {
        try {
            const [postResponse, socialResponse] = await Promise.all([
                axios.get(BASE_URL + "/api/posts"),
                axios.get(BASE_URL + "/api/social-media"),
            ]);
            setPostData(postResponse.data);
            setSocialMediaPosts(socialResponse.data);
            setFilteredPosts(postResponse.data);
            setLatestPosts(postResponse.data.reverse().slice(0, 6));

        } catch (error) {
            console.error("Error loading posts", error);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        loadPosts();
    }, []);

    useEffect(() => {
        setFilteredPosts(
            postData.filter(post =>
                post.title.toLowerCase().includes(searchQuery.toLowerCase())
            )
        );
    }, [searchQuery, postData]);

    return (
        <div>
            <div className="relative w-full h-64 flex items-center justify-center">
            <img
                    src="/topbar.jpg"
                    alt="Background Image"
                   // Ensures the image covers the container
                    className="z-0 opacity-50 h-64 w-full object-cover"
                    // preview={false}
                />
                <div className="absolute z-10 text-white">
                    <h1 className="border-2 border-r-0 border-green-50 border-b-0 border-l-2  border-t-0 h-10 px-3 text-center place-content-center font-normal text-sm">We are MOL AGRIBUSINESS</h1>
                    <h1 className="font-bold text-2xl">Latest News and Blogs</h1>
                </div>
            </div>

            <section className="max-w-screen-xl mx-auto mt-20 mb-10">
                <div className="px-10 grid grid-cols-1 lg:grid-cols-3 sm:grid-cols-2 gap-5">
                    <div className="col-span-2">
                        <div className=" block sm:block lg:hidden">
                            <div className="mt-4 flex items-center gap-2 sm:flex-row sm:gap-3 bg-white rounded-lg p-2 shadow-sm">
                                <div className="flex-1">
                                    <input
                                        type="text"
                                        id="hero-input"
                                        name="hero-input"
                                        className="py-1 px-4 text-sm block w-full border-2 rounded-lg border-green-500 focus:outline-none focus:border-green-700"
                                        placeholder="Search"
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                    />
                                </div>
                                <button
                                    className="text-sm whitespace-nowrap px-4 py-1 bg-green-700 text-white font-semibold rounded-lg hover:bg-green-600 focus:outline-none"
                                    onClick={() => console.log("Search clicked")}
                                >
                                    Search
                                </button>
                            </div>
                        </div>

                        {
                            searchQuery == "" && (
                                <div className="relative mt-10 xl:ml-28 mb-5">
                                    {isLoading ? (
                                        <Skeleton.Button active style={{ width: "100%", height: 300 }}  className="mt-10 xl:ml-28"/>
                                    ) : (
                                        <Carousel autoplay>
                                            {socialMediaPosts.map(post => (
                                                <div key={post.id} className="relative">
                                                    <Image
                                                        src={post.image}
                                                        alt="Social Media Image"
                                                        height={300}
                                                        width={780}
                                                        className="rounded-lg overflow-hidden h-[300px] opacity-60 w-[780px] object-cover"
                                                    />
                                                    <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-4">
                                                        <div className="bg-white bg-opacity-70 p-4 rounded-lg shadow-lg max-w-lg w-full">
                                                            <div className="flex items-center justify-between mb-2">
                                                                <div className="flex items-center space-x-2">
                                                                    {platformIcons[post.platform]}
                                                                    <p className="text-xs italic">{new Date(post.created_at).toLocaleDateString()}</p>
                                                                    <p className="text-xs italic">By {post.author}</p>
                                                                </div>
                                                                <div className="flex space-x-2">
                                                                    <ArrowLeftOutlined />
                                                                    <ArrowRightOutlined />
                                                                </div>
                                                            </div>
                                                            <h2 className="font-bold text-lg">{post.title}</h2>
                                                            <p className="font-light text-sm">{post?.description}</p>
                                                            <p className="cursor-pointer hover:text-teal-800 text-xs text-green-900 mt-2"
                                                            onClick={() =>  window.location.href = post.url }
                                                            >
                                                                Read More on {post.platform}....
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </Carousel>
                                    )}
                                </div>
                            )}


                        {isLoading ? (
                            <Skeleton active paragraph={{ rows: 4 }} style={{ width: "70%" }}   className="mt-10 xl:ml-28"/>
                        ) : (
                            filteredPosts.map(post => (
                                <div key={post.id} className="flex flex-col items-center mt-5 ">
                                    <div className="flex flex-col lg:flex-row md:flex-row sm:flex-col items-center gap-6">
                                        <div>
                                            <Image
                                                src={post.image}
                                                alt="Post Image"
                                                height={265}
                                                width={380}
                                                className="rounded-lg overflow-hidden h-60"
                                            />
                                        </div>
                                        <div className="flex flex-col w-80 gap-3">
                                            <span className="flex flex-col lg:flex-row md:flex-row sm:flex-col justify-between text-xs italic gap-10">
                                                <p>{new Date(post.created_at).toLocaleDateString()}</p>
                                                <p>By {post.author}</p>
                                            </span>
                                            <Link to={`/news/${post.id}`} className="text-black dark:text-white">
                                            <p className="font-bold">{post.title}</p>
                                            </Link>
                                            <p className="font-light">Read our blog on {post.title} 3 min read </p>
                                            <Link to={`/news/${post.id}`}>
                                        <p className="cursor-pointer hover:text-teal-800 text-xs">Read More..</p>
                                        </Link>
                                        </div>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>

                    <div className="col-span-1 md:col-span-2 lg:col-span-1 sm:col-span-2">
                        <div className=" hidden sm:hidden lg:block">
                        <div className="mt-4 flex items-center gap-2 sm:flex-row sm:gap-3 bg-white rounded-lg p-2 shadow-sm">
                            <div className="flex-1">
                                <input
                                    type="text"
                                    id="hero-input"
                                    name="hero-input"
                                    className="py-1 px-4 text-sm block w-full border-2 rounded-lg border-green-500 focus:outline-none focus:border-green-700"
                                    placeholder="Search"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                />
                            </div>
                            <button
                                className="text-sm whitespace-nowrap px-4 py-1 bg-green-700 text-white font-semibold rounded-lg hover:bg-green-600 focus:outline-none"
                                onClick={() => console.log("Search clicked")}
                            >
                                Search
                            </button>
                        </div>
                        </div>


                        <div className="shadow-lg rounded-lg shadow-green-50 p-5 mt-5">
                            <p className="font-bold text-green-900 mb-1">Categories</p>
                            <span className="flex justify-between mb-1">
                                <p>Organic Farming</p>
                                <p>30</p>
                            </span>
                            <span className="flex justify-between mb-1">
                                <p>Sustainable Agriculture</p>
                                <p>40</p>
                            </span>
                            <span className="flex justify-between mb-1">
                                <p>AgriTech Innovations</p>
                                <p>50</p>
                            </span>
                            <span className="flex justify-between mb-1">
                                <p>Market Trends</p>
                                <p>20</p>
                            </span>
                            <span className="flex justify-between mb-1">
                                <p>Policy and Regulations</p>
                                <p>25</p>
                            </span>
                            <span className="flex justify-between mb-1">
                                <p>Success Stories</p>
                                <p>15</p>
                            </span>
                        </div>

                        <div className="shadow-lg rounded-lg shadow-green-50 p-5 mt-4">
                            <p className="font-bold text-green-900 mb-1">Latest Posts</p>
                            {isLoading ? (
                                <Skeleton active paragraph={{ rows: 6 }} />
                            ) : (
                                latestPosts.map((post:any) => (
                                    <div key={post.id} className="mt-2">
                                        <span className="flex justify-between text-xs italic pr-16">
                                                       <p>{new Date(post.created_at).toLocaleDateString()}</p>
                                            <p>By {post.author}</p>
                                        </span>
                                        <p className="font-normal text-xs">{post.title}</p>
                                        {/*<p className="font-light">{post.description}</p>*/}
                                        <Link to={`/news/${post.id}`}>
                                        <p className="cursor-pointer hover:text-teal-800 text-xs">Read More..</p>
                                        </Link>
                                       
                                    </div>
                                ))
                            )}
                        </div>

                        <div className="shadow-lg rounded-lg shadow-green-50 p-5 mt-4">
                            <p className="font-bold text-green-900 mb-1">Related Articles</p>
                            <div className="flex items-center gap-4 mt-3">
                                <div>
                                    <p className="font-bold text-sm">10 Ways to Improve Soil Quality</p>
                                    <p className="text-xs italic text-gray-500">By AgriExpert123 | Published 15 Aug 2023</p>
                                    <p className="text-sm">Learn effective methods to enhance soil fertility and health for better crop yields.</p>
                                    <a href="#" className="text-xs text-green-900 hover:text-teal-800 mt-1 block">Read More</a>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 mt-3">
                                <div>
                                    <p className="font-bold text-sm">The Future of Vertical Farming</p>
                                    <p className="text-xs italic text-gray-500">By FarmTechInsights | Published 20 Aug 2023</p>
                                    <p className="text-sm">Explore the advancements and potential of vertical farming in sustainable agriculture.</p>
                                    <a href="#" className="text-xs text-green-900 hover:text-teal-800 mt-1 block">Read More</a>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 mt-3">
                                <div>
                                    <p className="font-bold text-sm">Advantages of Organic Farming</p>
                                    <p className="text-xs italic text-gray-500">By EcoFarmersOrg | Published 25 Aug 2023</p>
                                    <p className="text-sm">Discover the benefits of organic farming practices for environmental sustainability and health.</p>
                                    <a href="#" className="text-xs text-green-900 hover:text-teal-800 mt-1 block">Read More</a>
                                </div>
                            </div>
                        </div>


                        <div className="shadow-lg rounded-lg shadow-green-50 p-5 mt-4">
                            <p className="font-bold text-green-900 mb-1">Tags</p>
                            <div className="flex justify-start gap-3 flex-wrap mt-6">
                                <span className="border-[1px] border-gray-500 p-1 rounded-lg  text-xs">Farm</span>
                                <span className="border-[1px] border-gray-500 p-1 rounded-lg text-xs">Organic</span>
                                <span className="border-[1px] border-gray-500 p-1 rounded-lg text-xs">Agribusiness</span>
                                <span className="border-[1px] border-gray-500 p-1 rounded-lg text-xs">Agriculture</span>
                                <span className="border-[1px] border-gray-500 p-1 rounded-lg text-xs">Agriculture technology</span>
                                <span className="border-[1px] border-gray-500 p-1 rounded-lg text-xs">Food</span>
                                <span className="border-[1px] border-gray-500 p-1 rounded-lg text-xs">Veggies</span>
                                <span className="border-[1px] border-gray-500 p-1 rounded-lg text-xs">Modern Farming</span>
                            </div>
                        </div>

                        {/*<div className="mt-10 flex flex-col justify-center">*/}
                        {/*    <p className="font-bold text-green-900 text-base text-center mb-5">For Our Best Sellers</p>*/}
                        {/*    <Button*/}
                        {/*        type="submit"*/}
                        {/*        className="bg-[#40574F] py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-xl text-white hover:bg-[#40574F]/90 disabled:opacity-50 disabled:pointer-events-none"*/}
                        {/*    >*/}
                        {/*        Contact MolAgribusiness*/}
                        {/*    </Button>*/}
                        {/*</div>*/}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default NewsBlog;
