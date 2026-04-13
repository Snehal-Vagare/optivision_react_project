import React from "react";

function Footer({ scrollToSection }) {
  return (
    <footer className="bg-gray-900 text-white pt-10">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-10">

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-bold mb-4">OptiVision 👓</h3>
          <p className="mb-2">123 Vision Street, EyeCity, Maharashtra, India</p>
          <p className="mb-2">Email: <a href="mailto:info@optivision.com" className="underline">info@optivision.com</a></p>
          <p className="mb-2">Phone: <a href="tel:+919876543210" className="underline">+91 98765 43210</a></p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><button onClick={() => scrollToSection("home")} className="hover:text-blue-500">Home</button></li>
            <li><button onClick={() => scrollToSection("about")} className="hover:text-blue-500">About</button></li>
            <li><button onClick={() => scrollToSection("services")} className="hover:text-blue-500">Services</button></li>
            <li><button onClick={() => scrollToSection("products")} className="hover:text-blue-500">Products</button></li>
            <li><button onClick={() => scrollToSection("contact")} className="hover:text-blue-500">Contact</button></li>
          </ul>
        </div>

        {/* Map + Book Appointment */}
        <div>
          <h3 className="text-xl font-bold mb-4">Find Us & Book</h3>
          
          {/* Map */}
          <div className="w-full h-48 rounded-lg overflow-hidden shadow mb-4">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.123456789!2d75.123456!3d18.123456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bbf7abcd1234%3A0x1234abcd5678efgh!2sYour%20OptiVision%20Location!5e0!3m2!1sen!2sin!4v1699999999999!5m2!1sen!2sin"
              width="100%"
              height="100%"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="OptiVision Location"
            ></iframe>
          </div>

          {/* Book Appointment Button */}
        
        </div>

      </div>

      <div className="text-center py-6 mt-10 border-t border-gray-700 text-gray-400">
        © {new Date().getFullYear()} OptiVision. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;