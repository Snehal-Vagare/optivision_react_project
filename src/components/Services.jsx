// src/components/Services.jsx
import React from "react";

const Services = () => {
  const services = [
    {
      name: "Eye Test",
      description: "Professional eye testing for accurate vision analysis.",
      image: "/images/eye-test.jpg",
    },
    {
      name: "Frames",
      description: "Stylish frames to suit your face and style.",
      image: "/images/frames.jpg",
    },
    {
      name: "Lens",
      description: "High-quality lenses for clear vision.",
      image: "/images/lens.jpg",
    },
    {
      name: "Repair",
      description: "Quick repair services for broken glasses and lenses.",
      image: "/images/repair.jpg",
    },
  ];

  return (
    <section id="services" className="py-20 bg-blue-50 text-center">
      <h2 className="text-4xl font-bold mb-12">Our Services</h2>

      <div className="max-w-7xl mx-auto px-4 grid sm:grid-cols-2 md:grid-cols-4 gap-6">
        {services.map((service, idx) => (
          <div
            key={idx}
            className="p-4 border-2 rounded-xl bg-white shadow hover:shadow-lg hover:scale-105 transition transform cursor-pointer"
          >
            <img
              src={service.image}
              alt={service.name}
              className="w-full h-40 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold">{service.name}</h3>
            <p className="text-gray-600 text-sm mt-1">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;