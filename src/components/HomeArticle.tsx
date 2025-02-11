import React from "react";
import { Avatar, Image } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Quote, Calendar } from "lucide-react";

const Article = () => {
    const navigate = useNavigate();

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

    return (
        <div className="py-16 max-w-screen-xl mx-auto px-6">
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="relative mb-12"
            >
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-100 to-teal-100 dark:from-emerald-900/20 dark:to-teal-900/20 rounded-2xl blur-3xl opacity-30" />
                <div className="relative flex flex-col sm:flex-row justify-between items-center gap-6 mb-8">
                    <motion.button
                        whileHover={hoverScale}
                        className="group bg-gradient-to-r from-emerald-600 to-teal-600 px-6 py-3 rounded-full text-white text-sm font-medium shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/40 transition-shadow"
                        onClick={() => navigate("/news")}
                    >
                        Browse all articles
                        <ArrowRight className="inline ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </motion.button>
                    <h1 className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                        Browse our articles and resources
                    </h1>
                </div>
            </motion.div>

            <div className="flex flex-col lg:flex-row gap-8">
                <motion.div
                    className="flex-1 space-y-6"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                >
                    <div className="flex items-center text-gray-500 dark:text-gray-400">
                        <Calendar className="w-4 h-4 mr-2" />
                        <p>15 June 2023</p>
                    </div>
                    <h2 className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent leading-tight">
                        Revolutionizing Agriculture: Embracing Organic Practices for Sustainable Growth
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-justify">
                        At MOL Agribusiness Ltd, we are pioneering the future of sustainable agriculture through innovative organic farming practices. Our goal is to empower farmers with the knowledge and tools they need to increase productivity while protecting the environment. Join us as we explore the latest advancements in organic farming, from soil health to crop rotation, and see how these practices can lead to a more sustainable and profitable future for agriculture.
                    </p>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-justify">
                        Discover how MOL Agribusiness Ltd is transforming the agricultural landscape with our commitment to sustainable practices and farmer education.
                    </p>
                    <motion.button
                        whileHover={hoverScale}
                        className="group bg-gradient-to-r from-emerald-600 to-teal-600 px-6 py-3 rounded-full text-white text-sm font-medium shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/40 transition-shadow inline-flex items-center"
                    >
                        Read more
                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </motion.button>
                </motion.div>

                <motion.div
                    className="flex-1"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                >
                    <div className="relative group">
                        <div className="absolute -inset-1 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000" />
                        <Image
                            src="/crop.jpeg"
                            alt="Organic Farming"
                            className="rounded-xl w-full h-64 object-cover transform group-hover:scale-[1.02] transition duration-500"
                        />
                    </div>
                    <div className="relative mt-6 bg-white dark:bg-gray-800 rounded-xl p-6 shadow-xl">
                        <div className="absolute right-6 top-6">
                            <Quote className="w-8 h-8 text-emerald-600/20" />
                        </div>
                        <p className="italic mb-4 text-gray-600 dark:text-gray-300">
                            "Empowering farmers with sustainable practices for a better tomorrow."
                        </p>
                        <p className="mb-6 text-gray-600 dark:text-gray-300">
                            Our approach focuses on regenerative agriculture techniques that improve soil health, boost biodiversity, and increase farm resilience. These methods not only enhance yields but also contribute to the long-term viability of farming communities.
                        </p>
                        <div className="flex items-center gap-4">
                            <motion.div whileHover={{ scale: 1.05 }} className="relative">
                                <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-full blur opacity-25" />
                                <Avatar
                                    src="/Ceo.jpg"
                                    alt="CEO"
                                    size={64}
                                    className="relative border-2 border-white dark:border-gray-800"
                                />
                            </motion.div>
                            <div>
                                <p className="font-bold text-gray-900 dark:text-white">Mr Moses Warioba</p>
                                <p className="text-sm text-gray-500 dark:text-gray-400">CEO, Mol Agribusiness</p>
                            </div>
                            <Link
                                to="/news"
                                className="ml-auto group inline-flex items-center text-emerald-600 hover:text-emerald-700 font-medium transition-colors"
                            >
                                Read more
                                <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Article;