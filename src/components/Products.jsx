// src/components/Products.jsx
import React, { useState } from "react";
import ProductGallery from "./ProductGallery.jsx";

const Products = () => {
  const categories = [
    {
      name: "Eyeglasses",
      products: [
        { name: "Ray-Ban Classic", image: "/images/eyeglass1.jpg", quality: "Anti-scratch lenses", price: 1999 },
        { name: "Aviator Style", image: "/images/eyeglass2.jpg", quality: "UV protection", price: 2499 },
        { name: "Wayfarer", image: "/images/eyeglass3.jpg", quality: "Lightweight frame", price: 1799 },
      ],
    },
    {
      name: "Sunglasses",
      products: [
        { name: "Polarized Aviator", image: "/images/sunglass1.jpg", quality: "UV 400 protection", price: 2999 },
        { name: "Round Retro", image: "/images/sunglass2.jpg", quality: "High-quality tinted lenses", price: 1999 },
      ],
    },
    {
      name: "Frames",
      products: [
        { name: "Square Frames", image: "/images/frame1.jpg", quality: "Premium plastic", price: 899 },
        { name: "Round Frames", image: "/images/frame2.jpg", quality: "Metal alloy", price: 1200 },
      ],
    },
    {
      name: "Lenses",
      products: [
        { name: "Single Vision", image: "/images/lens1.jpg", quality: "Clear vision", price: 1500 },
        { name: "Progressive Lens", image: "/images/lens2.jpg", quality: "Multiple focal lengths", price: 3500 },
      ],
    },
    {
      name: "Repair",
      products: [
        { name: "Frame Repair", image: "/images/repair1.jpg", quality: "Quick fix", price: 299 },
        { name: "Lens Polishing", image: "/images/repair2.jpg", quality: "Shiny and clear", price: 199 },
      ],
    },
  ];

  const [activeCategory, setActiveCategory] = useState(null);

  return (
    <section className="py-20 bg-blue-50 text-center">
      <h2 className="text-4xl font-bold mb-12">Our Products</h2>

      {/* Category Buttons */}
      <div className="max-w-7xl mx-auto px-4 grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {categories.map((cat, idx) => (
          <div
            key={idx}
            className="p-6 border-2 rounded-xl cursor-pointer hover:scale-105 transform transition bg-white"
            onClick={() =>
              setActiveCategory(activeCategory === idx ? null : idx)
            }
          >
            <h3 className="text-xl font-semibold mb-2">{cat.name}</h3>
            <p className="text-gray-700 text-sm">Click to see {cat.name} gallery</p>
          </div>
        ))}
      </div>

      {/* Gallery */}
      {activeCategory !== null && (
        <div className="max-w-7xl mx-auto px-4 mt-10">
          <ProductGallery products={categories[activeCategory].products} />
        </div>
      )}
    </section>
  );
};

export default Products;