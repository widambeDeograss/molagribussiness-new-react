import { Image } from "antd";

const ProductsServices = () => {
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
        <div className="absolute z-10 text-white ">
          <h1 className="border-2 border-r-0 border-green-50 border-b-0 border-l-2  border-t-0 h-10 px-3 text-center place-content-center font-normal text-sm">
            We are MOL AGRIBUSINESS
          </h1>
          <h1 className="font-bold text-2xl">Products and Services</h1>
        </div>
      </div>

      <section className="max-w-screen-xl mx-auto mt-14">
        <div className="px-10">
          {" "}
          <span className="flex items-baseline gap-2">
            <div className="border-2 border-r-0 border-green-900 border-b-2 border-l-0  border-t-0 h-10 px-3 w-12"></div>
            <h3>Our Services</h3>
          </span>
          <h3 className="font-bold text-teal-800 mb-4">
            Partnership and General Information
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 sm:grid-cols-1 gap-10 px-10">
          <div className="shadow-lg rounded-lg shadow-green-100  p-10">
            <div className="flex flex-col gap-3 justify-center items-center">
              <div className="w-20 h-20 rounded-full bg-green-900 place-items-center p-4">
                <img src="/wheat.png" alt="wheat" />
              </div>

              <h3 className="font-bold text-base text-center ">Crop sales</h3>

              <p className="text-xs text-center">
                We offer a wide range of high-quality crops for sale, sourced
                from sustainable and eco-friendly farms.
              </p>
            </div>
          </div>

          <div className="shadow-lg rounded-lg shadow-green-100  p-4">
            <div className="flex flex-col gap-3 justify-center items-center">
              <div className="w-20 h-20 rounded-full bg-green-900 place-items-center p-4">
                <img src="/agro_machinery.png" alt="agro machines" />
              </div>

              <h3 className="font-bold text-base text-center ">
                Agro Machinery
              </h3>

              <p className="text-xs text-center">
                We provide state-of-the-art agricultural machinery to boost farm
                productivity and efficiency.
              </p>
            </div>
          </div>
          <div className="shadow-lg rounded-lg shadow-green-100  p-4">
            <div className="flex flex-col gap-3 justify-center items-center">
              <div className="w-20 h-20 rounded-full bg-green-900 place-items-center p-4">
                <img
                  src="/vegetables.png"
                  alt="agro machines"
                />
              </div>

              <h3 className="font-bold text-base text-center ">
                Agri-Consultancy Services
              </h3>

              <p className="text-xs text-center">
                Providing expert advice and customized solutions to farmers,
                ranging from soil analysis and crop planning to market
                intelligence.
              </p>
            </div>
          </div>
          <div className="shadow-lg rounded-lg shadow-green-50  p-4">
            <div className="flex flex-col gap-3 justify-center items-center">
              <div className="w-20 h-20 rounded-full bg-green-900 place-items-center p-4">
                <img src="/vegetable.png" alt="agro machines" />
              </div>

              <h3 className="font-bold text-base text-center ">
                Agrochemical Products
              </h3>

              <p className="text-xs text-center">
                Offering a range of high-quality fertilizers, pesticides, and
                biostimulants formulated to enhance soil fertility, control
                pests and diseases.
              </p>
            </div>
          </div>
        </div>

        <div className="px-10">
          {" "}
          <span className="flex items-baseline gap-2 mt-20">
            <div className="border-2 border-r-0 border-green-900 border-b-2 border-l-0  border-t-0 h-10 px-3 w-12"></div>
            <h3>Our Products</h3>
          </span>
          <h3 className="font-bold text-teal-800 mb-4">
            Take a glance at our products
          </h3>
        </div>

        

<div className="grid grid-cols-2 md:grid-cols-4 gap-4 px-10">
    <div className="grid gap-4">
        <div>
        <Image
                src="/IMG-20240529-WA0024.jpg"
                alt="Background Image"
                className="h-auto max-w-full rounded-lg"
              />
            {/* <img className="" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg" alt=""/> */}
        </div>
        <div>
        <Image
                src="/IMG-20240529-WA0030.jpg"
                alt="Background Image"
                className="h-auto max-w-full rounded-lg"
              />
            {/* <img className="" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg" alt=""/> */}
        </div>
        <div>
        <Image
                src="/IMG-20240529-WA0020.jpg"
                alt="Background Image"
                className="h-auto max-w-full rounded-lg"
              />
            {/* <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg" alt=""/> */}
        </div>
    </div>
    <div className="grid gap-4">
        <div>

        <Image
                src="/IMG-20240529-WA0018.jpg"
                alt="Background Image"
                className="h-auto max-w-full rounded-lg"
              />
            {/* <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg" alt=""/> */}
        </div>
        <div>
        <Image
                src="/IMG-20240529-WA0022.jpg"
                alt="Background Image"
                className="h-auto max-w-full rounded-lg"
              />
            {/* <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg" alt=""/> */}
        </div>
        <div>
            {/* <img className="h-auto max-w-full rounded-lg" src="/IMG-20240529-WA0022.jpg" alt=""/> */}
        </div>
    </div>
    <div className="grid gap-4">
        <div>
        <Image
                src="/about.jpg"
                alt="Background Image"
                className="h-auto max-w-full rounded-lg"
              />
            {/* <img className="" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg" alt=""/> */}
        </div>
        <div>
        <Image
                src="/IMG-20240529-WA0023.jpg"
                alt="Background Image"
                className="h-auto max-w-full rounded-lg"
              />
            {/* <img className="" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg" alt=""/> */}
        </div>
        <div>
        <Image
                src="/IMG-20240529-WA0013.jpg"
                alt="Background Image"
                className="h-auto max-w-full rounded-lg"
              />
            {/* <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg" alt=""/> */}
        </div>
    </div>
    <div className="grid gap-4">
        <div>
        <Image
                src="/crop.jpeg"
                alt="Background Image"
                className="h-auto max-w-full rounded-lg"
              />
      
            {/* <img className="" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg" alt=""/> */}
        </div>
        <div>
        <Image
                src="/IMG-20240529-WA0019.jpg"
                alt="Background Image"
                className="h-auto max-w-full rounded-lg"
              />
            {/* <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg" alt=""/> */}
        </div>
        <div>
        <Image
                src="/about1.jpg"
                alt="Background Image"
                className="h-auto max-w-full rounded-lg"
              />
            {/* <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg" alt=""/> */}
        </div>
    </div>
</div>

     
      </section>
    </div>
  );
};

export default ProductsServices;
