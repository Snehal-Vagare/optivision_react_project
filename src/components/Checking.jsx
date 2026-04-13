function Checking() {
  return (
    <section id="checking" className="py-16 md:py-20 bg-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* HEADER */}
        <div className="text-center mb-10 md:mb-12">
          <span className="text-blue-500 font-semibold text-sm">
            Our Process
          </span>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-2 text-gray-800">
            Professional Eye Checking 👁️
          </h2>
        </div>

        {/* MAIN CONTENT */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center">

          {/* IMAGE */}
          <div className="w-full h-[280px] sm:h-[350px] md:h-[420px] overflow-hidden rounded-2xl shadow-lg">
            <img
              src="/assets/checking_photo.jpg"
              alt="Eye Checking"
              className="w-full h-full object-cover hover:scale-105 transition duration-300"
            />
          </div>

          {/* CONTENT */}
          <div className="text-center md:text-left">
            <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-gray-800">
              Advanced Diagnostic Checking
            </h3>

            <p className="text-gray-600 mb-6">
              We use modern optometry equipment to ensure accurate eye
              prescriptions and complete vision analysis.
            </p>

            {/* STEPS */}
            <div className="space-y-3 mb-6">
              {[
                "Vision Testing",
                "Retina Scan",
                "Power Measurement",
                "Doctor Consultation",
              ].map((step, index) => (
                <div key={index} className="flex items-center gap-3 justify-center md:justify-start">
                  <span className="text-blue-500 font-bold">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="text-gray-700">{step}</p>
                </div>
              ))}
            </div>

            {/* FEATURES */}
            <ul className="space-y-2 text-gray-700 mb-6">
              <li>✔ Personalized Patient Care</li>
              <li>✔ High-Precision Scanning</li>
              <li>✔ Detailed Health Reports</li>
            </ul>

            {/* BUTTON */}
            <a
              href="#appointment"
              className="inline-block border-2 border-blue-500 text-blue-500 px-6 py-3 rounded-lg hover:bg-blue-500 hover:text-white transition duration-300"
            >
              Schedule Your Checkup
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Checking;