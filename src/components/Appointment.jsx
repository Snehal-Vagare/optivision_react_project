import { useState } from "react";

function Appointment() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    date: "",
    time: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.phone.length < 10) {
      alert("Please enter a valid phone number");
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      setSuccessMsg(
        `✅ Thank you, ${formData.name}! We will contact you shortly.`
      );

      setFormData({
        name: "",
        phone: "",
        date: "",
        time: "",
      });

      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="appointment" className="py-16 md:py-20 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center">

        {/* LEFT CONTENT */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 leading-tight">
            Book Your Eye Test Today 👁️
          </h2>

          <p className="text-gray-300 mb-6">
            Our specialists are ready to help you achieve perfect vision.
          </p>

          <ul className="space-y-3 text-gray-200">
            <li>✔ Quick 30-minute test</li>
            <li>✔ Expert Optometrists</li>
            <li>✔ Flexible Timings</li>
          </ul>
        </div>

        {/* RIGHT FORM */}
        <form
          onSubmit={handleSubmit}
          className="bg-white text-black p-6 sm:p-8 rounded-2xl shadow-2xl space-y-4 w-full max-w-md mx-auto"
        >
          <h3 className="text-xl font-semibold mb-2 text-center">
            Appointment Details
          </h3>

          <input
            type="text"
            id="name"
            placeholder="Full Name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="tel"
            id="phone"
            placeholder="Phone Number"
            required
            value={formData.phone}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="date"
            id="date"
            required
            value={formData.date}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg"
          />

          <select
            id="time"
            required
            value={formData.time}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg"
          >
            <option value="">Select Time</option>
            <option value="morning">Morning</option>
            <option value="afternoon">Afternoon</option>
            <option value="evening">Evening</option>
          </select>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            {isSubmitting ? "Submitting..." : "Book Appointment"}
          </button>

          {/* Success Message */}
          {successMsg && (
            <p className="text-green-600 text-sm mt-2 text-center">
              {successMsg}
            </p>
          )}
        </form>

      </div>
    </section>
  );
}

export default Appointment;