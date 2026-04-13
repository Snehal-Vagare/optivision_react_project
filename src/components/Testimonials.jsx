const testimonialsData = [
  {
    id: 1,
    name: "Sarah Jenkins",
    initials: "SJ",
    text: "The service is outstanding. They helped me pick perfect glasses!",
    rating: 5,
  },
  {
    id: 2,
    name: "Mike Ross",
    initials: "MR",
    text: "Very professional and modern equipment. Highly recommended!",
    rating: 4.5,
  },
  {
    id: 3,
    name: "Emma Palmer",
    initials: "EP",
    text: "Fast delivery and smooth booking process. Loved it!",
    rating: 5,
  },
];

function Testimonials() {
  return (
    <section id="testimonials" className="py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">

        {/* HEADER */}
        <span className="text-blue-500 font-semibold text-sm">
          Reviews
        </span>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-2 mb-10 md:mb-12 text-gray-800">
          What Our Customers Say
        </h2>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {testimonialsData.map((t) => (
            <div
              key={t.id}
              className="bg-blue-50 p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300 text-left flex flex-col justify-between h-full"
            >

              {/* STARS */}
              <div className="text-yellow-400 mb-3 text-lg">
                {"★".repeat(Math.floor(t.rating))}
                {t.rating % 1 !== 0 && "☆"}
              </div>

              {/* TEXT */}
              <p className="text-gray-600 mb-4 text-sm sm:text-base">
                "{t.text}"
              </p>

              {/* USER */}
              <div className="flex items-center gap-3 mt-auto">
                <div className="w-10 h-10 flex items-center justify-center bg-blue-500 text-white rounded-full font-semibold">
                  {t.initials}
                </div>

                <div>
                  <h4 className="font-semibold text-gray-800">
                    {t.name}
                  </h4>
                  <span className="text-sm text-gray-500">
                    Verified Customer
                  </span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Testimonials;