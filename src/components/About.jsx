// src/components/About.jsx
import React from "react";

function About() {
  return (
    <section id="about" className="py-20 bg-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-12 items-center">

        {/* IMAGE */}
        <div className="overflow-hidden rounded-xl shadow-lg">
          <img
            src="/assets/about_shop.png" // make sure image exists in public/assets
            alt="OptiVision Shop"
            className="w-full h-auto object-cover rounded-xl transform hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* TEXT CONTENT */}
        <div>
          <h2 className="text-4xl font-bold mb-6">
            About OptiVision 👁️
          </h2>

          <p className="text-gray-700 mb-6 text-lg leading-relaxed">
            At OptiVision, we provide professional eye care, stylish eyewear, and advanced vision solutions. 
            Our mission is to help you achieve perfect vision with modern equipment and personalized care.
          </p>

          {/* FEATURES */}
          <ul className="space-y-4 mb-6">
            <li className="flex items-center">
              <span className="text-green-500 mr-3 text-xl">✔</span>
              <span className="text-gray-700 font-medium">15+ Years Experience</span>
            </li>
            <li className="flex items-center">
              <span className="text-green-500 mr-3 text-xl">✔</span>
              <span className="text-gray-700 font-medium">Certified Optometrists</span>
            </li>
            <li className="flex items-center">
              <span className="text-green-500 mr-3 text-xl">✔</span>
              <span className="text-gray-700 font-medium">State-of-the-Art Equipment</span>
            </li>
          </ul>

 
        </div>
      </div>
    </section>
  );
}

export default About;