import { Carousel, Image } from "antd";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Article from "../../components/HomeArticle";
import FollowUs from "../../components/FollowUs";
import { CardArticle } from "../../components/Articles";
import axios from "axios";
import Hero from "../../components/Hero";
import { BASE_URL } from "../../constants/BaseUrl";
import {
  ArrowRight,
  CheckCircle,
  Cpu,
  Globe,
  Leaf,
  Play,
  Sprout,
  Tractor,
  TrendingUp,
  Trophy,
  UserPlus,
} from "lucide-react";
import { useQuery } from "@tanstack/react-query";
const products = [
  {
    id: 1,
    name: "Tomatoes",
    pic: "/farms.jpg",
  },
  {
    id: 2,
    name: "Cassava",
    pic: "/about1.jpg",
  },
  {
    id: 3,
    name: "Maize",
    pic: "/about.jpg",
  },
  {
    id: 4,
    name: "Tomatoes",
    pic: "/IMG-20240529-WA0024.jpg",
  },
  {
    id: 5,
    name: "Tomatoes",
    pic: "/crop.jpeg",
  },
  {
    id: 6,
    name: "Tomatoes",
    pic: "/IMG-20240529-WA0018.jpg",
  },
  // {
  //   id: 7,
  //   name: "Cassava",
  //   pic: "/IMG-20240529-WA0021.jpg",
  // },
  {
    id: 8,
    name: "Maize",
    pic: "/topbar2.jpg",
  },
  {
    id: 8,
    name: "Tomatoes",
    pic: "/IMG-20240529-WA0023.jpg",
  },
  {
    id: 10,
    name: "Tomatoes",
    pic: "/IMG-20240529-WA0030.jpg",
  },
];

interface blogTs {
  image: any;
  id: number;
  created_at: any;
  title: string;
  description?: string;
  platform: string;
  author: string;
}

const fetchPosts = async (): Promise<blogTs[]> => {
  const response = await axios.get(`${BASE_URL}/api/posts`);
  return response.data;
};

