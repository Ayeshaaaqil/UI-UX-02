import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="bg-[#FAEAB4]">
      {/* Hero Section */}
      <section className="bg-[#FAEAB4] body-font py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0 text-center md:text-left">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">
                Rocket Single <br /> Seater
              </h1>
              <p className="text-xl text-[#A38B2B] mb-6">
                Elegant and comfortable seating for your modern living room.
              </p>
              <Link
                href="#shop"
                className="inline-block text-black font-medium underline hover:no-underline hover:text-gray-800 transition"
              >
                Shop Now
              </Link>
            </div>
            <div className="md:w-1/2">
              <Image
                src="/images/Hero1.png"
                alt="Elegant living room setup"
                width={853}
                height={1000}
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="bg-[#FAF4F4] body-font py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((item, index) => (
              <div key={index} className="flex flex-col items-center">
                <Image
                  src={`/images/${item}.png`}
                  alt={`Product ${item}`}
                  width={287}
                  height={397}
                  className="rounded-lg shadow-lg"
                />
                <div className="mt-4 text-center">
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                    Product Title {item}
                  </h3>
                  <p className="mt-1">Rs. 25,000,00</p>
                  <button
                    type="submit"
                    className="mt-2 text-black text-center rounded-md hover:bg-red-700 underline transition-colors duration-300 focus:outline-none focus:ring-2 w-28 h-12"
                  >
                    View More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* New Arrival Section */}
      <section className="bg-[#FFF9E5] py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row-reverse items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <Image
                src="/images/sofa.png"
                alt="Asgaard Sofa"
                width={983}
                height={799}
                className="rounded-lg"
              />
            </div>
            <div className="md:w-1/2 text-center md:text-left">
              <p className="text-lg font-bold text-black mb-4">New Arrival</p>
              <h2 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
                Asgaard Sofa
              </h2>
              <button
                type="submit"
                className="text-black rounded-md hover:bg-red-700 underline transition-colors duration-300 focus:outline-none focus:ring-2 w-28 h-12"
              >
                Read More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="bg-[#FFFFFF] py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
            Our Blog
          </h2>
          <p className="text-lg text-[#9F9F9F] mb-12 text-center">
            Find a bright ideal to suit your taste with our great selection.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((item, index) => (
              <div key={index} className="flex flex-col items-center">
                <Image
                  src={`/images/c${item}.png`}
                  alt={`Blog ${item}`}
                  width={393}
                  height={554}
                  className="rounded-lg shadow-lg"
                />
                <h3 className="text-gray-500 text-xs tracking-widest title-font mt-4">
                  Blog Title {item}
                </h3>
                <button
                  type="submit"
                  className="mt-2 text-black rounded-md hover:bg-red-700 underline transition-colors duration-300 focus:outline-none focus:ring-2 w-28 h-12"
                >
                  Read More
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Instagram Section */}
      <section
        className="bg-[#FAFAF4] py-16 text-center"
        style={{
          backgroundImage: 'url(/public/images/bg.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-black mb-6">Our Instagram</h2>
          <p className="text-lg text-[#9F9F9F] mb-6">
            Follow our store on Instagram
          </p>
        </div>
      </section>
    </div>
  );
}
