'use client'
import { message } from "antd";
import { motion } from "framer-motion";
import { ArrowRight, Mail, MapPin, Phone, BookOpen } from "lucide-react";
import {
    FacebookOutlined,
    InstagramOutlined,
    LinkedinOutlined,
    YoutubeOutlined,
} from "@ant-design/icons";
import { useState } from "react";
import axios from "axios";
import { BASE_URL } from "../../constants/BaseUrl";

const ContactUs = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
    });

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

    const handleChange = (e:any) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e:any) => {
        e.preventDefault();
        try {
            setIsLoading(true);
            const res = await axios.post(BASE_URL + "/api/contact-us", formData, {
                headers: {
                    "Content-Type": "application/json",
                },
            });
            console.log(res.data);
            if (res.status === 200) {
                message.success("Your message has been sent successfully.");
                setFormData({
                    name: "",
                    email: "",
                    phone: "",
                    subject: "",
                    message: "",
                });
            }
        } catch (error) {
            message.error("Failed to send message try again later");
            console.error(error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div>
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="relative w-full h-64 flex items-center justify-center"
            >
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/30 to-teal-600/30 z-0 w-full h-64" />
                <img
                    src="/topbar.jpg"
                    alt="Background Image"
                    className="z-0 opacity-50 h-64 w-full object-cover"
                />
                <div className="absolute z-10 text-white">
                    <h1 className="border-l-2 h-10 px-3 text-center place-content-center font-normal text-sm">
                        We are MOL AGRIBUSINESS
                    </h1>
                    <h1 className="font-bold text-3xl bg-gradient-to-r from-emerald-50 to-teal-50 bg-clip-text text-transparent">Contact Us</h1>
                </div>
            </motion.div>

            <section className="max-w-screen-2xl mx-auto py-16 px-6">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                >
                    <span className="flex items-baseline gap-2">
                        <div className="border-b-2 border-emerald-600 h-10 w-12"></div>
                        <h3 className="text-emerald-600">Contact Us</h3>
                    </span>
                    <h3 className="font-bold text-2xl bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                        Partnership and General Information
                    </h3>
                    <div className="mt-10">
                        <div className="flex flex-wrap gap-8 md:gap-24">
                            <motion.div
                                whileHover={hoverScale}
                                className="relative p-6 rounded-xl shadow-md bg-white dark:bg-gray-800"
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-emerald-100 to-teal-100 dark:from-emerald-900/20 dark:to-teal-900/20 rounded-xl blur-sm opacity-30" />
                                <div className="relative flex flex-col items-start">
                                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-emerald-600 to-teal-600 mb-4">
                                        <Phone className="w-5 h-5 text-white" />
                                    </div>
                                    <h3 className="font-bold text-gray-900 dark:text-white">Farm Products</h3>
                                    <p className="text-gray-600 dark:text-gray-300">info@molagribussinessltd.com</p>
                                    <p className="text-gray-600 dark:text-gray-300">+255 747963517</p>
                                </div>
                            </motion.div>
                            
                            <motion.div
                                whileHover={hoverScale}
                                className="relative p-6 rounded-xl shadow-md bg-white dark:bg-gray-800"
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-emerald-100 to-teal-100 dark:from-emerald-900/20 dark:to-teal-900/20 rounded-xl blur-sm opacity-30" />
                                <div className="relative flex flex-col items-start">
                                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-emerald-600 to-teal-600 mb-4">
                                        <BookOpen className="w-5 h-5 text-white" />
                                    </div>
                                    <h3 className="font-bold text-gray-900 dark:text-white">Partnership</h3>
                                    <p className="text-gray-600 dark:text-gray-300">info@molagribussinessltd.com</p>
                                    <p className="text-gray-600 dark:text-gray-300">+255 747963517</p>
                                </div>
                            </motion.div>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 sm:grid-cols-1 mt-10 lg:gap-20">
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeInUp}
                            >
                                <div className="relative group">
                                    <div className="absolute -inset-1 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-1000" />
                                    <div className="relative w-full h-64 overflow-hidden rounded-xl shadow-md">
                                        <iframe 
                                            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3967.3091096763706!2d38.50553807371821!3d-6.088994659731805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNsKwMDUnMjAuNCJTIDM4wrAzMCcyOS4yIkU!5e0!3m2!1sen!2stz!4v1720788569479!5m2!1sen!2stz" 
                                            width="100%" 
                                            height="100%" 
                                            loading="lazy"
                                            className="border-0" 
                                        ></iframe>
                                    </div>
                                </div>
                                <h3 className="font-bold text-2xl bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mt-6 mb-4">
                                    Reach out to us
                                </h3>
                                <div className="flex flex-col gap-5 text-gray-600 dark:text-gray-300">
                                    <span className="flex items-center">
                                        <Mail className="mr-2 text-emerald-600" />
                                        info@molagribussinessltd.com
                                    </span>
                                    <span className="flex items-center">
                                        <MapPin className="mr-2 text-emerald-600" />
                                        Mkange miono, Bagamoyo Pwani.
                                    </span>
                                    <div className="flex gap-3 mt-2">
                                        <motion.a
                                            whileHover={{ scale: 1.2 }}
                                            className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r from-emerald-600/10 to-teal-600/10 text-blue-500 hover:shadow-md"
                                            href="https://www.facebook.com/"
                                        >
                                            <FacebookOutlined className="text-lg" />
                                        </motion.a>
                                        <motion.a
                                            whileHover={{ scale: 1.2 }}
                                            className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r from-emerald-600/10 to-teal-600/10 text-pink-500 hover:shadow-md"
                                            href="https://www.instagram.com/mol_agribusiness_ltd/?igsh=MjhiemVyZjR4YXM3"
                                        >
                                            <InstagramOutlined className="text-lg" />
                                        </motion.a>
                                        <motion.a
                                            whileHover={{ scale: 1.2 }}
                                            className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r from-emerald-600/10 to-teal-600/10 text-red-500 hover:shadow-md"
                                            href="https://www.youtube.com/"
                                        >
                                            <YoutubeOutlined className="text-lg" />
                                        </motion.a>
                                        <motion.a
                                            whileHover={{ scale: 1.2 }}
                                            className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r from-emerald-600/10 to-teal-600/10 text-blue-600 hover:shadow-md"
                                            href="https://www.linkedin.com/"
                                        >
                                            <LinkedinOutlined className="text-lg" />
                                        </motion.a>
                                    </div>
                                </div>
                            </motion.div>
                            
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeInUp}
                            >
                                <span className="flex items-baseline gap-2">
                                    <div className="border-b-2 border-emerald-600 h-10 w-12"></div>
                                    <h3 className="text-emerald-600">Send us a Message</h3>
                                </span>
                                <div className="mt-6 relative">
                                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-100 to-teal-100 dark:from-emerald-900/10 dark:to-teal-900/10 rounded-xl blur-sm opacity-30" />
                                    <div className="relative p-6 rounded-xl shadow-md bg-white dark:bg-gray-800">
                                        <form onSubmit={handleSubmit}>
                                            <div className="grid gap-4">
                                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                                    <div>
                                                        <label className="sr-only">Name</label>
                                                        <input
                                                            type="text"
                                                            name="name"
                                                            value={formData.name}
                                                            onChange={handleChange}
                                                            className="py-3 px-4 block w-full border border-gray-300 dark:border-gray-700 rounded-lg text-sm focus:border-emerald-500 focus:ring-emerald-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                                                            placeholder="Name"
                                                            required
                                                        />
                                                    </div>

                                                    <div>
                                                        <label className="sr-only">Phone Number</label>
                                                        <input
                                                            type="text"
                                                            name="phone"
                                                            value={formData.phone}
                                                            onChange={handleChange}
                                                            className="py-3 px-4 block w-full border border-gray-300 dark:border-gray-700 rounded-lg text-sm focus:border-emerald-500 focus:ring-emerald-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                                                            placeholder="Phone Number"
                                                            required
                                                        />
                                                    </div>
                                                </div>

                                                <div>
                                                    <label className="sr-only">Email</label>
                                                    <input
                                                        type="email"
                                                        name="email"
                                                        value={formData.email}
                                                        onChange={handleChange}
                                                        autoComplete="email"
                                                        className="py-3 px-4 block w-full border border-gray-300 dark:border-gray-700 rounded-lg text-sm focus:border-emerald-500 focus:ring-emerald-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                                                        placeholder="Email"
                                                        required
                                                    />
                                                </div>

                                                <div>
                                                    <label className="sr-only">Subject</label>
                                                    <input
                                                        type="text"
                                                        name="subject"
                                                        value={formData.subject}
                                                        onChange={handleChange}
                                                        className="py-3 px-4 block w-full border border-gray-300 dark:border-gray-700 rounded-lg text-sm focus:border-emerald-500 focus:ring-emerald-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                                                        placeholder="Subject"
                                                        required
                                                    />
                                                </div>

                                                <div>
                                                    <label className="sr-only">Message</label>
                                                    <textarea
                                                        name="message"
                                                        value={formData.message}
                                                        onChange={handleChange}
                                                        className="py-3 px-4 block w-full border border-gray-300 dark:border-gray-700 rounded-lg text-sm focus:border-emerald-500 focus:ring-emerald-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                                                        placeholder="Message"
                                                        rows={4}
                                                        required
                                                    ></textarea>
                                                </div>
                                            </div>

                                            <div className="mt-6">
                                                <motion.button
                                                    whileHover={hoverScale}
                                                    type="submit"
                                                    className="w-full group bg-gradient-to-r from-emerald-600 to-teal-600 py-3 px-4 rounded-full text-white text-sm font-medium shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/40 transition-shadow flex justify-center items-center gap-2"
                                                    disabled={isLoading}
                                                >
                                                    {isLoading ? (
                                                        "Sending message..."
                                                    ) : (
                                                        <>
                                                            Send message
                                                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                                        </>
                                                    )}
                                                </motion.button>
                                            </div>

                                            <div className="mt-4 text-center">
                                                <p className="text-sm text-gray-500 dark:text-gray-400">
                                                    We will get back to you in 1-2 business days.
                                                </p>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            </section>
        </div>
    );
};

export default ContactUs;