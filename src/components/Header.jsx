import { useState } from "react";

function Header({ scrollToSection }) {
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    const value = search.toLowerCase().trim();

    if (value.includes("home")) {
      scrollToSection("home");
    } else if (value.includes("about")) {
      scrollToSection("about");
    } else if (value.includes("service")) {
      scrollToSection("services");
    } else if (value.includes("product")) {
      scrollToSection("products");
    } else if (value.includes("appointment") || value.includes("book")) {
      scrollToSection("appointment");
    } else if (value.includes("testimonial")) {
      scrollToSection("testimonials");
    } else if (value.includes("gallery")) {
      scrollToSection("gallery");
    } else if (value.includes("contact")) {
      scrollToSection("contact");
    } else {
      alert("Section not found 😅");
    }

    setSearch(""); // optional: clear search
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex justify-between items-center py-4">

        {/* Logo */}
        <h1
          className="text-2xl font-bold text-blue-500 cursor-pointer"
          onClick={() => scrollToSection("home")}
        >
          👓 OptiVision
        </h1>

        {/* Navigation */}
        <nav className="hidden md:flex gap-4 font-semibold">
          {["Home", "About", "Services", "Products", "Appointment", "Testimonials", "Gallery", "Contact"].map(
            (item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="px-3 py-1 hover:bg-blue-500 hover:text-white rounded-lg transition"
              >
                {item}
              </button>
            )
          )}
        </nav>

        {/* Search */}
        <form
          onSubmit={handleSearch}
          className="hidden md:flex items-center border rounded-lg overflow-hidden"
        >
          <input
            type="text"
            placeholder="Search sections..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="px-3 py-1 outline-none w-32 sm:w-40"
          />
          <button type="submit" className="bg-blue-500 text-white px-3">
            🔍
          </button>
        </form>
      </div>
    </header>
  );
}

export default Header;