export default function Home() {
  const [chunkSize, setChunkSize] = useState(4);
  const [productChunks, setProductChunks] = useState([]);

  const { data: postData = [] } = useQuery<blogTs[]>({
    queryKey: ["posts"],
    queryFn: fetchPosts,
    staleTime: 1000 * 60 * 5, // Cache for 5 minutes
  });



  useEffect(() => {
    const updateChunkSize = () => {
      const screenWidth = window.innerWidth;
      let newChunkSize;

      if (screenWidth >= 1200) {
        newChunkSize = 5;
      } else if (screenWidth >= 992) {
        newChunkSize = 3;
      } else if (screenWidth >= 768) {
        newChunkSize = 2;
      } else {
        newChunkSize = 1;
      }

      setChunkSize(newChunkSize);
    };

    updateChunkSize();
    window.addEventListener("resize", updateChunkSize);

    return () => {
      window.removeEventListener("resize", updateChunkSize);
    };
  }, []);

  useEffect(() => {
    const chunks: any = [];
    for (let i = 0; i < products.length; i += chunkSize) {
      chunks.push(products.slice(i, i + chunkSize));
    }
    setProductChunks(chunks);
  }, [chunkSize, products]);

  const fadeInUp = {
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
    hidden: { opacity: 0, scale: 0.6 },
  };

  const zoomIn = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };

  return (
    <div className="">
      <motion.div
        className=""
        // ref={ref}
        variants={fadeInUp}
        // initial="hidden"
        // animate={control}
      >
        <Hero />
      </motion.div>

      <div className="relative bg-gradient-to-br from-emerald-50 via-white to-emerald-100 dark:from-emerald-900/30 dark:via-emerald-900/10 dark:to-emerald-900/30">
        <div className="max-w-screen-2xl mx-auto px-4 py-16 md:py-24">
          {/* Hero Section */}
          <div className="flex flex-row items-center gap-4 lg:gap-7">
            <div className="w-full relative group">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl transform group-hover:-translate-y-2 transition-all duration-300">
                <Image
                  src="/new/p1.jpeg"
                  width={700}
                  height={600}
                  alt="Sustainable Agriculture"
                  className="object-cover w-full h-[500px]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/50 via-transparent to-transparent" />
              </div>

              {/* Floating Stat Card */}
              <div className="absolute -bottom-6 left-6 backdrop-blur-sm bg-white/80 dark:bg-slate-800/90 p-4 rounded-xl shadow-lg flex items-center gap-4 border border-emerald-100/30 animate-float">
                <div className="bg-emerald-500/10 p-3 rounded-lg">
                  <Trophy className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-emerald-800 dark:text-emerald-300">
                    100+
                  </div>
                  <div className="text-sm text-emerald-700 dark:text-emerald-200">
                  Hectares Cultivated
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-emerald-900 dark:text-white">
                <span className="bg-gradient-to-r from-emerald-600 to-emerald-400 dark:from-emerald-400 dark:to-emerald-300 text-transparent bg-clip-text">
                Building a Future from the Soil Up
                </span>
                <br />
                <span className="text-2xl md:text-3xl font-semibold mt-2 block">
                  Since 2020
                </span>
              </h2>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
                  <h3 className="text-xl font-semibold text-emerald-800 dark:text-emerald-200">
                   Using technology and Innovations in farming
                  </h3>
                </div>

                <p className="text-lg text-emerald-700 dark:text-emerald-300 leading-relaxed">
                I grow on 100 hectares using practical toold and technology. I'm here to share my journey and connect with partners who believe in meaningful growth.
                </p>

                <div className="grid grid-cols-2 gap-4">
                  {[
               { icon: Leaf, text: "100+ Hectares of Cultivation" },
               { icon: Tractor, text: "3 Tractors in Operation" },
               { icon: TrendingUp, text: "Steady Year-on-Year Growth" },
               { icon: UserPlus, text: "Open to Partnerships & Support" },
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 p-3 bg-white/50 dark:bg-slate-800/50 rounded-lg"
                    >
                      <item.icon className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                      <span className="text-sm font-medium text-emerald-800 dark:text-emerald-300">
                        {item.text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Media CTA */}
              <div className="mt-8 p-6 bg-white/80 dark:bg-slate-800/80 rounded-xl border border-emerald-100/30 backdrop-blur-sm">
                <div className="flex items-center gap-4">
                  <button className="group relative flex-shrink-0">
                    <div className="w-16 h-16 bg-emerald-500 rounded-xl flex items-center justify-center transform transition-all hover:scale-105">
                      <Play className="w-8 h-8 text-white ml-1" />
                    </div>
                  </button>
                  <div>
                    <div className="text-lg font-semibold text-emerald-800 dark:text-emerald-300">
                      Explore Our Impact Story
                    </div>
                    <p className="text-sm text-emerald-700 dark:text-emerald-400 mt-1">
                      Watch how we're revolutionizing agriculture across
                      continents
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mission Section */}
          <motion.div
            className="mt-24 bg-gradient-to-r from-emerald-500 to-emerald-600 dark:from-emerald-700 dark:to-emerald-800 rounded-2xl p-8 md:p-12 shadow-xl"
            variants={fadeInUp}
          >
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <h3 className="text-2xl md:text-3xl font-bold text-white">
                Cultivating Tomorrow's Harvest Today
              </h3>

              <div className="grid md:grid-cols-3 gap-6 text-left">
                {[
                  {
                    title: "Grounded in Nature",
                    content:
                      "Practicing simple, eco-friendly farming to protect and nourish the land.",
                    icon: Sprout,
                  },
                  {
                    title: "Tools That Work",
                    content:
                      "Using tractors and practical equipment to boost harvests and efficiency.",
                    icon: Cpu,
                  },
                  {
                    title: "Open to Partnership",
                    content:
                      "Looking to connect, grow together, and tell a bigger story through collaboration.",
                    icon: Globe,
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="p-6 bg-white/10 rounded-xl backdrop-blur-sm"
                  >
                    <item.icon className="w-8 h-8 text-emerald-100 mb-4" />
                    <h4 className="text-lg font-semibold text-white mb-2">
                      {item.title}
                    </h4>
                    <p className="text-sm text-emerald-100/90">
                      {item.content}
                    </p>
                  </div>
                ))}
              </div>

              <button className="mx-auto px-8 py-3 bg-white text-emerald-700 rounded-xl font-semibold hover:bg-emerald-50 hover:shadow-lg transition-all flex items-center gap-2">
                Explore Our Solutions
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      <section
        className="relative bg-cover bg-center  "
        style={{ backgroundImage: `url('/vast_farm.webp')` }}
      >
        <div className="max-w-screen-2xl mx-auto py-20 px-4 sm:px-6 lg:px-8">
          <div className="mb-16 space-y-4">
            <h3 className="text-2xl md:text-3xl font-bold text-emerald-900 dark:text-emerald-100">
              Welcome to MOL Agribusines
            </h3>
            <p className="text-lg text-emerald-800 dark:text-emerald-200 font-medium max-w-2xl">
              Pioneering Agricultural Innovation Through Cutting-Edge Technology
            </p>
          </div>

          <div className="flex overflow-x-auto pb-8 scrollbar-hide md:grid md:grid-cols-3 md:gap-8 md:overflow-visible">
            {/* Card 1 - Modern Farming */}
            <div
              className="flex-shrink-0 w-80 md:w-full bg-white dark:bg-slate-800 rounded-2xl shadow-xl mx-2 md:mx-0 
                     transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <div className="relative h-48 overflow-hidden rounded-t-2xl">
                <img
                  src="/mordern.jpg"
                  alt="Modern farming solutions"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6 space-y-4">
                <h2 className="text-xl font-bold text-emerald-900 dark:text-white border-l-4 border-emerald-500 pl-3">
                  Smart Farming Solutions
                </h2>
                <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                  Revolutionize your operations with IoT-enabled precision
                  agriculture tools that increase yield by up to 40% while
                  reducing resource consumption. Our integrated farm management
                  system provides real-time analytics for data-driven decisions.
                </p>
                <button
                  className="text-emerald-600 dark:text-emerald-400 font-semibold text-sm flex items-center 
                            hover:underline group"
                >
                  Explore Innovations
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            {/* Card 2 - Advanced Equipment */}
            <div
              className="flex-shrink-0 w-80 md:w-full bg-white dark:bg-slate-800 rounded-2xl shadow-xl mx-2 md:mx-0 
                     transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <div className="relative h-48 overflow-hidden rounded-t-2xl">
                <img
                  src="/tractor.jpg"
                  alt="Advanced farm machinery"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6 space-y-4">
                <h2 className="text-xl font-bold text-emerald-900 dark:text-white border-l-4 border-emerald-500 pl-3">
                  Next-Gen Agricultural Machinery
                </h2>
                <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                  Our autonomous farming equipment with AI-powered analytics
                  reduces operational costs by 30% while maintaining 99.8%
                  operational efficiency. Featuring GPS-guided precision and
                  predictive maintenance systems.
                </p>
                <button
                  className="text-emerald-600 dark:text-emerald-400 font-semibold text-sm flex items-center 
                            hover:underline group"
                >
                  View Equipment Catalog
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            {/* Card 3 - Crop Optimization */}
            <div
              className="flex-shrink-0 w-80 md:w-full bg-white dark:bg-slate-800 rounded-2xl shadow-xl mx-2 md:mx-0 
                     transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <div className="relative h-48 overflow-hidden rounded-t-2xl">
                <img
                  src="/topbar.jpg"
                  alt="Crop yield optimization"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6 space-y-4">
                <h2 className="text-xl font-bold text-emerald-900 dark:text-white border-l-4 border-emerald-500 pl-3">
                  Yield Maximization Programs
                </h2>
                <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                  Achieve 15-25% higher yields through our integrated crop
                  management system combining soil health monitoring,
                  microclimate analysis, and AI-driven growth optimization
                  strategies.
                </p>
                <button
                  className="text-emerald-600 dark:text-emerald-400 font-semibold text-sm flex items-center 
                            hover:underline group"
                >
                  Optimize Your Harvest
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="md:hidden mt-8 text-center">
            <span className="inline-block h-2 w-20 bg-emerald-100 dark:bg-emerald-900 rounded-full">
              <span className="animate-scroll-indicator block h-full w-1/3 bg-emerald-500 rounded-full"></span>
            </span>
          </div>
        </div>
      </section>

      <motion.div>
        <Article />
      </motion.div>

      <motion.section
        className=" max-w-screen-2xl mx-auto mt-10 px-6"
        initial="hidden"
        animate="visible"
        variants={zoomIn}
      >
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
          {postData?.slice(0, 3).map((card, index) => (
            <CardArticle
              key={index}
              imageSrc={card?.image ? card.image : "/mol logo.png"}
              tag="Blog"
              title={card?.title}
              date={card?.created_at}
              id={card.id}
              link="#"
              view="home"
            />
          ))}
        </div>
      </motion.section>

      <motion.section
        className="mt-20 bg-[#f9fcfd] pb-10 bg-black/10"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
      >
        <div className="max-w-screen-2xl mx-auto mt-20 mb-20">
          <h3 className="text-lg font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent py-10 px-10">
            Our Production
          </h3>
          <Carousel dots arrows autoplay className="px-10">
            {productChunks.map((chunk: any, index: any) => (
              <div key={index}>
                <div className="flex gap-6 justify-center items-center">
                  {chunk?.map((product: any, idx: any) => (
                    <div key={idx}>
                      <div className="productset">
                        <div className="productsetimg">
                          <img
                            src={product.pic}
                            alt={product.name}
                            className="rounded-lg w-full sm:w-full md:w-full lg:w-64 h-64 object-cover"
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </motion.section>

      <motion.div>
        <FollowUs />
      </motion.div>
    </div>
  );
}
