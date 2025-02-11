import { Carousel,Image } from "antd";
import  { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Article from "../../components/HomeArticle";
import FollowUs from "../../components/FollowUs";
import  {CardArticle} from "../../components/Articles";
import axios from "axios";
import Hero from "../../components/Hero";
import  { Link } from "react-router-dom";
import {BASE_URL} from "../../constants/BaseUrl";
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
  {
    id: 7,
    name: "Cassava",
    pic: "/IMG-20240529-WA0021.jpg",
  },
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
  author:string;
}

export default function Home() {

  const [chunkSize, setChunkSize] = useState(4);
  const [productChunks, setProductChunks] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);
  const [postData, setPostData] = useState<blogTs[]>([]);
//   const [socoalMeadiaPosts, setSocoalMeadiaPosts] = useState<blogTs[]>([]);
//   const router = useNavigate();

  const LoadPosts =async () => {
    // setIsLoading(true);
    const response = await axios.get(BASE_URL +"/api/posts",);
    // const res = await axios.get(BASE_URL +"/api/social-media",);
    console.log(response?.data);
    setPostData(response?.data);

    // setIsLoading(false);
  }

  useEffect(() => {
    LoadPosts();
  }, []);


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
    window.addEventListener('resize', updateChunkSize);

    return () => {
      window.removeEventListener('resize', updateChunkSize);
    };
  }, []);


  useEffect(() => {
    const chunks:any = [];
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
            <Hero/>
        </motion.div>

        <div className="max-w-screen-xl mx-auto px-4 py-12">
          <div className="flex flex-wrap items-center ">
            <div className="w-full md:w-1/2 p-4">
              <div className="relative">
                <Image
                    src="/hero.png"
                    // width={550}
                    height={400}
                    alt="Sustainable Agriculture"
                    className="rounded-lg shadow-lg"
                    style={{ zIndex: 99 }}
                />
            
                <div className="absolute bottom-4 left-4 bg-green-200 text-green-800 p-4 rounded-lg flex items-center">
                  <div className="flex-shrink-0 mr-4">
                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c.917 0 1.84.173 2.688.496A9.956 9.956 0 0015.97 5.39C14.693 4.579 13.374 4 12 4 7.582 4 4 7.582 4 12c0 1.374.579 2.693 1.39 3.97A9.956 9.956 0 007.496 12.688C8.173 13.84 9.092 15 10 15h4v2h-2v2h4v-2h-2v-2h2c.927 0 1.754-.36 2.312-.938A9.956 9.956 0 0020 12c0-4.418-3.582-8-8-8z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-lg font-semibold">50+</div>
                    <div className="text-sm">Successfully Project Completed</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 p-4">
              <h2 className="text-xl font-bold mb-4">
                Our Journey Started Here
              </h2>
              <h3 className="text-xl text-green-600 mb-4">
                Were Leader in Agriculture Market
              </h3>
              <p className="text-gray-600 mb-8 text-justify dark:text-white">
                At Mol Agribussiness Ltd, we blend tradition with innovation to foster sustainable agricultural practices. From groundbreaking projects to transformative technologies, we are at the forefront of the industry, committed to growing a greener future.
              </p>
              <div className="flex items-center gap-3">
                <Image
                    src="/crop.jpeg"
                    width={60}
                    height={50}
                    alt="Video Thumbnail"
                    className="w-8 h-16 rounded-lg mr-4"
                />
                
                <div>
                  <div className="text-yellow-500 font-semibold">WATCH OUR SOCIAL MEDIA</div>
                  <Link to="/news" className="ml-auto text-gray-800 hover:text-green-600 dark:text-white/25">Stay updated with our latest ventures →</Link>

                </div>
              </div>
            </div>
          </div>
        </div>

        <div
            className="max-w-screen-xl mx-auto mb-10"
        >
          <motion.div
              className="flex justify-center items-start  px-12"
              variants={fadeInUp}
          >
            <div className="">
        
              <p className=" text-base text-justify text-gray-600 dark:text-white">
                Welcome to MOL Agribusiness Ltd, your trusted partner in sustainable agriculture. We are dedicated to providing high-quality agricultural products and services that help farmers thrive. MOL Agribusiness Ltd was founded with a mission to revolutionize the agricultural sector by introducing innovative and sustainable farming practices. With decades of experience and a deep understanding of the challenges faced by farmers, we aim to provide solutions that enhance productivity and profitability. Explore our wide range of solutions tailored to meet the needs of modern agriculture.
              </p>
            </div>
          </motion.div>
        </div>

        <section className="relative bg-cover bg-center"
                 style={{
                   backgroundImage: `url('/vast_farm.webp')`,
                 }}
        >
      
          <div className="max-w-screen-xl mx-auto py-20">
            <h3 className="text-lg font-semibold text-[#40574F] px-6 pt-10">
              Welcome to MOL Agribusiness Ltd
            </h3>
            <p className="text-xs text-justify text-white px-6">
              Continuously improving and adopting new technologies
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-3  mt-20 gap-10 px-6 pb-10">
              <div className="p-3 bg-white dark:bg-slate-900 h-80 ">
                <img
                    src="/mordern.jpg"
                    alt="Innovating Solutions for Modern Farming"
                    className="h-2/5 w-full object-cover"
                />
                <div className="h-3/5">
                  <h1 className="border-2 mt-2 border-r-0 border-green-900 border-b-0 border-l-2 border-t-0 px-3 font-bold text-xs text-left py-2">
                    Innovating Solutions for Modern Farming
                  </h1>
                  <p className="p-1 mt-2 text-xs text-justify">
                    Discover our innovative technologies designed to enhance farming efficiency and productivity. Our advanced solutions integrate cutting-edge technology with sustainable practices, ensuring that modern farmers can achieve higher yields while maintaining environmental balance. Explore how our tools and methods can revolutionize your farming operations.
                  </p>
                </div>
              </div>

              <div className="p-3 bg-white dark:bg-slate-900 h-80  ">
                <img
                    src="/tractor.jpg"
                    alt="Advanced Farm Equipment"
                    className="h-2/5 w-full object-cover"
                />
                <div className="h-3/5">
                  <h1 className="border-2 mt-2 border-r-0 border-green-900 border-b-0 border-l-2 border-t-0 px-3 font-bold text-xs py-2 text-left">
                    Advanced Farm Equipment
                  </h1>
                  <p className="p-1 mt-2 text-xs  text-justify pb-2">
                    Our state-of-the-art farm equipment helps you manage your farm with precision and ease. From automated tractors to smart irrigation systems, our equipment is designed to reduce labor, increase efficiency, and improve overall crop health. Learn how our machinery can make your farm more productive and sustainable.
                  </p>
                </div>
              </div>

              <div className="p-3 bg-white dark:bg-slate-900 h-80">
                <img
                    src="/topbar.jpg"
                    alt="Maximizing Crop Yields"
                    className="h-2/5 w-full object-cover"
                />
                <div className="h-3/5">
                  <h1 className="border-2 mt-2 border-r-0 border-green-900 border-b-0 border-l-2 border-t-0 px-3 font-bold text-xs text-left py-2">
                    Maximizing Crop Yields
                  </h1>
                  <p className="p-1 mt-2 text-xs text-justify">
                    Our comprehensive solutions are tailored to maximize your crop yields. We provide expert guidance on soil management, crop rotation, and pest control, helping you achieve optimal growth conditions. Discover the benefits of our scientifically-backed practices and how they can lead to healthier, more bountiful harvests year after year.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </section>

        <motion.div
      
        >
          <Article />
        </motion.div>

        <motion.section
            className="max-w-screen-xl mx-auto mt-10 px-6"
            initial="hidden"
            animate="visible"
            variants={zoomIn}
        >
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
          {postData?.slice(0,3).map((card, index) => (
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
          <div className="max-w-screen-xl mx-auto mt-20 mb-20">
            <h3 className="text-lg font-semibold text-green-900 py-10 px-10">
              Our Production
            </h3>
            <Carousel dots arrows autoplay className="px-10">
              {productChunks.map((chunk:any, index:any) => (
                  <div key={index}>
                    <div className="flex gap-6 justify-center items-center">
                      {chunk?.map((product:any, idx:any) => (
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

        <motion.div
           
        >
          <FollowUs />
        </motion.div>
      </div>
  );
}
