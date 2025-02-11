'use client'
import { Avatar, message } from "antd";
import {
    EnvironmentOutlined,
    FacebookOutlined,
    InstagramOutlined,
    LinkedinOutlined,
    MailOutlined,
    YoutubeOutlined,
    PhoneOutlined,
    AuditOutlined
} from "@ant-design/icons";
import { useState } from "react";
import axios from "axios";
import {BASE_URL} from "../../constants/BaseUrl";

const ContactUs = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
    });

    const handleChange = (e:any) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e:any) => {
        e.preventDefault();
        try {
            setIsLoading(true)
            const res = await axios.post(BASE_URL + "/api/contact-us", formData, {
                headers: {
                    "Content-Type": "application/json",
                },
            });
            console.log(res.data);
            if (res.status === 200){
                message.success("Your message has been sent successfully.");
                setFormData({
                    name: "",
                    email: "",
                    phone: "",
                    subject: "",
                    message: "",
                })
            }
        } catch (error) {
            message.error("Failed to send message try again later");
            console.error(error);
        }finally {
            setIsLoading(false)
        }
    };

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
                    <h1 className="border-2 border-r-0 border-green-50 border-b-0 border-l-2  border-t-0 h-10 px-3 text-center place-content-center font-normal text-sm">
                        We are MOL AGRIBUSINESS
                    </h1>
                    <h1 className="font-bold text-2xl">Contact Us</h1>
                </div>
            </div>

            <section className="container mx-auto mt-14">
                <div className="px-10">
          <span className="flex items-baseline gap-2">
            <div className="border-2 border-r-0 border-green-900 border-b-2 border-l-0  border-t-0 h-10 px-3 w-12"></div>
            <h3>Contact Us</h3>
          </span>
                    <h3 className="font-bold text-teal-800">
                        Partnership and General Information
                    </h3>
                    <div className="mt-10">
                        <div className="flex flex-wrap gap-24">
                            <div>
                                <Avatar className="border-2 border-green-800" size={40}><PhoneOutlined/></Avatar>
                                <h3 className="font-bold ">Farm Products </h3>
                                <p className="text-justify">info@molagribussinessltd.com</p>
                                <p className="text-justify">+255 747963517</p>
                            </div>
                            <div>
                                <Avatar className="border-2 border-green-800" size={40}><AuditOutlined/> </Avatar>
                                <h3 className="font-bold ">Partnership </h3>
                                <p className="text-justify">info@molagribussinessltd.com</p>
                                <p className="text-justify">+255 747963517</p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 sm:grid-cols-1 mt-10 lg:gap-20">
                            <div>
                                <div className="w-full h-64 bg-gray-200  overflow-hidden shadow-md border-b-[1px] border-green-500">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3967.3091096763706!2d38.50553807371821!3d-6.088994659731805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNsKwMDUnMjAuNCJTIDM4wrAzMCcyOS4yIkU!5e0!3m2!1sen!2stz!4v1720788569479!5m2!1sen!2stz" width="600" height="450"  loading="lazy" ></iframe>
                                </div>
                                <h3 className="font-bold text-teal-800 mt-4 mb-4">
                                    Reach out to us
                                </h3>
                                <div className="flex flex-col gap-5">
                  <span>
                    <MailOutlined className="mr-2 text-teal-800 font-bold" />
                    info@molagribussinessltd.com
                  </span>
                                    <span>
                    <EnvironmentOutlined className="mr-2 text-teal-800 font-bold" />
                    Mkange miono, Bagamoyo Pwani.
                  </span>
                                    <div>
                                        <a
                                            className="size-10 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-500 hover:bg-white/10 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:ring-1 focus:ring-gray-600"
                                            href="https://www.instagram.com/mol_agribusiness_ltd/?igsh=MjhiemVyZjR4YXM3"
                                        >
                                            <FacebookOutlined className="flex-shrink-0 size-4" />
                                        </a>
                                        <a
                                            className="size-10 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-red-700 hover:bg-white/10 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:ring-1 focus:ring-gray-600"
                                            href="https://www.instagram.com/mol_agribusiness_ltd/?igsh=MjhiemVyZjR4YXM3"
                                        >
                                            <InstagramOutlined className="flex-shrink-0 size-4" />
                                        </a>
                                        <a
                                            className="size-10 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-red-700 hover:bg-white/10 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:ring-1 focus:ring-gray-600"
                                            href="https://www.instagram.com/mol_agribusiness_ltd/?igsh=MjhiemVyZjR4YXM3"
                                        >
                                            <YoutubeOutlined className="flex-shrink-0 size-4" />
                                        </a>

                                        <a
                                            className="size-10 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-500 hover:bg-white/10 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:ring-1 focus:ring-gray-600"
                                            href="https://www.instagram.com/mol_agribusiness_ltd/?igsh=MjhiemVyZjR4YXM3"
                                        >
                                            <LinkedinOutlined className="flex-shrink-0 size-4" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div>
                <span className="flex items-baseline gap-2">
                  <div className="border-2 border-r-0 border-green-900 border-b-2 border-l-0  border-t-0  px-3 w-12"></div>
                  <h3>Send us a Message</h3>
                </span>
                                <div className="flex flex-col mt-5">
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
                                                        className="py-3 px-4 block w-full border-[1px] border-gray-400 rounded-lg text-sm focus:border-red-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                                                        placeholder=" Name"
                                                    />
                                                </div>

                                                <div>
                                                    <label className="sr-only">Phone Number</label>
                                                    <input
                                                        type="text"
                                                        name="phone"
                                                        value={formData.phone}
                                                        onChange={handleChange}
                                                        className="py-3 px-4 block w-full border-[1px] border-gray-400 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none "
                                                        placeholder="Phone Number"
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
                                                    className="py-3 px-4 block w-full border-[1px] border-gray-400 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none "
                                                    placeholder="Email"
                                                />
                                            </div>

                                            <div>
                                                <label className="sr-only">Subject</label>
                                                <input
                                                    type="text"
                                                    name="subject"
                                                    value={formData.subject}
                                                    onChange={handleChange}
                                                    className="py-3 px-4 block w-full border-[1px] border-gray-400 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none "
                                                    placeholder="Subject"
                                                />
                                            </div>

                                            <div>
                                                <label className="sr-only">Message</label>
                                                <textarea
                                                    name="message"
                                                    value={formData.message}
                                                    onChange={handleChange}
                                                    className="py-3 px-4 block w-full border-[1px] border-gray-400 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none  dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                                                    placeholder="Message"
                                                ></textarea>
                                            </div>
                                        </div>

                                        <div className="mt-4 grid">
                                            {isLoading ? <button
                                                type="submit"
                                                className="w-full bg-[#40574F] py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-xl text-white hover:bg-[#40574F]/90 disabled:opacity-50 disabled:pointer-events-none"
                                            >
                                                Sending message.....
                                            </button> :
                                                <button
                                                    type="submit"
                                                    className="w-full bg-[#40574F] py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-xl text-white hover:bg-[#40574F]/90 disabled:opacity-50 disabled:pointer-events-none"
                                                >
                                                    Send message
                                                </button>
                                            }
                                        </div>

                                        <div className="mt-3 text-center">
                                            <p className="text-sm text-gray-500">
                                                We will get back to you in 1-2 business days.
                                            </p>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ContactUs;
