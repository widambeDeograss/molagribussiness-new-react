import { Image } from "antd";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const ProductsServices = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
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
          <h1 className="font-bold text-3xl bg-gradient-to-r from-emerald-50 to-teal-50 bg-clip-text text-transparent">
            Products and Services
          </h1>
        </div>
      </motion.div>

      <section className="max-w-screen-2xl mx-auto py-16 px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="mb-12"
        >
          <span className="flex items-baseline gap-2">
            <div className="border-b-2 border-emerald-600 h-10 w-12"></div>
            <h3 className="text-emerald-600">Our Services</h3>
          </span>
          <h3 className="font-bold text-2xl bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-4">
            Partnership and General Information
          </h3>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          <motion.div
            variants={fadeInUp}
            whileHover={hoverScale}
            className="relative rounded-xl shadow-xl p-8 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-100 to-teal-100 dark:from-emerald-900/20 dark:to-teal-900/20 rounded-xl blur-sm opacity-30" />
            <div className="flex flex-col gap-4 justify-center items-center relative z-10">
              <div className="w-20 h-20 rounded-full bg-gradient-to-r from-emerald-600 to-teal-600 flex items-center justify-center p-4 shadow-lg shadow-emerald-500/20">
                <img src="/wheat.png" alt="wheat" className="w-12 h-12" />
              </div>
              <h3 className="font-bold text-lg text-center text-gray-800 dark:text-white">Crop Sales</h3>
              <p className="text-center text-gray-600 dark:text-gray-300">
                We offer a wide range of high-quality crops for sale, sourced
                from sustainable and eco-friendly farms.
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            whileHover={hoverScale}
            className="relative rounded-xl shadow-xl p-8 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-100 to-teal-100 dark:from-emerald-900/20 dark:to-teal-900/20 rounded-xl blur-sm opacity-30" />
            <div className="flex flex-col gap-4 justify-center items-center relative z-10">
              <div className="w-20 h-20 rounded-full bg-gradient-to-r from-emerald-600 to-teal-600 flex items-center justify-center p-4 shadow-lg shadow-emerald-500/20">
                <img src="/agro_machinery.png" alt="agro machines" className="w-12 h-12" />
              </div>
              <h3 className="font-bold text-lg text-center text-gray-800 dark:text-white">
                Agro Machinery
              </h3>
              <p className="text-center text-gray-600 dark:text-gray-300">
                We provide state-of-the-art agricultural machinery to boost farm
                productivity and efficiency.
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            whileHover={hoverScale}
            className="relative rounded-xl shadow-xl p-8 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-100 to-teal-100 dark:from-emerald-900/20 dark:to-teal-900/20 rounded-xl blur-sm opacity-30" />
            <div className="flex flex-col gap-4 justify-center items-center relative z-10">
              <div className="w-20 h-20 rounded-full bg-gradient-to-r from-emerald-600 to-teal-600 flex items-center justify-center p-4 shadow-lg shadow-emerald-500/20">
                <img
                  src="/vegetables.png"
                  alt="vegetables"
                  className="w-12 h-12"
                />
              </div>
              <h3 className="font-bold text-lg text-center text-gray-800 dark:text-white">
                Agri-Consultancy Services
              </h3>
              <p className="text-center text-gray-600 dark:text-gray-300">
                Providing expert advice and customized solutions to farmers,
                ranging from soil analysis and crop planning to market
                intelligence.
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            whileHover={hoverScale}
            className="relative rounded-xl shadow-xl p-8 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-100 to-teal-100 dark:from-emerald-900/20 dark:to-teal-900/20 rounded-xl blur-sm opacity-30" />
            <div className="flex flex-col gap-4 justify-center items-center relative z-10">
              <div className="w-20 h-20 rounded-full bg-gradient-to-r from-emerald-600 to-teal-600 flex items-center justify-center p-4 shadow-lg shadow-emerald-500/20">
                <img src="/vegetable.png" alt="vegetable" className="w-12 h-12" />
              </div>
              <h3 className="font-bold text-lg text-center text-gray-800 dark:text-white">
                Agrochemical Products
              </h3>
              <p className="text-center text-gray-600 dark:text-gray-300">
                Offering a range of high-quality fertilizers, pesticides, and
                biostimulants formulated to enhance soil fertility, control
                pests and diseases.
              </p>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="mt-20 mb-12"
        >
          <span className="flex items-baseline gap-2">
            <div className="border-b-2 border-emerald-600 h-10 w-12"></div>
            <h3 className="text-emerald-600">Our Products</h3>
          </span>
          <h3 className="font-bold text-2xl bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-6">
            Take a glance at our products
          </h3>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          <div className="grid gap-6">
            <motion.div variants={fadeInUp} whileHover={hoverScale} className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-1000" />
              <Image
                src="/IMG-20240529-WA0024.jpg"
                alt="Product Image"
                className="rounded-xl w-full h-auto object-cover transform group-hover:scale-[1.01] transition duration-500 relative"
              />
            </motion.div>
            <motion.div variants={fadeInUp} whileHover={hoverScale} className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-1000" />
              <Image
                src="/IMG-20240529-WA0030.jpg"
                alt="Product Image"
                className="rounded-xl w-full h-auto object-cover transform group-hover:scale-[1.01] transition duration-500 relative"
              />
            </motion.div>
            <motion.div variants={fadeInUp} whileHover={hoverScale} className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-1000" />
              <Image
                src="/IMG-20240529-WA0020.jpg"
                alt="Product Image"
                className="rounded-xl w-full h-auto object-cover transform group-hover:scale-[1.01] transition duration-500 relative"
              />
            </motion.div>
          </div>
          
          <div className="grid gap-6">
            <motion.div variants={fadeInUp} whileHover={hoverScale} className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-1000" />
              <Image
                src="/IMG-20240529-WA0018.jpg"
                alt="Product Image"
                className="rounded-xl w-full h-auto object-cover transform group-hover:scale-[1.01] transition duration-500 relative"
              />
            </motion.div>
            <motion.div variants={fadeInUp} whileHover={hoverScale} className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-1000" />
              <Image
                src="/IMG-20240529-WA0022.jpg"
                alt="Product Image"
                className="rounded-xl w-full h-auto object-cover transform group-hover:scale-[1.01] transition duration-500 relative"
              />
            </motion.div>
          </div>
          
          <div className="grid gap-6">
            <motion.div variants={fadeInUp} whileHover={hoverScale} className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-1000" />
              <Image
                src="/about.jpg"
                alt="Product Image"
                className="rounded-xl w-full h-auto object-cover transform group-hover:scale-[1.01] transition duration-500 relative"
              />
            </motion.div>
            <motion.div variants={fadeInUp} whileHover={hoverScale} className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-1000" />
              <Image
                src="/IMG-20240529-WA0023.jpg"
                alt="Product Image"
                className="rounded-xl w-full h-auto object-cover transform group-hover:scale-[1.01] transition duration-500 relative"
              />
            </motion.div>
            <motion.div variants={fadeInUp} whileHover={hoverScale} className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-1000" />
              <Image
                src="/IMG-20240529-WA0013.jpg"
                alt="Product Image"
                className="rounded-xl w-full h-auto object-cover transform group-hover:scale-[1.01] transition duration-500 relative"
              />
            </motion.div>
          </div>
          
          <div className="grid gap-6">
            <motion.div variants={fadeInUp} whileHover={hoverScale} className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-1000" />
              <Image
                src="/crop.jpeg"
                alt="Product Image"
                className="rounded-xl w-full h-auto object-cover transform group-hover:scale-[1.01] transition duration-500 relative"
              />
            </motion.div>
            <motion.div variants={fadeInUp} whileHover={hoverScale} className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-1000" />
              <Image
                src="/IMG-20240529-WA0019.jpg"
                alt="Product Image"
                className="rounded-xl w-full h-auto object-cover transform group-hover:scale-[1.01] transition duration-500 relative"
              />
            </motion.div>
            <motion.div variants={fadeInUp} whileHover={hoverScale} className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-1000" />
              <Image
                src="/about1.jpg"
                alt="Product Image"
                className="rounded-xl w-full h-auto object-cover transform group-hover:scale-[1.01] transition duration-500 relative"
              />
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="flex justify-center mt-16"
        >
          <Link to="/contact">
            <motion.button
              whileHover={hoverScale}
              className="group bg-gradient-to-r from-emerald-600 to-teal-600 px-8 py-4 rounded-full text-white text-sm font-medium shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/40 transition-shadow"
            >
              Contact us for more information
              <ArrowRight className="inline ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </Link>
        </motion.div>
      </section>
    </div>
  );
};

export default ProductsServices;