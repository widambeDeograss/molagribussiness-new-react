import { useState } from "react";

import axios from "axios";
import { BASE_URL } from "../constants/BaseUrl";
import { message, Image } from "antd";

export default function Footer() {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      const res = await axios.post(BASE_URL + "/api/subscriptions", formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log(res.data);
      if (res.status === 200) {
        message.success("Subscription sent successfully.");
        setFormData({
          email: "",
        });
      }
    } catch (error) {
      message.error(" Subscription failed  try again later");
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <footer className="mt-auto bg-green-300/10 w-full dark:bg-neutral-950">
      <div className="mt-auto w-full max-w-screen-2xl py-10 px-4 sm:px-6 lg:px-8 lg:pt-20 mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
          <div className="col-span-full lg:col-span-1">
            <div className="flex flex-row gap-4">
              <Image
                className="h-auto  w-[100px]"
                src="/mol logo.png"
                alt="mol logo"
                width={120}
                height={74}
                preview={false}
              />
            </div>
            <div>
              <h2 className=" text-[14px]  font-semibold  ">
                Empowering Sustainable Agriculture Discover cutting-edge
                agricultural technologies and practices.
              </h2>
            </div>
          </div>

          <div className="col-span-1">
            <h4 className="font-semibold text-green-900">Product</h4>

            <div className="mt-3 grid space-y-3">
              <p>
                <a
                  className="inline-flex gap-x-2 text-black  dark:text-white dark:hover:text-gray-300 hover:text-gray-200 "
                  href="/news"
                >
                  News
                </a>
              </p>
              <p>
                <a
                  className="inline-flex gap-x-2 text-black  dark:text-white dark:hover:text-gray-300 hover:text-gray-200 "
                  href="/products"
                >
                  Our production
                </a>
              </p>
              <p>
                <a
                  className="inline-flex gap-x-2 text-black dark:text-white dark:hover:text-gray-300 hover:text-gray-200 "
                  href="/products"
                >
                  Services
                </a>
              </p>
            </div>
          </div>

          <div className="col-span-1">
            <h4 className="font-semibold text-green-900">Quick Links</h4>

            <div className="mt-3 grid space-y-3">
              <p>
                <a
                  className="inline-flex gap-x-2 text-black  dark:text-white dark:hover:text-gray-300 hover:text-gray-200 "
                  href="/aboutus"
                >
                  About us
                </a>
              </p>
              <p>
                <a
                  className="inline-flex gap-x-2 text-black dark:text-white dark:hover:text-gray-300 hover:text-gray-200 "
                  href="/news"
                >
                  Blog
                </a>
              </p>
              <p>
                <a
                  className="inline-flex gap-x-2 text-black dark:text-white dark:hover:text-gray-300 hover:text-gray-200 "
                  href="/contactus"
                >
                  Contact us
                </a>
              </p>
              <p>
                <a
                  className="inline-flex gap-x-2 text-black  dark:text-white dark:hover:text-gray-300 hover:text-gray-200  "
                  href="/news"
                >
                  News
                </a>
              </p>
            </div>
          </div>

          <div className="col-span-2">
            <h4 className="font-semibold text-green-900">
              Subscribe to our news later
            </h4>

            <form onSubmit={handleSubmit}>
              <div className="mt-4 flex flex-col items-center gap-2 sm:flex-row sm:gap-3 bg-white rounded-lg p-2 dark:bg-neutral-900">
                <div className="w-full">
                  <label htmlFor="hero-input" className="sr-only">
                    Search
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    id="hero-input"
                    className="py-3 px-4 block w-full border-transparent rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-transparent dark:text-neutral-4"
                    placeholder="Enter your email"
                  />
                </div>
                {isLoading ? (
                  <button
                    type="submit"
                    className="w-full sm:w-auto whitespace-nowrap p-3 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-[#40574F] text-white hover:bg-green-800"
                  >
                    Sending subscription
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="w-full sm:w-auto whitespace-nowrap p-3 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-[#40574F] text-white hover:bg-green-800"
                  >
                    Subscribe
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
      <footer className="relative overflow-hidden bg-[#40574F] w-full">
        <svg
          className="absolute -bottom-20 start-1/2 w-[1900px] transform -translate-x-1/2"
          width="2745"
          height="488"
          viewBox="0 0 2745 488"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.5 330.864C232.505 403.801 853.749 527.683 1482.69 439.719C2111.63 351.756 2585.54 434.588 2743.87 487"
            className="stroke-neutral-700/50"
            stroke="currentColor"
          />
          <path
            d="M0.5 308.873C232.505 381.81 853.749 505.692 1482.69 417.728C2111.63 329.765 2585.54 412.597 2743.87 465.009"
            className="stroke-neutral-700/50"
            stroke="currentColor"
          />
          <path
            d="M0.5 286.882C232.505 359.819 853.749 483.701 1482.69 395.738C2111.63 307.774 2585.54 390.606 2743.87 443.018"
            className="stroke-neutral-700/50"
            stroke="currentColor"
          />
          <path
            d="M0.5 264.891C232.505 337.828 853.749 461.71 1482.69 373.747C2111.63 285.783 2585.54 368.615 2743.87 421.027"
            className="stroke-neutral-700/50"
            stroke="currentColor"
          />
          <path
            d="M0.5 242.9C232.505 315.837 853.749 439.719 1482.69 351.756C2111.63 263.792 2585.54 346.624 2743.87 399.036"
            className="stroke-neutral-700/50"
            stroke="currentColor"
          />
          <path
            d="M0.5 220.909C232.505 293.846 853.749 417.728 1482.69 329.765C2111.63 241.801 2585.54 324.633 2743.87 377.045"
            className="stroke-neutral-700/50"
            stroke="currentColor"
          />
          <path
            d="M0.5 198.918C232.505 271.855 853.749 395.737 1482.69 307.774C2111.63 219.81 2585.54 302.642 2743.87 355.054"
            className="stroke-neutral-700/50"
            stroke="currentColor"
          />
          <path
            d="M0.5 176.927C232.505 249.864 853.749 373.746 1482.69 285.783C2111.63 197.819 2585.54 280.651 2743.87 333.063"
            className="stroke-neutral-700/50"
            stroke="currentColor"
          />
          <path
            d="M0.5 154.937C232.505 227.873 853.749 351.756 1482.69 263.792C2111.63 175.828 2585.54 258.661 2743.87 311.072"
            className="stroke-neutral-700/50"
            stroke="currentColor"
          />
          <path
            d="M0.5 132.946C232.505 205.882 853.749 329.765 1482.69 241.801C2111.63 153.837 2585.54 236.67 2743.87 289.082"
            className="stroke-neutral-700/50"
            stroke="currentColor"
          />
          <path
            d="M0.5 110.955C232.505 183.891 853.749 307.774 1482.69 219.81C2111.63 131.846 2585.54 214.679 2743.87 267.091"
            className="stroke-neutral-700/50"
            stroke="currentColor"
          />
          <path
            d="M0.5 88.9639C232.505 161.901 853.749 285.783 1482.69 197.819C2111.63 109.855 2585.54 192.688 2743.87 245.1"
            className="stroke-neutral-700/50"
            stroke="currentColor"
          />
          <path
            d="M0.5 66.9729C232.505 139.91 853.749 263.792 1482.69 175.828C2111.63 87.8643 2585.54 170.697 2743.87 223.109"
            className="stroke-neutral-700/50"
            stroke="currentColor"
          />
          <path
            d="M0.5 44.9819C232.505 117.919 853.749 241.801 1482.69 153.837C2111.63 65.8733 2585.54 148.706 2743.87 201.118"
            className="stroke-neutral-700/50"
            stroke="currentColor"
          />
          <path
            d="M0.5 22.991C232.505 95.9276 853.749 219.81 1482.69 131.846C2111.63 43.8824 2585.54 126.715 2743.87 179.127"
            className="stroke-neutral-700/50"
            stroke="currentColor"
          />
          <path
            d="M0.5 1C232.505 73.9367 853.749 197.819 1482.69 109.855C2111.63 21.8914 2585.54 104.724 2743.87 157.136"
            className="stroke-neutral-700/50"
            stroke="currentColor"
          />
        </svg>

        <div className="relative z-10">
          <div className="w-full max-w-screen-2xl px-10  py-4   mx-auto">
            <div className="mt- sm:mt-12 grid sm:gap-y-0 sm:flex sm:justify-between sm:items-center ">
              <div className="inline-flex items-center">
                <p className="font-semibold text-[#ffff]">
                  MolAgribussiness Limited
                </p>

                <div className="border-s border-white ps-5 ms-5">
                  <p className="text-sm text-neutral-400">
                    @Copyright 2024 - All rights reserved .
                  </p>
                </div>
              </div>


              <div className="flex sm:justify-center space-x-6">
        <a href="https://www.instagram.com/mol_agribusiness_ltd/?igsh=MjhiemVyZjR4YXM3" className="text-gray-500 hover:text-gray-900">
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fill-rule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clip-rule="evenodd"></path>
            </svg>
        </a>
        <a href="https://www.instagram.com/mol_agribusiness_ltd/?igsh=MjhiemVyZjR4YXM3" className="text-gray-500 hover:text-gray-900">
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fill-rule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                    clip-rule="evenodd"></path>
            </svg>
        </a>
        <a href="https://www.instagram.com/mol_agribusiness_ltd/?igsh=MjhiemVyZjR4YXM3" className="text-gray-500 hover:text-gray-900">
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path
                    d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84">
                </path>
            </svg>
        </a>
     
    </div>
            
            </div>
          </div>
        </div>
      </footer>
    </footer>
  );
}
