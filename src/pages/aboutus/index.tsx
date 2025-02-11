import { Avatar } from "antd";

const AboutUs = () => {
  return (
    <div>
      <div className="relative w-full h-64 max-h-64 flex items-center justify-center">
        <img
          src="/topbar.jpg"
          alt="Background Image"
          // Ensures the image covers the container
          className="z-0 opacity-50 h-64 w-full object-cover"
          // preview={false}
        />
        <div className="absolute  z-10 text-white ">
          <h1 className="border-2 border-r-0 border-green-50 border-b-0 border-l-2  border-t-0 h-10 px-3 text-center place-content-center font-normal text-sm">
            We are MOL AGRIBUSINESS
          </h1>
          <h1 className="font-bold text-2xl">About Us</h1>
        </div>
      </div>

      <section className="max-w-screen-xl mx-auto">
        <div className="px-6">
          <span className="flex items-baseline gap-2">
            <div className="border-2 border-r-0 border-green-900 border-b-2 border-l-0  border-t-0 h-10 px-3 w-12"></div>
            <h3>Vision for the future</h3>
          </span>
          <h3 className="font-bold text-teal-800">
            Advancing Sustainability and Innovation
          </h3>

          <div className="flex flex-col lg:flex-row sm:flex-col gap-10 mt-2">
            <p className="text-justify">
              At MOL Agribusiness Ltd, we strive to revolutionize the
              agriculture industry through innovative solutions and sustainable
              practices. Our commitment to excellence ensures that we deliver
              only the best.
            </p>
            <p className="text-justify">
              Join us on a journey towards a greener future. At MOL Agribusiness
              Ltd, we are passionate about fostering growth and sustainability
              in agriculture. Our expertise and dedication make us a reliable
              partner in your agricultural endeavors.
            </p>
          </div>
        </div>

        <div className="px-6 mt-14">
          <span className="flex items-baseline gap-2">
            <div className="border-2 border-r-0 border-green-900 border-b-2 border-l-0  border-t-0 h-10 px-3 w-12"></div>
            <h3>Vision for the future</h3>
          </span>
          <h3 className="font-bold text-teal-800">
            We are MOL AGRIBUSINESS LTD
          </h3>
          <h3 className="text-xs">Empowering sustainable agriculture.</h3>

          <div className="grid grid-cols-1 lg:grid-cols-2 sm:grid-cols-1 gap-24 mt-10 mb-20">
            <div>
              <p className="text-justify">
                Welcome to MOL Agribusiness Ltd, your trusted partner in
                sustainable agriculture. We are dedicated to providing
                high-quality agricultural products and services that help
                farmers thrive.
              </p>
              <p className="text-justify mt-2">
                MOL Agribusiness Ltd was founded with a mission to revolutionize
                the agricultural sector by introducing innovative and
                sustainable farming practices. With decades of experience and a
                deep understanding of the challenges faced by farmers, we aim to
                provide solutions that enhance productivity and profitability.
              </p>
              <p className="text-justify mt-2">
                Explore our wide range of solutions tailored to meet the needs
                of modern agriculture.
              </p>
              <div className="bg-green-800 px-10 py-2 rounded-lg text-center text-white cursor-pointer hover:bg-green-900 mt-4">
                View our products
              </div>
            </div>

            {/*    <div className=" h-72 shadow-lg">*/}
            {/*        <img*/}
            {/*            src="/about1.jpg"*/}
            {/*            alt="Background Image"*/}
            {/*            width={30}*/}
            {/*            height={10}*/}
            {/*            // layout="fill"*/}
            {/*            // objectFit="cover"*/}
            {/*            className="h-2/3 w-full"*/}

            {/*        />*/}
            {/*        <div className="bg-white h-1/3 px-10">*/}
            {/*            <div className="mt-4 flex gap-3 items-center">*/}
            {/*             <Avatar src="/ceo.jpg" size={60} className="object-center object-fill"></Avatar>*/}
            {/*                <span>*/}
            {/*                    <h3 className="font-bold text-teal-800 text-sm">Mr. Moses Warioba </h3>*/}
            {/*<h3 className="text-xs mb-2">CEO & Founder Mol Agribussiness Limited</h3>*/}
            {/*                </span>*/}
            {/*            </div>*/}
            {/*            <div className="border-2 border-r-0 border-green-900 border-b-2 border-l-0  border-t-0 pt-3 px-3 w-full"></div>*/}

            {/*        </div>*/}
            {/*    </div>*/}

            <div className="h-72 shadow-lg relative dark:bg-black/20">
              <img
                src="/about1.jpg"
                alt="CEO Image"
                className="h-2/3 w-full object-cover"
              />

              <div className="flex items-center gap-3 bg-white h-1/3 px-10 py-10 mt-10 dark:bg-black/20">
                <Avatar
                  src="/Ceo.jpg"
                  size={60}
                  className="object-center object-fill"
                />
                <div>
                  <h3 className="font-bold text-teal-800 text-sm">
                    Mr. Moses Warioba
                  </h3>
                  <h3 className="text-xs mb-1">
                    CEO & Founder, MOL Agribusiness Ltd
                  </h3>
                </div>
              </div>
              <div className="absolute  bg-white dark:bg-black/60 opacity-90 flex justify-center items-center mx-10 top-28 shadow-lg">
                <div className="px-3 py-3 text-center">
                  <p className="mt-4 text-gray-800 dark:text-gray-200 italic">
                    "Our commitment to sustainable agriculture drives everything
                    we do. At MOL Agribusiness, we believe in leveraging
                    technology for a greener tomorrow."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="px-6 mt-14 mb-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 sm:grid-cols-1 gap-10">
            <div className="hover:shadow-lg hover:p-3">
              <h1 className="border-2 border-r-0 border-green-900 border-b-0 border-l-2  border-t-0 h-10 px-3 text-left place-content-center font-normal text-sm">
                Mission
              </h1>
              <p className="text-justify">
                Leading farm tech company, committed to utilizing the latest
                technology to optimize crop and livestock production, while
                supporting sustainable and eco-friendly practices.
              </p>
              <div className="border-2 border-r-0 border-green-900 border-b-2 border-l-0  border-t-0 pt-4  "></div>
            </div>
            <div className="hover:shadow-lg hover:p-3">
              <h1 className="border-2 border-r-0 border-green-900 border-b-0 border-l-2  border-t-0 h-10 px-3 text-left place-content-center font-normal text-sm">
                Vision
              </h1>
              <p className="text-justify">
                {" "}
                Leading farm tech company, committed to utilizing the latest
                technology to optimize crop and livestock production, while
                supporting sustainable and eco-friendly practices.
              </p>
              <div className="border-2 border-r-0 border-green-900 border-b-2 border-l-0  border-t-0 pt-4  "></div>
            </div>
            <div className="hover:shadow-lg hover:p-3">
              <h1 className="border-2 border-r-0 border-green-900 border-b-0 border-l-2  border-t-0 h-10 px-3 text-left place-content-center font-normal text-sm">
                Our Motto
              </h1>
              <p className="text-justify">
                Innovative Farming Solutions for a Sustainable Future.
              </p>
              <div className="border-2 border-r-0 border-green-900 border-b-2 border-l-0  border-t-0 pt-4  "></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
