// src/components/ProductGallery.jsx
import React from "react";

const ProductGallery = ({ products }) => {
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 mt-4">
      {products.map((prod, index) => (
        <div
          key={index}
          className="p-4 border-2 rounded-xl bg-white shadow hover:shadow-lg transition"
        >
          <img
            src={prod.image}
            alt={prod.name}
            className="w-full h-48 object-cover rounded-lg mb-2"
          />
          <h4 className="text-lg font-semibold">{prod.name}</h4>
          <p className="text-gray-600 text-sm mb-1">{prod.quality}</p>
          <p className="text-gray-800 font-bold">₹{prod.price}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductGallery;