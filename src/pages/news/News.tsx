import { useEffect, useState } from "react";
import { ArrowLeftOutlined, ArrowRightOutlined, InstagramOutlined, TwitterOutlined, YoutubeOutlined, PlayCircleOutlined } from "@ant-design/icons";
import { Link, useNavigate } from "react-router-dom";
import { Carousel, Skeleton, Image } from "antd";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, Search } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { BASE_URL } from "../../constants/BaseUrl";

interface Blog {
  image: any;
  id: number;
  created_at: any;
  title: string;
  description?: string;
  platform: string;
  author: string;
  url: string;
}

const platformIcons: any = {
  instagram: <InstagramOutlined className="text-pink-600" />,
  twitter: <TwitterOutlined className="text-blue-400" />,
  youtube: <YoutubeOutlined className="text-red-600" />,
  ticktok: <PlayCircleOutlined className="text-black" />,
};

const NewsBlog = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredPosts, setFilteredPosts] = useState<Blog[]>([]);
  const [latestPosts, setLatestPosts] = useState<Blog[]>([]);

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const hoverScale = {
    scale: 1.02,
    transition: { duration: 0.3 }
  };

  const fetchPosts = async () => {
    const response = await axios.get(BASE_URL + "/api/posts");
    return response.data;
  };

  const fetchSocialMedia = async () => {
    const response = await axios.get(BASE_URL + "/api/social-media");
    return response.data;
  };

  const { data: postData = [], isLoading: postsLoading } = useQuery({
    queryKey: ['posts'],
    queryFn: fetchPosts
  });

  const { data: socialMediaPosts = [], isLoading: socialLoading } = useQuery({
    queryKey: ['socialMedia'],
    queryFn: fetchSocialMedia
  });

  useEffect(() => {
    if (postData.length > 0) {
      setFilteredPosts(
        postData.filter((post: Blog) =>
          post.title.toLowerCase().includes(searchQuery.toLowerCase())
        )
      );
      setLatestPosts([...postData].reverse().slice(0, 6));
    }
  }, [searchQuery, postData]);

  const isLoading = postsLoading || socialLoading;

  return (
    <div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="relative w-full h-64 max-h-64 flex items-center justify-center"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/30 to-teal-600/30 z-0 w-full h-64" />
        <img
          src="/topbar.jpg"
          alt="Background Image"
          className="z-0 h-64 w-full object-cover opacity-50"
        />
        <div className="absolute z-10 text-white">
          <h1 className="border-l-2 h-10 px-3 text-center place-content-center font-normal text-sm">
            We are MOL AGRIBUSINESS
          </h1>
          <h1 className="font-bold text-3xl bg-gradient-to-r from-emerald-50 to-teal-50 bg-clip-text text-transparent">
            Latest News and Blogs
          </h1>
        </div>
      </motion.div>

      <section className="max-w-screen-2xl mx-auto py-16 px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="col-span-1 lg:col-span-2">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="lg:hidden mb-6"
            >
              <div className="flex items-center gap-2 bg-white dark:bg-gray-800 rounded-lg p-3 shadow-md">
                <div className="flex-1 relative">
                  <input
                    type="text"
                    id="mobile-search"
                    name="mobile-search"
                    className="py-2 px-4 pl-10 text-sm block w-full border rounded-full border-emerald-300 focus:border-emerald-500 focus:ring focus:ring-emerald-200 focus:ring-opacity-50 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                    placeholder="Search articles..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
                </div>
                <motion.button
                  whileHover={hoverScale}
                  className="group bg-gradient-to-r from-emerald-600 to-teal-600 px-4 py-2 rounded-full text-white text-sm font-medium shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/40 transition-shadow"
                >
                  Search
                </motion.button>
              </div>
            </motion.div>

            {searchQuery === "" && (
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="mb-10"
              >
                <div className="relative overflow-hidden rounded-2xl shadow-xl">
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-100 to-teal-100 dark:from-emerald-900/20 dark:to-teal-900/20 rounded-2xl blur-3xl opacity-30" />
                  {isLoading ? (
                    <div className="w-full h-[300px] flex items-center justify-center bg-white dark:bg-gray-800 rounded-2xl">
                      <Skeleton.Image active style={{ width: "100%", height: 280, borderRadius: '1rem' }} />
                    </div>
                  ) : (
                    <Carousel 
                      autoplay 
                      dotPosition="bottom"
                      className="rounded-2xl overflow-hidden"
                    >
                      {socialMediaPosts.map((post: Blog) => (
                        <div key={post.id} className="relative h-[300px]">
                          <Image
                            src={post.image}
                            alt="Social Media Image"
                            className=" object-cover rounded-none"
                            preview={false}
                          />
                          <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center">
                            <motion.div 
                              whileHover={hoverScale}
                              className="bg-white dark:bg-gray-800 bg-opacity-90 dark:bg-opacity-90 p-6 rounded-xl shadow-lg max-w-lg w-full"
                            >
                              <div className="flex items-center justify-between mb-3">
                                <div className="flex items-center space-x-2">
                                  <span className="p-1 rounded-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white">
                                    {platformIcons[post.platform]}
                                  </span>
                                  <p className="text-xs text-gray-500 dark:text-gray-400 flex items-center">
                                    <Calendar className="w-3 h-3 mr-1" />
                                    {new Date(post.created_at).toLocaleDateString()}
                                  </p>
                                  <p className="text-xs text-gray-500 dark:text-gray-400">By {post.author}</p>
                                </div>
                                <div className="flex space-x-2">
                                  <ArrowLeftOutlined className="text-emerald-600" />
                                  <ArrowRightOutlined className="text-emerald-600" />
                                </div>
                              </div>
                              <h2 className="font-bold text-xl bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                                {post.title}
                              </h2>
                              <p className="text-gray-600 dark:text-gray-300 my-2">{post?.description}</p>
                              <a
                                href={post.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center text-emerald-600 hover:text-emerald-700 font-medium text-sm"
                              >
                                Read More on {post.platform}
                                <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                              </a>
                            </motion.div>
                          </div>
                        </div>
                      ))}
                    </Carousel>
                  )}
                </div>
              </motion.div>
            )}

            <div className="space-y-8">
              {isLoading ? (
                Array(3).fill(0).map((_, index) => (
                  <motion.div
                    key={index}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                    className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-md"
                  >
                    <div className="flex flex-col lg:flex-row gap-6">
                      <Skeleton.Image active style={{ width: 380, height: 240, borderRadius: '0.75rem' }} />
                      <div className="flex-1">
                        <Skeleton active paragraph={{ rows: 4 }} />
                      </div>
                    </div>
                  </motion.div>
                ))
              ) : (
                filteredPosts.map((post: Blog) => (
                  <motion.div
                    key={post.id}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                    className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
                  >
                    <div className="flex flex-col lg:flex-row gap-6 ">
                      <div className="relative group lg:w-1/2">
                        <div className="absolute -inset-1 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-1000" />
                        <Image
                          src={post.image}
                          alt="Post Image"
                          className="rounded-lg w-full object-cover transform group-hover:scale-[1.02] transition duration-500"
                          preview={false}
                        />
                      </div>
                      <div className="flex flex-col  gap-3">
                        <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400">
                          <p className="flex items-center">
                            <Calendar className="w-4 h-4 mr-2" />
                            {new Date(post.created_at).toLocaleDateString()}
                          </p>
                          <p>By {post.author}</p>
                        </div>
                        <Link to={`/news/${post.id}`} className="text-xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                          {post.title}
                        </Link>
                        <p className="text-gray-600 dark:text-gray-300">Read our blog on {post.title} - 3 min read</p>
                        <div className="mt-2">
                          <Link to={`/news/${post.id}`}>
                            <motion.button
                              whileHover={hoverScale}
                              className="group text-emerald-600 hover:text-emerald-700 font-medium inline-flex items-center"
                            >
                              Read More
                              <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </motion.button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))
              )}
            </div>
          </div>

          <div className="col-span-1">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="hidden lg:block mb-6"
            >
              <div className="flex items-center gap-2 bg-white dark:bg-gray-800 rounded-lg p-3 shadow-md">
                <div className="flex-1 relative">
                  <input
                    type="text"
                    id="desktop-search"
                    name="desktop-search"
                    className="py-2 px-4 pl-10 text-sm block w-full border rounded-full border-emerald-300 focus:border-emerald-500 focus:ring focus:ring-emerald-200 focus:ring-opacity-50 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                    placeholder="Search articles..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
                </div>
                <motion.button
                  whileHover={hoverScale}
                  className="group bg-gradient-to-r from-emerald-600 to-teal-600 px-4 py-2 rounded-full text-white text-sm font-medium shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/40 transition-shadow"
                >
                  Search
                </motion.button>
              </div>
            </motion.div>

    

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md mb-6"
            >
              <h3 className="font-bold text-lg bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-4">
                Latest Posts
              </h3>
              {isLoading ? (
                <Skeleton active paragraph={{ rows: 6 }} />
              ) : (
                <div className="space-y-4">
                  {latestPosts.map((post: Blog) => (
                    <motion.div 
                      key={post.id} 
                      whileHover={hoverScale}
                      className="pb-3 border-b border-gray-100 dark:border-gray-700 last:border-0"
                    >
                      <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mb-1">
                        <p className="flex items-center">
                          <Calendar className="w-3 h-3 mr-1" />
                          {new Date(post.created_at).toLocaleDateString()}
                        </p>
                        <p>By {post.author}</p>
                      </div>
                      <Link to={`/news/${post.id}`} className="font-medium text-gray-800 dark:text-gray-200 hover:text-emerald-600 dark:hover:text-emerald-400">
                        {post.title}
                      </Link>
                      <div className="mt-1">
                        <Link to={`/news/${post.id}`} className="text-xs inline-flex items-center text-emerald-600 hover:text-emerald-700">
                          Read More
                          <ArrowRight className="ml-1 w-3 h-3 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md mb-6"
            >
              <h3 className="font-bold text-lg bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-4">
                Related Articles
              </h3>
              <div className="space-y-5">
                {[
                  {
                    title: "10 Ways to Improve Soil Quality",
                    author: "AgriExpert123",
                    date: "15 Aug 2023",
                    summary: "Learn effective methods to enhance soil fertility and health for better crop yields."
                  },
                  {
                    title: "The Future of Vertical Farming",
                    author: "FarmTechInsights",
                    date: "20 Aug 2023",
                    summary: "Explore the advancements and potential of vertical farming in sustainable agriculture."
                  },
                  {
                    title: "Advantages of Organic Farming",
                    author: "EcoFarmersOrg",
                    date: "25 Aug 2023",
                    summary: "Discover the benefits of organic farming practices for environmental sustainability and health."
                  }
                ].map((article, index) => (
                  <motion.div 
                    key={index}
                    whileHover={hoverScale}
                    className="pb-4 border-b border-gray-100 dark:border-gray-700 last:border-0"
                  >
                    <h4 className="font-bold text-gray-800 dark:text-gray-200">{article.title}</h4>
                    <p className="text-xs text-gray-500 dark:text-gray-400 my-1">
                      By {article.author} | Published {article.date}
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-300">{article.summary}</p>
                    <a 
                      href="#" 
                      className="mt-2 inline-flex items-center text-xs text-emerald-600 hover:text-emerald-700 font-medium"
                    >
                      Read More
                      <ArrowRight className="ml-1 w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md"
            >
              <h3 className="font-bold text-lg bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-4">
                Tags
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "Farm", "Organic", "Agribusiness", "Agriculture", 
                  "Agriculture technology", "Food", "Veggies", "Modern Farming"
                ].map((tag, index) => (
                  <motion.span
                    key={index}
                    whileHover={hoverScale}
                    className="px-3 py-1 rounded-full text-xs bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 border border-emerald-200 dark:border-emerald-800 text-emerald-700 dark:text-emerald-300 cursor-pointer"
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="mt-8 flex justify-center"
            >
              <motion.button
                whileHover={hoverScale}
                className="group bg-gradient-to-r from-emerald-600 to-teal-600 px-6 py-3 rounded-full text-white text-sm font-medium shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/40 transition-shadow inline-flex items-center"
                onClick={() => navigate("/contact")}
              >
                Contact MOL Agribusiness
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NewsBlog;