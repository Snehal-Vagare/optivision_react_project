function Contact() {
  return (
    <section id="contact" className="py-20 bg-blue-50 text-center">
      <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
      <p className="text-gray-700 mb-8">
        Have any questions or want to book an appointment? Fill out the form below and we’ll get back to you!
      </p>

      <div className="max-w-md mx-auto space-y-4">
        <input
          type="text"
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Full Name"
        />

        <input
          type="tel"
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Phone Number"
        />

        <input
          type="email"
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Email Address"
        />

        <textarea
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Your Message"
          rows={4}
        ></textarea>

        <button className="w-full bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 transition">
          Send Message
        </button>
      </div>
    </section>
  );
}

export default Contact;