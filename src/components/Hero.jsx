function Hero({ scrollToProducts }) {
  return (
    <section
      id="home"
      className="pt-24 min-h-screen flex items-center bg-gradient-to-r from-blue-100 via-white to-blue-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-10 items-center">

        <div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 leading-tight">
            Clear Vision, <br /> Better Life 👓
          </h1>

          <p className="mt-4 text-gray-600 text-lg">
            Discover stylish eyewear and professional eye care services
            designed for your comfort and clarity.
          </p>

          <div className="mt-6 flex flex-wrap gap-4">
            <button
              onClick={scrollToProducts}
              className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-600 transition"
            >
              Shop Now
            </button>
            <a
              href="#appointment"
              className="border border-blue-500 text-blue-500 px-6 py-3 rounded-lg hover:bg-blue-500 hover:text-white transition"
            >
              Book Eye Test
            </a>
          </div>
        </div>

        <div>
          <img
            src="/assets/hero_banner.png"
            alt="OptiVision Banner"
            className="w-full h-[400px] md:h-[500px] object-cover rounded-2xl shadow-lg"
          />
        </div>

      </div>
    </section>
  );
}

export default Hero;