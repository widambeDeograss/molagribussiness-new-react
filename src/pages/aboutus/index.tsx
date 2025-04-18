import { Avatar, Image } from "antd";
import { motion } from "framer-motion";
import { ArrowRight, Quote } from "lucide-react";
import { Link } from "react-router-dom";

const AboutUs = () => {
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
          <h1 className="font-bold text-3xl bg-gradient-to-r from-emerald-50 to-teal-50 bg-clip-text text-transparent">About Us</h1>
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
            <h3 className="text-emerald-600">Vision for the future</h3>
          </span>
          <h3 className="font-bold text-2xl bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
            Advancing Sustainability and Innovation
          </h3>

          <div className="flex flex-col lg:flex-row sm:flex-col gap-10 mt-4">
            <p className="text-justify text-gray-600 dark:text-gray-300 leading-relaxed">
              At MOL Agribusiness Ltd, we strive to revolutionize the
              agriculture industry through innovative solutions and sustainable
              practices. Our commitment to excellence ensures that we deliver
              only the best.
            </p>
            <p className="text-justify text-gray-600 dark:text-gray-300 leading-relaxed">
              Join us on a journey towards a greener future. At MOL Agribusiness
              Ltd, we are passionate about fostering growth and sustainability
              in agriculture. Our expertise and dedication make us a reliable
              partner in your agricultural endeavors.
            </p>
          </div>
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="mt-14"
        >
          <span className="flex items-baseline gap-2">
            <div className="border-b-2 border-emerald-600 h-10 w-12"></div>
            <h3 className="text-emerald-600">Vision for the future</h3>
          </span>
          <h3 className="font-bold text-2xl bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
            We are MOL AGRIBUSINESS LTD
          </h3>
          <h3 className="text-sm text-gray-500 dark:text-gray-400">Empowering sustainable agriculture.</h3>

          <div className="grid grid-cols-1 lg:grid-cols-2 sm:grid-cols-1 gap-24 mt-10 mb-20">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <p className="text-justify text-gray-600 dark:text-gray-300 leading-relaxed">
                Welcome to MOL Agribusiness Ltd, your trusted partner in
                sustainable agriculture. We are dedicated to providing
                high-quality agricultural products and services that help
                farmers thrive.
              </p>
              <p className="text-justify mt-4 text-gray-600 dark:text-gray-300 leading-relaxed">
                MOL Agribusiness Ltd was founded with a mission to revolutionize
                the agricultural sector by introducing innovative and
                sustainable farming practices. With decades of experience and a
                deep understanding of the challenges faced by farmers, we aim to
                provide solutions that enhance productivity and profitability.
              </p>
              <p className="text-justify mt-4 text-gray-600 dark:text-gray-300 leading-relaxed">
                Explore our wide range of solutions tailored to meet the needs
                of modern agriculture.
              </p>
              <motion.button
                whileHover={hoverScale}
                className="group bg-gradient-to-r from-emerald-600 to-teal-600 px-6 py-3 rounded-full text-white text-sm font-medium shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/40 transition-shadow inline-flex items-center mt-6"
              >
                View our products
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="relative"
            >
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000" />
                <Image
                  src="/about1.jpg"
                  alt="About Image"
                  className="rounded-xl w-full h-64 object-cover transform group-hover:scale-[1.02] transition duration-500"
                />
              </div>

              <div className="relative mt-6 bg-white dark:bg-gray-800 rounded-xl p-6 shadow-xl">
                <div className="absolute right-6 top-6">
                  <Quote className="w-8 h-8 text-emerald-600/20" />
                </div>
                <p className="italic mb-4 text-gray-600 dark:text-gray-300">
                  "Our commitment to sustainable agriculture drives everything
                  we do. At MOL Agribusiness, we believe in leveraging
                  technology for a greener tomorrow."
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
                    <p className="font-bold text-gray-900 dark:text-white">Mr. Moses Warioba</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">CEO & Founder, MOL Agribusiness Ltd</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="mt-14 mb-10"
        >
          <div className="grid grid-cols-1 lg:grid-cols-3 sm:grid-cols-1 gap-10">
            <motion.div 
              whileHover={hoverScale}
              className="relative p-6 rounded-xl shadow-md"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-100 to-teal-100 dark:from-emerald-900/20 dark:to-teal-900/20 rounded-xl blur-sm opacity-30" />
              <div className="relative">
                <h1 className="border-l-2 border-emerald-600 h-10 px-3 text-left place-content-center font-semibold text-emerald-600">
                  Mission
                </h1>
                <p className="text-justify text-gray-600 dark:text-gray-300 leading-relaxed mt-4">
                  Leading farm tech company, committed to utilizing the latest
                  technology to optimize crop and livestock production, while
                  supporting sustainable and eco-friendly practices.
                </p>
              </div>
            </motion.div>
            
            <motion.div 
              whileHover={hoverScale}
              className="relative p-6 rounded-xl shadow-md"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-100 to-teal-100 dark:from-emerald-900/20 dark:to-teal-900/20 rounded-xl blur-sm opacity-30" />
              <div className="relative">
                <h1 className="border-l-2 border-emerald-600 h-10 px-3 text-left place-content-center font-semibold text-emerald-600">
                  Vision
                </h1>
                <p className="text-justify text-gray-600 dark:text-gray-300 leading-relaxed mt-4">
                  Leading farm tech company, committed to utilizing the latest
                  technology to optimize crop and livestock production, while
                  supporting sustainable and eco-friendly practices.
                </p>
              </div>
            </motion.div>
            
            <motion.div 
              whileHover={hoverScale}
              className="relative p-6 rounded-xl shadow-md"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-100 to-teal-100 dark:from-emerald-900/20 dark:to-teal-900/20 rounded-xl blur-sm opacity-30" />
              <div className="relative">
                <h1 className="border-l-2 border-emerald-600 h-10 px-3 text-left place-content-center font-semibold text-emerald-600">
                  Our Motto
                </h1>
                <p className="text-justify text-gray-600 dark:text-gray-300 leading-relaxed mt-4">
                  Innovative Farming Solutions for a Sustainable Future.
                </p>
              </div>
            </motion.div>
          </div>
          
          <motion.div 
            initial="hidden"
            whileInView="visible" 
            viewport={{ once: true }}
            variants={fadeInUp}
            className="flex justify-center mt-12"
          >
            <Link to="/contact">
              <motion.button
                whileHover={hoverScale}
                className="group bg-gradient-to-r from-emerald-600 to-teal-600 px-8 py-4 rounded-full text-white text-sm font-medium shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/40 transition-shadow"
              >
                Get in touch with us
                <ArrowRight className="inline ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
};

export default AboutUs;