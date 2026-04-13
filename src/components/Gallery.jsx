import { useState } from "react";

function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    "/assets/about_shop.png",
    "/assets/product_prescription.png",
    "/assets/product_sunglasses.png",
    "/assets/hero_banner.png",
    "/assets/product_computer.png",
    "/assets/product_contacts.png",
  ];

  return (
    <section id="gallery" className="py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">

        {/* HEADER */}
        <span className="text-blue-500 font-semibold text-sm">
          Our Environment
        </span>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-2 mb-8 md:mb-10 text-gray-800">
          Photo Gallery
        </h2>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 md:gap-6">
          {images.map((img, index) => (
            <div
              key={index}
              onClick={() => setSelectedImage(img)}
              className="relative cursor-pointer group overflow-hidden rounded-2xl shadow-lg"
            >
              <div className="w-full h-[220px] sm:h-[250px] md:h-[260px]">
                <img
                  src={img}
                  alt="gallery"
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
                />
              </div>

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition duration-300">
                <span className="text-white text-2xl">🔍</span>
              </div>
            </div>
          ))}
        </div>

        {/* LIGHTBOX */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedImage(null)}
          >
            <img
              src={selectedImage}
              alt="preview"
              className="max-w-4xl w-full max-h-[80vh] object-contain rounded-xl shadow-lg"
            />
          </div>
        )}

      </div>
    </section>
  );
}

export default Gallery;